import React from "react";

const Alert = (props) => {
  return (
    <>
      <div className="h-[60px]">
        {props.alert === "" ? (
          <div className="hidden">
          </div>
        ) : (
          <div className="bg-[#4ade80] px-5 py-3 rounded-lg text-center w-[100%] md:w-[60%] mx-auto">
            <strong className="text-[#052e16] font-bold  text-base tracking-wider">
              {props.alert}
            </strong>
          </div>
        )}
      </div>
    </>
  );
};

export default Alert;
