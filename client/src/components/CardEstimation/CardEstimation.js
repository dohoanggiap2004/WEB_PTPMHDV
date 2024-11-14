const CardEstimation = () => {
  return (
    <div className="w-full max-w-80 p-2 bg-white border border-gray-200 rounded-lg shadow-md sm:p-4 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
        Standard plan
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-2xl font-extrabold tracking-tight">1.543.000</span>
        <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
          /tháng
        </span>
      </div>
      <ul role="list" className="space-y-2 my-2">
        <li className="flex">
          <span className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 me-16">
            Gói trả góp
          </span>
          <span className="text-sm  font-normal leading-tight text-gray-500 dark:text-gray-400">
            0%
          </span>
        </li>
        <li className="flex">
          <span className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 me-7">
            Gói mua trả góp
          </span>
          <span className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400">
            11.490.000
          </span>
        </li>
        <li className="flex">
          <span className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 me-16">
            Trả trước
          </span>
          <span className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            20%(2.298.000)
          </span>
        </li>
        <li className="flex">
          <span className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 me-14">
            Chênh lệch
          </span>
          <span className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 ms-1">
            100.000
          </span>
        </li>
        <li className="flex">
          <span className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 me-20">
            Giấy tờ
          </span>
          <span className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 ms-1">
            CCCD/CMND
          </span>
        </li>
        <li className="flex">
          <span className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 me-16">
            Tổng tiền
          </span>
          <span className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 ms-1">
            11.590.000
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CardEstimation;
