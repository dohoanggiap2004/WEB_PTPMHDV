import React, {useState, useEffect} from "react";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import ConfirmModal from "../../../components/Admin/Modal/ConfirmModal";
import EditUserModal from "../../../components/Admin/Modal/EditUserModal";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, getUsers, getUserByFullname} from "../../../store/actions/userAction";


export default function Users() {
    const dispatch = useDispatch();
    const [isDelete, setIsDelete] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userId, setUserId] = useState('');

    const {users} = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    const handleSelected = (value) => {
        setIsDelete(value);
    };

    // delete user by Id
    useEffect(() => {
        if (isDelete) {
            // console.log('check userId', userId)
            const payload = {
                userId: userId
            }
            dispatch(deleteUser(payload))
            setIsDelete(false)
        }
    }, [isDelete])


    const handleSearch = (value) => {
        value ? dispatch(getUserByFullname(value)) : dispatch(getUsers())
    }

    return (
        <>
            <Sidebar handleSearch={handleSearch}/>
            <div className="px-8 lg:ml-72 mt-16 md:mt-0">
                <div className={'bg-white rounded-2xl shadow-md pb-6'}>
                    <div className="flex py-6 ms-6">
                        <p className="font-semibold text-2xl">Quản lý Người Dùng</p>
                    </div>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-500 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Tài khoản
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Họ tên
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Số điện thoại
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ngày sinh
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Địa chỉ
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Hành động
                                </th>
                            </tr>
                            </thead>

                            {!Array.isArray(users) || users.length === 0 ? (
                                    <div className={'flex items-center justify-center mt-4 '}>
                                        <h1>Không tìm thấy</h1>
                                    </div>
                                ) :
                                <tbody>
                                {users.map((user) => (
                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 font-bold"
                                        style={{color: '#242E52'}}
                                        key={user.userId}>
                                        <th
                                            scope="row"
                                            className="px-6 py-4 whitespace-nowrap dark:text-white"
                                        >
                                            {user.username}
                                        </th>
                                        <td className="px-6 py-4">{user.email}</td>
                                        <td className="px-6 py-4">{user.fullname}</td>
                                        <td className="px-6 py-4">{user.phone}</td>
                                        <td className="px-6 py-4">{user.dateOfBirth}</td>
                                        <td className="px-6 py-4">{`${user.addressDetail}, ${user.ward}, ${user.district}, ${user.province}`}</td>
                                        <td className="px-6 py-4 flex">
                                            <div className='flex items-center gap-4'>
                                                <EditUserModal user={user}/>
                                                <a
                                                    onClick={() => {
                                                        toggleModal();
                                                        setUserId(user.userId)
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
