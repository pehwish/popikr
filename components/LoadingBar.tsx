"use client";
import { BarLoader } from "react-spinners";

const LoadingBar = () => {
  return (
    <div className="w-full">
      <BarLoader color="#00c3a2" cssOverride={{ width: "100%" }} />
    </div>
  );
};

export default LoadingBar;
