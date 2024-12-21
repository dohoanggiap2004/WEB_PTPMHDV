import Layout from "../../layout/Layout";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {getCountProductSales} from "../../store/actions/dashboardAction";
import {Link} from "react-router-dom";
import SwipeProducts from "../../components/SwipeProducts/SwipeProducts";
import {addToCart} from "../../store/actions/cartAction";
import {getUserId} from "../../Utils/decodeToken";
import {getLaptopsElasticByUserId, getLaptopsViewedByUserId} from "../../store/actions/laptopAction";

const Suggestion = () => {
    const { laptopsElastic, laptopsViewed, loading, loadingElastic } = useSelector(state => state.laptop);
    const {productSales} = useSelector(state => state.dashboard);
    const [userId, setUserId] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        setUserId(getUserId())
    }, []);

    useEffect(() => {
        console.log('check userid', userId)
        dispatch(getLaptopsViewedByUserId(userId))
    }, [userId]);

    useEffect(() => {
        console.log('check userid', userId)
        dispatch(getLaptopsElasticByUserId(userId))
    }, [userId]);

    useEffect(() => {

        console.log('check laptop viewed', laptopsViewed)

        console.log('check laptop elastic', laptopsElastic)
    }, [laptopsViewed, laptopsElastic]);

    useEffect(() => {
        dispatch(getCountProductSales())
    }, []);

    const handleAddToCart = (laptop) => {
        dispatch(addToCart(laptop));
        window.alert('Sản phẩm đã được thêm vào giỏ hàng!');
    };

    if (loadingElastic) return <div>Loading...</div>;

    return (
        <Layout>
            <div className="relative inline-block mt-24">
            <span className="text-2xl md:text-3xl font-bold text-red-600">
              Dịch vụ hỗ trợ chọn sản phẩm phù hợp với bạn
            </span>
                <span
                    className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full">
                    </span>
            </div>
            <div className={'bg-white'}>
                <div className={'rounded-lg border-b-2 pt-8 pb-6'}>
                    <div
                        className={'container px-5 py-6 mx-auto flex flex-wrap bg-white mb-4  w-auto'}>

                        <div style={{backgroundColor: '#F9405E'}} className={'py-8 rounded-lg shadow-md w-full'}>
                            <p className={'text-5xl text-center font-bold text-white'}>Sản phẩm bạn đã xem gần đây</p>

                            <div
                                className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-8 mx-2">
                                {laptopsViewed && laptopsViewed.length > 0 ? laptopsViewed.map((laptop) => (
                                    <div
                                        key={laptop.laptopId}
                                        className="group relative border-2 dark:bg-gray-800 rounded-lg shadow-md p-2 bg-white"
                                    >
                                        <Link to={`/productdetail/${laptop.laptopId}`}>
                                            <div
                                                className="aspect-h-1 aspect-w-1 w-auto overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-40">
                                                <img
                                                    src={laptop.image}
                                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                                />
                                            </div>
                                            <div className="mt-4 flex justify-between">
                                                <div>
                                                    <h3 className="text-sm text-gray-700">
                                                        <a className="text-gray-700 no-underline">
                            <span
                                aria-hidden="true"
                                className="absolute inset-0"
                            />
                                                            {laptop.model}
                                                        </a>
                                                    </h3>
                                                    <p className="mt-1 text-sm text-gray-500 line-through">
                                                        {laptop.price.toLocaleString('vi-VN')} VND
                                                    </p>
                                                    <p className="text-lg mb-3 font-medium text-red-600">
                                                        {laptop.price.toLocaleString('vi-VN')} VND
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                        <button
                                            type=""
                                            onClick={() => handleAddToCart(laptop)}
                                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-700 dark:border-transparent dark:hover:bg-indigo-600 dark:focus:ring-indigo-400 dark:focus:ring-offset-2 disabled:cursor-wait disabled:opacity-50"
                                        >
                                            Thêm vào giỏ hàng
                                        </button>
                                    </div>
                                )) : (<p></p>)}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'shadow-md rounded-md pt-6 mb-8 mx-4 mt-6'}>
                    <div className={'text-xl font-bold text-gray-500 ms-8'}>
                        <p>SẢN PHẨM GỢI Ý DÀNH CHO BẠN</p>
                    </div>
                    <div className={'mx-auto flex items-center justify-center mt-4'}>
                        {laptopsElastic && laptopsElastic.length > 0 ? (
                            <div className={'mx-auto flex items-center justify-center mt-4 '}>
                                <SwipeProducts laptops={laptopsElastic}/>
                            </div>
                        ) : (
                            <p>Không có sản phẩm nào phù hợp</p>
                        )}
                    </div>
                </div>

                <div className={'container px-5 py-6 mx-auto flex flex-wrap bg-white mb-8 rounded-lg shadow-md w-auto'}>

                <div style={{backgroundColor: '#F9405E'}} className={'py-8 rounded-lg shadow-md'}>
                        <p className={'text-5xl text-center font-bold text-white'}>Sản phẩm nổi bật</p>

                        <div
                            className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-8 mx-2">
                            {productSales.map((laptop) => (
                                <div
                                    key={laptop.laptopId}
                                    className="group relative border-2 dark:bg-gray-800 rounded-lg shadow-md p-2 bg-white"
                                >
                                    <Link to={`/productdetail/${laptop.laptopId}`}>
                                        <div
                                            className="aspect-h-1 aspect-w-1 w-auto overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-40">
                                            <img
                                                src={laptop.image}
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">
                                                    <a className="text-gray-700 no-underline">
                            <span
                                aria-hidden="true"
                                className="absolute inset-0"
                            />
                                                        {laptop.model}
                                                    </a>
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500 line-through">
                                                    {laptop.price.toLocaleString('vi-VN')} VND
                                                </p>
                                                <p className="text-lg mb-3 font-medium text-red-600">
                                                    {laptop.price.toLocaleString('vi-VN')} VND
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                    <button
                                        type=""
                                        onClick={() => handleAddToCart(laptop)}
                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-700 dark:border-transparent dark:hover:bg-indigo-600 dark:focus:ring-indigo-400 dark:focus:ring-offset-2 disabled:cursor-wait disabled:opacity-50"
                                    >
                                        Thêm vào giỏ hàng
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Suggestion
