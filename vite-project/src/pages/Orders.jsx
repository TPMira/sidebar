

import { Roi,Calculate } from "../components";



export default function App() {

  return (
    <div className="w-full h-[94vh] bg-gradient-custom">
      <div className="grid gap-4 grid-cols-2 grid-rows-1">
        <div
          className={`text-2xl font-bold text-center text-shadow-blue mt-2`}
        >
          ROI Calculator
        </div>
        
        <div
        className={` text-2xl font-bold text-center text-shadow-green mt-2`}
        >
          Total Cost
        </div>
      <div
        className="md:mx-auto h-[54vh]  md:w-96 bg-white  p-6 rounded-lg shadow-drop-bottom swing-in-top-fwd transition-all bg-opacity-30 z-10"
      >
        {<Roi/>}
      </div>

      <div
        className="md:mx-auto md:w-96 bg-white  p-6 rounded-lg shadow-drop-bottom swing-in-top-fwd transition-all bg-opacity-30 z-10"
      >
        {<Calculate/>}
      </div>

      
      </div>
      
      
      
      {/*<div
        className={`p-4 text-2xl font-bold text-center mb-1 text-shadow-blue mt-12`}
      >
        ROI Calculator
      </div>
      <div
        className="md:mx-auto md:w-96 bg-white dark:bg-main-dark-bg p-6 rounded-sm shadow-drop-bottom swing-in-top-fwd transition-all bg-opacity-70 z-10"
      >
        {<Roi/>}
      </div>
      <div className="fixed -bottom-8 left-0 right-0 z-0">
      </div>
      <div className="flex justify-center text-gray-500">Example: 2x multiplier = 300% or 3x</div>
  <div className="flex justify-center text-gray-500">It's not 100% accurate because of the percentages.</div>*/}
    </div>
  );
}