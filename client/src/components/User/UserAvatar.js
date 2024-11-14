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
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
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
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </button>
        </Link>
        {menuOpen && (
          <div
            className="hidden lg:block absolute mt-2 right-0 w-48 xl:right-40 origin-top-right rounded-md bg-white  py-1 shadow-lg ring-1 ring-black ring-opacity-5 z-50"
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
