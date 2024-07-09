import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "@/store/globalSlices";
import { DiAptana } from "react-icons/di";
import { FaEthereum } from "react-icons/fa";

export const Section = () => {
  const dispatch = useDispatch();
  const { setSearchtokenModal } = globalActions;
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = () => {};

  const openTokenSearch = () => {
    dispatch(setSearchtokenModal("scale-100"));
  };
  return (
    <div
      className="min-h-screen bg-[#fed7aa] flex flex-col justify-center
    items-center pt-24 text-[#ea580c] px-5 lg:flex-row lg:px-32 lg:justify-center"
    >
      <div className="bg-[#ea580c] w-1/3 px-5 py-5 rounded-md">
        <div className="flex justify-between mb-5">
          <p className="text-white font-extrabold">Swap</p>
          <DiAptana
            size={20}
            className="text-white cursor-pointer"
            onClick={openTokenSearch}
          />
        </div>
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-4 flex gap-x-1">
              <input
                id="title"
                type="text"
                className="flex-1 border py-2 px-3 rounded text-gray-700 leading-tight appearance-none focus:outline-none focus:shadow-outline"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <button className="w-28 bg-[#fbbf24] rounded-sm">
                <FaEthereum className="inline-block" />
                ETH
              </button>
            </div>
            <div className="mb-4 flex gap-x-1">
              <input
                id="image"
                type="text"
                className="flex-1 border py-2 px-3 rounded text-gray-700 leading-tight appearance-none focus:outline-none focus:shadow-outline"
                placeholder="Image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
              <button className="w-28 bg-[#fbbf24] rounded-sm">
                <FaEthereum className="inline-block" />
                ETH
              </button>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-[#fbbf24] rounded-full font-bold text-white px-4 py-2 focus:outline-none focus:shadow-outline"
              >
                Connect Wallet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
