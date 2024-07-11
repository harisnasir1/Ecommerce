import React, { useEffect, useState } from "react";
import { All_products, Getall_Categories,Getfeaturedproducts } from "../Utils/apiroutes";
import TrendingBox from "../Components/TrendingBox";
import axios, { all } from "axios";

const Trending_Products = ({trendingproducts}) => {
   

    useEffect(()=>{
     console.log(trendingproducts);
    },[])

    
    const scroll_right = () => {
      let slider = document.getElementById("scrol");
      slider.scrollLeft += 500;
    };
  
    const scroll_left = () => {
      let slider = document.getElementById("scrol");
      slider.scrollLeft -= 500;
    };
  
    return (
      <div className="bg-blck mt-5 h-[430px] w-[100vw] overflow-hidden">
        <div className="text-4xl font-bold mt-5 flex justify-start ml-44 capitalize ">
          Trending Products
        </div>
        <div className="w-full flex justify-center items-center h-full p-2">
          <div className="flex w-[5%] h-full items-center justify-end">
            <button onClick={scroll_left}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
            </button>
          </div>
          <div
            id="scrol"
            className="w-[90%] flex justify-start h-[100%] bg-blck overflow-x-auto text-base gap-5 mt-5 no-scrollbar   scroll-smooth"
          >
            {trendingproducts?trendingproducts.map((data, index) => (
              <TrendingBox key={index} {...data} />
            )):""}
          </div>
          <div className="flex w-[5%] h-full justify-start">
            <button onClick={scroll_right}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };
export default Trending_Products