const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-[0.8rem] bg-white shadow-sm sticky top-0">
      {/* logo */}
      <div>
        <img
          className="h-[3rem] w-[10rem]"
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
          alt="Airbnb Logo"
        />
      </div>
      <div className=" flex items-center gap-4">
        <a className="invisible md:visible" href="">
          <span className="text-black hover:bg-gray-100 rounded-full p-2 ">
            Airbnb your home
          </span>
        </a>
        <div className="text-black h-10 w-10 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            viewBox="0 0 32 32"
            focusable="false"
            className="text-gray-500 block h-full w-full fill-current"
          >
            <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;