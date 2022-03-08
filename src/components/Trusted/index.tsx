import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function SampleNextArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      style={{ ...style }}
      onClick={onClick}
      className="absolute top-1/2 -right-8 -translate-y-1/2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      style={{ ...style }}
      onClick={onClick}
      className="absolute top-1/2 -left-8 -translate-y-1/2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const index = () => {
  return (
    <section className="bg-gray-50 ">
      <div className="py-16 px-4 mx-auto max-w-7xl border-t lg:py-20">
        <div className=" mb-8 text-base font-medium text-center text-gray-900 capitalize">
          Trusted By
        </div>
        <div className="relative">
          <Slider {...settings}>
            <div>
              <div className="flex flex-col items-center p-3 mx-2 space-x-4 bg-white rounded-md border lg:space-x-6">
                <div className="flex">
                  <img
                    className="w-24 h-24 lg:w-32 lg:h-32"
                    src="/assets/images/thumbnails/client-logo-upskill_medium.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center p-3 mx-2 space-x-4 bg-white rounded-md border lg:space-x-6">
                <div className="flex">
                  <img
                    className="w-24 h-24 lg:w-32 lg:h-32"
                    src="/assets/images/thumbnails/client-logo-upskill_medium.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center p-3 mx-2 space-x-4 bg-white rounded-md border lg:space-x-6">
                <div className="flex">
                  <img
                    className="w-24 h-24 lg:w-32 lg:h-32"
                    src="/assets/images/thumbnails/client-logo-upskill_medium.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center p-3 mx-2 space-x-4 bg-white rounded-md border lg:space-x-6">
                <div className="flex">
                  <img
                    className="w-24 h-24 lg:w-32 lg:h-32"
                    src="/assets/images/thumbnails/client-logo-upskill_medium.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center p-3 mx-2 space-x-4 bg-white rounded-md border lg:space-x-6">
                <div className="flex">
                  <img
                    className="w-24 h-24 lg:w-32 lg:h-32"
                    src="/assets/images/thumbnails/client-logo-upskill_medium.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center p-3 mx-2 space-x-4 bg-white rounded-md border lg:space-x-6">
                <div className="flex">
                  <img
                    className="w-24 h-24 lg:w-32 lg:h-32"
                    src="/assets/images/thumbnails/client-logo-upskill_medium.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center p-3 mx-2 space-x-4 bg-white rounded-md border lg:space-x-6">
                <div className="flex">
                  <img
                    className="w-24 h-24 lg:w-32 lg:h-32"
                    src="/assets/images/thumbnails/client-logo-upskill_medium.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default index;
