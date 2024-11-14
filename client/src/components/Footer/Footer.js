const Footer = () => {
  return (
    <>
      <hr className="text-gray-600"></hr>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Tổng đài hỗ trợ
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 no-underline">
                  <a
                    href="#"
                    className="hover:underline hover:text-gray-600 text-gray-600 dark:hover:text-gray-300 no-underline"
                  >
                    Gọi mua: 0988 555 666 (8h - 21h)
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline hover:text-gray-600 text-gray-600 dark:hover:text-gray-300 no-underline"
                  >
                    Khiếu nại: 0988 666 777 (8h - 21h)
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline hover:text-gray-600 text-gray-600 dark:hover:text-gray-300 no-underline"
                  >
                    Bảo hành: 0988 777 888 (8h - 21h)
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Về công ty
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline hover:text-gray-600 text-gray-600 dark:hover:text-gray-300 no-underline"
                  >
                    Giới thiệu công ty
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline hover:text-gray-600 text-gray-600 dark:hover:text-gray-300 no-underline"
                  >
                    Tuyển dụng
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline hover:text-gray-600 text-gray-600 dark:hover:text-gray-300 no-underline"
                  >
                    Gửi góp ý, khiếu nại
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Thông tin khác
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline hover:text-gray-600 text-gray-600 dark:hover:text-gray-300 no-underline"
                  >
                    Chính sách riêng tư
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline hover:text-gray-600 text-gray-600 dark:hover:text-gray-300 no-underline"
                  >
                    Chính sách vận chuyển
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline hover:text-gray-600 text-gray-600 dark:hover:text-gray-300 no-underline"
                  >
                    Chính sách bảo hành
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Liên hệ
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline hover:text-gray-600 text-gray-600 dark:hover:text-gray-300 no-underline"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline hover:text-gray-600 text-gray-600 dark:hover:text-gray-300 no-underline"
                  >
                    Zalo
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline hover:text-gray-600 text-gray-600 dark:hover:text-gray-300 no-underline"
                  >
                    Tiktok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="px-4 py-6 bg-gray-100 w-full  dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center mx-auto">
          © 2018. Công ty cổ phần HAUI. Địa chỉ: Phường Minh Khai - Quận Bắc Từ
          Liêm - Hà Nội. Email: haui@gmail.com. SDT: 0988 888 888
        </span>
      </div>
    </>
  );
};

export default Footer;
