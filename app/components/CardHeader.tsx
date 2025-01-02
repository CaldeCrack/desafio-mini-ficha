import * as React from "react";
import Image from 'next/image';
import { CardHeaderProps } from "./types";
import next_arrow from "../images/Next_Arrow.svg"

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  icon,
  count,
}) => {
  return (
    <div className="flex justify-between px-5 py-3 rounded-t-xl bg-light-grey-20">
      {count === undefined && (
        <div className="box-border flex relative flex-col w-8" />
      )}
      {count !== undefined && (
        <Image
          loading="lazy"
          src={icon}
          alt={`${title} icon`}
          className="object-contain w-8 rounded-none aspect-square"
        />
      )}
      <div className="my-auto font-medium">{title}</div>
      <Image
        loading="lazy"
        src={
          count !== undefined
            ? next_arrow
            : icon
        }
        alt="Status icon"
        className="object-contain w-8 rounded-none aspect-square"
      />
    </div>
  );
};
