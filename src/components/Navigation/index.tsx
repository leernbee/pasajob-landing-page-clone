/* This example requires Tailwind CSS v2.0+ */

export default function Navigation() {
  return (
    <div className="fixed z-10 px-4 w-full text-center bg-white border-b-2 border-gray-100 sm:px-6">
      <div className="flex py-6 mx-auto max-w-screen-2xl ">
        <div className="justify-start">
          <a href="#">
            <span className="sr-only">PasaJob</span>
            <svg
              className="w-[150px] max-h-[30px]"
              id="logoMasthead"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="1190px"
              height="240px"
              viewBox="0 0 1190 240"
              enableBackground="new 0 0 1190 240"
              xmlSpace="preserve"
            >
              <path
                className="fill-[#60aca3]"
                d="M62.4,55.6L62.4,55.6H40.3C23.9,55.7,10.8,69,10.8,85.3l0,0l0,0l0.1,18.5 c15.6-10.7,36.2-10.7,51.7,0.1V92c0-6.5,5.2-11.8,11.8-11.8l22.2-0.1c6.8,0,12.3-5.6,12.3-12.4l0,0c0-6.8-5.6-12.3-12.4-12.3l0,0 L62.4,55.6z M11.2,178.6l0.7,32.3c0.1,16.2,13.2,29.2,29.4,29.2h0.3c12.3-0.2,22.1-10.3,22-22.6l-0.8-39.4 C47.4,189,26.9,189.2,11.2,178.6z M31.6,104.8C51.6,102,70.2,116,73,136s-11.2,38.6-31.2,41.4S3.2,166.2,0.4,146.1 S11.6,107.6,31.6,104.8z"
              ></path>
              <path
                className="fill-[#ed5e64]"
                d="M127.5,183.9L127.5,183.9h22.1c16.3-0.1,29.5-13.3,29.4-29.6l-0.1-18.5 c-15.6,10.7-36.2,10.7-51.7-0.1v11.9c0,6.5-5.2,11.8-11.8,11.8l0,0l-22.2,0.1c-6.8,0-12.3,5.6-12.3,12.4l0,0 c0,6.8,5.6,12.3,12.4,12.3l0,0L127.5,183.9z M178.6,61.4l-0.7-32.3c0-16.1-13.2-29.2-29.4-29.1h-0.3c-12.3,0.2-22.1,10.3-22,22.6 L127,62C142.4,51,163,50.8,178.6,61.4z M153.2,61.8c20.2,0,36.7,16.4,36.7,36.7s-16.4,36.7-36.7,36.7s-36.7-16.4-36.7-36.7 S133,61.8,153.2,61.8z"
              ></path>
              <path
                className="fill-[#3c5364]"
                d="M341.9,68.7c10.9-0.2,21.5,3.9,29.5,11.4c15.2,13.7,16.4,37.1,2.8,52.3 c-0.7,0.8-1.5,1.6-2.3,2.3c-7.6,7.4-17.8,11.6-28.4,11.8H343l-1.1,0.1l-0.6-0.1h-27.2v44.7c0,2.9-1.1,5.7-3.2,7.7 c-2,2.1-4.9,3.3-7.8,3.2c-6-0.1-10.9-4.9-11-10.9V79.6c0.1-6,4.9-10.9,11-11L341.9,68.7z M342.5,124.6c5,0,9.8-1.8,13.5-5.1 c6.6-5.4,7.4-15.2,2-21.7c-0.7-0.8-1.4-1.5-2.2-2.2c-3.9-3.4-8.8-5.1-13.9-5h-27.8v34C314.1,124.6,342.5,124.6,342.5,124.6z M413.4,201.3c-5.6-2.3-8.3-8.7-6-14.3l0,0l0,0l11.8-28.3v-0.1l34.2-82.5c0.1-0.3,0.3-0.6,0.5-0.9l0.2-0.5c0.1-0.2,0.2-0.3,0.4-0.5 c0.1-0.2,0.2-0.3,0.3-0.5l0.4-0.4c0-0.1,0.1-0.2,0.3-0.4c0.2-0.2,0.4-0.4,0.4-0.5c0.1-0.1,0.2-0.2,0.4-0.3c0.2-0.2,0.4-0.4,0.5-0.4 s0.1-0.1,0.4-0.3c0.3-0.2,0.4-0.3,0.5-0.4l0.4-0.3c0.2-0.1,0.4-0.2,0.6-0.3l0.6-0.3c0.3-0.2,0.4-0.2,0.3-0.2l0.4-0.2 c0.2,0,0.4-0.1,0.7-0.2c0.2,0,0.4-0.1,0.6-0.2l0.4-0.1c0.2,0,0.4,0,0.6-0.1l0.5-0.1h2.1l0.6,0.1l0.5,0.1c0.2,0,0.4,0.1,0.6,0.2 c0.4,0.1,0.5,0.1,0.4,0.1c0.7,0.2,1.4,0.5,2,0.8c-0.1-0.1,0.1,0,0.4,0.2c0.2,0.1,0.4,0.2,0.6,0.4l0.4,0.3c0.2,0.1,0.3,0.2,0.5,0.4 c0.1,0,0.2,0.1,0.4,0.3c0.1,0.1,0.3,0.3,0.5,0.4c0,0.1,0.1,0.2,0.3,0.4c0.2,0.2,0.4,0.4,0.4,0.5l0.3,0.4c0.2,0.2,0.4,0.4,0.4,0.5 c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.1,0.2,0.3,0.3,0.5c0.2,0.3,0.3,0.6,0.5,0.9l34.2,82.5v0.1l11.8,28.3c2.3,5.6-0.3,12-5.9,14.3l0,0 l0,0c-1.3,0.6-2.8,0.8-4.2,0.8c-4.5,0.3-8.6-2.5-10.1-6.8l-8.9-21.6h-53.8l-8.8,21.6c-1.5,4.3-5.6,7-10.1,6.8 C416.2,202.2,414.7,201.9,413.4,201.3z M481.4,152l-17.9-43.1L445.6,152H481.4z M632.2,162.5c-0.4,10.8-5.2,21-13.3,28.1 c-8.2,7.6-19,11.7-30.1,11.5c-9.4,0.2-18.8-2.1-27.1-6.5c-9.1-4.6-15.8-12.8-18.3-22.7c-0.8-2.8-0.4-5.8,1.1-8.3 c1.4-2.5,3.9-4.3,6.7-5c2.8-0.8,5.8-0.4,8.3,1.1c2.5,1.4,4.3,3.9,5,6.7c1.4,4.5,4.7,8.1,9.1,9.8c4.8,2.1,10,3.2,15.2,3.1 c5.5,0.1,10.8-1.8,15-5.5c4.1-3.3,6.5-8.2,6.7-13.4c0.1-3.2-1.1-6.4-3.5-8.6c-5.3-4.6-12.3-6.9-19.3-6.4h-0.5 c-12.9,0.6-25.5-4.1-34.8-13.1c-6.4-6.5-9.8-15.5-9.3-24.6c0.4-10.8,5.2-21.1,13.3-28.2c8.2-7.6,18.9-11.7,30.1-11.5 c9.4-0.2,18.8,2.1,27.1,6.5c9.1,4.6,15.8,12.8,18.3,22.7c0.8,2.8,0.3,5.8-1.2,8.3c-1.4,2.5-3.8,4.3-6.6,5c-2.8,0.8-5.8,0.4-8.3-1.1 c-2.5-1.4-4.3-3.9-5-6.7c-1.4-4.5-4.8-8.1-9.2-9.8c-4.8-2.1-9.9-3.2-15.1-3.1c-5.5-0.1-10.9,1.8-15.1,5.5c-4,3.3-6.4,8.2-6.6,13.4 c-0.1,3.3,1.1,6.4,3.5,8.7c5.4,4.6,12.3,6.8,19.3,6.2h0.5c12.9-0.6,25.6,4.2,34.8,13.2C629.3,144.4,632.7,153.4,632.2,162.5z M667.6,201.3c-5.6-2.3-8.3-8.7-6-14.3l0,0l0,0l11.8-28.3v-0.1l34.2-82.5c0.1-0.3,0.3-0.6,0.5-0.9l0.2-0.5c0.1-0.2,0.2-0.3,0.4-0.5 c0.1-0.2,0.2-0.3,0.3-0.5l0.4-0.4c0-0.1,0.1-0.2,0.3-0.4c0.2-0.2,0.4-0.4,0.4-0.5c0.1-0.1,0.2-0.2,0.4-0.3c0.2-0.2,0.4-0.4,0.5-0.4 s0.1-0.1,0.4-0.3c0.2-0.1,0.3-0.2,0.5-0.4l0.1,0c0.2-0.1,0.4-0.2,0.6-0.3l0.7-0.3c0.3-0.2,0.4-0.2,0.3-0.2L714,70 c0.2,0,0.4-0.1,0.6-0.2c0.2,0,0.4-0.1,0.7-0.2l0.4-0.1c0.2,0,0.4,0,0.6-0.1l0.5-0.1h2.1l0.6,0.1l0.5,0.1c0.2,0,0.4,0.1,0.6,0.2 c0.4,0.1,0.5,0.1,0.4,0.1c0.7,0.2,1.4,0.5,2,0.8c-0.1-0.1,0.1,0,0.4,0.2c0.2,0.1,0.4,0.2,0.6,0.4l0.4,0.3c0.2,0.1,0.3,0.2,0.5,0.4 c0.1,0,0.2,0.1,0.4,0.3c0.1,0.1,0.3,0.3,0.5,0.4c0,0.1,0.1,0.2,0.3,0.4c0.2,0.2,0.4,0.4,0.4,0.5l0.3,0.4c0.2,0.2,0.4,0.4,0.4,0.5 c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.1,0.2,0.3,0.3,0.5c0.2,0.3,0.3,0.6,0.5,0.9l34.2,82.5v0.1l11.9,28.3c2.3,5.6-0.4,12-5.9,14.3l0,0 c-1.3,0.6-2.8,0.8-4.2,0.8c-4.5,0.3-8.6-2.5-10.1-6.8l-8.9-21.6h-53.8l-8.9,21.6c-1.5,4.3-5.6,7-10.1,6.8 C670.3,202.2,668.9,201.9,667.6,201.3z M735.6,152l-17.9-43.1L699.8,152H735.6z M993.7,202.2c-36.9,0-66.8-29.8-66.9-66.7 c0-36.9,29.8-66.8,66.7-66.9c36.9,0,66.8,29.8,66.9,66.7c0,17.7-7,34.7-19.5,47.2C1028.6,195.4,1011.5,202.5,993.7,202.2z M993.7,90.7c-24.7,0-44.7,20.1-44.7,44.8s20.1,44.7,44.8,44.7s44.7-20.1,44.7-44.8c0-11.8-4.7-23.2-13.1-31.6 C1017.1,95.2,1005.7,90.5,993.7,90.7L993.7,90.7z M1107,202.2c-6-0.1-10.9-4.9-11-11v-111c0-2.9,1.1-5.7,3.2-7.7 c2-2.1,4.8-3.2,7.7-3.3l39-0.2c10.9-0.3,21.5,3.7,29.5,11.1c7.8,6.9,12.1,16.9,12,27.3c0.1,10.2-4,20-11.4,27 c8.8,6.9,13.9,17.5,13.8,28.7c0.1,10.5-4.4,20.6-12.3,27.5c-7.9,7.5-18.4,11.6-29.4,11.4L1107,202.2z M1117.9,124.9h28.1 c5.1,0.1,10-1.7,13.8-5.1c3.6-3,5.7-7.5,5.8-12.3c0-4.6-2.1-8.9-5.7-11.7c-3.9-3.2-8.8-5-13.8-4.8l-28.1,0.2L1117.9,124.9z M1117.9,180.3h30.2c5.1,0.1,10.1-1.7,13.9-5c3.7-2.9,5.8-7.3,5.8-12c0-4.6-2.1-8.9-5.7-11.6c-3.9-3.3-8.8-5-13.8-4.8h-30.4V180.3z M880.4,72.2c-2-2.1-4.8-3.3-7.7-3.3c-6.1,0-11,5-11.1,11.1v81.8c0,0.7-0.1,1.5-0.1,2.2c-0.8,4.2-3,8-6.4,10.7 c-4.1,3.6-9.5,5.6-15,5.5c-5.2,0.1-10.4-1-15.2-3.1c-4.4-1.7-7.7-5.3-9.1-9.8c-0.7-2.8-2.5-5.2-5-6.7s-5.5-1.9-8.3-1.1 c-2.8,0.7-5.2,2.5-6.7,5s-1.9,5.5-1.1,8.3c2.5,9.8,9.2,18.1,18.3,22.7c8.3,4.4,17.7,6.7,27.1,6.5c0.3,0,0.5,0,0.8,0 c0.7,0.1,1.5,0.2,2.2,0.2c22.3,0.1,40.3-17.9,40.4-40.2l0,0V80C883.7,77.1,882.5,74.2,880.4,72.2z"
              ></path>
            </svg>
          </a>
        </div>

        <div className="hidden justify-end items-center md:flex md:flex-1 lg:w-0">
          <a
            href="#"
            className="text-base font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap"
          >
            Sign In
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center py-2 px-5 ml-8 text-base font-medium text-white whitespace-nowrap bg-java hover:bg-java-600 rounded-full  border border-transparent shadow-sm"
          >
            Join as an Employer
          </a>
        </div>
      </div>
    </div>
  );
}
