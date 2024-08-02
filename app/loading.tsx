'use client';
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center mt-5">
      <InfinitySpin
        visible={true}
        width="200"
        color="#616E7C"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;