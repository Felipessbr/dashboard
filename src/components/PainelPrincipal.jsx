import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Leaf, Snowflake, Waves } from "lucide-react";

const PainelPrincipal = () => {
  const [nome, setNome] = useState("");

  useEffect(() => {
    const nomeSalvo = localStorage.getItem("nomeUsuario");
    if (nomeSalvo) {
      setNome(nomeSalvo);
    } else {
      const nomeUsuario = prompt("Qual é o seu nome?");
      if (nomeUsuario && nomeUsuario.trim() !== "") {
        setNome(nomeUsuario);
        localStorage.setItem("nomeUsuario", nomeUsuario);
      } else {
        setNome("Visitante");
      }
    }
  }, []);

  return (
    <div className="bg-[var(--secund-coll)] flex-1 min-h-[70vh] rounded-none lg:rounded-b-4xl lg:px-15 px-6 py-10">
      <div className="flex flex-col left-10">
        {/* Campo de busca */}
        <div className="flex items-center gap-4 bg-white rounded-full px-6 py-3 w-full max-w-[30rem] shadow mb-12 h-13">
          <FiSearch className="text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none flex-1 text-gray-700 text-base bg-transparent"
          />
        </div>

        {/* Saudação */}
        <div className="mb-10">
          <h1 className="text-3xl lg:text-5xl font-light text-black">
            Hello, <span className="font-bold">{nome}!</span>
          </h1>
          <p className="text-xl text-gray-500 mt-3">Room temperature</p>
        </div>
      </div>

      {/* Controles responsivos */}
<div className="flex flex-row gap-4 lg:gap-8">
  {[
    {
      icon: <Snowflake size={36} className="text-[var(--primary-coll)]" />,
      label: "Cool",
    },
    {
      icon: <Waves size={36} className="text-[var(--primary-coll)]" />,
      label: "Heat",
    },
    {
      icon: <Leaf size={36} className="text-[var(--primary-coll)]" />,
      label: "Auto",
    },
  ].map((item, index) => (
   <div
  key={index}
  className="flex flex-col justify-center items-center gap-2 bg-white p-6 rounded-2xl shadow w-30 h-36 cursor-pointer border-l-4 border-b-4 border-transparent hover:border-l-[4px] hover:border-b-[4px] hover:border-l-[#8B4CFF] hover:border-b-[#8B4CFF] transition-all duration-300 ease-in-out"
>
  {item.icon}
  <span className="font-medium">{item.label}</span>
</div>

  ))}
</div>




    </div>
  );
};

export default PainelPrincipal;
