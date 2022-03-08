export default function Example() {
  return (
    <div className="py-16 bg-white lg:py-20">
      <div className="px-4 mx-auto max-w-xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="sr-only">Here&apos;s how it works</h2>
        <h2 className="mb-12 text-4xl font-bold text-gray-700">
          Here&apos;s how it works
        </h2>
        <dl className="space-y-10 text-center lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0">
          <div className="p-8 rounded-lg border border-gray-200">
            <dt>
              <div className="mx-auto w-20 h-20 text-white ">
                <img className="" src="/assets/images/icon-cv.png" alt="" />
              </div>
              <p className="mt-5 text-lg font-medium leading-6 text-gray-900">
                Job opportunities
              </p>
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              Access jobs posted by companies from different industries that are
              hiring now.
            </dd>
          </div>
          <div className="p-8 rounded-lg border border-gray-200">
            <dt>
              <div className="mx-auto w-20 h-20 text-white ">
                <img className="" src="/assets/images/icon-reward.png" alt="" />
              </div>
              <p className="mt-5 text-lg font-medium leading-6 text-gray-900">
                Easy rewards
              </p>
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              Earn when a referral gets hired or by referring and sharing jobs
              to your contacts.
            </dd>
          </div>
          <div className="p-8 rounded-lg border border-gray-200">
            <dt>
              <div className="mx-auto w-20 h-20 text-white ">
                <img
                  className=""
                  src="/assets/images/icon-candidate.png"
                  alt=""
                />
              </div>
              <p className="mt-5 text-lg font-medium leading-6 text-gray-900">
                Open to everyone
              </p>
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              Get rewarded for the strength of your network, no matter what your
              work experience is.
            </dd>
          </div>
          <div
            style={{
              background: 'linear-gradient(to bottom, #21CCAB, #49C6E5)',
            }}
            className="p-8 rounded-lg "
          >
            <dt>
              <div className="mx-auto w-20 h-20 text-white ">
                <img
                  className=""
                  src="/assets/images/icon-for-employers.png"
                  alt=""
                />
              </div>
              <p className="mt-5 text-lg font-medium leading-6 text-white">
                Connect with quality candidates
              </p>
            </dt>
            <dd className="mt-6 text-base text-white">Join as an employer</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
