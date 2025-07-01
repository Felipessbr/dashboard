import React from 'react';
import { FaWifi } from "react-icons/fa";
import { BsLightbulbFill } from "react-icons/bs";
import { TabletSmartphone, Refrigerator, TvMinimal, AirVent } from 'lucide-react';

const ReightPainel = () => {
  return (
    <div className="space-y-6 p-8 ">
      {/* Wi-Fi */}
      <h3 className='text-xl font-bold text-gray-600'>SHORTCUTS</h3>
      <div className="flex items-center justify-between  lg:gap-25">
        <div className="flex gap-4 items-center">
          <div className="bg-[var(--secund-coll)] p-4 rounded-2xl">
            <FaWifi size={55} className="text-[var(--primary-coll)]" />
          </div>
          <div className="flex flex-col text-xl">
            <span className="text-gray-600 font-semibold">WI-FI</span>
            <span className="text-gray-500 text-[15px] font-bold">150/20</span>
          </div>
        </div>
        <label className="inline-flex items-center cursor-pointer gap-12">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[var(--primary-coll)] transition-all after:content-[''] after:absolute after:w-5 after:h-5 after:bg-white after:rounded-full after:translate-x-1 after:top-[1px] after:left-[1px] peer-checked:after:translate-x-5 after:transition-all relative" />
        </label>
      </div>

      {/* Indoor Light */}
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <div className="bg-[var(--secund-coll)] p-4 rounded-2xl">
            <BsLightbulbFill size={55} className="text-[var(--primary-coll)]" />
          </div>
          <div className="flex flex-col text-xl">
            <span className="text-gray-600 font-semibold">Indoor Light</span>
            <span className="text-gray-500 text-[15px] font-bold">8</span>
          </div>
        </div>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[var(--primary-coll)] transition-all after:content-[''] after:absolute after:w-5 after:h-5 after:bg-white after:rounded-full after:translate-x-1 after:top-[1px] after:left-[1px] peer-checked:after:translate-x-5 after:transition-all relative" />
        </label>
      </div>

        {/* devices */}
        <h3 className='text-xl font-bold text-gray-600'>DEVICES</h3>
        
        <div className="flex items-center justify-between bg-[var(--primary-coll)] 
        rounded-[10px]
        ">
          <div className="p-3">
            <TabletSmartphone size={55} className="text-[var(--secund-coll)]" />
            <span className="text-[var(--secund-coll)] ">smartphone</span>
          </div>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-950 transition-all after:content-[''] after:absolute after:w-5 after:h-5 after:bg-white after:rounded-full after:translate-x-1 after:top-[2px] after:left-[1px] peer-checked:after:translate-x-5 after:transition-all relative  rotate-90" />
        </label>
      </div>

        <div className="flex items-center justify-between bg-[var(--primary-coll)] 
        rounded-[10px]
        ">
          <div className="p-3">
            <Refrigerator size={55} className="text-[var(--secund-coll)]" />
            <span className="text-[var(--secund-coll)] ">Refrigerator</span>
          </div>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-950 transition-all after:content-[''] after:absolute after:w-5 after:h-5 after:bg-white after:rounded-full after:translate-x-1 after:top-[2px] after:left-[1px] peer-checked:after:translate-x-5 after:transition-all relative  rotate-90" />
        </label>
      </div>

        <div className="flex items-center justify-between bg-[var(--secund-coll)] 
        rounded-[10px]
        ">
          <div className="p-3">
            <TvMinimal size={55} className="text-[var(--primary-coll)]" />
            <span>Smart TV</span>
          </div>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-950 transition-all after:content-[''] after:absolute after:w-5 after:h-5 after:bg-white after:rounded-full after:translate-x-1 after:top-[2px] after:left-[1px] peer-checked:after:translate-x-5 after:transition-all relative  rotate-90" />
        </label>
      </div>

        <div className="flex items-center justify-between bg-[var(--secund-coll)] 
        rounded-[10px]
        ">
          <div className="p-3">
            <AirVent size={55} className="text-[var(--primary-coll)]" />
            <span>AirVent</span>
          </div>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-950 transition-all after:content-[''] after:absolute after:w-5 after:h-5 after:bg-white after:rounded-full after:translate-x-1 after:top-[2px] after:left-[1px] peer-checked:after:translate-x-5 after:transition-all relative  rotate-90" />
        </label>
      </div>

    </div>
  );
};

export default ReightPainel;
