import React, { useEffect, useState } from "react";
import { All_products, Getall_Categories } from "../Utils/apiroutes";
import CategoryBox from "../Components/CategoryBox";
import axios, { all } from "axios";

const Categories_home = () => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    axios
      .get(Getall_Categories)
      .then((res) => {
        setcategories(res.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const scroll_right = () => {
    let slider = document.getElementById("scroller");
    slider.scrollLeft += 500;
  };

  const scroll_left = () => {
    let slider = document.getElementById("scroller");
    slider.scrollLeft -= 500;
  };

  return (
    <div className="bg-blck mt-5 h-[430px] w-[100vw] overflow-hidden">
      <div className="text-4xl font-bold mt-5 flex justify-start ml-44 capitalize ">
        Categories
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
          id="scroller"
          className="w-[90%] flex justify-start h-[100%] bg-blck overflow-x-auto text-base gap-5 mt-5 no-scrollbar   scroll-smooth"
        >
          {categories.map((data, index) => data.Img &&!data.Parent&& (
            <CategoryBox key={index} {...data}  />
          ))}
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

export default Categories_home;
