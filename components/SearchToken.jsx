import { FaTimes } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "@/store/globalSlices";

export const SearchToken = () => {
  const router = useRouter();
  const { setSearchtokenModal } = globalActions;
  const [luckyNumbers, setLuckyNumbers] = useState("");
  const { searchtokenModal } = useSelector((state) => state.globalState);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    setLuckyNumbers("");
  };
  return (
    <div
      className={`z-10 fixed top-0 left-0 w-screen h-screen flex items-center justify-center
       bg-black bg-opacity-50 transform transition-transform duration-300 ${searchtokenModal}`}
    >
      <div className="bg-white shadow-xl shadow-gray-800 rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        {/* <form className="flex flex-col"> */}
        <div className="flex justify-between items-center">
          <p className="font-semibold">Select a token</p>
          <button
            className="border-0 bg-transparent focus:outline-none"
            onClick={() => dispatch(setSearchtokenModal("scale-0"))}
          >
            <FaTimes />
          </button>
        </div>
        <div className="flex justify-center items-center bg-[#fed7aa] rounded-xl p-2.5 my-5">
          <input
            type="number"
            step={1}
            min={1}
            name="luckyNumbers"
            placeholder="Lucky Number e.g 19"
            className="block w-full bg-transparent border-0 focus:outline-none focus:ring-0 text-sm"
            onChange={(e) => setLuckyNumbers(e.target.value)}
            value={luckyNumbers}
          />
        </div>
        {/**单选按钮 */}
        <div className="flex gap-2">
          <button className="py-2 px-5 rounded-full border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white">
            <FaEthereum className="inline-block" size={18} />
            ETH
          </button>
          <button className="py-2 px-5 rounded-full border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white">
            <FaEthereum className="inline-block" size={18} />
            DAI
          </button>
          <button className="py-2 px-5 rounded-full border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white">
            <FaEthereum className="inline-block" size={18} />
            DOG
          </button>
          <button className="py-2 px-5 rounded-full border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white">
            <FaEthereum className="inline-block" size={18} />
            FUN
          </button>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};
