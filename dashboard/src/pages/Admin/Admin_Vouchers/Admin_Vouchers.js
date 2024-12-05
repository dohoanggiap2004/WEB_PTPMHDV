import React, {useEffect, useState} from "react";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ConfirmModal from "../../../components/Admin/Modal/ConfirmModal";
import EditVoucherModal from "../../../components/Admin/Modal/EditVoucherModal";
import {
    getVouchers,
    getVoucherByCode,
    deleteVoucher
} from "../../../store/actions/voucherAction";
import {useDispatch, useSelector} from "react-redux";
import AddVoucher from "../../../components/Admin/Modal/AddVoucher";
import Pagination from "../../../components/Pagination/Pagination";

export default function Vouchers() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [voucherId, setVoucherId] = useState('');
    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    }
    const handleSelected = (value) => {
        setIsDelete(value)
    };

    const dispatch = useDispatch();
    const {vouchers} = useSelector(state => state.voucher);

    useEffect(() => {
        dispatch(getVouchers());
    }, [dispatch])

    useEffect(() => {
        console.log(vouchers);
    }, [vouchers]);

    useEffect(() => {
        console.log(voucherId);
    }, [voucherId]);


    useEffect(() => {
        if (isDelete) {
            // console.log('check voucherId', voucherId)
            const payload = {
                voucherId: voucherId
            }
            dispatch(deleteVoucher(payload))
            setIsDelete(false)
        }
    }, [isDelete])


    const handleSearch = (value) => {
        (
            value
        ) ? dispatch(getVoucherByCode(value)) : dispatch(getVouchers())
    }

    return (
        <>
            <Sidebar handleSearch={handleSearch}/>
            <div className="px-8 lg:ml-72 mt-16 md:mt-0">
                <div className={'bg-white rounded-2xl shadow-md pb-6'}>

                    <div className="flex py-6 ms-6">
                        <p className="font-semibold text-2xl">Quản lý Mã Giảm Giá</p>
                        <div className="ms-auto px-2 me-4">
                            <AddVoucher/>
                        </div>
                    </div>

                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Mã voucher
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Giảm giá
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Mô tả
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Hành động
                                </th>
                            </tr>
                            </thead>

                            {!Array.isArray(vouchers) || vouchers.length === 0 ? (
                                    <div className={'flex items-center justify-center mt-4 '}>
                                        <h1>Không tìm thấy</h1>
                                    </div>
                                ) :
                                vouchers.map((voucher) => (
                                    <tbody>
                                    <tr
                                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 font-bold"
                                        style={{color: '#242E52'}}
                                        key={voucher.voucherId}
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 whitespace-nowrap dark:text-white"
                                        >
                                            {voucher.voucherCode}
                                        </th>
                                        <td className="px-6 py-4">{voucher.voucherDiscount}</td>
                                        <td className="px-6 py-4">{voucher.description}</td>

                                        <td className="px-6 py-4 flex">
                                            <div className='flex items-center gap-4'>
                                                <EditVoucherModal voucher={voucher}/>
                                                <a
                                                    onClick={() => {
                                                        toggleModal();
                                                        setVoucherId(voucher.voucherId);
                                                    }}
                                                    className="font-medium text-red-600 dark:text-blue-500 hover:bg-red-300 border border-red-600 rounded-md p-1 "
                                                >
                                                    Xóa
                                                </a>
                                                <ConfirmModal
                                                    isOpen={isModalOpen}
                                                    toggleModal={toggleModal}
                                                    handleSelected={handleSelected}
                                                    confirmText="Bạn có chắc chắn muốn xóa?"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                ))}

                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
