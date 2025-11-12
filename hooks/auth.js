import useSWR from "swr";
import axios from "@/lib/axios";
import { useEffect } from "react";
import { useRouter } from "next/router";
const fetcher = (url) => fetch(url).then((res) => res.json());

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
  const router = useRouter();

  // Function to fetch CSRF token
  const fetchCsrfToken = async () => {
    return axios.get("/sanctum/csrf-cookie", { withCredentials: true });
  };

  // Retrieve token from localStorage
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  // Fetch user with the token using SWR (with caching)
  const {
    data: user,
    error,
    mutate,
  } = useSWR(
    token ? ["/api/user", token] : null,
    async () => {
      const response = await axios.get("/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      return response.data.user;
    },
    fetcher
  );

  // User Registration
  const register = async ({ setErrors, ...props }) => {
    await fetchCsrfToken();

    setErrors([]);

    axios
      .post("/api/register", props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
      });
  };

  // Reset Password
  const resetPassword = async ({ setErrors, setStatus, ...props }) => {
    await fetchCsrfToken(); // Make sure CSRF token is fetched first

    axios
      .post("/api/reset-password", {
        token: router.query.token,
        ...props,
      })
      .then((response) =>
        router.push("/login?reset=" + btoa(response.data.status))
      )
      .catch((error) => {
        if (error.response?.status === 422) {
          setErrors(error.response.data.errors);
        } else {
          console.error("Password reset failed:", error);
          setErrors(["Something went wrong. Please try again."]);
        }
      });
  };

  // Resend Email Verification
  const resendEmailVerification = ({ setStatus }) => {
    axios
      .post("/email/verification-notification")
      .then((response) => setStatus(response.data.status));
  };

  // Logout
  const logout = async () => {
    if (!error) {
      await axios.post("/logout").then(() => {
        localStorage.removeItem("token");
        mutate(); // Re-fetch the user data after logout
      });
    }
    window.location.pathname = "/login";
  };

  // Redirect Logic Based on Middlewares
  useEffect(() => {
    if (middleware === "guest" && redirectIfAuthenticated && user)
      router.push(redirectIfAuthenticated);
    if (window.location.pathname === "/verify-email" && user?.email_verified_at)
      router.push(redirectIfAuthenticated);
    if (middleware === "auth" && error) logout();
  }, [user, error, middleware, redirectIfAuthenticated, router]);

  return {
    user,
    register,
    resetPassword,
    resendEmailVerification,
    logout,
    fetchCsrfToken,
  };
};
