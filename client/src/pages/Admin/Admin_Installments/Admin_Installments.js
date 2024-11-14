import React, {useEffect, useState} from "react";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ConfirmModal from "../../../components/Admin/Modal/ConfirmModal";
import EditInstallmentModal from "../../../components/Admin/Modal/EditInstallmentModal";
import {
    getInstallments,
    getInstallmentByCompany,
    deleteInstallment,
} from "../../../store/actions/installmentAction";
import {useDispatch, useSelector} from "react-redux";
import AddInstallment from "../../../components/Admin/Modal/AddInstallment";

export default function Installments() {
    // const [orders, setOrders] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [installmentId, setInstallmentId] = useState('');
    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    }
    const handleSelected = (value) => {
        setIsDelete(value)
    };

    const dispatch = useDispatch();
    const {installments} = useSelector(state => state.installment);

    useEffect(() => {
        dispatch(getInstallments());
    }, [dispatch])

    useEffect(() => {
        console.log(installments);
    }, [installments]);

    useEffect(() => {
        if (isDelete) {
            // console.log('check installmentId', installmentId)
            const payload = {
                installmentId: installmentId
            }
            dispatch(deleteInstallment(payload))
            setIsDelete(false)
        }
    }, [isDelete])

    const handleSearch = (value) => {
        value ? dispatch(getInstallmentByCompany(value)) : dispatch(getInstallments())
    }

    return (
        <>
            <Sidebar handleSearch={handleSearch}/>
            <div className="px-8 lg:ml-72 mt-16 md:mt-0">
                <div className={'bg-white rounded-2xl shadow-md pb-6'}>

                    <div className="flex py-6 ms-6">
                        <p className="font-semibold text-2xl">Quản lý Gói Lãi Suất</p>
                        <div className="ms-auto px-2 me-4">
                            <AddInstallment/>
                        </div>
                    </div>

                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Công ty
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Giá mua trả góp
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Số tiền trả trước
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Kỳ hạn
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Góp mỗi tháng
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Lãi suất trực phẳng
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Giấy tờ cần có
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Hành động
                                </th>
                            </tr>
                            </thead>

                            {!Array.isArray(installments) || installments.length === 0 ? (
                                    <div className={'flex items-center justify-center mt-4 '}>
                                        <h1>Không tìm thấy</h1>
                                    </div>
                                ) :
                                <tbody>
                                {installments.map((installment) => (
                                    <tr
                                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 font-bold"
                                        style={{color: '#242E52'}}
                                        key={installment.installmentId}
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 whitespace-nowrap dark:text-white"
                                        >
                                            {installment.company}
                                        </th>
                                        <td className="px-6 py-4">{installment.installmentPrice.toLocaleString('vi-VN')}</td>
                                        <td className="px-6 py-4">{installment.downPayment.toLocaleString('vi-VN')}</td>
                                        <td className="px-6 py-4">{installment.term}</td>
                                        <td className="px-6 py-4">{installment.monthlyInstallment.toLocaleString('vi-VN')}</td>
                                        <td className="px-6 py-4">{installment.flatInterestRate}</td>
                                        <td className="px-6 py-4">{installment.requiredDocuments}</td>

                                        <td className="px-6 py-4 flex">
                                            <div className='flex items-center gap-4'>
                                               <EditInstallmentModal installment={installment} />
                                                <a
                                                    onClick={() => {
                                                        toggleModal();
                                                        setInstallmentId(installment.installmentId);
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
