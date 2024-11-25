import React, { useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function AutoScrollAchievements({slides}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className="bg-gradient-to-r from-blue-950 via-[#cf9742] to-[#565b24] p-2 sm:p-10">
      <div className="mt-20 w-10/12 mx-auto">
      <Slider {...settings}>
      {
        slides.map((x) => {
            return(
                <div className="text-white  mr-5 rounded-lg">
                    <div className="flex h-32 items-center justify-center">
                      <div className='rounded-full w-32 h-32 overflow-hidden'>
                        <img src={x.img} alt="" />
                      </div>
                    </div>
                    <div className="p-5 text-center items-center justify-center gap-4 flex flex-col">
                      <p className='font-bold'>{x.name}</p>
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

export default AutoScrollAchievements;