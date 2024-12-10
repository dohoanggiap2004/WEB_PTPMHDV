import {useState, useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import Cookies from "js-cookie";
import Cart from "../Cart/CartSvg.js";
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from "@headlessui/react";
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    LinkSlashIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    ChevronDownIcon,
    PhoneIcon,
    PlayCircleIcon,
    ComputerDesktopIcon,
} from "@heroicons/react/20/solid";
import UserAvatar from "../User/UserAvatar.js";
import {useDispatch, useSelector} from "react-redux";
import {getLaptopByModel2} from "../../store/actions/laptopAction";


const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const {isLoginUser} = useSelector((state) => state.auth.login);

    const [isSearchListVisible, setIsSearchListVisible] = useState(false); // Kiểm tra trạng thái hiển thị danh sách
                                                                           // tìm kiếm
    const searchBoxRef = useRef(null); // Tham chiếu tới phần tử chứa thanh tìm kiếm

    const handleClickLink = () => {
        setIsSearchListVisible(false);
    }

    // Thêm sự kiện click khi người dùng click ra ngoài
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
                setIsSearchListVisible(false); // Ẩn danh sách khi click ngoài
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside); // Dọn dẹp sự kiện khi component unmount
        };
    }, []);

    const products = [
        {
            name: "HP",
            description: "Get a better understanding of your traffic",
            href: "#",
            icon: ComputerDesktopIcon,
        },
        {
            name: "ASUS",
            description: "Speak directly to your customers",
            href: "#",
            icon: ComputerDesktopIcon,
        },
        {
            name: "DELL",
            description: "Your customers’ data will be safe and secure",
            href: "#",
            icon: ComputerDesktopIcon,
        },
        {
            name: "LENOVO",
            description: "Connect with third-party tools",
            href: "#",
            icon: ComputerDesktopIcon,
        },
        {
            name: "MSI",
            description: "Build strategic funnels that will convert",
            href: "#",
            icon: ComputerDesktopIcon,
        },
    ];
    const dispatch = useDispatch();
    const {laptopsSearch} = useSelector((state) => state.laptop);
    const handleSearch = (e) => {
        dispatch(getLaptopByModel2(e.target.value))
        setIsSearchListVisible(true); // Hiển thị danh sách khi có kết quả tìm kiếm
    }
    useEffect(() => {
        console.log('check laptops search', laptopsSearch);
    }, [laptopsSearch]);
    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-red-600 py-1">
            <nav
                aria-label="Global"
                className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8"
            >
                <div className="flex lg:flex-1">
                    <Link
                        to="/"
                        className="flex justify-center items-center -m-1.5 p-1.5"
                    >
                        <img alt="" src="/logo.png" className="lg:h-12 h-9 w-auto"/>
                    </Link>
                </div>

                {/* md open */}
                <div className="flex lg:hidden items-center justify-end w-full " ref={searchBoxRef}>
                    {/* Search Bar */}
                    <div className="relative border border-gray-200 rounded-md w-full flex-grow mx-2">
                        <input
                            type="text"
                            name='query'
                            onChange={handleSearch}
                            className="rounded-md text-md p-1.5 px-8 w-full"
                            placeholder="Bạn cần tìm gì"
                        />
                        <button type="submit" className="absolute right-6 top-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </button>
                        {/*list search*/}
                        {isSearchListVisible && (
                            <div className={'bg-white absolute top-full left-0 w-full  border' +
                                ' border-gray-200' +
                                ' rounded-lg shadow-lg mt-1 z-10 w-[500px] overflow-auto max-h-[500px]'}>
                                {laptopsSearch.map((laptop) => (
                                    <div key={laptop.laptopId} className={'m-4 flex items-center'}>
                                        <Link to={`/productdetail/${laptop.laptopId}`} onClick={handleClickLink}
                                              className={'flex'}>
                                            <img src={laptop.image} className={'object-cover h-20 w-20'}/>

                                            <div className={'flex flex-col justify-center ml-3'}>
                                                <h1 className={'block'}>{laptop.model}</h1>
                                                <div className={'flex'}>
                                                    <h1 className={'block text-red-700 font-semibold'}>{(
                                                        laptop.specialPrice && laptop.specialPrice !== 0
                                                            ? laptop.specialPrice
                                                            : laptop.price)?.toLocaleString('vi-VN')} VND</h1>
                                                    <h1 className={'block text-gray-400 ml-3 text-sm line-through' +
                                                        ' mt-2'}>{(
                                                        laptop.price
                                                    ).toLocaleString('vi-VN')} VNĐ</h1>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>

                        )}
                    </div>

                    {/* svg cart */}
                    <div className="px-2 py-2 bg-red-700 flex ms-1">
                        <Link to="/cart" className="flex items-center no-underline">
                            <Cart/>
                        </Link>
                    </div>

                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-10 w-10 text-white"/>
                    </button>
                </div>

                {/* navbar in lg screen */}
                <div className="hidden lg:flex lg:gap-x-8 flex-grow items-center justify-center">
                    <PopoverGroup className="lg:flex lg:gap-x-8">
                        <Popover className="relative">
                            <PopoverButton
                                className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-white w-36">
                                Thương hiệu
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="h-5 w-5 flex-none text-white"
                                />
                            </PopoverButton>

                            <PopoverPanel
                                transition
                                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div
                                                className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon
                                                    aria-hidden="true"
                                                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                                />
                                            </div>
                                            <div className="flex-auto">
                                                <a
                                                    href={item.href}
                                                    className="block font-semibold text-gray-900"
                                                >
                                                    {item.name}
                                                    <span className="absolute inset-0"/>
                                                </a>
                                                <p className="mt-1 text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </PopoverPanel>
                        </Popover>
                        <Popover className="relative">
                            <PopoverButton
                                className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-white w-36">
                                Dịch vụ
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="h-5 w-5 flex-none text-white"
                                />
                            </PopoverButton>

                            <PopoverPanel
                                transition
                                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="p-4">

                                    <Link to={'/comparison'}

                                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                    >
                                        <div
                                            className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"
                                                 className={'h-6 w-6'}>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M2 4h9v1H3v15h8v1H2zm10 19h1V2h-1zM8.283 10.283l-.566-.566L4.934 12.5l2.783 2.783.566-.566L6.566 13H11v-1H6.566zM14 12h4.08l-1.54-1.54.92-.92 2.96 2.96-2.96 2.96-.92-.92L18.08 13H14v8h9V4h-9z"></path>
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="flex-auto">
                                            <a

                                                className="block font-semibold text-gray-900"
                                            >
                                                SO SÁNH
                                                <span className="absolute inset-0"/>
                                            </a>
                                            <p className="mt-1 text-gray-600">Giúp bạn chọn ra gói trả góp phù hợp</p>
                                        </div>
                                    </Link>

                                    <Link to={'/suggestion'}

                                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                    >
                                        <div
                                            className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"
                                                 className={'h-6 w-6'}>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M2 4h9v1H3v15h8v1H2zm10 19h1V2h-1zM8.283 10.283l-.566-.566L4.934 12.5l2.783 2.783.566-.566L6.566 13H11v-1H6.566zM14 12h4.08l-1.54-1.54.92-.92 2.96 2.96-2.96 2.96-.92-.92L18.08 13H14v8h9V4h-9z"></path>
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="flex-auto">
                                            <a

                                                className="block font-semibold text-gray-900"
                                            >
                                                GỢI Ý
                                                <span className="absolute inset-0"/>
                                            </a>
                                            <p className="mt-1 text-gray-600">Giúp bạn tìm ra Laptop mong muốn</p>
                                        </div>
                                    </Link>
                                </div>

                            </PopoverPanel>
                        </Popover>

                    </PopoverGroup>

                    {/* Search Bar */}
                    <div className="relative border border-gray-200 rounded-lg w-full max-w-md flex-grow"
                         ref={searchBoxRef}>
                        <input
                            type="text"
                            name='query'
                            onChange={handleSearch}
                            className="rounded-md p-2 px-4 w-full"
                            placeholder="Bạn cần tìm gì"
                        />
                        <button type="submit" className="absolute right-6 top-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </button>
                        {/*list search*/}
                        {isSearchListVisible && (
                            <div className={'bg-white absolute top-full left-0 w-full  border' +
                                ' border-gray-200' +
                                ' rounded-lg shadow-lg mt-1 z-10 w-[500px] overflow-auto max-h-[500px]'}>
                                {laptopsSearch.map((laptop) => (
                                    <div key={laptop.laptopId} className={'m-4 flex items-center'}>
                                        <Link to={`/productdetail/${laptop.laptopId}`} onClick={handleClickLink}
                                              className={'flex'}>
                                            <img src={laptop.image} className={'object-cover h-20 w-20'}/>

                                            <div className={'flex flex-col justify-center ml-3'}>
                                                <h1 className={'block'}>{laptop.model}</h1>
                                                <div className={'flex'}>
                                                    <h1 className={'block text-red-700 font-semibold'}>{(
                                                        laptop.specialPrice && laptop.specialPrice !== 0
                                                            ? laptop.specialPrice
                                                            : laptop.price)?.toLocaleString('vi-VN')} VNĐ</h1>
                                                    <h1 className={'block text-gray-400 ml-3 text-sm line-through' +
                                                        ' mt-2'}>{(
                                                        laptop.price
                                                    ).toLocaleString('vi-VN')} VNĐ</h1>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link to="/cart" className="flex items-center no-underline">
                        <Cart/>
                        <p className="text-sm font-semibold leading-6 text-white ml-2">
                            Giỏ hàng
                        </p>
                    </Link>
                </div>

                {!isLoginUser ? (
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link
                            to="/login"
                            className="text-sm font-semibold leading-6 text-white no-underline"
                        >
                            Đăng nhập
                            <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                ) : (
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <UserAvatar/>
                    </div>
                )}
            </nav>

            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="lg:hidden"
            >
                <div className="fixed inset-0 z-10"/>
                <DialogPanel
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6"/>
                        </button>
                    </div>
                    <div className="mt-8 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {!isLoginUser ? (
                                    <div className="">
                                        <Link
                                            to="/login"
                                            className="no-underline -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Đăng nhập
                                        </Link>
                                    </div>
                                ) : (
                                    <UserAvatar/>
                                )}
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton
                                        className="no-underline group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Thương hiệu
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                                        />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...products].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="no-underline block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton
                                        className="no-underline group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Dịch vụ
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                                        />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">

                                        <DisclosureButton
                                            as="a"
                                            className="no-underline block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            <Link to={'/comparison'}>
                                                So sánh
                                            </Link>
                                        </DisclosureButton>

                                        <DisclosureButton
                                            as="a"
                                            className="no-underline block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            <Link to={'/suggestion'}>
                                                Gợi ý
                                            </Link>
                                        </DisclosureButton>

                                    </DisclosurePanel>
                                </Disclosure>
                                <Link
                                    to="/comparison"
                                    className="no-underline -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    So sánh
                                </Link>
                                <Link
                                    to="/about"
                                    className="no-underline -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Về chúng tôi
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
        ;
};

export default Navbar;
