import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateInstallment} from "../../../store/actions/installmentAction";

const EditInstallmentModal = ({installment}) => {
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        installmentId: installment.installmentId,
        company: installment.company,
        downPayment: installment.downPayment,
        flatInterestRate: installment.flatInterestRate,
        installmentPrice: installment.installmentPrice,
        monthlyInstallment: installment.monthlyInstallment,
        requiredDocuments: installment.requiredDocuments,
        term: installment.term,
        totalPayment: installment.totalPayment,
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        const arr = ['installmentPrice', 'downPayment', 'monthlyInstallment', 'totalPayment']
        let parsedValue
        if (arr.includes(name)) {
            parsedValue = parseInt(value.replace(/\./g, ""))

            if (isNaN(parsedValue)) {
                parsedValue = "";
            }

        }else {
            parsedValue = value
        }

        setFormData({
            ...formData,
            [name]: parsedValue,
        });

    };

    const handleSubmit = (e) => {
        dispatch(updateInstallment(formData))
    };

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="w-full relative">
            {/* Button to open the modal */}
            <a
                onClick={toggleModal}
                className="font-medium text-indigo-600 dark:text-blue-500 hover:bg-indigo-300 border border-indigo-500 rounded-md px-3 py-1"
            >
                Sửa
            </a>
            {/* Conditionally render the modal based on isOpen state */}
            {isOpen && (
                <div
                    className="pd-overlay w-full h-full fixed top-0 left-0 z-[60] overflow-y-auto bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="opacity-100 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                        <div className="flex flex-col bg-white rounded-2xl py-4 px-5 lg:min-w-[700px] overflow-y-auto">
                            <div className="flex justify-between items-center pb-4 border-b border-gray-200 sm:mt-0">
                                <h4 className="text-xl text-gray-900 font-medium">
                                    Nhập thông tin gói trả góp mới
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
                                onSubmit={handleSubmit}
                                className="w-full flex flex-col gap-4"
                            >
                                <div className="grid grid-cols-2 gap-4 mt-1">
                                    <div className="flex items-start flex-col justify-start">
                                        <label
                                            htmlFor="company"
                                            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                                        >
                                            Công ty
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            required
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="flex items-start flex-col justify-start">
                                        <label
                                            htmlFor="installmentPrice"
                                            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                                        >
                                            Giá mua trả góp
                                        </label>
                                        <input
                                            type="text"
                                            id="installmentPrice"
                                            required
                                            name="installmentPrice"
                                            value={formData.installmentPrice.toLocaleString('vi-VN')}
                                            onChange={handleChange}
                                            className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-start flex-col justify-start">
                                    <label
                                        htmlFor="downPayment"
                                        className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                                    >
                                        Tiền trả trước
                                    </label>
                                    <input
                                        type="text"
                                        id="downPayment"
                                        required
                                        name="downPayment"
                                        value={formData.downPayment.toLocaleString('vi-VN')}
                                        onChange={handleChange}
                                        className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-1">
                                    <div className="flex items-start flex-col justify-start">
                                        <label
                                            htmlFor="term"
                                            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                                        >
                                            Kỳ hạn
                                        </label>
                                        <select
                                            id="term"
                                            name="term"
                                            required
                                            value={formData.term}
                                            onChange={handleChange}
                                            className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        >
                                            <option value={1}>1 tháng</option>
                                            <option value={3}>3 tháng</option>
                                            <option value={6}>6 tháng</option>
                                            <option value={9}>9 tháng</option>
                                            <option value={12}>12 tháng</option>
                                            <option value={18}>18 tháng</option>
                                            <option value={24}>24 tháng</option>
                                            <option value={36}>36 tháng</option>
                                        </select>

                                    </div>
                                    <div className="flex items-start flex-col justify-start">
                                        <label
                                            htmlFor="monthlyInstallment"
                                            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                                        >
                                            Góp mỗi tháng
                                        </label>
                                        <input
                                            type="text"
                                            id="monthlyInstallment"
                                            required
                                            name="monthlyInstallment"
                                            value={formData.monthlyInstallment.toLocaleString('vi-VN')}
                                            onChange={handleChange}
                                            className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-1">
                                    <div className="flex items-start flex-col justify-start">
                                        <label
                                            htmlFor="flatInterestRate"
                                            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                                        >
                                            Lãi suất trực phẳng
                                        </label>
                                        <input
                                            type="text"
                                            id="flatInterestRate"
                                            required
                                            name="flatInterestRate"
                                            value={formData.flatInterestRate}
                                            onChange={handleChange}
                                            className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="flex items-start flex-col justify-start">
                                        <label
                                            htmlFor="requiredDocuments"
                                            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                                        >
                                            Giấy tờ cần có
                                        </label>
                                        <input
                                            type="text"
                                            id="requiredDocuments"
                                            required
                                            name="requiredDocuments"
                                            value={formData.requiredDocuments}
                                            onChange={handleChange}
                                            className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-4 mt-1">
                                    <div className="flex items-start flex-col justify-start">
                                        <label
                                            htmlFor="totalPayment"
                                            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                                        >
                                            Tổng tiền phải trả
                                        </label>
                                        <input
                                            type="text"
                                            id="totalPayment"
                                            required
                                            name="totalPayment"
                                            value={formData.totalPayment.toLocaleString('vi-VN')}
                                            onChange={handleChange}
                                            className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                            </form>
                            {" "}
                            {/*{error && <p className="text-red-500 text-lg mt-2">{error}</p>}*/}
                            <div className="flex items-center justify-end pt-4 border-t border-gray-200 space-x-4">
                                <button
                                    type="button"
                                    onClick={() => {

                                        toggleModal();
                                    }}
                                    className="py-2.5 px-5 text-lg bg-indigo-50 text-indigo-500 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-100"
                                >
                                    Hủy bỏ
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        handleSubmit()
                                        toggleModal();
                                    }}
                                    className="py-2.5 px-8 text-lg bg-rose-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
                                >
                                    Lưu
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditInstallmentModal
