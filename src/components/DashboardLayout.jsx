import Sidebar from "./Sidebar";
import PainelPrincipal from "./PainelPrincipal";
import PainelLeft from "./PainelLeft";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-12 lg:w-[93.9vw] h-auto lg:h-[75vh]">
      <Sidebar />
      <PainelPrincipal />
      <PainelLeft/>
    </div>
  );
};

export default Dashboard;
