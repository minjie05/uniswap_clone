import { FaTimes } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { DiAptana } from "react-icons/di";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "@/store/globalSlices";

export const FundsModal = () => {
  const router = useRouter();
  const { setFundsModal } = globalActions;
  const [luckyNumbers, setLuckyNumbers] = useState("");
  const { fundsModal } = useSelector((state) => state.globalState);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    setLuckyNumbers("");
  };
  return (
    <div
      className={`z-10 fixed top-0 left-0 w-screen h-screen flex items-center justify-center
       bg-black bg-opacity-50 transform transition-transform duration-300 ${fundsModal}`}
    >
      <div className="flex flex-col bg-white shadow-xl shadow-gray-800 rounded-xl w-1/3 h-7/12 p-6 gap-y-4">
        {/* <form className="flex flex-col"> */}
        <div className="flex justify-between items-center">
          <p className="font-bold">Setting</p>
          <button
            className="border-0 bg-transparent focus:outline-none"
            onClick={() => dispatch(setFundsModal("scale-0"))}
          >
            <DiAptana />
          </button>
        </div>
        <div className="flex justify-start gap-x-2">
          <span>Slippage tolerance</span>
          <MdLockOutline className="inline-block mt-1" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center gap-x-3 w-full h-10">
            <button className="w-14 bg-[#fb923c] rounded-full">Auto</button>
            <input
              type="number"
              step={1}
              min={1}
              name="luckyNumbers"
              placeholder="Lucky Number e.g 19"
              className="flex-1 bg-[#fff7ed] rounded-full px-5 bg-transparent border-0 focus:outline-none focus:ring-0 text-sm"
              onChange={(e) => setLuckyNumbers(e.target.value)}
              value={luckyNumbers}
            />
          </div>
        </div>
        <div className="flex justify-start gap-x-2">
          <span>Slippage tolerance</span>
          <MdLockOutline className="inline-block mt-1" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center gap-x-3 w-full h-10">
            <input
              type="number"
              step={1}
              min={1}
              name="luckyNumbers"
              placeholder="Lucky Number e.g 19"
              className="flex-1 bg-[#fff7ed] rounded-full px-5 bg-transparent border-0 focus:outline-none focus:ring-0 text-sm"
              onChange={(e) => setLuckyNumbers(e.target.value)}
              value={luckyNumbers}
            />
            <button className="w-40 bg-[#fb923c] rounded-full">Minutes</button>
          </div>
        </div>
        <div className="font-bold text-lg">Interface Setting</div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-between gap-x-3 w-full h-10">
            <span>Transaction deadline</span>
            <div className="mb-4">
              <input type="checkbox" className="mr-2" id="remember-me" />
              <label className="font-normal" htmlFor="remember-me">
                YES
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
