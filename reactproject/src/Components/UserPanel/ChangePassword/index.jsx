import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const toggleShowPassword = (field) => {
    setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("New passwords do not match!");
      return;
    }

    setMessage("Password changed successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-lg p-6">
        {message && (
          <p
            className={`text-sm mb-4 text-center ${
              message.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
        <div className="mb-4 relative">
          <label
            htmlFor="current-password"
            className="block text-gray-700 font-medium mb-2 dark:text-white font-iranSans"
          >
            رمز فعلی
          </label>
          <input
            type={showPasswords.current ? "text" : "password"}
            id="current-password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm outline-none  focus:ring-blue-200"
            required
          />
          <button
            type="button"
            onClick={() => toggleShowPassword("current")}
            className="relative bottom-7 right-[370px] flex items-center text-gray-500"
          >
            {showPasswords.current ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        <div className="mb-4 relative">
          <label
            htmlFor="new-password"
            className="block text-gray-700 font-medium mb-2 dark:text-white font-iranSans"
          >
            رمز جدید
          </label>
          <input
            type={showPasswords.new ? "text" : "password"}
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm outline-none  focus:ring-blue-200"
            required
          />
          <button
            type="button"
            onClick={() => toggleShowPassword("new")}
            className="relative bottom-7 right-[370px] flex items-center text-gray-500 "
          >
            {showPasswords.new ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        <div className="mb-4 relative">
          <label
            htmlFor="confirm-password"
            className="block text-gray-700 font-medium mb-2 dark:text-white font-iranSans"
          >
            تایید رمز جدید
          </label>
          <input
            type={showPasswords.confirm ? "text" : "password"}
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg shadow-sm outline-none  focus:ring-blue-200"
            required
          />
          <button
            type="button"
            onClick={() => toggleShowPassword("confirm")}
            className="relative bottom-7 right-[370px] flex items-center text-gray-500 "
          >
            {showPasswords.confirm ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        <Button
          type="submit"
          className="w-full font-iranSans bg-ocean_blue text-white"
        >
          ثبت
        </Button>
      </form>
    </div>
  );
};

export { ChangePassword };
