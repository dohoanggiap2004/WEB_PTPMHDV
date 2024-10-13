import Layout from "../../layout/Layout";
import "./style.css";
import "../../components//Carousel/Carousel";
import Carousel from "../../components//Carousel/Carousel";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from '../../config/axiosConfig'
const Home = () => {
  // const [laptops, setLaptops] = useState([])

  const laptops = [
    {
      laptop_id: 1,
      model: "Dell XPS 13",
      price: 1500,
      stock_quantity: 10,
      description: "Ultrabook with excellent performance",
      brand_id: 1,
      discount_id: 1,
      processor: "Intel Core i7",
      ram: "16GB",
      storage: "512GB SSD",
      gpu: "Intel Iris Plus",
      screen_size: 13.3,
      battery: "52Wh",
      weight: 1.2,
      os: "Windows 10",
      imageSrc: "/laptop.png",
    },
    {
      laptop_id: 2,
      model: "MacBook Pro 16",
      price: 2500,
      stock_quantity: 5,
      description: "High performance for professional users",
      brand_id: 2,
      discount_id: 2,
      processor: "Apple M1 Pro",
      ram: "32GB",
      storage: "1TB SSD",
      gpu: "Apple M1 GPU",
      screen_size: 16.0,
      battery: "100Wh",
      weight: 2.0,
      os: "macOS",
      imageSrc: "/laptop.png",
    },
    {
      laptop_id: 3,
      model: "Asus ROG Zephyrus G14",
      price: 1800,
      stock_quantity: 8,
      description: "Gaming laptop with compact design",
      brand_id: 3,
      discount_id: 1,
      processor: "AMD Ryzen 9",
      ram: "16GB",
      storage: "1TB SSD",
      gpu: "NVIDIA RTX 3060",
      screen_size: 14.0,
      battery: "76Wh",
      weight: 1.7,
      os: "Windows 11",
      imageSrc: "/laptop.png",
    },
    {
      laptop_id: 4,
      model: "HP Spectre x360",
      price: 1700,
      stock_quantity: 6,
      description: "Convertible laptop with premium design",
      brand_id: 4,
      discount_id: 3,
      processor: "Intel Core i5",
      ram: "16GB",
      storage: "512GB SSD",
      gpu: "Intel Iris Xe",
      screen_size: 13.5,
      battery: "60Wh",
      weight: 1.3,
      os: "Windows 10",
      imageSrc: "/laptop.png",
    },
    {
      laptop_id: 4,
      model: "HP Spectre x360",
      price: 1700,
      stock_quantity: 6,
      description: "Convertible laptop with premium design",
      brand_id: 4,
      discount_id: 3,
      processor: "Intel Core i5",
      ram: "16GB",
      storage: "512GB SSD",
      gpu: "Intel Iris Xe",
      screen_size: 13.5,
      battery: "60Wh",
      weight: 1.3,
      os: "Windows 10",
      imageSrc: "/laptop.png",
    },
    {
      laptop_id: 4,
      model: "HP Spectre x360",
      price: 1700,
      stock_quantity: 6,
      description: "Convertible laptop with premium design",
      brand_id: 4,
      discount_id: 3,
      processor: "Intel Core i5",
      ram: "16GB",
      storage: "512GB SSD",
      gpu: "Intel Iris Xe",
      screen_size: 13.5,
      battery: "60Wh",
      weight: 1.3,
      os: "Windows 10",
      imageSrc: "/laptop.png",
    },
  ];
  // useEffect(() => {
  //     const getData = async () =>{
  //       try {
  //         const response = await axios.get('/laptops')
  //         console.log(response.data)
  //         setLaptops(response.data)
  //       } catch (error) {
  //         console.log(error)
  //       }
  //     }
  //     getData()
  // }, [])
  // if (!Array.isArray(laptops)) {
  //   console.error('Expected laptops to be an array, but got:', laptops);
  //   return <div>No laptops available</div>;
  // }
  return (
    <>
      <Layout>
        <Carousel />
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md mt-4 mb-4">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="flex-1">
              <div className="flex flex-wrap justify-start">
                <button className=" rounded-xl text-xl border border-gray-950 text-center self-center px-10 py-2 my-2 mx-2">
                  Hãng<i className="fab fa-github ml-1"></i>
                </button>
                <button className="bg-gray-200 rounded-xl hover:bg-cyan-200 text-blue-500 text-lg text-center self-center px-10 py-2 my-2 mx-2">
                  DELL<i className="fab fa-github ml-1"></i>
                </button>
                <button className="bg-gray-200 rounded-xl hover:bg-cyan-200 text-blue-500 text-lg text-center self-center px-10 py-2 my-2 mx-2">
                  ASUS<i className="fab fa-github ml-1"></i>
                </button>
                <button className="bg-gray-200 rounded-xl hover:bg-cyan-200 text-blue-500 text-lg text-center self-center px-10 py-2 my-2 mx-2">
                  LENOVO<i className="fab fa-github ml-1"></i>
                </button>
                <button className="bg-gray-200 rounded-xl hover:bg-cyan-200 text-blue-500 text-lg text-center self-center px-10 py-2 my-2 mx-2">
                  HP<i className="fab fa-github ml-1"></i>
                </button>
                <button className="bg-gray-200 rounded-xl hover:bg-cyan-200 text-blue-500 text-lg text-center self-center px-10 py-2 my-2 mx-2">
                  MSI<i className="fab fa-github ml-1"></i>
                </button>
                <button className="bg-gray-200 rounded-xl hover:bg-cyan-200 text-blue-500 text-lg text-center self-center px-10 py-2 my-2 mx-2">
                  Github<i className="fab fa-github ml-1"></i>
                </button>
                <button className="bg-gray-200 rounded-xl hover:bg-cyan-200 text-blue-500 text-lg text-center self-center px-10 py-2 my-2 mx-2">
                  Github<i className="fab fa-github ml-1"></i>
                </button>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {laptops.map((laptop) => (
                <div key={laptop.laptop_id} className="group relative border-2 dark:bg-gray-800 rounded-lg shadow-md p-2">
                  <Link to={`/productdetail/${laptop.laptop_id}`}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={laptop.imageSrc}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a className="text-gray-700 no-underline">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {laptop.model}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 line-through">
                          {laptop.price}
                        </p>
                        <p className="text-lg mb-3 font-medium text-red-600">
                          {laptop.price}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <button
                    type=""
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-700 dark:border-transparent dark:hover:bg-indigo-600 dark:focus:ring-indigo-400 dark:focus:ring-offset-2 disabled:cursor-wait disabled:opacity-50"
                  >
                    Thêm vào giỏ hàng
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
