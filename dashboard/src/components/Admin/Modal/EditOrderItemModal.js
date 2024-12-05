import React, { useState } from "react";

const EditOrderItemModal = ({ handleSelected, orderItem }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        orderId: orderItem.orderId,
        productId: orderItem.productId,
        model: orderItem.model,
        quantity: orderItem.quantity,
        totalPrice: orderItem.totalPrice,
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
    const handleSubmit = (e) => {
        // e.preventDefault();
        // // Add form submission logic here
        // if (!validatePhoneNumber(formData.phone)) {
        //   setError("Số điện thoại không hợp lệ. Vui lòng nhập từ 10 chữ số.");
        //   return;
        // }
        // if (formData.password !== formData.confirmPassword) {
        //   setError("Mật khẩu không khớp");
        // } else {
        //   setError("");
        //   // Xử lý logic gửi form ở đây
        //   const response = axios.post("/register", formData);
        //   if (response.ok) {
        //     navigate("/login");
        //   } else {
        //     setError("Có lỗi xảy ra, vui lòng đăng kí lại");
        //   }
        //   console.log("Form submitted", formData);
        // }
        // console.log(formData);
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
                    className="pd-overlay w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden  overflow-y-auto bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="opacity-100 transition-all sm:max-w-lg sm:w-full m-3  sm:mx-auto">
                        <div className="flex flex-col bg-white rounded-2xl py-4 px-5 overflow-y-auto">
                            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                                <h4 className="text-2xl text-gray-900 font-medium">
                                    Chỉnh sửa thông tin sản phẩm đặt hàng
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
                                <div className="flex items-start flex-col justify-start">
                                    <label
                                        htmlFor="orderId"
                                        className="text-lg text-gray-700 dark:text-gray-200 mr-2"
                                    >
                                        Mã đơn hàng
                                    </label>
                                    <input
                                        type="text"
                                        id="orderId"
                                        required
                                        name="orderId"
                                        value={formData.orderId}
                                        onChange={handleChange}
                                        className="w-full text-lg px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="flex items-start flex-col justify-start">
                                    <label
                                        htmlFor="productId"
                                        className="text-lg text-gray-700 dark:text-gray-200 mr-2"
                                    >
                                        Mã sản phẩm
                                    </label>
                                    <input
                                        type="text"
                                        id="productId"
                                        required
                                        name="productId"
                                        value={formData.productId}
                                        onChange={handleChange}
                                        className="w-full text-lg px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="flex items-start flex-col justify-start">
                                    <label
                                        htmlFor="quantity"
                                        className="text-lg text-gray-700 dark:text-gray-200 mr-2"
                                    >
                                        Số lượng
                                    </label>
                                    <input
                                        type="text"
                                        id="quantity"
                                        name="quantity"
                                        required
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        className="w-full text-lg px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="flex items-start flex-col justify-start">
                                    <label
                                        htmlFor="totalPrice"
                                        className="text-lg text-gray-700 dark:text-gray-200 mr-2"
                                    >
                                        Tổng tiền
                                    </label>
                                    <input
                                        type="text"
                                        id="totalPrice"
                                        required
                                        name="totalPrice"
                                        value={formData.totalPrice}
                                        onChange={handleChange}
                                        className="w-full text-lg px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                            </form>
                            {error && <p className="text-red-500 text-lg mt-2">{error}</p>}
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

export default EditOrderItemModal
