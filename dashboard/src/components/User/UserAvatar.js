import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConfirmModal from "../Admin/Modal/ConfirmModal";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/actions/authAction.js";
const UserAvatar = ({ handleLogOut }) => {
  const [isLogout, setIsLogout] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleSelected = (value) => {
    setIsLogout(value);
  };
  // Hàm để xử lý đăng xuất
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (isLogout) {
      handleLogout();
    }
  }, [isLogout]);

  return (
    <>
      <div>
        <button
            type="button"
            className="hidden lg:flex relative rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            id="user-menu-button"
            aria-expanded={menuOpen}
            aria-haspopup="true"
            onClick={toggleMenu}
        >
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">Open user menu</span>
          <svg viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#000000" className={'h-8 w-8 rounded-full bg-white'}>
            <g id="SVGRepo_iconCarrier">
              <defs>
              </defs>
              <circle className="cls-1" cx="12" cy="7.25" r="5.73"></circle>
              <path className="cls-1"
                    d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05"></path>
            </g>
          </svg>
        </button>

        {/* link to user profile when clicking in md sm screen */}
        <Link to={"/user-profile/1"}>
          <button
              type="button"
              className="flex lg:hidden relative rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded={menuOpen}
              aria-haspopup="true"
              onClick={toggleMenu}
          >
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">Open user menu</span>
            <svg viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#000000"
                 className={'h-8 w-8 rounded-full bg-white'}>
              <g id="SVGRepo_iconCarrier">
                <defs>
                </defs>
                <circle className="cls-1" cx="12" cy="7.25" r="5.73"></circle>
                <path className="cls-1"
                      d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05"></path>
              </g>
            </svg>
          </button>
        </Link>
        {menuOpen && (
            <div
                className="absolute hidden lg:block mt-2 w-48 right-0 origin-top-right rounded-md bg-white  py-1 shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
            >
              <Link
                  to={"/user-profile/1"}
                  className="block px-4 py-2 text-sm text-yellow-600 hover:underline"
                  role="menuitem"
              id="user-menu-item-0"
            >
              Thông tin tài khoản
            </Link>
            <div>
              <a
                onClick={toggleModal}
                href="#"
                className="block px-4 py-2 text-sm text-yellow-600 hover:underline"
                role="menuitem"
                id="user-menu-item-2"
              >
                Đăng xuất
              </a>

              <ConfirmModal
                isOpen={isModalOpen}
                toggleModal={toggleModal}
                handleSelected={handleSelected}
                confirmText="Bạn có chắc chắn muốn đăng xuất?"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserAvatar;
