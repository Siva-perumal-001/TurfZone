import { useState } from "react";
import bgImg from "../assets/bg-img-1.jpg";
import { apiRequest } from "../api/api.js";
import { FiMail, FiLock, FiEye, FiEyeOff, FiUser } from "react-icons/fi";

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  /* ---------- LOGIN ---------- */
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await apiRequest("/auth/login", "POST", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      resetForm();
      alert("Login successful");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /* ---------- SIGNUP ---------- */
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      await apiRequest("/auth/signup", "POST", {
        name,
        email,
        password,
      });

      alert("Signup successful. Please login.");
      resetForm();
      setIsSignup(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative px-4"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative w-full max-w-md md:max-w-4xl bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
        <div
          className={`flex w-[200%] transition-transform duration-700 ease-in-out ${
            isSignup ? "-translate-x-1/2" : ""
          }`}
        >
          {/* ---------------- LOGIN ---------------- */}
          <div className="w-1/2 p-6 sm:p-10 text-white">
            <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
            <p className="text-gray-300 text-sm mb-6">
              Book your turf & play harder 🏏
            </p>

            {error && !isSignup && (
              <p className="text-red-400 text-sm mb-3">{error}</p>
            )}

            <form onSubmit={handleLogin}>
              <div className="relative mb-3">
                <FiMail className="absolute left-3 top-3.5 text-gray-300" />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full pl-10 p-3 rounded-lg bg-white/20 placeholder-gray-300 outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="relative mb-4">
                <FiLock className="absolute left-3 top-3.5 text-gray-300" />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full pl-10 pr-10 p-3 rounded-lg bg-white/20 placeholder-gray-300 outline-none focus:ring-2 focus:ring-green-500"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 cursor-pointer"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 transition p-3 rounded-lg font-semibold disabled:opacity-60"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="mt-5 text-sm">
              Don’t have an account?
              <span
                onClick={() => {
                  setIsSignup(true);
                  setError("");
                }}
                className="ml-1 text-green-400 cursor-pointer font-semibold"
              >
                Sign up
              </span>
            </p>
          </div>

          {/* ---------------- SIGNUP ---------------- */}
          <div className="w-1/2 p-6 sm:p-10 text-white">
            <h2 className="text-3xl font-bold mb-2">Create Account</h2>
            <p className="text-gray-300 text-sm mb-6">
              Join the game today 🏟️
            </p>

            {error && isSignup && (
              <p className="text-red-400 text-sm mb-3">{error}</p>
            )}

            <form onSubmit={handleSignup}>
              <div className="relative mb-3">
                <FiUser className="absolute left-3 top-3.5 text-gray-300" />
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full pl-10 p-3 rounded-lg bg-white/20 placeholder-gray-300 outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="relative mb-3">
                <FiMail className="absolute left-3 top-3.5 text-gray-300" />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full pl-10 p-3 rounded-lg bg-white/20 placeholder-gray-300 outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="relative mb-3">
                <FiLock className="absolute left-3 top-3.5 text-gray-300" />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full pl-10 pr-10 p-3 rounded-lg bg-white/20 placeholder-gray-300 outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="relative mb-4">
                <FiLock className="absolute left-3 top-3.5 text-gray-300" />
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="w-full pl-10 pr-10 p-3 rounded-lg bg-white/20 placeholder-gray-300 outline-none focus:ring-2 focus:ring-green-500"
                />
                <span
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-3 top-3 cursor-pointer"
                >
                  {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 transition p-3 rounded-lg font-semibold disabled:opacity-60"
              >
                {loading ? "Creating account..." : "Sign Up"}
              </button>
            </form>

            <p className="mt-5 text-sm">
              Already have an account?
              <span
                onClick={() => {
                  setIsSignup(false);
                  setError("");
                }}
                className="ml-1 text-green-400 cursor-pointer font-semibold"
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
