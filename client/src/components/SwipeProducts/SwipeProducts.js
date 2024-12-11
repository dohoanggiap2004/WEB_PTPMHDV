import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/actions/cartAction";

const SwipeCards = ({laptops}) => {
    const dispatch = useDispatch()
    const [currentIndex, setCurrentIndex] = useState(0);
    const [productsPerPage, setProductsPerPage] = useState(5);

    // Xác định số lượng hiển thị dựa trên kích thước màn hình
    const updateProductsPerPage = () => {
        if (window.innerWidth < 640) {
            setProductsPerPage(1); // Hiển thị 1 sản phẩm trên màn hình nhỏ
        } else if (window.innerWidth < 1024) {
            setProductsPerPage(3); // Hiển thị 3 sản phẩm trên màn hình trung bình
        } else {
            setProductsPerPage(5); // Hiển thị 5 sản phẩm trên màn hình lớn
        }
    };

    useEffect(() => {
        // Thiết lập số lượng hiển thị khi tải trang
        updateProductsPerPage();
        // Lắng nghe sự kiện resize để cập nhật số lượng hiển thị
        window.addEventListener('resize', updateProductsPerPage);

        return () => {
            window.removeEventListener('resize', updateProductsPerPage);
        };
    }, []);

    const handleSlide = (direction) => {
        if (direction === 'left') {
            setCurrentIndex((prevIndex) => (
                prevIndex === 0 ? 0 : prevIndex - 1
            ));
        } else if (direction === 'right') {
            setCurrentIndex((prevIndex) => prevIndex + productsPerPage < laptops.length ? prevIndex + 1 : prevIndex);
        }
    };

    const visibleCards = laptops && laptops.length > 0 ? laptops.slice(currentIndex, currentIndex + productsPerPage) : [];

    const handleAddToCart = (laptop) => {
        console.log('check laptop', laptop)
        dispatch(addToCart(laptop));
        window.alert('Sản phẩm đã được thêm vào giỏ hàng!');
    };

    return (
        <>
            {laptops ? (
                <div className="relative px-4 sm:px-6 md:px-8">
                    <button
                        onClick={() => handleSlide('left')}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
                    >
                        &#8249;
                    </button>
                    <div className="mb-4 relative px-0.5">
                        <div className="flex gap-4">
                            {visibleCards.map((card) => (
                                <div key={card.laptopId} className="flex-none w-64 md:w-52 lg:w-52">
                                    <div
                                        className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-4  min-h-[380px]">
                                        <img src={card.image} alt={card.model} className="w-full h-40 object-cover"/>
                                        <div className="p-4">
                                            <h3 className="text-lg leading-6 font-bold text-gray-900">{card.model}</h3>
                                            <p className="text-gray-600 mt-2 text-sm">{card.description}</p>
                                            <div className="flex justify-between items-center mt-4">
                                                <div>
                                                    <div className="text-sm font-extrabold text-red-700">
                                                        {(
                                                            card.specialPrice
                                                        ).toLocaleString('vi-VN')} VNĐ
                                                    </div>
                                                    <div className="text-sm line-through font-semibold text-gray-400">
                                                        {(
                                                            card.price
                                                        ).toLocaleString('vi-VN')} VNĐ
                                                    </div>
                                                </div>
                                                <div
                                                    onClick={() => handleAddToCart(card)}
                                                    className="text-white bg-fuchsia-950 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-5 h-5"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={() => handleSlide('right')}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
                    >
                        &#8250;
                    </button>
                </div>
            ) : <div></div>}
        </>
    )
};

export default SwipeCards;
