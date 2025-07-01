import { FiSun, FiMoon } from "react-icons/fi";
import { CiLogin, CiLogout } from "react-icons/ci";

const actions = [
  { icon: <FiSun size={50} className="text-[var(--primary-coll)]" />, label: "Wake up" },
  { icon: <FiMoon size={50} className="text-[var(--primary-coll)]" />, label: "Good night" },
  { icon: <CiLogin size={50} className="text-[var(--primary-coll)]" />, label: "Leave home" },
  { icon: <CiLogout size={50} className="text-[var(--primary-coll)]" />, label: "Back home" },
];

const SideBotton = () => {
  return (
    <div className="justify-center flex gap-7 flex-wrap flex-row px-4 py-6 relative">
      {actions.map((action, index) => (
        <div
          key={index}
          className="card-custom  bg-[var(--secund-coll)] rounded-xl h-40 w-40 flex flex-col items-center justify-center space-y-2 shadow-sm cursor-pointer border-l-4 border-b-4 border-transparent hover:border-l-[4px] hover:border-b-[4px] hover:border-l-[#8B4CFF] hover:border-b-[#8B4CFF] transition-all duration-300 ease-in-out"
        >
          {action.icon}
          <span className="text-gray-700 text-center">{action.label}</span>
        </div>
      ))}
    </div>
  );
};

export default SideBotton;
