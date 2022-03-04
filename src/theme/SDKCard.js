import React from "react";
const SDKCard = ({ title, icon }) => {
  return (
    <>
      <div className="hidden sm:block xs:block">
        <div className="rounded w-80 h-16 bg-slate-900 flex flex-row m-auto ml-3">
          <img src={icon} alt="SDK" className="h-10 w-10 ml-5 mt-3" />
          <div className="font-semibold text-md ml-3 mt-5">{title}</div>
        </div>
      </div>
      <div className="hidden lg:block xl:block md:block">
        <div className="rounded w-80 h-16 bg-slate-900 flex flex-row m-auto ml-3">
          <img src={icon} alt="SDK" className="h-10 w-10 ml-5 mt-3" />
          <div className="font-semibold ml-3 mt-5">{title}</div>
        </div>
      </div>
      <div className="hidden xl2:block">
        <div className=" bg-slate-900 w-full flex">
          <img src={icon} alt="SDK" className="h-10 w-10 ml-5 mt-3" />
          <div className="font-semibold ml-3 mt-5">{title}</div>
        </div>
      </div>
    </>
  );
};

export default SDKCard;
