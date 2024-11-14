import React, { useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { createLaptop } from "../../../store/actions/laptopAction";

const AddLaptop = () => {
  const dispatch = useDispatch();
  const { brands } = useSelector((state) => state.brand);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    model: "",
    description: "",
    price: "",
    ram: "",
    storage: "",
    processor: "",
    gpu: "",
    battery: "",
    screenSize: "",
    weight: "",
    stockQuantity: "",
    imageUrl: "",
    brandName: '',
    os: "",
  });

  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    let rawValue
    if(name === "price") {
      rawValue = parseInt(value.replace(/\./g, ""))
      if (isNaN(rawValue)) {
        rawValue = "";
      }
    }else{
      rawValue = value
    }

    setFormData({
      ...formData,
      [name]: rawValue
    });
  };

  const handleSubmit = (e) => {
    console.log(formData)
    dispatch(createLaptop(formData))
  };
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="w-full relative">
      {/* Button to open the modal */}
      <button
        onClick={toggleModal}
        className=" dark:text-blue-500 hover:bg-indigo-300 bg-indigo-500 px-4 py-1  text-white font-semibold rounded-lg"
      >
        Thêm Laptop
      </button>
      {/* Conditionally render the modal based on isOpen state */}
      {isOpen && (
        <div className="pd-overlay w-full h-full fixed top-0 left-0 z-[60] overflow-y-auto bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="opacity-100 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div className="flex flex-col bg-white rounded-2xl py-4 px-5 lg:min-w-[700px] overflow-y-auto">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200 sm:mt-0">
                <h4 className="text-xl text-gray-900 font-medium">
                  Nhập thông tin sản phẩm mới
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
                        htmlFor="model"
                        className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                    >
                      Tên sản phẩm
                    </label>
                    <input
                        type="text"
                        id="model"
                        required
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex items-start flex-col justify-start">
                    <label
                        htmlFor="brandName"
                        className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                    >
                      Thương Hiệu
                    </label>
                    <select
                        className="w-full text-lg px-3 dark:text-gray-200 dark:bg-gray-900 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        name="brandName"
                        value={formData.brandName}
                        onChange={handleChange}
                        required
                    >
                      <option value="">Chọn thương hiệu</option>
                      {brands.map((prov) => (
                          <option value={prov.brandName}>{prov.brandName}</option>
                      ))}
                    </select>
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
                <div className="grid grid-cols-2 gap-4 mt-1">
                  <div className="flex items-start flex-col justify-start">
                    <label
                      htmlFor="price"
                      className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                    >
                      Giá bán
                    </label>
                    <input
                      type="text"
                      id="price"
                      name="price"
                      required
                      value={formData.price}
                      onChange={handleChange}
                      className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex items-start flex-col justify-start">
                    <label
                      htmlFor="ram"
                      className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                    >
                      Bộ nhớ Ram
                    </label>
                    <input
                      type="text"
                      id="ram"
                      required
                      name="ram"
                      value={formData.ram}
                      onChange={handleChange}
                      className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-1">
                  <div className="flex items-start flex-col justify-start">
                    <label
                      htmlFor="storage"
                      className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                    >
                      Bộ nhớ trong
                    </label>
                    <input
                      type="text"
                      id="storage"
                      required
                      name="storage"
                      value={formData.storage}
                      onChange={handleChange}
                      className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex items-start flex-col justify-start">
                    <label
                      htmlFor="processor"
                      className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                    >
                      Bộ xử lí
                    </label>
                    <input
                      type="text"
                      id="processor"
                      required
                      name="processor"
                      value={formData.processor}
                      onChange={handleChange}
                      className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-1">
                  <div className="flex items-start flex-col justify-start">
                    <label
                      htmlFor="gpu"
                      className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                    >
                      Card đồ họa
                    </label>
                    <input
                      type="text"
                      id="gpu"
                      required
                      name="gpu"
                      value={formData.gpu}
                      onChange={handleChange}
                      className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex items-start flex-col justify-start">
                    <label
                      htmlFor="battery"
                      className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                    >
                      Dung lượng pin
                    </label>
                    <input
                      type="text"
                      id="battery"
                      required
                      name="battery"
                      value={formData.battery}
                      onChange={handleChange}
                      className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-1">
                  <div className="flex items-start flex-col justify-start">
                    <label
                      htmlFor="screenSize"
                      className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                    >
                      Màn hình
                    </label>
                    <input
                      type="text"
                      id="screenSize"
                      required
                      name="screenSize"
                      value={formData.screenSize}
                      onChange={handleChange}
                      className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>{" "}
                  <div className="flex items-start flex-col justify-start">
                    <label
                      htmlFor="weight"
                      className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                    >
                      Cân nặng
                    </label>
                    <input
                      type="text"
                      id="weight"
                      required
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-1">
                  <div className="flex items-start flex-col justify-start">
                    <label
                      htmlFor="stockQuantity"
                      className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                    >
                      Số lượng còn lại
                    </label>
                    <input
                      type="text"
                      id="stockQuantity"
                      required
                      name="stockQuantity"
                      value={formData.stockQuantity}
                      onChange={handleChange}
                      className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>{" "}
                  <div className="flex items-start flex-col justify-start">
                    <label
                      htmlFor="os"
                      className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                    >
                      Hệ điều hành
                    </label>
                    <input
                      type="text"
                      id="os"
                      required
                      name="os"
                      value={formData.os}
                      onChange={handleChange}
                      className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="flex items-start flex-col justify-start">
                  <label
                    htmlFor="imageUrl"
                    className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                  >
                    Link ảnh
                  </label>
                  <input
                    type="text"
                    id="imageUrl"
                    required
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>{" "}
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
