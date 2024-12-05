import React, {useState} from "react";

const Pagination = ({totalPages, currentPage, onPageChange}) => {
    const [visiblePages, setVisiblePages] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const handlePageClick = (page) => {
        onPageChange(page);

        const visiblePageCount = 9; // Số lượng trang hiển thị cố định
        const halfVisible = Math.floor(visiblePageCount / 2); // Phần giữa danh sách

        if (page > halfVisible && page <= totalPages - halfVisible) {
            // Trang ở giữa, căn chỉnh sao cho trang hiện tại nằm ở giữa danh sách
            const newVisiblePages = Array.from(
                {length: visiblePageCount},
                (_, i) => page - halfVisible + i
            );
            setVisiblePages(newVisiblePages);
        } else if (page <= halfVisible) {
            // Trang nằm ở đầu, hiển thị từ 1 đến `visiblePageCount`
            const newVisiblePages = Array.from(
                {length: visiblePageCount},
                (_, i) => i + 1
            );
            setVisiblePages(newVisiblePages);
        } else if (page > totalPages - halfVisible) {
            // Trang nằm ở cuối, hiển thị từ `totalPages - visiblePageCount + 1` đến `totalPages`
            const newVisiblePages = Array.from(
                {length: visiblePageCount},
                (_, i) => totalPages - visiblePageCount + 1 + i
            );
            setVisiblePages(newVisiblePages);
        }
    };

    return (
        <div className="flex justify-center mb-4">
            {/* Hiển thị trang đầu và dấu `...` nếu cần */}
            {visiblePages[0] > 1 && (
                <>
                    <button
                        onClick={() => handlePageClick(1)}
                        className={`px-2 py-1 sm:px-3 md:px-4 border border-gray-300 text-xs sm:text-sm md:text-base font-medium mx-1 mb-4 ${
                            currentPage === 1 ? "bg-gray-300 text-gray-700" : "bg-white text-gray-600"
                        } hover:bg-gray-200`}
                    >
                        1
                    </button>

                </>
            )}

            {visiblePages[0] > 2 && (
                <>
                    <span className="flex mx-1">
                    <p className="mx-1">.</p>
                    <p className="mx-1">.</p>
                    <p className="mx-1">.</p>
                </span>
                </>
            )}

            {/* Hiển thị các trang hiện tại */}
            {visiblePages.map((page) => (
                <button
                    key={page} // Sửa lỗi thiếu key
                    onClick={() => handlePageClick(page)}
                    className={`px-2 py-1 sm:px-3 md:px-4 border border-gray-300 text-xs sm:text-sm md:text-base font-medium mx-1 mb-4 ${
                        page === currentPage ? "bg-gray-300 text-gray-700" : "bg-white text-gray-600"
                    } hover:bg-gray-200`}
                >
                    {page}
                </button>
            ))}

            {/* Hiển thị trang cuối và dấu `...` nếu cần */}
            {visiblePages[visiblePages.length - 1] < totalPages && (
                <>
                <span className="flex mx-1">
                    <p className="mx-1">.</p>
                    <p className="mx-1">.</p>
                    <p className="mx-1">.</p>
                </span>
                    <button
                        onClick={() => handlePageClick(totalPages)}
                        className={`px-2 py-1 sm:px-3 md:px-4 border border-gray-300 text-xs sm:text-sm md:text-base font-medium mx-1 mb-4 ${
                            currentPage === totalPages ? "bg-gray-300 text-gray-700" : "bg-white text-gray-600"
                        } hover:bg-gray-200`}
                    >
                        {totalPages}
                    </button>
                </>
            )}
        </div>
    );
}

export default Pagination;
