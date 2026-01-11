import { useState } from "react";
import bgImg from "../assets/bg-img-1.jpg"
import {
    FiMail,
    FiLock,
    FiEye,
    FiEyeOff,
  } from "react-icons/fi";
  

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
  const handleLogin = () => {
    if (!formData.email || !formData.password) {
      setError("Please fill all fields");
      resetForm();
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      resetForm();
      alert("Login successful (frontend)");
    }, 1500);
  };

  /* ---------- SIGNUP ---------- */
  const handleSignup = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("All fields are required");
      resetForm();
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      resetForm();
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      resetForm();
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      resetForm();
      alert("Signup successful (frontend)");
    }, 1500);
  };
  

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative px-4"
      style={{
        backgroundImage:
        `url(${bgImg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Auth Card */}
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
              Book your turf & play harder ⚽
            </p>

            {error && !isSignup && (
              <p className="text-red-400 text-sm mb-3">{error}</p>
            )}

            {/* Email */}
            <div className="relative mb-3">
            <FiMail className="absolute left-3 top-3.5 text-gray-300" size={18} />
              <input
                name="email"
                onChange={handleChange}
                placeholder="Email or Mobile"
                value={formData.email}
                className="w-full pl-10 p-3 rounded-lg bg-white/20 placeholder-gray-300 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Password */}
            <div className="relative mb-4">
            <FiLock className="absolute left-3 top-3.5 text-gray-300" size={18} />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                placeholder="Password"
                value={formData.password}
                className="w-full pl-10 pr-10 p-3 rounded-lg bg-white/20 placeholder-gray-300 outline-none focus:ring-2 focus:ring-green-500"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer"
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </span>
            </div>

            <button
              disabled={loading}
              onClick={handleLogin}
              className="w-full bg-green-600 hover:bg-green-700 transition p-3 rounded-lg font-semibold disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

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

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full mb-3 p-3 rounded-lg bg-white/20 placeholder-gray-300 outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              name="email"
              onChange={handleChange}
              placeholder="Email or Mobile"
              value={formData.email}
              className="w-full mb-3 p-3 rounded-lg bg-white/20 placeholder-gray-300 outline-none focus:ring-2 focus:ring-green-500"
            />

            <div className="relative mb-3">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                placeholder="Password"
                value={formData.password}
                className="w-full pr-10 p-3 rounded-lg bg-white/20 placeholder-gray-300 outline-none focus:ring-2 focus:ring-green-500"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer"
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </span>
            </div>

            <div className="relative mb-4">
              <input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                onChange={handleChange}
                value={formData.confirmPassword}
                placeholder="Confirm Password"
                className="w-full pr-10 p-3 rounded-lg bg-white/20 placeholder-gray-300 outline-none focus:ring-2 focus:ring-green-500"
              />
              <span
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-3 top-3 cursor-pointer"
              >
                {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </span>
            </div>

            <button
              disabled={loading}
              onClick={handleSignup}
              className="w-full bg-green-600 hover:bg-green-700 transition p-3 rounded-lg font-semibold disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>

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
