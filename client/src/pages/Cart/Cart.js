import {Link} from "react-router-dom";
import Layout from "../../layout/Layout";
import "./style.css";
import {useState, useEffect} from "react";
import {removeItem, clearCart, updateQuantity} from '../../store/actions/cartAction'
import {useDispatch, useSelector} from "react-redux";
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';
import {instanceAxios8000} from "../../config/axiosConfig";
import {placeOrder} from "../../store/actions/orderAction";
import {sendMail} from "../../store/actions/mailAction";

const Cart = () => {
    const {cart} = useSelector(state => state.cart);
    const {order, error} = useSelector(state => state.order)
    const dispatch = useDispatch()
    const [totalPayment, setTotalPayment] = useState(0)
    const [province, setProvince] = useState([]);
    const [district, setDistrict] = useState([]);
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        email: "",
        fullname: '',
        phoneNumber: "",
        province: "",
        district: "",
        ward: "",
        addressDetail: "",
        paymentMethod: "",
        shippingMethod: "",
    });

    useEffect(() => {
        let total = 0
        cart.map(laptop => {
            total += laptop.specialPrice !== 0 ? laptop.specialPrice * laptop.quantity : laptop.price * laptop.quantity;
        })
        setTotalPayment(total)
    }, [cart])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const getAccessToken = async () => {
        try {
            await instanceAxios8000.get('/refresh-token');
        } catch (error) {
            console.error('Error refreshing token:', error);
        }
    };

    const getUserIdFromToken = async () => {
        try {
            // Lấy accessToken từ cookies
            let accessToken = Cookies.get('accessToken');
            console.log('check acc', accessToken)
            if (!accessToken) {
                console.log('Access token not found. Attempting to refresh...');
                await getAccessToken(); // Làm mới accessToken
                accessToken = Cookies.get('accessToken'); // Lấy lại token từ cookies sau khi làm mới
                console.log('check acc aff', accessToken)
                if (!accessToken) {
                    throw new Error('Access token not found in cookies even after refresh');
                }
            }

            // Giải mã accessToken
            const decodedToken = jwtDecode(accessToken); // Sử dụng jwtDecode
            if (!decodedToken || !decodedToken.userId) {
                throw new Error('Invalid token structure or missing ID');
            }

            // Trích xuất ID từ token
            return decodedToken.userId;
        } catch (error) {
            console.error('Error decoding token:', error.message);
            return null; // Xử lý khi không lấy được ID
        }
    };

    const handlePlaceOrder = async (e) => {
        e.preventDefault();
        const userId = await getUserIdFromToken()
        const orderInfo = {
            orderDate: new Date().toISOString().split('T')[0],
            status: 'Đang xử lí ',
            orderNote: '',
            orderAddress: `${formData.addressDetail}, ${formData.ward}, ${formData.district}, ${formData.province}`,
            phoneNumber: formData.phoneNumber,
            paymentMethod: formData.paymentMethod,
            shippingMethod: formData.shippingMethod,
            totalPayment: totalPayment,
            userId: userId,
        }
        const productsInfo = cart.map(laptop => (
            {
                laptopId: laptop.laptopId,
                quantity: laptop.quantity,
                specialPrice: laptop.specialPrice,
                price: laptop.price,
            }
        ))
        const payload = {
            orderInfo: orderInfo,
            productsInfo: productsInfo
        }

        dispatch(placeOrder(payload))

        error ? alert(error.message) : alert('Đặt hàng thành công, vui lòng check email của bạn!')
    };

    useEffect(() => {
        const orderInfo = {
            orderDate: new Date().toISOString().split('T')[0],
            status: 'Đang xử lí ',
            orderNote: '',
            orderAddress: `${formData.addressDetail}, ${formData.ward}, ${formData.district}, ${formData.province}`,
            phoneNumber: formData.phoneNumber,
            paymentMethod: formData.paymentMethod,
            shippingMethod: formData.shippingMethod,
            totalPayment: totalPayment,
            orderId: order.orderId,
            fullname: formData.fullname
        }

        const payloadMail = {
            orderInfo: orderInfo,
            productsInfo: cart,
            email: formData.email
        }
        // console.log('check mail ', payloadMail)
        dispatch(sendMail(payloadMail))
    }, [order])

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    "https://provinces.open-api.vn/api/?depth=2"
                );
                const data = await response.json();
                setData(data);
                const provinces = data.map((item) => (
                    {
                        name: item.name,
                    }
                ));
                setProvince(provinces);
                console.log(provinces);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);
    useEffect(() => {
        const getData = async () => {
            try {
                const prov = data.find((item) => item.name === formData.province);
                console.log(prov);
                const districts = prov.districts.map((item) => (
                    {
                        name: item.name,
                    }
                ));
                setDistrict(districts);
                console.log(districts);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [formData.province]);

    const handleQuantityChange = (e, laptopId) => {
        const newQuantity = parseInt(e.target.value);
        dispatch(updateQuantity({laptopId, newQuantity}));
    };


    return (
        <>
            <Layout>
                <div className="container mx-auto mt-24 rounded-xl shadow-md mb-6 w-full my-10 ">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-8 bg-white px-10 py-10">
                            <div className="flex justify-between border-b pb-8">
                                <h1 className="font-semibold text-2xl">Giỏ hàng</h1>
                                <h2 className="font-semibold text-2xl">{`${cart.length} sản phẩm`}</h2>
                            </div>

                            {cart.map((laptop) => (
                                <div
                                    className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-200 md:h-36 h-56">
                                    <div className="md:w-4/12 2xl:w-1/4 w-full">
                                        <img
                                            src={laptop.image}
                                            alt="Black Leather Purse"
                                            className="h-full object-center object-cover md:block hidden"
                                        />
                                        <img
                                            src={laptop.image}
                                            alt="Black Leather Purse"
                                            className="md:hidden w-14 h-14 object-center object-cover"
                                        />
                                    </div>
                                    <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                        <div className="flex items-center justify-between w-full">
                                            <p className="md:text-base text-sm font-black leading-none text-gray-800">
                                                {laptop.model}
                                            </p>
                                            <select
                                                aria-label="Select quantity"
                                                value={laptop.quantity}
                                                onChange={(e) => handleQuantityChange(e, laptop.laptopId)}
                                                className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
                                            >
                                                <option value={1}>01</option>
                                                <option value={2}>02</option>
                                                <option value={3}>03</option>
                                            </select>
                                        </div>

                                        <p className="text-xs leading-3 text-gray-600 pt-1">
                                            {`Màn hình: ${laptop.screenSize} inches`}
                                        </p>
                                        <p className="text-xs leading-3 text-gray-600 py-2 ">
                                            Hệ điều hành: {laptop.os}
                                        </p>
                                        <p className="w-80 md:w-96 text-xs leading-3 text-gray-600 hidden md:block">
                                            {laptop.description}
                                        </p>
                                        <div className="flex items-center justify-between pt-5">
                                            <div className="flex items-center">
                                                {/*<p className="text-xs leading-3 underline text-gray-800 cursor-pointer">*/}
                                                {/*    Add to favorites*/}
                                                {/*</p>*/}
                                                <p
                                                    className="text-xs leading-3 underline text-red-500 cursor-pointer"
                                                    onClick={() => dispatch(removeItem(laptop.laptopId))}
                                                >
                                                    Remove
                                                </p>
                                            </div>
                                            <p className="md:text-base text-sm font-black leading-none text-red-700">
                                                {(
                                                    laptop.specialPrice && laptop.specialPrice !== 0
                                                        ? laptop.specialPrice
                                                        : laptop.price
                                                )?.toLocaleString('vi-VN')} VND
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            ))}

                            {cart.length !== 0 ? (
                                <>
                                    <button
                                        onClick={() => dispatch(clearCart())}
                                        className="flex font-semibold text-red-700 text-sm mt-6"
                                    >
                                        Xóa toàn bộ giỏ hàng
                                    </button>
                                    <Link
                                        to="/"
                                        className="flex font-semibold text-indigo-600 text-sm mt-10"
                                    >
                                        <svg
                                            className="fill-current mr-2 text-indigo-600 w-4"
                                            viewBox="0 0 448 512"
                                        >
                                            <path
                                                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/>
                                        </svg>
                                        Tiếp tục mua hàng
                                    </Link>{" "}
                                </>
                            ) : (
                                <Link
                                    to="/"
                                    className="flex font-semibold text-indigo-600 text-sm mt-10"
                                >
                                    <svg
                                        className="fill-current mr-2 text-indigo-600 w-4"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/>
                                    </svg>
                                    Giỏ hàng trống, click vào đây để tiếp tục mua hàng
                                </Link>
                            )}
                        </div>
                        <div
                            id="summary"
                            className="w-full px-8 py-10 bg-gray-200 col-span-12 lg:col-span-4"
                        >
                            <h1 className="font-semibold text-2xl border-b pb-8">
                                Thanh Toán
                            </h1>
                            <form>
                                <div className="bg-gray-100 dark:bg-gray-900">
                                    <div className="w-full max-w-3xl mx-auto p-6">

                                        <div className="mb-6">
                                            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
                                                Địa chỉ nhận hàng
                                            </h2>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label
                                                        htmlFor="email"
                                                        className="block text-gray-700 dark:text-white mb-1"
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="email"
                                                        name="email"
                                                        required
                                                        className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="phoneNumber"
                                                        className="block text-gray-700 dark:text-white mb-1"
                                                    >
                                                        Điện thoại
                                                    </label>
                                                    <input
                                                        required
                                                        type="text"
                                                        id="phoneNumber"
                                                        name="phoneNumber"
                                                        className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                                                        value={formData.phoneNumber}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="mt-4">
                                                <label
                                                    htmlFor="fullname"
                                                    className="block text-gray-700 dark:text-white mb-1"
                                                >
                                                    Họ và tên
                                                </label>
                                                <input
                                                    required
                                                    type="text"
                                                    id="fullname"
                                                    name="fullname"
                                                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                                                    value={formData.fullname}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="mt-4">
                                                <label
                                                    htmlFor="addressDetail"
                                                    className="block text-gray-700 dark:text-white mb-1"
                                                >
                                                    Địa chỉ chi tiết
                                                </label>
                                                <input
                                                    required
                                                    type="text"
                                                    id="addressDetail"
                                                    name="addressDetail"
                                                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                                                    value={formData.addressDetail}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="mt-4">
                                                <label
                                                    htmlFor="province"
                                                    className="block text-gray-700 dark:text-white mb-1"
                                                >
                                                    Tỉnh
                                                </label>
                                                <select
                                                    className="block w-36 text-sm font-medium transition duration-75 border border-gray-800 rounded-lg shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none"
                                                    name="province"
                                                    value={formData.province}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="">Chọn tỉnh</option>
                                                    {province.map((prov) => (
                                                        <option value={prov.name}>{prov.name}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 mt-4">
                                                <div>
                                                    <label
                                                        htmlFor="district"
                                                        className="block text-gray-700 dark:text-white mb-1"
                                                    >
                                                        Quận/huyện
                                                    </label>

                                                    <select
                                                        className="block w-full text-sm font-medium transition duration-75 border border-gray-800 rounded-lg shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none"
                                                        name="district"
                                                        value={formData.district}
                                                        required
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">Chọn quận/huyện</option>
                                                        {district.map((dis) => (
                                                            <option value={dis.name}>{dis.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="ward"
                                                        className="block text-gray-700 dark:text-white mb-1"
                                                    >
                                                        Xã
                                                    </label>
                                                    <input
                                                        required
                                                        type="text"
                                                        id="ward"
                                                        name="ward"
                                                        className="w-full rounded-lg border py-1.5 -mt-0.5 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                                                        value={formData.ward}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>


                                            <div>
                                                <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2 mt-6">
                                                    Phương thức thanh toán
                                                </h2>
                                                <div className="overflow-y-auto  min-h-[100px]">
                                                    <div className="block mb-4">
                                                        <label
                                                            className="flex bg-white text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
                                                            <input
                                                                required
                                                                type="radio"
                                                                name="paymentMethod"
                                                                value="Thanh toán khi nhận hàng"
                                                                onChange={handleChange}

                                                            />
                                                            <i className="pl-2">Thanh toán khi nhận hàng</i>
                                                        </label>
                                                    </div>

                                                </div>
                                            </div>
                                            <div>
                                                <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2 -mt-4">
                                                    Phương thức vận chuyển
                                                </h2>
                                                <div className="overflow-y-auto  min-h-[100px]">
                                                    <div className="block mb-4">
                                                        <label
                                                            className="flex bg-white text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
                                                            <input
                                                                required
                                                                type="radio"
                                                                name="shippingMethod"
                                                                value="Giao hàng nhanh"
                                                                onChange={handleChange}

                                                            />
                                                            <i className="pl-2">Giao hàng nhanh</i>
                                                        </label>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="-mt-4 mb-8">
                                                <label
                                                    htmlFor="promo"
                                                    className="font-semibold inline-block mb-3 text-sm"
                                                >
                                                    <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
                                                        Mã giảm giá
                                                    </h2>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="promo"
                                                    name="promo"
                                                    placeholder="Nhập mã giảm giá"
                                                    className="p-2 text-sm w-full"
                                                />
                                            </div>
                                            <button
                                                className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                                                Áp dụng
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t mt-8">
                                    <div className="flex font-semibold justify-between py-2 text-sm uppercase">
                                        <span>Tổng tiền</span>
                                        <span
                                            className="text-red-700 font-bold">{totalPayment.toLocaleString('vi-VN')}</span>
                                    </div>
                                    <hr className="border-gray-400 my-2"/>

                                    <div className="flex font-semibold justify-between py-2 text-sm uppercase">
                                        <span>Giảm giá</span>
                                        <span className="text-red-700 italic">- $100</span>
                                    </div>
                                    <div className="flex font-semibold justify-between py-2 text-sm uppercase">
                                        <span>Phí vận chuyển</span>
                                        <span className="text-red-700 italic">35.000</span>
                                    </div>
                                    <hr className="border-gray-400 my-2"/>

                                    <div className="flex font-semibold justify-between py-2 text-sm uppercase">
                                        <span>Thành tiền</span>
                                        <span className="text-red-700 font-bold">{(
                                            totalPayment + 35000
                                        ).toLocaleString('vi-VN')}</span>
                                    </div>
                                    <hr className="border-gray-400 my-2"/>

                                    <button
                                        className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full mt-6"
                                        onClick={handlePlaceOrder}
                                    >
                                        Đặt hàng
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    );
};

export default Cart;
