import { FiPower } from "react-icons/fi";
import SideBotton from "./SideBotton";

const Power = () => {
  return (
    <div className="power-custom flex flex-wrap gap-30 relative top-12">
      {/* Botão de logout */}
      <div className="button-power w-[17rem] h-[60px] bg-[var(--secund-coll)] flex items-center justify-center rounded-tr-full text-xl rounded-br-full cursor-pointer shadow-md">
        <div className=" flex gap-2 items-center text-gray-600 font-bold text-md">
          <FiPower size={20} />
          <span className="power-btn hidden sm:inline">Logout</span>
        </div>
      </div>

      {/* Cards de ação */}
        <div className="bottom-10 relative">
          <SideBotton />
        </div>
    </div>
  );
};

export default Power;
