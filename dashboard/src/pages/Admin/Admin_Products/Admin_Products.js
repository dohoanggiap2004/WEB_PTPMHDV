import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import EditProductModal from "../../../components/Admin/Modal/EditProductModal";
import ConfirmModal from "../../../components/Admin/Modal/ConfirmModal";
import AddLaptop from "../../../components/Admin/Modal/AddLaptop";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteLaptop, getLaptops, getLaptopByModel} from "../../../store/actions/laptopAction";
import { getBrands } from "../../../store/actions/brandAction";
import Pagination2 from "../../../components/Pagination/Pagination";
export default function Products() {
    const dispatch = useDispatch();
    const { laptops } = useSelector(state => state.laptop);
    const { brands } = useSelector((state) => state.brand);
    const [laptopId, setLaptopId] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    }
    const handleSelected = (value) => {
        setIsDelete(value);
    }

    useEffect(() => {
        dispatch(getLaptops());
        dispatch(getBrands())
    }, [])

    useEffect(() => {
        console.log(laptops)
    }, [laptops]);

    // delete laptop by Id
    useEffect(() => {
        if (isDelete) {
            // console.log('check laptopId', laptopId)
            const payload = {
                laptopId: laptopId
            }
            dispatch(deleteLaptop(payload))
            setIsDelete(false)
        }
    }, [isDelete])

    const handleSearch = (value) => {
        value ? dispatch(getLaptopByModel(value)) : dispatch(getLaptops())
    }

    return (
        <>
            <Sidebar handleSearch={handleSearch}/>
            <div className="px-8 lg:ml-72 mt-16 md:mt-0">
                <div className={'bg-white rounded-2xl shadow-md pb-6'}>
                    <div className="flex py-6 ms-6">
                        <p className="font-semibold text-2xl">Quản lý Laptops</p>
                        <div className="ms-auto px-2 me-4">
                            <AddLaptop/>
                        </div>

                    </div>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Tên laptop
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Hãng
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ảnh
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Giá
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Số lượng trong kho
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Hệ điều hành
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Hành động
                                </th>
                            </tr>
                            </thead>
                            {!Array.isArray(laptops) || laptops.length === 0 ? (
                                    <div className={'flex items-center justify-center mt-4 '}>
                                        <h1>Không tìm thấy</h1>
                                    </div>
                                ) :
                                <tbody>
                                {laptops.map((laptop) => (
                                    <tr
                                        key={laptop.laptopId}
                                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 font-bold"
                                        style={{color: '#242E52'}}
                                    >
                                        <th
                                            className="px-6 py-4 whitespace-nowrap dark:text-white"
                                        >
                                            {laptop.model}
                                        </th>
                                        <td className="px-6 py-4">{laptop.brandName}</td>
                                        <td className="px-6 py-4">
                                            <img className={'object-cover w-16 h-16'} src={laptop.image}/>
                                        </td>
                                        <td className="px-6 py-4">{laptop.price.toLocaleString('vi-VN')}</td>
                                        <td className="px-6 py-4">{laptop.stockQuantity}</td>
                                        <td className="px-6 py-4">{laptop.os}</td>
                                        <td className="px-6 py-4">
                                            <div className='flex items-center gap-4'>
                                                <EditProductModal laptop={laptop}/>
                                                <a
                                                    onClick={() => {
                                                        toggleModal();
                                                        setLaptopId(laptop.laptopId)
                                                    }}
                                                    className="font-medium text-red-600 dark:text-blue-500 hover:bg-red-300 border border-red-600 rounded-md p-1 "
                                                >
                                                    Xóa
                                                </a>
                                                <ConfirmModal
                                                    isOpen={isModalOpen}
                                                    toggleModal={() => {
                                                        toggleModal();
                                                    }}
                                                    handleSelected={handleSelected}
                                                    confirmText="Bạn có chắc chắn muốn xóa?"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            }
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
