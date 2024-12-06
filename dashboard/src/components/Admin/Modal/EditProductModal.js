import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { updateLaptop } from "../../../store/actions/laptopAction";
import { getBrands } from "../../../store/actions/brandAction";

const EditProductModal = ( { laptop } ) => {
  const dispatch = useDispatch();
  const { brands } = useSelector((state) => state.brand);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    laptopId: laptop.laptopId,
    model: laptop.model,
    description: laptop.description,
    price: laptop.price,
    ram: laptop.ram,
    storage: laptop.storage,
    cpu: laptop.cpu,
    vga: laptop.vga,
    battery: laptop.battery,
    screenSize: laptop.screenSize,
    weight: laptop.weight,
    stockAvailable: laptop.stockAvailable,
    image: laptop.image,
    manufacturer: laptop.manufacturer,
    os: laptop.os,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const rawValue = name === "price" ? value.replace(/\./g, "") : value;
    setFormData({
      ...formData,
      [name]: name === "price" ? parseInt(rawValue || 0, 10) : rawValue,
    });
  };

  const handleSubmit = () => {
    // console.log(formData);
    dispatch(updateLaptop(formData))
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };


  return (
      <div className="w-full relative">
        {/* Button to open the modal */}
        <a
            onClick={toggleModal}
            className="font-medium text-indigo-600 dark:text-blue-500 hover:bg-indigo-300-300 border border-indigo-500 rounded-md px-3 py-1"
        >
          Sửa
        </a>
        {/* Conditionally render the modal based on isOpen state */}
        {isOpen && (
            <div
                className="pd-overlay w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden  overflow-y-auto bg-gray-500 bg-opacity-50 flex justify-center items-center">
              <div className="opacity-100 transition-all sm:max-w-lg sm:w-full m-3  sm:mx-auto">
                <div className="flex flex-col bg-white rounded-2xl py-4 px-5 min-w-[700px] overflow-y-auto">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <h4 className="text-xl text-gray-900 font-medium">
                      Chỉnh sửa thông tin sản phẩm
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
                            htmlFor="manufacturer"
                            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                        >
                          Thương Hiệu
                        </label>
                        <select
                            className="w-full text-lg px-3 dark:text-gray-200 dark:bg-gray-900 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            name="manufacturer"
                            value={formData.manufacturer}
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
                            value={formData.price.toLocaleString('vi-VN')}
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
                            htmlFor="cpu"
                            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                        >
                          Bộ xử lí
                        </label>
                        <input
                            type="text"
                            id="cpu"
                            required
                            name="cpu"
                            value={formData.cpu}
                            onChange={handleChange}
                            className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-1">
                      <div className="flex items-start flex-col justify-start">
                        <label
                            htmlFor="vga"
                            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                        >
                          Card đồ họa
                        </label>
                        <input
                            type="text"
                            id="vga"
                            required
                            name="vga"
                            value={formData.vga}
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
                      </div>
                      {" "}
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
                            htmlFor="stockAvailable"
                            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                        >
                          Số lượng còn lại
                        </label>
                        <input
                            type="text"
                            id="stockAvailable"
                            required
                            name="stockAvailable"
                            value={formData.stockAvailable}
                            onChange={handleChange}
                            className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      {" "}
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
                          htmlFor="image"
                          className="text-sm text-gray-700 dark:text-gray-200 mr-2"
                      >
                        Link ảnh
                      </label>
                      <input
                          type="text"
                          id="image"
                          required
                          name="image"
                          value={formData.image}
                          onChange={handleChange}
                          className="w-full text-sm px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    {" "}
                  </form>
                  {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
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
                          toggleModal();
                          handleSubmit();
                        }}
                        className="py-2.5 px-8 text-sm bg-rose-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
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

export default EditProductModal;
