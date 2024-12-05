import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getLaptopByModel, getLaptops} from "../../store/actions/laptopAction";

const Option = ({handleSelected, index}) => {
    const [isOpen, setIsOpen] = useState(false);
    const {laptops} = useSelector((state) => state.laptop);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLaptops())
    }, [])
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    const handleConfirm = (value) => {
        console.log(value, index);
        handleSelected(value, index);
    };

    const handleSearch = (e) => {
        e.target.value ? dispatch(getLaptopByModel(e.target.value)) : dispatch(getLaptops())
    }

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
                <div
                    className="pd-overlay w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="opacity-100 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                        <div className="flex flex-col bg-white rounded-2xl py-4 px-5 h-[700px] overflow-y-auto">
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

                                    <div className="w-full me-2">
                                        <div className="relative">
                                            <input type="text"
                                                   name="query"
                                                   onChange={handleSearch}
                                                   className="w-full border h-10 p-4 rounded-full bg-gray-100"
                                                   placeholder="Search..."/>
                                            <button type="submit">
                                                <svg
                                                    className="text-teal-400 h-5 w-5 absolute top-3.5 right-3 fill-current dark:text-teal-300"
                                                    version="1.1"
                                                    x="0px" y="0px" viewBox="0 0 56.966 56.966"
                                                >
                                                    <path
                                                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                        {laptops.map(laptop => (
                                            <div className={'flex items-center border border-gray-500 p-2 mt-4 '} key={laptop.laptopId}
                                                 onClick={() => {
                                                     handleConfirm(laptop)
                                                     toggleModal()
                                                 }
                                            }>
                                                <img className={'object-cover w-16 h-16'} src={laptop.image}/>
                                                <div className={'ms-2 text-left'}>
                                                    <h1>{laptop.model}</h1>
                                                    <p className={'text-red-700'}>{laptop.price.toLocaleString('vi-VN')} VNĐ</p>
                                                </div>
                                            </div>
                                        ))}

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
