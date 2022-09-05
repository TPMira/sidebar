import { useEffect, useState } from "react";
import { Roi } from "../components/Roi";

export default function App() {

  return (
    <div className="w-full h-[94vh] flex flex-col bg-gradient-custom">
      <div
        className={`p-4 text-2xl font-bold text-center mb-1 text-shadow-blue mt-12`}
      >
        Calculadora de Roi
      </div>
      <div
        className="md:mx-auto md:w-96 bg-white p-6 rounded-sm shadow-drop-bottom swing-in-top-fwd transition-all bg-opacity-70 z-10"
      >
        {<Roi/>}
      </div>
      <div className="fixed -bottom-8 left-0 right-0 z-0">
        
      </div>
    </div>
  );
}