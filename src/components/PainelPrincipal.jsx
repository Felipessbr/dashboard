import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Leaf, Snowflake, Waves } from "lucide-react";

const PainelPrincipal = () => {
  const [nome, setNome] = useState("");
  const [temperatura, setTemperatura] = useState(null);
  const [cidade, setCidade] = useState("Jacareí");
  const [erro, setErro] = useState(null);

  const apiKey = "07e5fc5d2a994d1cbef815eda74b1078";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

  // Função para buscar temperatura da API para uma cidade
  const fetchWeatherData = async (city) => {
    if (!city || city.trim() === "") {
      setErro("Digite uma cidade válida.");
      setTemperatura(null);
      return;
    }

    try {
      setErro(null); // limpa erro antes da requisição
      const response = await fetch(
        `${apiUrl}?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || "Erro ao buscar temperatura");
      }
      const data = await response.json();
      console.log("Dados da API:", data);
      const tempAtual = Math.round(data.main.temp);
      setTemperatura(tempAtual);
    } catch (error) {
      console.error("Erro:", error.message);
      setErro("Cidade não encontrada ou erro na busca.");
      setTemperatura(null);
    }
  };

  // Ao montar o componente, buscar nome salvo e temperatura inicial
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

    fetchWeatherData(cidade);

    const interval = setInterval(() => {
      fetchWeatherData(cidade);
    }, 60000); // atualiza a cada 1 minuto

    return () => clearInterval(interval);
  }, []);

  // Função chamada ao submeter o form
  const handleBuscar = (e) => {
    e.preventDefault();
    const cidadeLimpa = cidade.trim();
    if (!cidadeLimpa) {
      setErro("Digite uma cidade válida.");
      return;
    }
    fetchWeatherData(cidadeLimpa);
  };

  return (
    <div
      className="bg-[var(--secund-coll)] flex-1 min-h-[70vh] rounded-none lg:rounded-b-4xl lg:px-15 px-6 py-10"
      translate="no"
    >
      <div className="flex flex-col left-10">
        {/* Campo de busca */}
        <form
          onSubmit={handleBuscar}
          className="flex items-center gap-4 bg-white rounded-full px-6 py-3 w-full max-w-[30rem] shadow mb-12 h-13"
        >
          <FiSearch className="text-gray-400 text-xl cursor-pointer" />
          <input
            type="text"
            placeholder="Digite o nome da cidade"
            className="outline-none flex-1 text-gray-700 text-base bg-transparent"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            translate="no"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
          />
          <button
            type="submit"
            className="font-semibold text-[var(--primary-coll)] hover:underline cursor-pointer"
          >
            Buscar
          </button>
        </form>

        {/* Saudação e temperatura */}
        <div className="mb-10">
          <h1 className="text-3xl lg:text-5xl font-light text-black">
            Hello, <span className="font-bold">{nome}!</span>
          </h1>
          <p className="text-xl text-gray-500 mt-3">Temperatura em {cidade}</p>
          {erro ? (
            <p className="text-red-500 font-semibold mt-1">{erro}</p>
          ) : (
            <p className="text-4xl font-bold text-black mt-1">
              {temperatura !== null ? `${temperatura}°C` : "Carregando..."}
            </p>
          )}
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
