import React from 'react'
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCase } from '../../reducs/feature/card/cardslices';

//image, quantity, price, desc, name,id,qty
export default function ProductCard({ slug, title, img, about, date, description }) {
  // const dispath = useDispatch();
  // const handleAddTocard = () => {
  //   dispath(addToCase({ slug, title, img, about }));
  // };
  return (
    // <>

    //   <Card className="w-[200] has-[250] ">
    //     {/* <Link to={`product/${id}`}>
    //       <img src={img} alt="w-[200] has-[250]" className="" />
    //     </Link> */}

    //     <a href="#">
    //       <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
    //         {title}
    //       </h5>
    //     </a>
    //     <div className="mb-5 mt-2.5 flex items-center">
    //       <svg
    //         className="h-5 w-5 text-yellow-300"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    //       </svg>
    //       <svg
    //         className="h-5 w-5 text-yellow-300"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    //       </svg>
    //       <svg
    //         className="h-5 w-5 text-yellow-300"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    //       </svg>
    //       <svg
    //         className="h-5 w-5 text-yellow-300"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    //       </svg>
    //       <svg
    //         className="h-5 w-5 text-yellow-300"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    //       </svg>
    //       <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
    //         5.0
    //       </span>
    //     </div>
    //     <div className="flex items-center justify-between">
    //       <span className="text-3xl font-bold text-gray-900 dark:text-white">
    //         ${slug}
    //       </span>
    //       <span className="text-3xl font-bold text-gray-900 dark:text-white">
    //         {/* {quantity} */}
    //       </span>
    //       <button
    //         onClick={() => handleAddTocard()}
    //         className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
    //       >
    //         ADD
    //       </button>
    //     </div>
    //   </Card>
    // </>

    <>
      <section className="flex justify-center">
        <div className="w-full sm:w-[640px] md:w-[758px] lg:w-[900px] xl:w-[1000px] min-h-5 flex-1 p-0 group">
          <div className="p-0 flex  mt-5  rounded-lg drop-shadow-2xl  bg-slate-50">
            <div className="flex rounded-lg flex-col md:flex-row">
              <div className=" w-full h-full  md:w-[400px] md:h-[350px] lg:w-[300px] xl:w-[400px] xl:h-[300px] overflow-hidden ">
                <img
                  src={
                    img ||
                    "https://www.creativefabrica.com/wp-content/uploads/2019/02/Loading-Icon-by-Kanggraphic-27.jpg"
                  }
                  alt=""
                  className="h-full w-[400px] rounded-lg hover:rounded-lg transition-all duration-300  object-cover group-hover:scale-110"
                />
              </div>

              <div className="p-5 sm:px-7 w-full md:w-[350px] md:px-7 lg:w-[450px] lg:px-10 xl:w-[550px] xl:px-12">
                <h5 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-5">
                  {title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 mb-3 sm:mb-5">
                  {about}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400 mb-3 sm:mb-5">
                  {date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
