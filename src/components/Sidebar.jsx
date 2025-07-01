import {
  FiHome,
  FiSettings,
  FiGrid,
  FiEdit,
  FiMapPin,
  FiUser,
} from "react-icons/fi";
import { SiAndroidauto } from "react-icons/si";

const Sidebar = () => {
  return (
    <div className="bg-[var(--primary-coll)] text-white flex lg:flex-col flex-row justify-center items-center gap-6 lg:gap-8 w-full lg:w-[130px] lg:h-[75vh] h-[15vh] rounded-none lg:rounded-br-4xl">
      {[FiUser, FiHome, FiSettings, FiGrid, FiEdit, SiAndroidauto, FiMapPin].map(
        (Icon, index) => (
          <Icon
            key={index}
            size={40}
            className="w-full cursor-pointer transition-all duration-300 ease-in-out 
              lg:hover:scale-110 
              lg:hover:bg-white 
              lg:hover:text-black 
               lg:rounded-br-3xl
              lg:hover:p-2"
          />
        )
      )}
    </div>
  );
};

export default Sidebar;
