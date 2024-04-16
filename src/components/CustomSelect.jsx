/* eslint-disable react/prop-types */
import { useState } from "react";
import assets from "../assets";

const CustomSelect = ({ options, defaultValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    defaultValue || options[0]
  );

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative max-w-[275px] w-full">
      <div
        className="select border border-teal rounded-[4px] cursor-pointer py-[13px] px-[20px] flex items-center justify-between w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption}</span>
        <img
          src={assets.selectArrow}
          alt="select arrow"
          width="13"
          height="8"
        />
      </div>
      {isOpen && (
        <div className="select__option border bg-white border-teal rounded-[4px] mt-1 p-4 absolute top-full left-0 w-full">
          {options?.map((option, index) => (
            <div
              key={index}
              className="cursor-pointer p-4 hover:bg-gray-100"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
