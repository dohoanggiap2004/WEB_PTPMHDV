import Layout from "../../layout/Layout";
import React, { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, loginGG } from "../../store/actions/authAction";
import { useDispatch, useSelector } from "react-redux";


const Login = () => {
  const dispatch = useDispatch();
  const { isLoginUser, error } = useSelector((state) => state.auth.login);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };



  useEffect(() => {
    if (isLoginUser) {
      navigate("/");
      console.log("Login successful");
    } else {
      navigate("/login");
      console.log(error);
      console.log("Login failed");
    }
  }, [isLoginUser])


  const handleClickGG = () => {
    // window.location.href = "http://localhost:8000/auth/google"; // Redirect to Google OAuth
    dispatch(loginGG())
  };
  return (
    <>
      <Layout>
        <div className="dark:bg-gray-800 mt-24 rounded-lg shadow-md mb-6 bg-white">
          <div className="flex min-h-[80vh] flex-col justify-center sm:px-6 lg:px-8">
            <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">
              <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                Đăng nhập
              </h1>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white dark:bg-gray-700 px-4 pb-4 pt-8 sm:rounded-lg sm:px-10 sm:pb-6 sm:shadow">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      for="email"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Email/ Tài khoản
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        type="text"
                        data-testid="username"
                        required=""
                        name="username"
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                        value={formData.username}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="password"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Mật khẩu
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        data-testid="password"
                        autocomplete="current-password"
                        required=""
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      data-testid="login"
                      type="submit"
                      onClick={() => handleSubmit}
                      className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-700 dark:border-transparent dark:hover:bg-indigo-600 dark:focus:ring-indigo-400 dark:focus:ring-offset-2 disabled:cursor-wait disabled:opacity-50"
                    >
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                          className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      Đăng nhập
                    </button>
                  </div>
                </form>
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white dark:bg-gray-700 px-2 text-gray-500 dark:text-white">
                        Hoặc tiếp tục với
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-3">
                    <button
                      onClick={handleClickGG}
                      className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-500 dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 disabled:cursor-wait disabled:opacity-50"
                    >
                      <span className="sr-only">Đăng nhập bằng Google</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <clipPath id="p.0">
                          <path
                            d="m0 0l20.0 0l0 20.0l-20.0 0l0 -20.0z"
                            clip-rule="nonzero"
                          ></path>
                        </clipPath>
                        <g clip-path="url(#p.0)">
                          <path
                            fill="currentColor"
                            fill-opacity="0.0"
                            d="m0 0l20.0 0l0 20.0l-20.0 0z"
                            fill-rule="evenodd"
                          ></path>
                          <path
                            fill="currentColor"
                            d="m19.850197 8.270351c0.8574047 4.880001 -1.987587 9.65214 -6.6881847 11.218641c-4.700598 1.5665016 -9.83958 -0.5449295 -12.08104 -4.963685c-2.2414603 -4.4187555 -0.909603 -9.81259 3.1310139 -12.6801605c4.040616 -2.867571 9.571754 -2.3443127 13.002944 1.2301085l-2.8127813 2.7000687l0 0c-2.0935059 -2.1808972 -5.468274 -2.500158 -7.933616 -0.75053835c-2.4653416 1.74962 -3.277961 5.040613 -1.9103565 7.7366734c1.3676047 2.6960592 4.5031037 3.9843292 7.3711267 3.0285425c2.868022 -0.95578575 4.6038647 -3.8674583 4.0807285 -6.844941z"
                            fill-rule="evenodd"
                          ></path>
                          <path
                            fill="currentColor"
                            d="m10.000263 8.268785l9.847767 0l0 3.496233l-9.847767 0z"
                            fill-rule="evenodd"
                          ></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="m-auto mt-8 w-fit md:mt-8">
                  <span className="m-auto dark:text-gray-400">
                    Bạn chưa có tài khoản?
                    <Link
                      className="font-semibold text-indigo-600 dark:text-indigo-100"
                      to="/register"
                    >
                      Đăng kí
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
