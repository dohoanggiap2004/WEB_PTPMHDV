import Layout from "../../layout/Layout";
import Option from "../../components/Option/Option";
import {useState} from "react";

const Comparison = () => {
    const [selectedProduct, setSelectdProduct] = useState([{}, {}, {}]);
    const handeSelected = (value, index) => {
        let newArr = [...selectedProduct];
        newArr[index] = value;
        console.log(newArr);
        setSelectdProduct(newArr);
    };
    const handleCompare = () => {
        console.log(selectedProduct);
    };

    const handleUnselected = (value) => {
        let newArr = [...selectedProduct];
        newArr[value] = [];
        setSelectdProduct(newArr);
    }
    return (
        <>
            <Layout>
                <section className="text-gray-700 body-font overflow-hidden border-gray-80 mt-24">
                    <div class="relative inline-block">
            <span class="text-2xl md:text-3xl font-bold text-red-600">
              So sánh sản phẩm
            </span>
                        <span
                            class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
                    </div>
                    <div className="container px-5 py-12 mx-auto flex flex-wrap bg-white mb-8 rounded-lg shadow-md">
                        <div className="lg:w-1/4 mt-52 hidden lg:block">
                            <div
                                className="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
                                <p className="bg-gray-100 text-gray-900 h-16 text-center px-4 flex items-center justify-start -mt-px">
                                    CPU
                                </p>
                                <p className="text-gray-900 h-16 text-center px-4 flex items-center justify-start bg-gray-200">
                                    RAM
                                </p>
                                <p className="text-gray-900 h-16 text-center px-4 flex items-center justify-start bg-gray-100">
                                    Ổ cứng
                                </p>
                                <p className=" text-gray-900 h-16 text-center px-4 flex items-center justify-start bg-gray-200">
                                    Card đồ họa
                                </p>
                                <p className="text-gray-900 h-16 text-center px-4 flex items-center justify-start bg-gray-100">
                                    Màn hình
                                </p>
                                <p className=" text-gray-900 h-16 text-center px-4 flex items-center justify-start bg-gray-200">
                                    Dung lượng pin
                                </p>
                                <p className="text-gray-900 h-16 text-center px-4 flex items-center justify-start bg-gray-100">
                                    Cân nặng
                                </p>
                                <p className=" text-gray-900 h-16 text-center px-4 flex items-center justify-start bg-gray-200">
                                    Hệ điều hành
                                </p>
                                <p className="bg-gray-100 text-gray-900 h-16 text-center px-4 flex items-center justify-start">
                                    Webcam
                                </p>
                            </div>
                        </div>
                        <div className="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg">
                            <div
                                className="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
                                <div
                                    className="relative px-2 text-center h-52 flex flex-col items-center justify-center bg-gray-200 overflow-hidden">
                                    {selectedProduct[0].model ? (
                                        <div className="flex flex-col items-center text-center">
                                            {/* SVG ở góc trên bên phải */}
                                            <div className="absolute top-0 right-0 m-2 hover:bg-gray-600" onClick={() => handleUnselected(0)}>
                                                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                                                     className="h-6 w-6"
                                                     fill="#000000">
                                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                       stroke-linejoin="round"></g>
                                                    <g id="SVGRepo_iconCarrier">
                                                        <path fill="#000000"
                                                              d="M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"></path>
                                                        <path fill="#000000"
                                                              d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                            {/* Ảnh nằm giữa */}
                                            <div className="flex flex-col items-center justify-center h-full">
                                                <img
                                                    src={selectedProduct[0].image}
                                                    alt={selectedProduct[0].model}
                                                    className="object-contain max-w-full max-h-32"
                                                />
                                                <h1 className="my-1">{selectedProduct[0].model}</h1>
                                                <h1 className="text-red-700 font-semibold">
                                                    {selectedProduct[0].price.toLocaleString('vi-VN')} VND
                                                </h1>
                                            </div>
                                        </div>
                                    ) : (
                                        <Option handleSelected={handeSelected} index={0}/>
                                    )}
                                </div>


                                {/* CPU */}
                                <p className="bg-gray-100 text-gray-600 h-16 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
                                    {selectedProduct[0].cpu}
                                </p>
                                {/* ram */}
                                <p className="text-gray-600 text-center h-16 flex items-center justify-center bg-gray-200">
                                    {selectedProduct[0].ram}
                                </p>
                                {/* ổ cứng */}
                                <p className="bg-gray-100 text-gray-600 text-center h-16 flex items-center justify-center">
                                    {selectedProduct[0].storage}
                                </p>
                                {/* card đồ họa */}
                                <p className="h-16 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center bg-gray-200">
                                    {selectedProduct[0].vga}
                                </p>
                                {/* màn hình */}
                                <p className="bg-gray-100 text-gray-600 text-center h-16 flex items-center justify-center">
                                    {selectedProduct[0].screenSize ? (`${selectedProduct[0].screenSize}, ${selectedProduct[0].resolution}, ${selectedProduct[0].frameRate}`) : ''}
                                </p>
                                {/* pin */}
                                <p className="text-gray-600 text-center h-16 flex items-center justify-center bg-gray-200">
                                    {selectedProduct[0].battery}
                                </p>
                                {/* cân nặng */}
                                <p className="bg-gray-100 text-gray-600 text-center h-16 flex items-center justify-center">
                                    {selectedProduct[0].weight}
                                </p>
                                {/* hệ điều hành */}
                                <p className="text-gray-600 text-center h-16 flex items-center justify-center bg-gray-200">
                                    {selectedProduct[0].os}
                                </p>
                                <p className="bg-gray-100 text-gray-600 text-center h-16 flex items-center justify-center">
                                    {selectedProduct[0].webcam}
                                </p>
                            </div>
                            <div
                                className="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border border-gray-300 rounded-lgrelative">
                                <div
                                    className="relative px-2 text-center h-52 flex flex-col items-center justify-center bg-gray-200 overflow-hidden">
                                    {selectedProduct[1].model ? (
                                        <div className="flex flex-col items-center text-center">
                                            {/* SVG ở góc trên bên phải */}
                                            <div className="absolute top-0 right-0 m-2 hover:bg-gray-600" onClick={() => handleUnselected(1)}>
                                                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                                                     className="h-6 w-6"
                                                     fill="#000000">
                                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                       stroke-linejoin="round"></g>
                                                    <g id="SVGRepo_iconCarrier">
                                                        <path fill="#000000"
                                                              d="M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"></path>
                                                        <path fill="#000000"
                                                              d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                            {/* Ảnh nằm giữa */}
                                            <div className="flex flex-col items-center justify-center h-full">
                                                <img
                                                    src={selectedProduct[1].image}
                                                    alt={selectedProduct[1].model}
                                                    className="object-contain max-w-full max-h-32"
                                                />
                                                <h1 className="my-1">{selectedProduct[1].model}</h1>
                                                <h1 className="text-red-700 font-semibold">
                                                    {selectedProduct[1].price.toLocaleString('vi-VN')} VND
                                                </h1>
                                            </div>
                                        </div>
                                    ) : (
                                        <Option handleSelected={handeSelected} index={1}/>
                                    )}
                                </div>
                                {/* CPU */}
                                <p className="bg-gray-100 text-gray-600 h-16 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
                                    {selectedProduct[1].cpu}
                                </p>
                                {/* ram */}
                                <p className="text-gray-600 text-center h-16 flex items-center justify-center bg-gray-200">
                                    {selectedProduct[1].ram}
                                </p>
                                {/* ổ cứng */}
                                <p className="bg-gray-100 text-gray-600 text-center h-16 flex items-center justify-center">
                                    {selectedProduct[1].storage}
                                </p>
                                {/* card đồ họa */}
                                <p className="h-16 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center bg-gray-200">
                                    {selectedProduct[1].vga}
                                </p>
                                {/* màn hình */}
                                <p className="bg-gray-100 text-gray-600 text-center h-16 flex items-center justify-center">
                                    {selectedProduct[1].screenSize ? (`${selectedProduct[1].screenSize}, ${selectedProduct[1].resolution}, ${selectedProduct[1].frameRate}`) : ''}
                                </p>
                                {/* pin */}
                                <p className="text-gray-600 text-center h-16 flex items-center justify-center bg-gray-200">
                                    {selectedProduct[1].battery}
                                </p>
                                {/* cân nặng */}
                                <p className="bg-gray-100 text-gray-600 text-center h-16 flex items-center justify-center">
                                    {selectedProduct[1].weight}
                                </p>
                                {/* hệ điều hành */}
                                <p className="text-gray-600 text-center h-16 flex items-center justify-center bg-gray-200">
                                    {selectedProduct[1].os}
                                </p>
                                <p className="bg-gray-100 text-gray-600 text-center h-16 flex items-center justify-center">
                                    {selectedProduct[1].webcam}
                                </p>
                            </div>
                            <div
                                className="lg:w-1/3 w-full lg:mt-px border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
                                <div
                                    className="relative px-2 text-center h-52 flex flex-col items-center justify-center bg-gray-200 overflow-hidden">
                                    {selectedProduct[2].model ? (
                                        <div className="flex flex-col items-center text-center">
                                            {/* SVG ở góc trên bên phải */}
                                            <div className="absolute top-0 right-0 m-2 hover:bg-gray-600" onClick={() => handleUnselected(2)}>
                                                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                                                     className="h-6 w-6"
                                                     fill="#000000">
                                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                       stroke-linejoin="round"></g>
                                                    <g id="SVGRepo_iconCarrier">
                                                        <path fill="#000000"
                                                              d="M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"></path>
                                                        <path fill="#000000"
                                                              d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                            {/* Ảnh nằm giữa */}
                                            <div className="flex flex-col items-center justify-center h-full">
                                                <img
                                                    src={selectedProduct[2].image}
                                                    alt={selectedProduct[2].model}
                                                    className="object-contain max-w-full max-h-32"
                                                />
                                                <h1 className="my-1">{selectedProduct[2].model}</h1>
                                                <h1 className="text-red-700 font-semibold">
                                                    {selectedProduct[2].price.toLocaleString('vi-VN')} VND
                                                </h1>
                                            </div>
                                        </div>
                                    ) : (
                                        <Option handleSelected={handeSelected} index={2}/>
                                    )}
                                </div>
                                <p className="bg-gray-100 text-gray-600 h-16 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
                                    {selectedProduct[2].cpu}
                                </p>
                                {/* ram */}
                                <p className="text-gray-600 text-center h-16 flex items-center justify-center bg-gray-200">
                                    {selectedProduct[2].ram}
                                </p>
                                {/* ổ cứng */}
                                <p className="bg-gray-100 text-gray-600 text-center h-16 flex items-center justify-center">
                                    {selectedProduct[2].storage}
                                </p>
                                {/* card đồ họa */}
                                <p className="h-16 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center bg-gray-200">
                                    {selectedProduct[2].vga}
                                </p>
                                {/* màn hình */}
                                <p className="bg-gray-100 text-gray-600 text-center h-16 flex items-center justify-center">
                                    {selectedProduct[2].screenSize ? (`${selectedProduct[2].screenSize}, ${selectedProduct[2].resolution}, ${selectedProduct[2].frameRate}`) : ''}
                                </p>
                                {/* pin */}
                                <p className="text-gray-600 text-center h-16 flex items-center justify-center bg-gray-200">
                                    {selectedProduct[2].battery}
                                </p>
                                {/* cân nặng */}
                                <p className="bg-gray-100 text-gray-600 text-center h-16 flex items-center justify-center">
                                    {selectedProduct[2].weight}
                                </p>
                                {/* hệ điều hành */}
                                <p className="text-gray-600 text-center h-16 flex items-center justify-center bg-gray-200">
                                    {selectedProduct[2].os}
                                </p>
                                <p className="bg-gray-100 text-gray-600 text-center h-16 flex items-center justify-center">
                                    {selectedProduct[2].webcam}
                                </p>
                            </div>
                        </div>
                        {/*<div className="p-6 text-center border-t border-gray-300 ms-auto">*/}
                        {/*    <button*/}
                        {/*        onClick={handleCompare}*/}
                        {/*        className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded"*/}
                        {/*    >*/}
                        {/*        SO SÁNH*/}
                        {/*        <svg*/}
                        {/*            fill="none"*/}
                        {/*            stroke="currentColor"*/}
                        {/*            stroke-linecap="round"*/}
                        {/*            stroke-linejoin="round"*/}
                        {/*            stroke-width="2"*/}
                        {/*            className="w-4 h-4 ml-auto"*/}
                        {/*            viewBox="0 0 24 24"*/}
                        {/*        >*/}
                        {/*            <path d="M5 12h14M12 5l7 7-7 7"></path>*/}
                        {/*        </svg>*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Comparison;
