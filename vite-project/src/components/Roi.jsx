import { useEffect, useState } from "react";
import { ShowResult } from "./ShowResult";

import { useStateContext } from '../context/ContextProvider';

export function Roi() {
  const [multiplicador, setMultiplicador] = useState(0);
  const [mint, setMint] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [roiArtist, setRoiArtist] = useState(0)
  const [campoRoiArtist, setCampoRoiArtist] = useState(false)
  const {campoRoiMe, setCampoRoiMe } = useState(false)
  const [roiMe, setRoiMe ] = useState(0)
  const [campoMint, setCampoMint] = useState(false);
  const [campoMultiplicador, setCampoMultiplicador] = useState(false);

  const { currentColor } = useStateContext();


  async function handleImcCalc() {
    
    const imc = ( (mint + (mint * ((roiArtist + roiMe)/100))) + ((multiplicador * mint) + ((multiplicador * mint) * ((roiArtist+roiMe)/100))) ).toFixed(2);

    setResultado(Number(imc));
  }

  return (
    <div className="flex flex-col w-full py-4 gap-5 text-gray-500">
      <div className="flex flex-col">
        <span>Valor do Mint</span>
        <div className="flex items-center">
          <div className="w-full focus-within:shadow-lg">
            <input
              className="w-full md:w-52 py-2 px-3 border-[1px] rounded-sm mr-2 required:border-red-500
                      invalid:border-red-500 focus:outline-none relative
                      focus-visible:ring-2 ring-pink-300"
              placeholder="0.5"
              type="number"
              name="height"
              id="height"
              required={campoMint}
              onChange={(e) => setMint(Number(e.target.value))}
            />
          </div>
          <span className="absolute right-10 text-md text-gray-400 md:w-24">
            SOL
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <span>Multiplicador</span>
        <div className="flex items-center">
          <div className="w-full focus-within:shadow-lg">
            <input
              className="w-full md:w-52 py-2 px-3 border-[1px] rounded-sm mr-2 required:border-red-500
              invalid:border-red-500 focus:outline-none relative
              focus-visible:ring-2 ring-pink-300"
              placeholder="2"
              type="number"
              name="weight"
              id="weight"
              required={campoMultiplicador}
              onChange={(e) => setMultiplicador(Number(e.target.value))}
            />
          </div>
          <span className="absolute right-10 text-md text-gray-400 md:w-24">
            X
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <span>ME Royalties</span>
        <div className="flex items-center">
          <div className="w-full focus-within:shadow-lg">
            <input
              className="w-full md:w-52 py-2 px-3 border-[1px] rounded-sm mr-2 required:border-red-500
              invalid:border-red-500 focus:outline-none relative
              focus-visible:ring-2 ring-pink-300"
              placeholder="2%"
              type="number"
              name="weight"
              id="weight"
              required={campoRoiMe}
              onChange={(e) => setRoiMe(Number(e.target.value))}
            />
          </div>
          <span className="absolute right-10 text-md text-gray-400 md:w-24">
            %
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <span>Artist Royalties</span>
        <div className="flex items-center">
          <div className="w-full focus-within:shadow-lg">
            <input
              className="w-full md:w-52 py-2 px-3 border-[1px] rounded-sm mr-2 required:border-red-500
              invalid:border-red-500 focus:outline-none relative
              focus-visible:ring-2 ring-pink-300"
              placeholder="2%"
              type="number"
              name="weight"
              id="weight"
              required={campoRoiArtist}
              onChange={(e) => setRoiArtist(Number(e.target.value))}
            />
          </div>
          <span className="absolute right-10 text-md text-gray-400 md:w-24">
            %
          </span>
        </div>
      </div>

      
      
      <div>
        <button
          className="w-full text-center p-3 font-bold text-white transition-all
                  mt-4 rounded-sm 
                  cursor-pointer select-none"
          onClick={handleImcCalc}
          style={{background: currentColor}}
        >
          Calcular
        </button>
      </div>
      <ShowResult imc={resultado} />
    </div>
  );
}

export default Roi