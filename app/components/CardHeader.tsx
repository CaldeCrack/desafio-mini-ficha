import * as React from "react";
import { CardHeaderProps } from "./types";

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
        <img
          loading="lazy"
          src={icon}
          alt={`${title} icon`}
          className="object-contain w-8 rounded-none aspect-square"
        />
      )}
      <div className="my-auto font-medium">{title}</div>
      <img
        loading="lazy"
        src={
          count !== undefined
            ? "https://cdn.builder.io/api/v1/image/assets/87f8f280563842d18c1723bb4d594051/c5b69f4d7bca08e4c0bddc4eb6a592967189861b9b4860f8186aeddae379b138?apiKey=87f8f280563842d18c1723bb4d594051&"
            : icon
        }
        alt="Status icon"
        className="object-contain w-8 rounded-none aspect-square"
      />
    </div>
  );
};
