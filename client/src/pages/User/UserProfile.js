import Layout from "../../layout/Layout";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { instanceNodeJs } from "../../config/axiosConfig";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/actions/authAction";
import ConfirmModal from "../../components/Admin/Modal/ConfirmModal";
export default function UserProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [isLogout, setIsLogout] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
  });

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelected = (value) => {
    setIsLogout(value);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  useEffect(() => {
    if (isLogout) {
      handleLogout();
    }
  }, [isLogout]);

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/; // Số điện thoại chứa 10 chữ số
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    if (!validatePhoneNumber(formData.phone)) {
      setError("Số điện thoại không hợp lệ. Vui lòng nhập từ 10 chữ số.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Mật khẩu không khớp");
    } else {
      setError("");
      // Xử lý logic gửi form ở đây
      const response = instanceNodeJs.post("/register", formData);
      if (response.ok) {
        navigate("/login");
      } else {
        setError("Có lỗi xảy ra, vui lòng đăng kí lại");
      }
      console.log("Form submitted", formData);
    }
    console.log(formData);
  };

  return (
    <>
      <Layout>
        <div className="mt-24 lg:grid lg:grid-cols-12 gap-x-4 flex flex-col-reverse mb-6">
          <div className="lg:col-span-3 lg:mt-0 col-span-12 bg-white rounded-md shadow-md mt-6">
            <div className="ms-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#7d7878"
                  width="60px"
                  height="60px"
                  viewBox="0 0 24 24"
                  stroke="#7d7878"
                  className="my-4"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                  </g>
                </svg>
                <p className="text-2xl font-semibold ms-4">Do Hoang Giap</p>
              </div>

              <hr className="border-1 border-gray-400 shadow-md me-4" />

              <div className="mt-4">
                <div className="mt-4">
                  <div className="flex items-center mb-6 hover:text-red-500 group">
                    <svg
                      className="h-5 w-5 group-hover:fill-red-500"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M3 4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21H4.995A1.995 1.995 0 0 1 3 19.005V4.995zM6.357 18h11.49a6.992 6.992 0 0 0-5.745-3 6.992 6.992 0 0 0-5.745 3zM12 13a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path>
                        </g>
                      </g>
                    </svg>
                    <a className="font-bold text-md text-gray-600 ms-3 group-hover:text-red-500">
                      Thông tin tài khoản
                    </a>
                  </div>
                </div>

                <div className="flex items-center mb-6 hover:text-red-500 group">
                  <svg
                    className="h-5 w-5 fill-current text-black group-hover:text-red-500"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"
                      ></path>
                    </g>
                  </svg>
                  <a className="font-bold text-md text-gray-600 group-hover:text-red-500 ms-3">
                    Sổ địa chỉ
                  </a>
                </div>

                <div className="flex items-center mb-6 hover:text-red-500 group">
                  <svg
                    className="h-5 w-5 fill-current text-black group-hover:text-red-500"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.41799 3.25089C8.69867 2.65917 9.30155 2.25 10 2.25H14C14.6984 2.25 15.3013 2.65917 15.582 3.25089C16.2655 3.25586 16.7983 3.28724 17.2738 3.47309C17.842 3.69516 18.3362 4.07266 18.6999 4.56242C19.0668 5.0565 19.2391 5.68979 19.4762 6.56144L20.2181 9.28272L20.4985 10.124C20.5065 10.1339 20.5144 10.1438 20.5222 10.1539C21.4231 11.3076 20.9941 13.0235 20.1362 16.4553C19.5905 18.638 19.3176 19.7293 18.5039 20.3647C17.6901 21.0001 16.5652 21.0001 14.3153 21.0001H9.68462C7.43476 21.0001 6.30983 21.0001 5.49605 20.3647C4.68227 19.7293 4.40943 18.638 3.86376 16.4553C3.00581 13.0235 2.57684 11.3076 3.47767 10.1539C3.48555 10.1438 3.4935 10.1338 3.50152 10.1239L3.7819 9.28271L4.52384 6.56145C4.76092 5.6898 4.93316 5.0565 5.30009 4.56242C5.66381 4.07266 6.15802 3.69516 6.72621 3.4731C7.20175 3.28724 7.73447 3.25586 8.41799 3.25089ZM8.41951 4.75231C7.75763 4.759 7.49204 4.78427 7.27224 4.87018C6.96629 4.98976 6.70018 5.19303 6.50433 5.45674C6.32822 5.69388 6.22488 6.0252 5.93398 7.09206L5.36442 9.18091C6.38451 9.00012 7.77753 9.00012 9.68462 9.00012H14.3153C16.2224 9.00012 17.6155 9.00012 18.6356 9.18092L18.066 7.09206C17.7751 6.0252 17.6718 5.69388 17.4957 5.45674C17.2998 5.19303 17.0337 4.98976 16.7278 4.87018C16.508 4.78427 16.2424 4.759 15.5805 4.75231C15.2992 5.3423 14.6972 5.75 14 5.75H10C9.30281 5.75 8.70084 5.3423 8.41951 4.75231Z"
                      ></path>
                    </g>
                  </svg>
                  <a className="font-bold text-md text-gray-600 group-hover:text-red-500 ms-3">
                    Quản lý đơn hàng
                  </a>
                </div>

                <div className="flex items-center mb-6 hover:text-red-500 group">
                  <svg
                    className="h-5 w-5 fill-current text-black group-hover:text-red-500"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12ZM12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25Z"
                      ></path>
                    </g>
                  </svg>
                  <a className="font-bold text-md text-gray-600 group-hover:text-red-500 ms-3">
                    Sản phẩm đã xem
                  </a>
                </div>

                <div
                  className="flex items-center mb-16 hover:text-red-500 group"
                >
                  <svg
                    className="h-5 w-5 fill-current text-black group-hover:text-red-500"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M17.2929 14.2929C16.9024 14.6834 16.9024 15.3166 17.2929 15.7071C17.6834 16.0976 18.3166 16.0976 18.7071 15.7071L21.6201 12.7941C21.6351 12.7791 21.6497 12.7637 21.6637 12.748C21.87 12.5648 22 12.2976 22 12C22 11.7024 21.87 11.4352 21.6637 11.252C21.6497 11.2363 21.6351 11.2209 21.6201 11.2059L18.7071 8.29289C18.3166 7.90237 17.6834 7.90237 17.2929 8.29289C16.9024 8.68342 16.9024 9.31658 17.2929 9.70711L18.5858 11H13C12.4477 11 12 11.4477 12 12C12 12.5523 12.4477 13 13 13H18.5858L17.2929 14.2929Z"></path>
                      <path d="M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H14.5C15.8807 22 17 20.8807 17 19.5V16.7326C16.8519 16.647 16.7125 16.5409 16.5858 16.4142C15.9314 15.7598 15.8253 14.7649 16.2674 14H13C11.8954 14 11 13.1046 11 12C11 10.8954 11.8954 10 13 10H16.2674C15.8253 9.23514 15.9314 8.24015 16.5858 7.58579C16.7125 7.4591 16.8519 7.35296 17 7.26738V4.5C17 3.11929 15.8807 2 14.5 2H5Z"></path>
                    </g>
                  </svg>
                 
                  <a className="font-bold text-md text-gray-600 group-hover:text-red-500 ms-3" onClick={toggleModal}>
                    Đăng xuất
                  </a>
                  <ConfirmModal
                    isOpen={isModalOpen}
                    toggleModal={toggleModal}
                    handleSelected={handleSelected}
                    confirmText={"Bạn có chắc muốn đăng xuất?"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-9 col-span-12 lg:mt-0 -mt-2 bg-white rounded-md shadow-md pb-10">
            <div className="ms-4">
              <div className="text-2xl font-bold ms-4 text-gray-700 mt-4">
                Thông tin tài khoản
              </div>
              <div className="md:ms-24 ms-6 mt-8">
                <div>
                  <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col gap-4"
                  >
                    <div className="items-center grid grid-cols-9">
                      <label
                        htmlFor="fullname"
                        className="text-sm md:col-span-1 col-span-2 text-gray-700 dark:text-gray-200 mr-2"
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
                        className="px-3 ms-6 md:col-span-3 col-span-5 dark:text-gray-200 dark:bg-gray-900 py-1 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div className="flex">
                      <label
                        htmlFor="gender"
                        className="text-sm md:col-span-1 col-span-2 text-gray-700 dark:text-gray-200 mb-2 me-16"
                      >
                        Giới tính:
                      </label>

                      <div className="flex items-center -mt-2">
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

                    <div className="grid grid-cols-9 items-center">
                      <label
                        htmlFor="phone"
                        className="text-sm md:col-span-1 col-span-2 text-gray-700 dark:text-gray-200 mr-2"
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
                        className="px-3 ms-6 md:col-span-3 col-span-5 dark:text-gray-200 dark:bg-gray-900 py-1 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-9 items-center">
                      <label
                        htmlFor="dob"
                        className="text-sm md:col-span-1 col-span-2 text-gray-700 dark:text-gray-200 mr-2"
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
                        className="px-3 ms-6 md:col-span-3 col-span-5 dark:text-gray-200 dark:bg-gray-900 py-1 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-9 items-center">
                      <label
                        htmlFor="email"
                        className="text-sm md:col-span-1 col-span-2 text-gray-700 dark:text-gray-200 mr-2"
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
                        className="px-3 ms-6 md:col-span-3 col-span-5 dark:text-gray-200 dark:bg-gray-900 py-1 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-9 items-center">
                      <label
                        htmlFor="password"
                        className="text-sm md:col-span-1 col-span-2 text-gray-700 dark:text-gray-200 mr-2"
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
                        className="px-3 ms-6 md:col-span-3 col-span-5  dark:text-gray-200 dark:bg-gray-900 py-1 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-red-600 hover:bg-red-500 md:w-44 text-white font-medium py-2 px-4 rounded-md shadow-sm mt-4 mx-auto md:mx-0"
                    >
                      Lưu thông tin
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
