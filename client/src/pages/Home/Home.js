import Layout from "../../layout/Layout";
import "./style.css";
import "../../components//Carousel/Carousel";
import Carousel from "../../components//Carousel/Carousel";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {addToCart} from "../../services/cartService";
import Cookies from "js-cookie";
import {loginUserSuccess} from "../../store/reducers/authReducer";
import {useDispatch, useSelector} from "react-redux";
import Pagination from "../../components/Pagination/Pagination";
import {instanceAxios8000} from "../../config/axiosConfig";

const Home = () => {

    const dispatch = useDispatch();

    const [laptops, setLaptops] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize] = useState(20); // Số mục mỗi trang

    useEffect(() => {
        fetchLaptops(currentPage, pageSize);
    }, [currentPage]);

    const fetchLaptops = async (page, size) => {
        try {
            const response = await instanceAxios8000.get(`/api/laptops/request-page`, {
                params: {
                    page: page,
                    size: size,
                },
            });
            setLaptops(response.data.content);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error("Error fetching laptops:", error);
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // useEffect(() => {
    //     dispatch(getLaptops())
    // }, [dispatch])

    //dispatch login success after authenticating
    useEffect(() => {
        const isLoginUser = localStorage.getItem("isLoginUser");
        if (isLoginUser) {
            dispatch(loginUserSuccess())
        }
    }, [])

    // const handleFilter = (value) => {
    //
    // }

    if (!Array.isArray(laptops)) {
        console.error('Expected laptops to be an array, but got:', laptops);
        return <div>No laptops available</div>;
    }

    return (
        <>
            <Layout>
                <div className="grid grid-cols-5 gap-4 mx-2 lg:mx-0">

                    {/* Cột 1 */}
                    <div className="bg-white rounded-2xl shadow-md mt-24 hidden md:block">
                        <div>
                            <button className="px-4 rounded-md py-1 my-2  w-full hover:bg-gray-300">
                                <div className="flex items-center">
                                    <p className="mr-auto">HP</p>
                                    <svg viewBox="0 0 1024 1024" fill="#000000" className="icon h-6 w-6" version="1.1"
                                    >
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                           stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z"
                                                fill=""></path>
                                        </g>
                                    </svg>
                                </div>
                            </button>
                        </div>

                        <div>
                            <button className="px-4 rounded-md py-1 my-2  w-full hover:bg-gray-300">
                                <div className="flex items-center">
                                    <p className="mr-auto">DELL</p>
                                    <svg viewBox="0 0 1024 1024" fill="#000000" className="icon h-6 w-6" version="1.1"
                                    >
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                           stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z"
                                                fill=""></path>
                                        </g>
                                    </svg>
                                </div>
                            </button>
                        </div>

                        <div>
                            <button className="px-4 rounded-md py-1 my-2  w-full hover:bg-gray-300">
                                <div className="flex items-center">
                                    <p className="mr-auto">ASUS</p>
                                    <svg viewBox="0 0 1024 1024" fill="#000000" className="icon h-6 w-6" version="1.1"
                                    >
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                           stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z"
                                                fill=""></path>
                                        </g>
                                    </svg>
                                </div>
                            </button>
                        </div>

                        <div>
                            <button className="px-4 rounded-md py-1 my-2  w-full hover:bg-gray-300">
                                <div className="flex items-center">
                                    <p className="mr-auto">LENOVO</p>
                                    <svg viewBox="0 0 1024 1024" fill="#000000" className="icon h-6 w-6" version="1.1"
                                    >
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                           stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z"
                                                fill=""></path>
                                        </g>
                                    </svg>
                                </div>
                            </button>
                        </div>

                        <div>
                            <button className="px-4 rounded-md py-1 my-2  w-full hover:bg-gray-300">
                                <div className="flex items-center">
                                    <p className="mr-auto">MSI</p>
                                    <svg viewBox="0 0 1024 1024" fill="#000000" className="icon h-6 w-6" version="1.1"
                                    >
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                           stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z"
                                                fill=""></path>
                                        </g>
                                    </svg>
                                </div>
                            </button>
                        </div>

                        <div>
                            <button className="px-4 rounded-md py-1 my-2  w-full hover:bg-gray-300">
                                <div className="flex items-center">
                                    <p className="mr-auto">ASUS</p>
                                    <svg viewBox="0 0 1024 1024" fill="#000000" className="icon h-6 w-6" version="1.1"
                                    >
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                           stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M642.174 504.594c7.99 7.241 7.897 17.58-0.334 24.782L332.62 799.945c-8.867 7.759-9.766 21.236-2.007 30.103 7.758 8.867 21.236 9.766 30.103 2.007l309.221-270.569c27.429-24 27.792-64.127 0.89-88.507L360.992 192.192c-8.73-7.912-22.221-7.248-30.133 1.482-7.912 8.73-7.248 22.222 1.482 30.134l309.833 280.786z"
                                                fill=""></path>
                                        </g>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="col-span-5 md:col-span-4 lg:col-span-3 h-full">
                        <Carousel/>
                    </div>

                    <div className="rounded-2xl shadow-md mt-24 col-span-1 lg:grid lg:grid-rows-3 gap-4 hidden">
                        <div>
                            <img
                                src={'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/home-m55-10190-12-11.png'}
                                className={'object-cover rounded-2xl shadow-md '}
                            />
                        </div>

                        <div>
                            <img
                                src={'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/udsv-right-laptop.jpg'}
                                className={'object-cover rounded-2xl shadow-md '}
                            />
                        </div>

                        <div>
                            <img
                                src={'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/right-banner-14-10.jpg'}
                                className={'object-cover rounded-2xl shadow-md '}
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md mt-4 mb-4">
                    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="text-4xl font-semibold text-gray-900 dark:text-white">
                            <p>LAPTOP</p>
                        </div>

                        <div
                            className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-8">
                            {laptops.map((laptop) => (
                                <div
                                    key={laptop.laptopId}
                                    className="group relative border-2 dark:bg-gray-800 rounded-lg shadow-md p-2"
                                >
                                    <Link to={`/productdetail/${laptop.laptopId}`}>
                                        <div
                                            className="aspect-h-1 aspect-w-1 w-auto overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-40">
                                            <img
                                                src={laptop.image}
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">
                                                    <a className="text-gray-700 no-underline">
                            <span
                                aria-hidden="true"
                                className="absolute inset-0"
                            />
                                                        {laptop.model}
                                                    </a>
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500 line-through">
                                                    {laptop.price.toLocaleString('vi-VN')} VND
                                                </p>
                                                <p className="text-lg mb-3 font-medium text-red-600">
                                                    {laptop.price.toLocaleString('vi-VN')} VND
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                    <button
                                        type=""
                                        onClick={() => addToCart(laptop)}
                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-700 dark:border-transparent dark:hover:bg-indigo-600 dark:focus:ring-indigo-400 dark:focus:ring-offset-2 disabled:cursor-wait disabled:opacity-50"
                                    >
                                        Thêm vào giỏ hàng
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
                </div>
            </Layout>
        </>
    );
};

export default Home;
