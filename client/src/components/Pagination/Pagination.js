
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map((i) => i + 1);
  return (
    <>
      return (
      <div className="flex justify-center mt-4">
        <nav className="relative z-0 inline-flex rounded-md shadow-sm ms-28 sm:ms-0">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-2 py-1 sm:ps-3 sm:py-2 md:px-4 md:py-2 border border-gray-300 text-xs sm:text-sm md:text-base font-medium ${
                page === currentPage
                  ? "bg-gray-300 text-gray-700"
                  : "bg-white text-gray-600"
              } hover:bg-gray-200`}
            >
              {page}
            </button>
          ))}
        </nav>
      </div>
      );
    </>
  );
};

export default Pagination;
