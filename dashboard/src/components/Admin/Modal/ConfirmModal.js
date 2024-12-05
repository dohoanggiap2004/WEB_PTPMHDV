import React from "react";

const ConfirmModal = ({ isOpen, toggleModal, handleSelected, confirmText }) => {
  const handleConfirm = (value) => {
    handleSelected(value);
    toggleModal(); // Đóng modal sau khi xác nhận
  };

  if (!isOpen) return null; // Nếu modal không mở thì không hiển thị

  return (
    <div className="pd-overlay w-full h-full fixed top-0 left-0 z-[100] overflow-x-hidden overflow-y-auto bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="opacity-100 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div className="flex flex-col bg-white rounded-2xl py-4 px-5 overflow-y-auto">
          <div className="flex justify-between items-center pb-4 border-b border-gray-200">
            <h4 className="text-sm text-gray-900 font-medium">{confirmText}</h4>
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

          <div className="flex items-center justify-end pt-4 border-t border-gray-200 space-x-4">
            <button
              type="button"
              onClick={() => handleConfirm(false)}
              className="py-2.5 px-5 text-xs bg-indigo-50 text-indigo-500 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-100"
            >
              Hủy bỏ
            </button>
            <button
              type="button"
              onClick={() => handleConfirm(true)}
              className="py-2.5 px-5 text-xs bg-rose-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            >
              Đồng ý
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
