import React from 'react';

const index = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #FCB075, #ED5E64)',
      }}
      className="px-4 mx-auto sm:px-6 "
    >
      <div className="items-center mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
          <h2>
            <span className="block mt-1 text-4xl font-medium tracking-tight ">
              <span className="block text-white">
                Start applying or{' '}
                <span className="block">referring today.</span>
              </span>
            </span>
          </h2>

          <div className="flex mt-12">
            <img
              className="mr-4 max-h-[40px]"
              src="/assets/images/download-from-app-store.svg"
              alt=""
            />
            <img
              className="max-h-[40px]"
              src="/assets/images/download-from-google-play.svg"
              alt=""
            />
          </div>
        </div>
        <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:flex lg:col-span-6 lg:items-center lg:mx-0 lg:mt-0 lg:max-w-none">
          <div className="relative pt-16 mx-auto w-full rounded-lg lg:max-w-md">
            <img
              className="w-auto max-h-96"
              src="/assets/images/app-job-seekers.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
