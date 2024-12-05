import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import {instanceAxios8000} from "../../config/axiosConfig";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    gender: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/; // Số điện thoại chứa 10 chữ số
    return phoneRegex.test(phone);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(formData.phone)) {
      setError("Số điện thoại không hợp lệ. Vui lòng nhập từ 10 chữ số.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Mật khẩu không khớp");
      return; // Dừng lại nếu mật khẩu không khớp
    }
    
    setError(""); // Reset error message
  
    try {
      const response = await instanceAxios8000.post("/auth/register", formData);
      if (response.status === 201) { // Kiểm tra nếu status trả về là 200
        navigate("/login");
      } else {
        setError("Có lỗi xảy ra, vui lòng đăng ký lại");
      }
    } catch (err) {
      console.error(err);
      setError("Có lỗi xảy ra, vui lòng kiểm tra lại thông tin của bạn.");
    }
    
    console.log("Form submitted", formData);
  };
  
  return (
    <>
      <Layout>
        <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center mt-24 mb-6">
          <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">
            Chào mừng bạn đến với cửa hàng của chúng tôi!
          </h1>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div className="flex items-start flex-col justify-start">
              <label
                htmlFor="fullname"
                className="text-sm text-gray-700 dark:text-gray-200 mr-2"
              >
                Họ và tên:
              </label>
              <input
                type="text"
                id="fullname"
                required
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-start flex-col justify-start">
              <label
                htmlFor="phone"
                className="text-sm text-gray-700 dark:text-gray-200 mr-2"
              >
                Số điện thoại:
              </label>
              <input
                type="text"
                id="phone"
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col items-start justify-start">
              <label
                htmlFor="gender"
                className="text-sm text-gray-700 dark:text-gray-200 mb-2"
              >
                Giới tính:
              </label>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Nam"
                  checked={formData.gender === "Nam"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label
                  htmlFor="male"
                  className="mr-4 text-gray-700 dark:text-gray-200"
                >
                  Nam
                </label>

                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Nữ"
                  checked={formData.gender === "Nữ"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label
                  htmlFor="female"
                  className="text-gray-700 dark:text-gray-200"
                >
                  Nữ
                </label>
              </div>
            </div>

            <div className="flex items-start flex-col justify-start">
              <label
                htmlFor="dob"
                className="text-sm text-gray-700 dark:text-gray-200 mr-2"
              >
                Ngày sinh:
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                required
                value={formData.dob}
                onChange={handleChange}
                className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-start flex-col justify-start">
              <label
                htmlFor="username"
                className="text-sm text-gray-700 dark:text-gray-200 mr-2"
              >
                Tài khoản:
              </label>
              <input
                type="text"
                id="username"
                required
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-start flex-col justify-start">
              <label
                htmlFor="email"
                className="text-sm text-gray-700 dark:text-gray-200 mr-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-start flex-col justify-start">
              <label
                htmlFor="password"
                className="text-sm text-gray-700 dark:text-gray-200 mr-2"
              >
                Mật khẩu:
              </label>
              <input
                type="password"
                id="password"
                required
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-start flex-col justify-start">
              <label
                htmlFor="confirmPassword"
                className="text-sm text-gray-700 dark:text-gray-200 mr-2"
              >
                Nhập lại mật khẩu:
              </label>
              <input
                type="password"
                id="confirmPassword"
                required
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
            >
              Đăng kí
            </button>
          </form>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <div className="mt-4 text-center">
            <span className="text-sm text-gray-500 dark:text-gray-300">
              Bạn đã có tài khoản?{" "}
            </span>
            <Link to="/login" className="text-blue-500 hover:text-blue-600">
              Đăng nhập
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Register;
