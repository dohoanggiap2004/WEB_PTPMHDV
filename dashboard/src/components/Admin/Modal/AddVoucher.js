import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {createVoucher} from '../../../store/actions/voucherAction';

const AddLaptop = ({ handleSelected }) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        voucherCode: '',
        voucherDiscount: '',
        description: '',
    });

    const [error, setError] = useState("");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value.toString(),
        });
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log('check form', formData);
        dispatch(createVoucher(formData))
    };
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="relative">
            {/* Button to open the modal */}
            <button
                onClick={toggleModal}
                className="dark:text-blue-500 hover:bg-indigo-300 bg-indigo-500 px-4 py-1  text-white font-semibold rounded-lg"
            >
                Thêm Voucher
            </button>
            {/* Conditionally render the modal based on isOpen state */}
            {isOpen && (
                <div className="pd-overlay w-full h-full fixed top-0 left-0 z-[60] overflow-y-auto bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="opacity-100 transition-all sm:max-w-lg sm:w-full m-3 mx-auto">
                        <div className="flex flex-col bg-white rounded-2xl py-4 px-5 lg:min-w-[700px] overflow-y-auto">
                            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                                <h4 className="text-xl text-gray-900 font-medium">
                                    Nhập thông tin mã giảm giá mới
                                </h4>
                                {/* Button to close the modal */}
                                <button onClick={toggleModal} className="block cursor-pointer">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.75732 7.75739L16.2426 16.2427M16.2426 7.75739L7.75732 16.2427"
                                            stroke="black"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <form
                                className="w-full flex flex-col gap-4"
                            >
                                <div className="grid grid-cols-2 gap-4 mt-1">
                                    <div className="flex items-start flex-col justify-start">
                                        <label
                                            htmlFor="voucherCode"
                                            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                                        >
                                            Mã giảm giá
                                        </label>
                                        <input
                                            type="text"
                                            id="voucherCode"
                                            required
                                            name="voucherCode"
                                            value={formData.voucherCode}
                                            onChange={handleChange}
                                            className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div className="flex items-start flex-col justify-start">
                                        <label
                                            htmlFor="voucherDiscount"
                                            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                                        >
                                            Phần trăm giảm giá
                                        </label>
                                        <input
                                            type="number"
                                            min={'1'}
                                            id="voucherDiscount"
                                            required
                                            name="voucherDiscount"
                                            value={formData.voucherDiscount}
                                            onChange={handleChange}
                                            className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-start flex-col justify-start">
                                    <label
                                        htmlFor="description"
                                        className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                                    >
                                        Mô tả
                                    </label>
                                    <input
                                        type="text"
                                        id="description"
                                        required
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="flex items-center justify-end pt-4 border-t border-gray-200 space-x-4">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            toggleModal();
                                        }}
                                        className="py-2.5 px-5 text-sm bg-indigo-50 text-indigo-500 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-100"
                                    >
                                        Hủy bỏ
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            handleSubmit();
                                            toggleModal();
                                        }}
                                        className="py-2.5 px-8 text-sm bg-rose-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
                                    >
                                        Thêm
                                    </button>
                                </div>
                            </form>
                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddLaptop;
