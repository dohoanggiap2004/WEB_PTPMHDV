import React, {useState} from "react";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ConfirmModal from "../../../components/Admin/Modal/ConfirmModal";
import EditOrderItemModal from "../../../components/Admin/Modal/EditOrderItemModal";

export default function LaptopsOrder() {
    const [orderId, setOrderId] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    }
    const handleSelected = (value) => {
        setIsDelete(value);
    };

    const handleSelectedOrderId = (Id) => {
        setOrderId(Id);
    }

    //delete order by Id
    // useEffect(() => {
    //     if(isDelete){
    //         // console.log('check orderId', orderId)
    //         const payload = {
    //             orderId: orderId
    //         }
    //         dispatch(d(payload))
    //         setIsDelete(false)
    //     }
    // }, [isDelete])
    const laptopsOrder = [
        {
            orderId: "ORD1001",
            productId: "PROD1001",
            model: "Model A",
            quantity: 10,
            totalPrice: 500.00
        },
        {
            orderId: "ORD1002",
            productId: "PROD1002",
            model: "Model B",
            quantity: 5,
            totalPrice: 250.00
        },
        {
            orderId: "ORD1003",
            productId: "PROD1003",
            model: "Model C",
            quantity: 20,
            totalPrice: 1000.00
        },
        {
            orderId: "ORD1004",
            productId: "PROD1004",
            model: "Model D",
            quantity: 15,
            totalPrice: 750.00
        },
        {
            orderId: "ORD1005",
            productId: "PROD1005",
            model: "Model E",
            quantity: 8,
            totalPrice: 400.00
        }
    ];

    if (!Array.isArray(laptopsOrder)) {
      console.error('Expected orders to be an array, but got:', laptopsOrder);
      return <div>No orders available</div>;
    }

    const handleSearch = (value) => {
        console.log(value);
    }
    return (
        <>
            <Sidebar handleSearch={handleSearch}/>
            <div className="px-8 lg:ml-72 mt-16 md:mt-0">
                <div className={'bg-white rounded-2xl shadow-md pb-6'}>
                    <div className="flex py-6 ms-6">
                        <p className="font-semibold text-2xl">Quản lý Laptop trong đơn hàng</p>
                        {/* <button className=" bg-indigo-600 px-4 ms-auto text-white font-semibold rounded-lg">
            Add user
          </button> */}
                    </div>

                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Mã đơn hàng
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Mã sản phẩm
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tên sản phẩm
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Số lượng
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tổng tiền
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Hành động
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {laptopsOrder.map((item) => (

                                    <tr
                                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 font-bold" style={{color: '#242E52'}}
                                        key={item.orderId}
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 whitespace-nowrap dark:text-white"
                                        >
                                            {item.orderId}
                                        </th>
                                        <td className="px-6 py-4">{item.productId}</td>
                                        <td className="px-6 py-4">{item.model}</td>
                                        <td className="px-6 py-4">{item.quantity}</td>
                                        <td className="px-6 py-4">{item.totalPrice}</td>
                                        <td className="px-6 py-4 flex">
                                            <div className='flex items-center gap-4'>
                                                <EditOrderItemModal orderItem={item}/>
                                                <a
                                                    onClick={toggleModal}
                                                    className="font-medium text-red-600 dark:text-blue-500 hover:bg-red-300 border border-red-600 rounded-md p-1 "
                                                >
                                                    Xóa
                                                </a>
                                                <ConfirmModal
                                                    isOpen={isModalOpen}
                                                    toggleModal={() => { toggleModal(); handleSelectedOrderId(item.orderId); }}
                                                    handleSelected={handleSelected}
                                                    confirmText="Bạn có chắc chắn muốn xóa?"
                                                />
                                            </div>
                                        </td>
                                    </tr>

                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
