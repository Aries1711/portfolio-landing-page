"use client";

import CountUp from "react-countup";

const Badge = ({
  containerStyle,
  icon,
  typeView,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return (
    <div className={`badge ${containerStyle}`}>
      <div
        className={`${
          typeView === "mobile"
            ? "flex items-center gap-x-2"
            : "flex items-center gap-x-2"
        }`}
      >
        <div
          className={`${
            typeView === "mobile"
              ? "text-3sm text-primary"
              : "text-3xl text-primary"
          }`}
        >
          {icon}
        </div>
        <div
          className={`${
            typeView === "mobile"
              ? "text-4sm leading-none font-bold text-primary"
              : "text-4xl leading-none font-bold text-primary"
          }`}
        >
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div
          className={`${
            typeView === "mobile"
              ? "max-w-[50px] leading-none text-[10px] font-small text-black"
              : "max-w-[70px] leading-none text-[15px] font-medium text-black"
          }`}
        >
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
