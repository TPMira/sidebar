import { useEffect, useState } from "react";
import { ShowResult } from "./ShowResult";

import { useStateContext } from '../context/ContextProvider';

export function Calculate() {
  const [sale1, setSale1] = useState(0);
  const [sale2, setSale2] = useState(0);
  const [sale3, setSale3] = useState(0);
  const [sale4, setSale4] = useState(0);
  const [sale5, setSale5] = useState(0);
  const [sale6, setSale6] = useState(0);
  const [sale7, setSale7] = useState(0);
  const [sale8, setSale8] = useState(0);
  const [resultado, setResultado] = useState('?');
  const [campoMint, setCampoMint] = useState(false);

  const { currentColor } = useStateContext();


  async function handleImcCalc() {
    
    const imc = ( sale1 + sale2 + sale3 + sale4 + sale5 + sale6 + sale7 + sale8 ).toFixed(4);

    setResultado(Number(imc));
  }

  return (
    <div className="flex flex-col w-full py-4 gap-2 text-gray-700">
      <div className="flex flex-col">
        <span>Sale 1</span>
        <div className="flex items-center">
          <div className="w-full focus-within:shadow-lg">
            <input
              className="w-full md:w-52 py-2 px-3 border-[1px] rounded-lg mr-2 required:border-red-500 bg-white bg-opacity-70 text-gray-700
                       focus:outline-none relative
                      focus-visible:ring-2 ring-pink-300"
              placeholder="0.5"
              type="number"
              name="height"
              id="height"
              required={campoMint}
              onChange={(e) => setSale1(Number(e.target.value))}
            />
          </div>
          <span className="absolute right-10 text-md text-gray-700 md:w-24">
            SOL
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <span>Sale 2</span>
        <div className="flex items-center">
          <div className="w-full focus-within:shadow-lg">
            <input
              className="w-full md:w-52 py-2 px-3 border-[1px] rounded-lg mr-2 required:border-red-500 bg-white bg-opacity-70 text-gray-700
                       focus:outline-none relative
                      focus-visible:ring-2 ring-pink-300"
              placeholder="0.5"
              type="number"
              name="height"
              id="height"
              required={campoMint}
              onChange={(e) => setSale2(Number(e.target.value))}
            />
          </div>
          <span className="absolute right-10 text-md text-gray-700 md:w-24">
            SOL
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <span>Sale 3</span>
        <div className="flex items-center">
          <div className="w-full focus-within:shadow-lg">
            <input
              className="w-full md:w-52 py-2 px-3 border-[1px] rounded-lg mr-2 required:border-red-500 bg-white bg-opacity-70 text-gray-700
                       focus:outline-none relative
                      focus-visible:ring-2 ring-pink-300"
              placeholder="0.5"
              type="number"
              name="height"
              id="height"
              required={campoMint}
              onChange={(e) => setSale3(Number(e.target.value))}
            />
          </div>
          <span className="absolute right-10 text-md text-gray-700 md:w-24">
            SOL
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <span>Sale 4</span>
        <div className="flex items-center">
          <div className="w-full focus-within:shadow-lg">
            <input
              className="w-full md:w-52 py-2 px-3 border-[1px] rounded-lg mr-2 required:border-red-500 bg-white bg-opacity-70 text-gray-700
                       focus:outline-none relative
                      focus-visible:ring-2 ring-pink-300"
              placeholder="0.5"
              type="number"
              name="height"
              id="height"
              required={campoMint}
              onChange={(e) => setSale4(Number(e.target.value))}
            />
          </div>
          <span className="absolute right-10 text-md text-gray-700 md:w-24">
            SOL
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <span>Sale 5</span>
        <div className="flex items-center">
          <div className="w-full focus-within:shadow-lg">
            <input
              className="w-full md:w-52 py-2 px-3 border-[1px] rounded-lg mr-2 required:border-red-500 bg-white bg-opacity-70 text-gray-700
                       focus:outline-none relative
                      focus-visible:ring-2 ring-pink-300"
              placeholder="0.5"
              type="number"
              name="height"
              id="height"
              required={campoMint}
              onChange={(e) => setSale5(Number(e.target.value))}
            />
          </div>
          <span className="absolute right-10 text-md text-gray-700 md:w-24">
            SOL
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <span>Sale 6</span>
        <div className="flex items-center">
          <div className="w-full focus-within:shadow-lg">
            <input
              className="w-full md:w-52 py-2 px-3 border-[1px] rounded-lg mr-2 required:border-red-500 bg-white bg-opacity-70 text-gray-700
                       focus:outline-none relative
                      focus-visible:ring-2 ring-pink-300"
              placeholder="0.5"
              type="number"
              name="height"
              id="height"
              required={campoMint}
              onChange={(e) => setSale6(Number(e.target.value))}
            />
          </div>
          <span className="absolute right-10 text-md text-gray-700 md:w-24">
            SOL
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <span>Sale 7</span>
        <div className="flex items-center">
          <div className="w-full focus-within:shadow-lg">
            <input
              className="w-full md:w-52 py-2 px-3 border-[1px] rounded-lg mr-2 required:border-red-500 bg-white bg-opacity-70 text-gray-700
                       focus:outline-none relative
                      focus-visible:ring-2 ring-pink-300"
              placeholder="0.5"
              type="number"
              name="height"
              id="height"
              required={campoMint}
              onChange={(e) => setSale7(Number(e.target.value))}
            />
          </div>
          <span className="absolute right-10 text-md text-gray-700 md:w-24">
            SOL
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <span>Sale 8</span>
        <div className="flex items-center">
          <div className="w-full focus-within:shadow-lg">
            <input
              className="w-full md:w-52 py-2 px-3 border-[1px] rounded-lg mr-2 required:border-red-500 bg-white bg-opacity-70 text-gray-700
                       focus:outline-none relative
                      focus-visible:ring-2 ring-pink-300"
              placeholder="0.5"
              type="number"
              name="height"
              id="height"
              required={campoMint}
              onChange={(e) => setSale8(Number(e.target.value))}
            />
          </div>
          <span className="absolute right-10 text-md text-gray-700 md:w-24 ">
            SOL
          </span>
        </div>
      </div>

      

      


      
      
      <div>
        <button
          className="w-full text-center p-3 font-bold text-white dark:text-gray-800 transition-all
                  mt-4 rounded-lg
                  cursor-pointer select-none"
          onClick={handleImcCalc}
          style={{background: currentColor}}
        >
          Calculate
        </button>
      </div>
      <span className="text-gray-700">Total Coast :</span>
      <ShowResult imc={resultado} />
    </div>
  );
}

export default Calculate