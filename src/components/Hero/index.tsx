import React from 'react';

const index = () => {
  return (
    <main>
      <div className="pt-40 sm:pt-16 lg:overflow-hidden lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="flex justify-between">
            <div className="px-4 max-w-md sm:px-6 sm:max-w-2xl lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-24">
                <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-700 sm:mt-5 lg:mt-6">
                  <span className="block">
                    Pass a job. <span className="block">Help a friend.</span>{' '}
                    <span className="block">Get a reward.</span>
                  </span>
                </h1>
                <p className="mt-3 max-w-sm text-base text-gray-600 sm:mt-5 lg:text-md">
                  PasaJob is the first long-chain referral-based job matching
                  platform in the Philippines that rewards you for connecting
                  businesses to the right candidates.
                </p>
                <div className="flex mt-8">
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
            </div>
            <div className="px-4 sm:px-6 lg:px-0">
              <img
                className="w-full h-[620px]"
                src="/assets/images/hero-panel-job-seekers.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default index;
