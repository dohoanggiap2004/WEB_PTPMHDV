import React, { useState, useEffect } from "react";
import "./style.css";
import Layout from "../../layout/Layout";
import { useLocation } from "react-router-dom";
import CardEstimation from "../../components/CardEstimation/CardEstimation";
const Estimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    interestRate: "",
    term: "",
  });
  // const [financingOptions, setFinancingOptions] = useState([])
  const location = useLocation();
  const laptop = location.state;
  // const laptop = {
  //   laptop_id: 1,
  //   model: "Dell XPS 13",
  //   price: 1500,
  //   stock_quantity: 10,
  //   description: "Ultrabook with excellent performance",
  //   brand_id: 1,
  //   discount_id: 1,
  //   processor: "Intel Core i7",
  //   ram: "16GB",
  //   storage: "512GB SSD",
  //   gpu: "Intel Iris Plus",
  //   screen_size: 13.3,
  //   battery: "52Wh",
  //   weight: 1.2,
  //   os: "Windows 10",
  //   imageSrc: "/laptop.png",
  // };
  const handleClick = () => {
    console.log(formData);
    setIsOpen(true);
    // const getFinancingOptions = async () =>{
    //   try {
    //     const response = await axios.get('api/financing-options', {
    //           params:{
    //             ...formData
    //           }
    //     })
    //     console.log(response.data)
    //     setFinancingOptions(response.data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // getFinancingOptions()
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // useEffect(() => {
  //     const getFinancingOptions = async () =>{
  //       try {
  //         const response = await axios.get('api/financing-options', {
  //               params:{
  //                 ...formData
  //               }
  //         })
  //         console.log(response.data)
  //         setFinancingOptions(response.data)
  //       } catch (error) {
  //         console.log(error)
  //       }
  //     }
  //     getFinancingOptions()
  // }, [])
  // if (!Array.isArray(financingOptions)) {
  //   console.error('Expected financingOptions to be an array, but got:', financingOptions);
  //   return <div>No laptops available</div>;
  // }

  const financingOptions = [
    {
      company: "fecredit",
      price: 11990000,
      downPayment: 1199000,
      term: "9 tháng",
      monthlyInstallment: 1211000,
      interestRate: "0%",
      requiredDocuments: ["CMND/CCCD"],
      totalPayment: 12098000,
      priceDifference: 108000,
    },
    {
      company: "acs",
      price: 10990000,
      downPayment: 1099000,
      term: "9 tháng",
      monthlyInstallment: 1435000,
      interestRate: "5.94% / 3.3%",
      requiredDocuments: ["CMND/CCCD"],
      totalPayment: 14014000,
      priceDifference: 3024000,
    },
  ];

  return (
    <>
      <Layout>
        <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16 bg-white shadow-md rounded-lg mb-4 mt-24">
          <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Dự toán trả góp</h2>
            <p class="text-lg text-indigo-500 font-semibold mb-8">
              Chọn gói trả góp phù hợp nhất với bạn
            </p>
            {/* card product */}
            <div class="">
              <div class="flex gap-3 bg-white rounded-xl overflow-hidden items-center">
                <div class="relative w-28 h-28 flex-shrink-0">
                  <img
                    class="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                    loading="lazy"
                    src={laptop.imageSrc}
                  />
                </div>

                <div className="flex-grow truncate">
                  <div className="w-full flex justify-between items-center mb-3">
                    <h2 className="text-2xl leading-snug font-extrabold truncate mb-1 sm:mb-0">
                      {laptop.model}
                    </h2>

                    <div className="flex-shrink-0 flex items-center space-x-5">
                      <p className="text-red-600">100000</p>
                    </div>
                  </div>

                  <div className="flex items-start whitespace-normal">
                    <div className="max-w-md">
                      <p className="mb-2">
                        Lorem ipsum dolor sit amet, consecte adipiscing elit sed
                        do eiusmod tempor incididunt ut labore et dolore.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border bg-gray-400 mt-4 " />
          </div>

          {/* Gói nổi bật */}
          <div>
            <p className="text-lg font-semibold -mt-4">
              Các gói trả góp nổi bật
            </p>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              <CardEstimation />
              <CardEstimation />
              <CardEstimation />
              <CardEstimation />
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold mt-8 mb-8">
              Chọn gói trả góp phù hợp:
            </p>
            <div className="flex gap-8">
              <select
                className="block w-full text-sm font-medium transition duration-75 border border-gray-300 text-blue-400 rounded-lg shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none"
                name="interestRate"
                onChange={handleChange}
                value={formData.interestRate}
                required
              >
                <option value="" disabled hidden>
                  Chọn mức trả góp
                </option>
                <option value="10">10%</option>
                <option value="20">20%</option>
                <option value="30">30%</option>
              </select>

              <select
                className="block w-full text-sm font-medium transition duration-75 border border-gray-300 text-blue-400 rounded-lg shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none"
                name="term"
                onChange={handleChange}
                value={formData.term}
                required
              >
                <option value="" disabled hidden>
                  Chọn kỳ hạn
                </option>
                <option value="3">3 tháng</option>
                <option value="6">6 tháng</option>
                <option value="9">9 tháng</option>
                <option value="12">12 tháng</option>
              </select>
            </div>
            {isOpen && (
              <div className="container mx-auto flex flex-wrap bg-white mb-8 rounded-lg shadow-md">
                <div className="lg:w-1/4 mt-4 hidden lg:block">
                  <div className="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
                    <p className="bg-gray-100 text-gray-900 h-16 text-center px-4 flex items-center justify-start -mt-px">
                      Công ty
                    </p>
                    <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start bg-gray-200">
                      Giá mua trả góp
                    </p>
                    <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start bg-gray-100">
                      Số tiền trả trước
                    </p>
                    <p className=" text-gray-900 h-12 text-center px-4 flex items-center justify-start bg-gray-200">
                      Kỳ hạn
                    </p>
                    <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start bg-gray-100">
                      Góp mỗi tháng
                    </p>
                    <p className=" text-gray-900 h-12 text-center px-4 flex items-center justify-start bg-gray-200">
                      Lãi suất thực phẳng
                    </p>
                    <p className="text-gray-900 h-12 text-center px-4 flex items-center justify-start bg-gray-100">
                      Giấy tờ cần có
                    </p>
                    <p className=" text-gray-900 h-12 text-center px-4 flex items-center justify-start bg-gray-200">
                      Tổng tiền phải trả
                    </p>
                    <p className="bg-gray-100 text-gray-900 h-12 text-center px-4 flex items-center justify-start">
                      Chênh lệch với giá mua trả thẳng
                    </p>
                  </div>
                </div>

                {/* Hiển thị các công ty trả góp */}
                {financingOptions.length > 0 ? (
                  <div className="flex lg:w-3/4 mt-4 w-full flex-wrap border border-gray-300 rounded-lg">
                    {financingOptions.map((option) => (
                      <div className="lg:w-1/3 w-full lg:mt-px border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none ">
                        <p className="bg-gray-100 text-gray-600 h-16 text-center px-2 flex items-center -mt-px justify-center border-t border-gray-300">
                          {option.company}
                        </p>
                        {/* ram */}
                        <p className="text-gray-600 text-center h-12 flex items-center justify-center bg-gray-200">
                          {option.price}
                        </p>
                        {/* ổ cứng */}
                        <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                          {(option.price / 100) *
                            parseInt(formData.interestRate)}
                        </p>
                        {/* card đồ họa */}
                        <p className="h-12 text-gray-600 px-6 text-center leading-relaxed flex items-center justify-center bg-gray-200">
                          {formData.term}
                        </p>
                        {/* màn hình */}
                        <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                          {option.monthlyInstallment}
                        </p>
                        {/* pin */}
                        <p className="text-gray-600 text-center h-12 flex items-center justify-center bg-gray-200">
                          {option.interestRate}
                        </p>
                        {/* cân nặng */}
                        <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                          {option.requiredDocuments}
                        </p>
                        {/* hệ điều hành */}
                        <p className="text-gray-600 text-center h-12 flex items-center justify-center bg-gray-200">
                          {option.totalPayment}
                        </p>
                        <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                          {option.priceDifference}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-xl text-red-600 flex items-center mx-auto">
                    <p>Không tìm thấy gói trả góp phù hợp, vui lòng thử lại</p>
                  </div>
                )}
              </div>
            )}

            <div className="p-6 text-center border-gray-300">
              <button
                className="flex items-center ms-auto text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded"
                onClick={handleClick}
              >
                SO SÁNH
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Estimation;
