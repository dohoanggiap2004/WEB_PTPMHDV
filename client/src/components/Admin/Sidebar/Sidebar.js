import {useState, useRef, useEffect} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {setSelectedItem} from "../../../store/reducers/itemReducer";
import {logoutAdmin, logoutUser} from "../../../store/actions/authAction";
import ConfirmModal from "../Modal/ConfirmModal";

function Sidebar( { handleSearch } ) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {selectedItemAdmin} = useSelector((state) => state.item);

    //open modal logout
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLogout, setIsLogout] = useState(false);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    const handleClickOutside = (event) => {
        // Check if the clicked target is outside the sidebar
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsSidebarOpen(false); // Close sidebar
        }
    };

    const handleSearchChange = (e) => {
        handleSearch(e.target.value);
    }

    const handleClick = (value) => {
        dispatch(setSelectedItem(value));
    }

    // handle logout
    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    const handleSelected = (value) => {
        setIsLogout(value);
    };

    useEffect(() => {
        const logoutAndNavigate = async () => {
            if (isLogout) {
                await dispatch(logoutAdmin());
                navigate('/admin/login');
            }
        };

        logoutAndNavigate();
    }, [isLogout]);

    //close side bar
    useEffect(() => {
        // Attach the event listener when the sidebar is open
        if (isSidebarOpen) {
            document.addEventListener("touchstart", handleClickOutside);
        } else {
            document.removeEventListener("touchstart", handleClickOutside);
        }

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [isSidebarOpen]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Sidebar */}
            <aside
                ref={sidebarRef}
                id="default-sidebar"
                className={`fixed bg-white top-0 left-0 z-40 w-72 h-screen transition-transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 lg:block`}
                aria-label="Sidebar"
            >

                <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800 bg-white md:bg-gray-150">
                    <div className={'flex items-center p-8'}>
                        <h1 className={'text-3xl font-bold'} style={{color: '#1B254B'}}>QUẢN LÝ</h1>
                    </div>
                    <hr className="border border-gray-200 mb-4"/>

                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link
                                to={"/admin"}
                                onClick={() => handleClick('dashboard')}
                                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group 
                                ${selectedItemAdmin === 'dashboard' ? 'bg-white' : 'bg-none'}`}
                            >
                                <svg
                                    className="w-5 h-5 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#5640FB"
                                    viewBox="0 0 22 21"
                                >
                                    <path
                                        d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                    <path
                                        d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                                </svg>
                                <span
                                    className={`ms-3 text-gray-400 text-md font-bold p-2  ${selectedItemAdmin === 'dashboard' ? '!text-gray-950' : 'bg-none'}`}>Bảng điều khiển</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to={"/admin/users"}
                                onClick={() => handleClick('users')}
                                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group 
                                ${selectedItemAdmin === 'users' ? 'bg-white' : 'bg-none'}`}
                            >
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#5640FB"
                                    viewBox="0 0 20 18"
                                >
                                    <path
                                        d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                                </svg>
                                <span
                                    className={`flex-1 ms-3 text-gray-400 text-md font-bold p-2 whitespace-nowrap ${selectedItemAdmin === 'users' ? '!text-gray-950' : 'bg-none'}`}>Người dùng</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/admin/products"}
                                onClick={() => handleClick('products')}
                                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group 
                                ${selectedItemAdmin === 'products' ? 'bg-white' : 'bg-none'}`}
                            >
                                <svg viewBox="0 0 24 24" className={'h-5 w-5'} fill="#5640FB"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M19.6471 15.5357H4.35294M19.6471 15.5357V8C19.6471 6.11438 19.6471 5.17157 19.0613 4.58579C18.4755 4 17.5327 4 15.6471 4H8.35294C6.46732 4 5.52451 4 4.93873 4.58579C4.35294 5.17157 4.35294 6.11438 4.35294 8V15.5357M19.6471 15.5357L21.3911 17.3358C21.4356 17.3818 21.4579 17.4048 21.4787 17.4276C21.7998 17.7802 21.9843 18.2358 21.999 18.7124C22 18.7433 22 18.7753 22 18.8393C22 18.9885 22 19.0631 21.996 19.1261C21.9325 20.1314 21.1314 20.9325 20.1261 20.996C20.0631 21 19.9885 21 19.8393 21H4.16068C4.01148 21 3.93688 21 3.87388 20.996C2.86865 20.9325 2.06749 20.1314 2.00398 19.1261C2 19.0631 2 18.9885 2 18.8393C2 18.7753 2 18.7433 2.00096 18.7124C2.01569 18.2358 2.20022 17.7802 2.52127 17.4276C2.54208 17.4048 2.56438 17.3818 2.60888 17.3358L4.35294 15.5357"
                                            stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
                                        <path d="M9.5 18.5H14.5" stroke="#1C274C" stroke-width="1.5"
                                              stroke-linecap="round"></path>
                                        <path
                                            d="M12.75 6.75C12.75 7.16421 12.4142 7.5 12 7.5C11.5858 7.5 11.25 7.16421 11.25 6.75C11.25 6.33579 11.5858 6 12 6C12.4142 6 12.75 6.33579 12.75 6.75Z"
                                            fill="#1C274C"></path>
                                    </g>
                                </svg>
                                <span
                                    className={`flex-1 ms-3 text-gray-400 text-md font-bold p-2 whitespace-nowrap ${selectedItemAdmin === 'products' ? '!text-gray-950' : 'bg-none'}`}>Laptops</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to={"/admin/orders"}
                                onClick={() => handleClick('orders')}
                                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group 
                                ${selectedItemAdmin === 'orders' ? 'bg-white' : 'bg-none'}`}
                            >
                                <svg viewBox="0 0 1024 1024" fill="#5640FB" className="icon h-5 w-5" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M300 462.4h424.8v48H300v-48zM300 673.6H560v48H300v-48z" fill=""></path>
                                        <path
                                            d="M818.4 981.6H205.6c-12.8 0-24.8-2.4-36.8-7.2-11.2-4.8-21.6-11.2-29.6-20-8.8-8.8-15.2-18.4-20-29.6-4.8-12-7.2-24-7.2-36.8V250.4c0-12.8 2.4-24.8 7.2-36.8 4.8-11.2 11.2-21.6 20-29.6 8.8-8.8 18.4-15.2 29.6-20 12-4.8 24-7.2 36.8-7.2h92.8v47.2H205.6c-25.6 0-47.2 20.8-47.2 47.2v637.6c0 25.6 20.8 47.2 47.2 47.2h612c25.6 0 47.2-20.8 47.2-47.2V250.4c0-25.6-20.8-47.2-47.2-47.2H725.6v-47.2h92.8c12.8 0 24.8 2.4 36.8 7.2 11.2 4.8 21.6 11.2 29.6 20 8.8 8.8 15.2 18.4 20 29.6 4.8 12 7.2 24 7.2 36.8v637.6c0 12.8-2.4 24.8-7.2 36.8-4.8 11.2-11.2 21.6-20 29.6-8.8 8.8-18.4 15.2-29.6 20-12 5.6-24 8-36.8 8z"
                                            fill=""></path>
                                        <path
                                            d="M747.2 297.6H276.8V144c0-32.8 26.4-59.2 59.2-59.2h60.8c21.6-43.2 66.4-71.2 116-71.2 49.6 0 94.4 28 116 71.2h60.8c32.8 0 59.2 26.4 59.2 59.2l-1.6 153.6z m-423.2-47.2h376.8V144c0-6.4-5.6-12-12-12H595.2l-5.6-16c-11.2-32.8-42.4-55.2-77.6-55.2-35.2 0-66.4 22.4-77.6 55.2l-5.6 16H335.2c-6.4 0-12 5.6-12 12v106.4z"
                                            fill=""></path>
                                    </g>
                                </svg>
                                <span
                                    className={`flex-1 ms-3 text-gray-400 text-md font-bold p-2 whitespace-nowrap ${selectedItemAdmin === 'orders' ? '!text-gray-950' : 'bg-none'}`}>Đơn hàng</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to={"/admin/order-items"}
                                onClick={() => handleClick('orderItems')}
                                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group 
                                ${selectedItemAdmin === 'orderItems' ? 'bg-white' : 'bg-none'}`}
                            >
                                <svg viewBox="0 0 24 24" className={'h-5 w-5'} fill="#5640FB"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M7.50626 15.2647C7.61657 15.6639 8.02965 15.8982 8.4289 15.7879C8.82816 15.6776 9.06241 15.2645 8.9521 14.8652L7.50626 15.2647ZM6.07692 7.27442L6.79984 7.0747V7.0747L6.07692 7.27442ZM4.7037 5.91995L4.50319 6.64265L4.7037 5.91995ZM3.20051 4.72457C2.80138 4.61383 2.38804 4.84762 2.2773 5.24675C2.16656 5.64589 2.40035 6.05923 2.79949 6.16997L3.20051 4.72457ZM20.1886 15.7254C20.5895 15.6213 20.8301 15.2118 20.7259 14.8109C20.6217 14.41 20.2123 14.1695 19.8114 14.2737L20.1886 15.7254ZM10.1978 17.5588C10.5074 18.6795 9.82778 19.8618 8.62389 20.1747L9.00118 21.6265C10.9782 21.1127 12.1863 19.1239 11.6436 17.1594L10.1978 17.5588ZM8.62389 20.1747C7.41216 20.4896 6.19622 19.7863 5.88401 18.6562L4.43817 19.0556C4.97829 21.0107 7.03196 22.1383 9.00118 21.6265L8.62389 20.1747ZM5.88401 18.6562C5.57441 17.5355 6.254 16.3532 7.4579 16.0403L7.08061 14.5885C5.10356 15.1023 3.89544 17.0911 4.43817 19.0556L5.88401 18.6562ZM7.4579 16.0403C8.66962 15.7254 9.88556 16.4287 10.1978 17.5588L11.6436 17.1594C11.1035 15.2043 9.04982 14.0768 7.08061 14.5885L7.4579 16.0403ZM8.9521 14.8652L6.79984 7.0747L5.354 7.47414L7.50626 15.2647L8.9521 14.8652ZM4.90421 5.19725L3.20051 4.72457L2.79949 6.16997L4.50319 6.64265L4.90421 5.19725ZM6.79984 7.0747C6.54671 6.15847 5.8211 5.45164 4.90421 5.19725L4.50319 6.64265C4.92878 6.76073 5.24573 7.08223 5.354 7.47414L6.79984 7.0747ZM11.1093 18.085L20.1886 15.7254L19.8114 14.2737L10.732 16.6332L11.1093 18.085Z"
                                            fill="#1C274C"></path>
                                        <path
                                            d="M19.1647 6.2358C18.6797 4.48023 18.4372 3.60244 17.7242 3.20319C17.0113 2.80394 16.1062 3.03915 14.2962 3.50955L12.3763 4.00849C10.5662 4.47889 9.66119 4.71409 9.24954 5.40562C8.8379 6.09714 9.0804 6.97492 9.56541 8.73049L10.0798 10.5926C10.5648 12.3481 10.8073 13.2259 11.5203 13.6252C12.2333 14.0244 13.1384 13.7892 14.9484 13.3188L16.8683 12.8199C18.6784 12.3495 19.5834 12.1143 19.995 11.4227C20.2212 11.0429 20.2499 10.6069 20.1495 10"
                                            stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
                                    </g>
                                </svg>
                                <span
                                    className={`flex-1 ms-3 text-gray-400 text-md font-bold p-2 whitespace-nowrap ${selectedItemAdmin === 'orderItems' ? '!text-gray-950' : 'bg-none'}`}>Đơn Laptop</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/admin/vouchers'
                                onClick={() => {
                                    handleClick('vouchers')
                                }}
                                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group 
                                ${selectedItemAdmin === 'vouchers' ? 'bg-white' : 'bg-none'}`}
                            >
                                <svg width="64px" className={'h-5, w-5'} viewBox="0 0 48 48"
                                     xmlns="http://www.w3.org/2000/svg"
                                     fill="#5640FB">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g id="Layer_2" data-name="Layer 2">
                                            <g id="invisible_box" data-name="invisible box">
                                                <rect width="48" height="48" fill="none"></rect>
                                            </g>
                                            <g id="Layer_7" data-name="Layer 7">
                                                <g>
                                                    <path
                                                        d="M43,7H38a2,2,0,0,0-1.4.6L34,10.2,31.4,7.6A2,2,0,0,0,30,7H5a2.9,2.9,0,0,0-3,3V38a2.9,2.9,0,0,0,3,3H30a2,2,0,0,0,1.4-.6L34,37.8l2.6,2.6A2,2,0,0,0,38,41h5a2.9,2.9,0,0,0,3-3V10A2.9,2.9,0,0,0,43,7ZM42,37H38.8l-3.4-3.4a1.9,1.9,0,0,0-2.8,0L29.2,37H6V11H29.2l3.4,3.4a1.9,1.9,0,0,0,2.8,0L38.8,11H42Z"></path>
                                                    <path
                                                        d="M34,17a2,2,0,0,0-2,2v2a2,2,0,0,0,4,0V19A2,2,0,0,0,34,17Z"></path>
                                                    <path
                                                        d="M34,25a2,2,0,0,0-2,2v2a2,2,0,0,0,4,0V27A2,2,0,0,0,34,25Z"></path>
                                                    <circle cx="14" cy="20" r="2"></circle>
                                                    <circle cx="22" cy="28" r="2"></circle>
                                                    <path
                                                        d="M21.6,17.6l-10,10a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0l10-10a2,2,0,0,0-2.8-2.8Z"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <span
                                    className={`flex-1 ms-3 text-gray-400 text-md font-bold p-2 whitespace-nowrap ${selectedItemAdmin === 'vouchers' ? '!text-gray-950' : 'bg-none'}`}>Mã giảm giá</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/admin/installments'
                                onClick={() => {
                                    handleClick('installments')
                                }}
                                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group 
                                ${selectedItemAdmin === 'installments' ? 'bg-white' : 'bg-none'}`}
                            >
                                <svg fill="#5640FB" version="1.1" id="Layer_1"  viewBox="0 0 245 256" className={'h-5 w-5'}
                                     enable-background="new 0 0 245 256" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> <path
                                        d="M106.59,132.64c-1.7-2.09-4.08-3.14-7.15-3.14c-3.12,0-5.52,1.05-7.2,3.14c-1.67,2.1-2.51,4.66-2.51,7.68v5.38 c0,2.98,0.85,5.51,2.55,7.58c1.7,2.07,4.13,3.1,7.3,3.1c3.07,0,5.43-1.02,7.08-3.07c1.65-2.05,2.48-4.58,2.48-7.61v-5.38 C109.14,137.3,108.29,134.74,106.59,132.64z M106.59,132.64c-1.7-2.09-4.08-3.14-7.15-3.14c-3.12,0-5.52,1.05-7.2,3.14 c-1.67,2.1-2.51,4.66-2.51,7.68v5.38c0,2.98,0.85,5.51,2.55,7.58c1.7,2.07,4.13,3.1,7.3,3.1c3.07,0,5.43-1.02,7.08-3.07 c1.65-2.05,2.48-4.58,2.48-7.61v-5.38C109.14,137.3,108.29,134.74,106.59,132.64z M190,63.24V7h-31v27.73L122.97,1.82L1.94,110.15 l18.4,20.74L39,114.04V254h167V115.08l18.36,16.85l18.89-20.22L190,63.24z M77.93,145.7v-5.38c0-5.95,1.92-10.95,5.76-14.97 c3.84-4.03,9.09-6.04,15.75-6.04c6.7,0,11.97,2,15.81,6c3.84,4.01,5.76,9.01,5.76,15.01v5.38c0,5.96-1.92,10.93-5.76,14.91 s-9.07,5.97-15.67,5.97c-6.71,0-11.99-1.99-15.86-5.97C79.86,156.63,77.93,151.66,77.93,145.7z M94.34,209.8l49.64-79.46l8.73,5.03 l-49.64,79.46L94.34,209.8z M169.89,202.96c0,6-1.92,10.99-5.76,14.97c-3.84,3.98-9.07,5.97-15.68,5.97c-6.7,0-11.99-2-15.85-6 c-3.86-4-5.79-8.98-5.79-14.94v-5.45c0-5.91,1.93-10.88,5.79-14.91c3.86-4.02,9.1-6.04,15.71-6.04c6.71,0,11.98,2.01,15.82,6.01 c3.84,4,5.76,8.98,5.76,14.94V202.96z M148.31,186.76c-3.12,0-5.51,1.04-7.19,3.14c-1.67,2.09-2.51,4.63-2.51,7.61v5.45 c0,2.98,0.87,5.51,2.62,7.61c1.74,2.09,4.15,3.14,7.22,3.14c3.26,0,5.68-1.01,7.26-3.04c1.59-2.02,2.38-4.59,2.38-7.71v-5.45 c0-2.98-0.85-5.52-2.55-7.61C153.84,187.8,151.43,186.76,148.31,186.76z M106.66,153.31c1.65-2.05,2.48-4.58,2.48-7.61v-5.38 c0-3.02-0.85-5.58-2.55-7.68c-1.7-2.09-4.08-3.14-7.15-3.14c-3.12,0-5.52,1.05-7.2,3.14c-1.67,2.1-2.51,4.66-2.51,7.68v5.38 c0,2.98,0.85,5.51,2.55,7.58c1.7,2.07,4.13,3.1,7.3,3.1C102.65,156.38,105.01,155.36,106.66,153.31z M106.59,132.64 c-1.7-2.09-4.08-3.14-7.15-3.14c-3.12,0-5.52,1.05-7.2,3.14c-1.67,2.1-2.51,4.66-2.51,7.68v5.38c0,2.98,0.85,5.51,2.55,7.58 c1.7,2.07,4.13,3.1,7.3,3.1c3.07,0,5.43-1.02,7.08-3.07c1.65-2.05,2.48-4.58,2.48-7.61v-5.38 C109.14,137.3,108.29,134.74,106.59,132.64z M106.59,132.64c-1.7-2.09-4.08-3.14-7.15-3.14c-3.12,0-5.52,1.05-7.2,3.14 c-1.67,2.1-2.51,4.66-2.51,7.68v5.38c0,2.98,0.85,5.51,2.55,7.58c1.7,2.07,4.13,3.1,7.3,3.1c3.07,0,5.43-1.02,7.08-3.07 c1.65-2.05,2.48-4.58,2.48-7.61v-5.38C109.14,137.3,108.29,134.74,106.59,132.64z"></path> </g></svg>
                                <span
                                    className={`flex-1 ms-3 text-gray-400 text-md font-bold p-2 whitespace-nowrap ${selectedItemAdmin === 'installments' ? '!text-gray-950' : 'bg-none'}`}>Gói trả góp</span>
                            </Link>
                        </li>

                        <li>
                            <a
                                onClick={() => toggleModal()}
                                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                            >
                                <svg viewBox="0 0 24 24" className={'h-5 w-5'} fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M16 16.9998L21 11.9998M21 11.9998L16 6.99982M21 11.9998H9M12 16.9998C12 17.2954 12 17.4432 11.989 17.5712C11.8748 18.9018 10.8949 19.9967 9.58503 20.2571C9.45903 20.2821 9.31202 20.2985 9.01835 20.3311L7.99694 20.4446C6.46248 20.6151 5.69521 20.7003 5.08566 20.5053C4.27293 20.2452 3.60942 19.6513 3.26118 18.8723C3 18.288 3 17.5161 3 15.9721V8.02751C3 6.48358 3 5.71162 3.26118 5.12734C3.60942 4.3483 4.27293 3.75442 5.08566 3.49435C5.69521 3.29929 6.46246 3.38454 7.99694 3.55503L9.01835 3.66852C9.31212 3.70117 9.45901 3.71749 9.58503 3.74254C10.8949 4.00297 11.8748 5.09786 11.989 6.42843C12 6.55645 12 6.70424 12 6.99982"
                                            stroke="#5640FB" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </g>
                                </svg>
                                <span className="flex-1 ms-3 text-gray-400 text-md font-bold p-1.5 whitespace-nowrap">Đăng xuất</span>
                            </a>

                        </li>
                    </ul>

                </div>
            </aside>
            <ConfirmModal
                isOpen={isModalOpen}
                toggleModal={toggleModal}
                handleSelected={handleSelected}
                confirmText="Bạn có chắc chắn muốn đăng xuất?"
            />


            <div className={'h-28 flex flex-col md:flex-row items-center justify-between me-8'}>

                {/*breadcrumb*/}
                <div className={'md:ms-8 my-4 lg:ms-80 items-center '}>

                    <nav aria-label="breadcrumb" className="w-full text-gray-800">
                        <ol className="flex h-8 space-x-2 text-gray-800">
                            <li className="flex items-center">
                                <a rel="noopener noreferrer" href="#" title="Back to homepage"
                                   className="flex items-center hover:underline">Trang chủ</a>
                            </li>

                            <li className="flex items-center space-x-1">
                                <span className="text-gray-600">/</span>
                                <a rel="noopener noreferrer" href="#"
                                   className="flex items-center px-1 capitalize cursor-default">
                                    {selectedItemAdmin === 'dashboard' && 'Bảng Điều Khiển'}
                                    {selectedItemAdmin === 'users' && 'Người Dùng'}
                                    {selectedItemAdmin === 'products' && 'Laptops'}
                                    {selectedItemAdmin === 'orders' && 'Đơn Hàng'}
                                    {selectedItemAdmin === 'orderItems' && 'Đơn Laptops'}
                                    {selectedItemAdmin === 'installments' && 'Gói trả góp'}
                                </a>
                            </li>
                        </ol>
                    </nav>

                    {/*title*/}
                    <p className={'text-3xl font-bold'} style={{color: '#1B254B'}}>
                        {selectedItemAdmin === 'dashboard' && 'BẢNG ĐIỀU KHIỂN'}
                        {selectedItemAdmin === 'users' && 'NGƯỜI DÙNG'}
                        {selectedItemAdmin === 'products' && 'LAPTOPS'}
                        {selectedItemAdmin === 'orders' && 'ĐƠN HÀNG'}
                        {selectedItemAdmin === 'orderItems' && 'ĐƠN LAPTOPS'}
                        {selectedItemAdmin === 'vouchers' && 'VOUCHERS'}
                        {selectedItemAdmin === 'installments' && 'GÓI TRẢ GÓP'}
                    </p>
                </div>

                {/*utils*/}
                <div className="flex items-center bg-white rounded-3xl p-2 ms-8 md:ms-0 w-80 lg:w-72">
                    {/*search bar*/}
                    <div className="max-w-[180px] w-full me-2">
                        <div className="relative">
                            <input type="text"
                                   name="query"
                                   onChange={handleSearchChange}
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

                    {/*open side bar button*/}
                    <button
                        onClick={toggleSidebar}
                        aria-controls="default-sidebar"
                        type="button"
                        className="inline-flex items-center p-2 me-2 text-sm text-gray-400 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                        <span className="sr-only">Open sidebar</span>
                        <svg fill="gray" viewBox="0 0 52 52" className={'w-5 h-5'} data-name="Layer 1" id="Layer_1"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M50,12.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"></path>
                                <path d="M50,28H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"></path>
                                <path d="M50,43.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"></path>
                            </g>
                        </svg>
                    </button>

                    {/*svg ring*/}
                    <svg version="1.1" id="Uploaded to svgrepo.com" className={'w-6 h-6 me-2'}
                         viewBox="0 0 32 32"
                         fill="gray">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path className="linesandangles_een"
                                  d="M24,20v-5c0-4.079-3.055-7.438-7-7.931V5h-2v2.069C11.055,7.562,8,10.921,8,15v5 c0,1.105-0.895,2-2,2v2h20v-2C24.895,22,24,21.105,24,20z M9.463,22C9.804,21.411,10,20.728,10,20v-5c0-3.308,2.692-6,6-6 s6,2.692,6,6v5c0,0.728,0.196,1.411,0.537,2H9.463z M15,25h2v2h-2V25z"></path>
                        </g>
                    </svg>

                    <div className={'h-8 w-8 flex items-center justify-center rounded-full bg-indigo-600'}>
                        <p className={'text-white'}>G</p>
                    </div>

                </div>
            </div>


            {/* content */}
        </>
    );
}

export default Sidebar;
