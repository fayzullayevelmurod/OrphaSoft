// eslint-disable-next-line react/prop-types
export const Search = ({ placeholder }) => (
  <div className="relative border-b border-[#00AAA1] w-full h-16 bg-[#FAFAFA] rounded-md overflow-hidden">
    <input
      className="bg-transparent w-full h-full px-[29px] text-[#696F79] text-base font-light"
      type="search"
      placeholder={placeholder}
    />
    <button
      className="absolute top-1/2 right-[29px] -translate-y-1/2"
      aria-label="search button"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 17L22 22M19.5 10.75C19.5 15.5825 15.5825 19.5 10.75 19.5C5.91751 19.5 2 15.5825 2 10.75C2 5.91751 5.91751 2 10.75 2C15.5825 2 19.5 5.91751 19.5 10.75Z"
          stroke="#696F79"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </div>
);
