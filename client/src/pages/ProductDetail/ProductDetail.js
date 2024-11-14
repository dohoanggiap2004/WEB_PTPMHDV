import Layout from "../../layout/Layout";
import "./style.css";
import { useState } from "react";
import Collapse from "../../components/Collapse/Collapse";
import { Button } from "@headlessui/react";
import { Link, useParams,  } from "react-router-dom";
import { addToCart } from "../../services/cartService";
const ProductDetail = () => {
  const id = useParams();

  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  //call api get laptop by id
  // const [laptop, setLaptop] = useState('')
  // useEffect(() => {
  //     const getLaptop= async () =>{
  //       try {
  //         const response = await axios.get(`api/laptop/${id}`)
  //         console.log(response.data)
  //         setLaptop(response.data)
  //       } catch (error) {
  //         console.log(error)
  //       }
  //     }
  //     getLaptop()
  // }, [id])
  // if (!laptop) {
  //   console.error('Expected laptops to be an array, but got:', laptop);
  //   return <div>No laptops available</div>;
  // }
 
  const handleOpen1 = () => {
    setIsOpen2(false);
    setIsOpen1(!isOpen1); // Toggle only isOpen1
  };

  const handleOpen2 = () => {
    setIsOpen1(false);
    setIsOpen2(!isOpen2); // Toggle only isOpen2
  };

  const handleOpen3 = () => {
    setIsOpen3(true);
  };

  const laptop = {
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
  };
  const [mainImage, setMainImage] = useState(
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
  );

  const changeImage = (src) => {
    setMainImage(src);
  };

  const handleOpenChange = (openState) => {
    setIsOpen3(openState);
  };

  return (
    <>
      <Layout>
        <div className="bg-gray-100 mt-24 rounded-lg shadow-md mb-5">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap -mx-4">
              {/* Product Images */}
              <div className="w-full md:w-1/2 px-4 mb-8">
                <img
                  src={mainImage}
                  alt="Product"
                  className="w-full h-auto rounded-lg shadow-md mb-4"
                  id="mainImage"
                />
                <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                  <img
                    src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBobmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Thumbnail 1"
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onClick={() =>
                      changeImage(
                        "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBobmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                      )
                    }
                  />
                  <img
                    src="https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Thumbnail 2"
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onClick={() =>
                      changeImage(
                        "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                      )
                    }
                  />
                  <img
                    src="https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Thumbnail 3"
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onClick={() =>
                      changeImage(
                        "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                      )
                    }
                  />
                  <img
                    src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Thumbnail 4"
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onClick={() =>
                      changeImage(
                        "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                      )
                    }
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="w-full md:w-1/2 px-4">
                <h2 className="text-3xl font-bold mb-2">{laptop.model}</h2>
                <p className="text-gray-600 mb-4">SKU: WH1000XM4</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-red-600 mr-2">
                    {(laptop.price * 80) / 100}
                  </span>
                  <span className="text-gray-500 line-through">
                    {laptop.price}
                  </span>
                </div>
                {/*  Stars * */}
                {/* <div className="flex items-center mb-4">
              
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
            </div> */}
                <p className="text-gray-700 mb-6">
                  Experience premium sound quality and industry-leading noise
                  cancellation with these wireless headphones. Perfect for music
                  lovers and frequent travelers.
                </p>

                <div className="mb-6">
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    defaultValue="1"
                    className="w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>

                <div className="flex space-x-4 mb-6">
                  <button
                    className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => addToCart(laptop)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0 1.358-5.112C21.292 2.38 20.483 1.5 19.517 1.5H6.916c-.829 0-1.569.55-1.82 1.348l-1.4 4.436"
                      />
                    </svg>
                    Thêm vào giỏ
                  </button>
                  <button
                    onClick={handleOpen3}
                    className="bg-green-600 w-max flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12h-6m-3-3v6m-2.879-8.12l-3.88-3.88a3 3 0 1 1 4.243-4.243l3.88 3.88A5.5 5.5 0 1 0 5.5 8.5a5.52 5.52 0 0 0 4.12 1.88Z"
                      />
                    </svg>
                    <Link
                      to={{
                        pathname: `/estimation/${laptop.laptop_id}`,
                      }}
                      state={laptop} // Truyền object thông qua state
                    >
                      Dự toán trả góp
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16 bg-white shadow-md rounded-lg mb-4">
          <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
            <div className="flex gap-4 mx-auto">
              <button
                onClick={handleOpen1}
                className="flex me-8 items-center hover:bg-cyan-50 font-bold text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded"
              >
                <span>Thông số kỹ thuật</span>
              </button>

              <button
                onClick={handleOpen2}
                className="flex items-center hover:bg-cyan-50 font-bold text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded"
              >
                <span>Bài viết đánh giá</span>
              </button>
            </div>

            <div className="relative mb-4 mt-8">
              <img className="w-full" src={laptop.imageSrc} />
            </div>
            {isOpen1 && (
              <>
                <Collapse title={"Bộ xử lí"} spec={laptop.processor} />
                <Collapse title={"RAM"} spec={laptop.ram} />
                <Collapse title={"Ổ cứng"} spec={laptop.storage} />
                <Collapse title={"Card đồ họa"} spec={laptop.gpu} />
                <Collapse title={"Màn hình"} spec={laptop.screen_size} />
                <Collapse title={"Dung lượng pin"} spec={laptop.battery} />
                <Collapse title={"Cân nặng"} spec={laptop.weight} />
                <Collapse title={"Hệ điều hành"} spec={laptop.os} />
              </>
            )}

            {isOpen2 && <h1>dbfdfbd</h1>}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductDetail;
