import * as React from "react";
import Image from 'next/image';
import { SelectFieldProps } from "./types";
import dropdown_arrow from "../images/Dropdown_Arrow.svg";

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  placeholder,
  width = "auto",
}) => {
  return (
    <div className={`flex flex-col pt-2.5 w-${width}`}>
      <div className="flex relative gap-2.5 py-3.5 pr-2.5 pl-4 w-full bg-white rounded-md border border-primary border-solid min-h-[52px]">
        <div className="flex absolute -top-2.5 left-2.5 z-0 flex-col justify-center self-start text-sm font-medium text-primary">
          <div className="flex absolute inset-x-0 max-w-full bg-white bottom-[9px] min-h-[3px] w-[133px]" />
          <div className="gap-2 px-1.5 z-0">{label}</div>
        </div>
        <div className="overflow-hidden text-left flex-1 gap-2.5 h-full text-base text-light-grey-50 font-['Overpass']">
          {placeholder}
        </div>
        <div className="flex gap-2 items-center my-auto w-6">
          <Image
            loading="lazy"
            src={dropdown_arrow}
            alt="Dropdown arrow"
            className="object-contain my-auto w-6 aspect-square"
          />
        </div>
      </div>
    </div>
  );
};
