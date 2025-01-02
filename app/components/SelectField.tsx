import * as React from "react";
import { SelectFieldProps } from "./types";

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
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/87f8f280563842d18c1723bb4d594051/b6dd83955dfe89072e72446fcf30e8f225be58e75899321062546a271c028a9a?apiKey=87f8f280563842d18c1723bb4d594051&"
            alt="Dropdown arrow"
            className="object-contain my-auto w-6 aspect-square"
          />
        </div>
      </div>
    </div>
  );
};
