import Layout from "../../layout/Layout";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {getCountProductSales} from "../../store/actions/dashboardAction";
import {Link} from "react-router-dom";
import SwipeProducts from "../../components/SwipeProducts/SwipeProducts";
import {addToCart} from "../../store/actions/cartAction";

const Suggestion = () => {
    const {productSales} = useSelector(state => state.dashboard);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        performance: '',
        screen: '',
        price: '',

    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    useEffect(() => {
        dispatch(getCountProductSales())
    }, []);

    const handleAddToCart = (laptop) => {
        dispatch(addToCart(laptop));
        window.alert('Sản phẩm đã được thêm vào giỏ hàng!');
    };
    return (
        <Layout>
            <div className="relative inline-block mt-24">
            <span className="text-2xl md:text-3xl font-bold text-red-600">
              Dịch vụ hỗ trợ chọn sản phẩm phù hợp với bạn
            </span>
                <span
                    className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full">
                    </span>
            </div>
            <div className={'bg-white'}>
                <div className={'rounded-lg shadow-md pt-8 pb-24'}>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mx-4">
                        <select
                            className="block w-full text-sm font-medium transition duration-75 border border-gray-300 text-blue-400 rounded-lg shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none"
                            name="interestRate"
                            onChange={handleChange}
                            value={formData.interestRate}
                            required
                        >
                            <option value="" disabled hidden>
                                Chọn nhu cầu
                            </option>
                            <option value="10">Học tập khối ngành kinh tế</option>
                            <option value="10">Học tập khối ngành kỹ thuật</option>
                            <option value="20">Văn phòng</option>
                            <option value="30">Gaming</option>
                            <option value="20">Bền bỉ</option>
                        </select>

                        <select
                            className="block w-full text-sm font-medium transition duration-75 border border-gray-300 text-blue-400 rounded-lg shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none"
                            name="term"
                            onChange={handleChange}
                            value={formData.term}
                            required
                        >
                            <option value="" disabled hidden>
                                Chọn màn hình
                            </option>
                            <option value="3">Màn cho đồ họa</option>
                            <option value="6">Màn cơ bản</option>
                            <option value="9">Màn giá rẻ</option>
                            <option value="12">Màn đẹp</option>
                        </select>

                        <select
                            className="block w-full text-sm font-medium transition duration-75 border border-gray-300 text-blue-400 rounded-lg shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none"
                            name="term"
                            onChange={handleChange}
                            value={formData.term}
                            required
                        >
                            <option value="" disabled hidden>
                                Chọn giá thành
                            </option>
                            <option value="3">Giá rẻ</option>
                            <option value="6">Giá tầm trung</option>
                            <option value="9">Giá cao</option>
                            <option value="12">Giá không thành vấn đề</option>
                        </select>

                        <select
                            className="block w-full text-sm font-medium transition duration-75 border border-gray-300 text-blue-400 rounded-lg shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none"
                            name="term"
                            onChange={handleChange}
                            value={formData.term}
                            required
                        >
                            <option value="" disabled hidden>
                                Chọn nhu cầu lưu trữ
                            </option>
                            <option value="3">Ít dữ liệu(ít hơn 128gb)</option>
                            <option value="6">Dữ liệu vừa(128gb -> 256gb)</option>
                            <option value="9">Nhiều dữ liệu</option>
                        </select>
                    </div>
                    <div className="p-6 text-center border-gray-300">
                        <button
                            className="flex items-center ms-auto text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded"
                        >
                            TÌM KIẾM
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-4 h-4 ml-auto"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                    <div className={'mx-auto flex items-center justify-center mt-4'}>
                        <SwipeProducts/>
                    </div>
                </div>

                <div className={'container px-5 py-6 mx-auto flex flex-wrap bg-white mb-8 rounded-lg shadow-md w-auto'}>

                    <div style={{backgroundColor: '#F9405E'}} className={'py-8 rounded-lg shadow-md'}>
                        <p className={'text-5xl text-center font-bold text-white'}>Sản phẩm nổi bật</p>

                        <div
                            className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-8 mx-2">
                            {productSales.map((laptop) => (
                                <div
                                    key={laptop.laptopId}
                                    className="group relative border-2 dark:bg-gray-800 rounded-lg shadow-md p-2 bg-white"
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
                                        onClick={() => handleAddToCart(laptop)}
                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-700 dark:border-transparent dark:hover:bg-indigo-600 dark:focus:ring-indigo-400 dark:focus:ring-offset-2 disabled:cursor-wait disabled:opacity-50"
                                    >
                                        Thêm vào giỏ hàng
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Suggestion
