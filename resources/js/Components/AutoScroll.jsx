import React, { useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function AutoScroll({slides}) {
  const scrollRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (scrollRef.current) {
  //       scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }, 5000); // Adjust the interval as needed

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <div className="w-3/4 m-auto">
      {/* Your scrollable content here */}
      <div className="mt-20">
      <Slider {...settings}>
      {
        slides.map((x) => {
            return(
                <div className="text-[#121d30] mr-5 bg-white rounded-lg">
                    <div className="flex h-32 items-center justify-center">
                      <div className='rounded-full w-24 h-24 overflow-hidden'>
                        <img src={x.img} alt="" />
                      </div>
                    </div>
                    <div className="p-5 text-center items-center justify-center gap-4 flex flex-col">
                      <p>{x.name}</p>
                      <p className='text-sm'>{x.review}</p>
                    </div>
                </div>
            )
        })
      }


      </Slider>
      </div>
    </div>
  );
}

export default AutoScroll;