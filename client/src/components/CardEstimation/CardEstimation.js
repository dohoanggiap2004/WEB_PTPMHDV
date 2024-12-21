const CardEstimation = ({installments}) => {
    return (
        <>
            {installments.map(installment => (
                <>
                    <div
                        className="w-full max-w-80 p-2 bg-white border border-gray-200 rounded-lg shadow-md sm:p-4 dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                            {`${installment.company} (Kỳ hạn ${installment.term})`}
                        </h5>
                        <div className="flex items-baseline text-gray-900 dark:text-white">
                            <span className="text-2xl font-extrabold tracking-tight">{installment.monthlyInstallment.toLocaleString('vi-VN')}</span>
                            <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
          /tháng
        </span>
                        </div>
                        <ul role="list" className="space-y-2 my-2">
                            <li className="flex">
          <span className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 me-16">
            Gói trả góp
          </span>
                                <span
                                    className="text-sm  font-normal leading-tight text-gray-500 dark:text-gray-400">
            {installment.flatInterestRate}
          </span>
                            </li>
                            <li className="flex">
          <span className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 me-7">
            Gói mua trả góp
          </span>
                                <span
                                    className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400">
            {installment.installmentPrice.toLocaleString('vi-VN')}
          </span>
                            </li>
                            <li className="flex">
          <span className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 me-16">
            Trả trước
          </span>
                                <span
                                    className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            {installment.downPayment}
          </span>
                            </li>
                            <li className="flex">
          <span className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 me-14">
            Chênh lệch
          </span>
                                <span
                                    className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 ms-1">
            {(installment.totalPayment - installment.installmentPrice).toLocaleString('vi-VN')}
          </span>
                            </li>
                            <li className="flex">
          <span className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 me-20">
            Giấy tờ
          </span>
                                <span
                                    className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 ms-1">
            {installment.requiredDocuments}
          </span>
                            </li>
                            <li className="flex">
          <span className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 me-16">
            Tổng tiền
          </span>
                                <span
                                    className="text-sm font-normal leading-tight text-gray-500 dark:text-gray-400 ms-1">
            {installment.totalPayment.toLocaleString('vi-VN')}
          </span>
                            </li>
                        </ul>
                    </div>
                </>
            ))}

        </>
    );
};

export default CardEstimation;
