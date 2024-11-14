import React, { useState } from "react";
import Select from "react-select";
const Option = ({ handleSelected, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState("");
  const arr = [
    {
      id: "1",
      name: "asus",
    },
    {
      id: "2",
      name: "dell",
    },
    {
      id: "3",
      name: "hp",
    },
    {
      id: "4",
      name: "lenovo",
    },
    {
      id: "5",
      name: "msi",
    },
  ];
  const options = arr.map((item) => ({
    value: item.id,
    label: item.name,
  }));
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const handleConfirm = () => {
    const selected = arr.find((item) => item.id === product);
    console.log(selected, index);
    handleSelected(selected, index);
  };
  const handleChange = (selectedOption) => {
    setProduct(selectedOption);
  };
  return (
    <div className="w-full relative">
      {/* Button to open the modal */}
      <button
        type="button"
        onClick={toggleModal}
        className="modal-button py-2.5 px-5 text-xs  hover:bg-gray-400 border border-gray-200 border-dotted rounded-lg  cursor-pointer font-semibold text-center shadow-xs transition-all duration-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-12 "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>

      {/* Conditionally render the modal based on isOpen state */}
      {isOpen && (
        <div className="pd-overlay w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="opacity-100 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div className="flex flex-col bg-white rounded-2xl py-4 px-5 h-[500px] overflow-y-auto">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <h4 className="text-sm text-gray-900 font-medium">
                  Chọn Laptop bạn muốn so sánh
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
              <div className="overflow-y-auto py-4 min-h-[200px]">
                <div className="block mb-4">
                  <Select
                    options={options}
                    onChange={(selectedOption) =>
                      handleChange(selectedOption.value)
                    }
                    className="w-full text-left overflow-y"
                    placeholder="Tìm kiếm sản phẩm..."
                    // menuIsOpen={true}
                  />
                </div>
                {/* More content can go here */}
              </div>

              <div className="flex items-center justify-end pt-4 border-t border-gray-200 space-x-4">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="py-2.5 px-5 text-xs bg-indigo-50 text-indigo-500 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-100"
                >
                  Hủy
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleConfirm();
                    toggleModal();
                  }}
                  className="py-2.5 px-5 text-xs bg-indigo-500 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
                >
                  Chọn
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Option;
