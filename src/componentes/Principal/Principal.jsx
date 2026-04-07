import "./Principal.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Principal({ voltarPara, titulo, children }) {
  const navigate = useNavigate();

  return (
    <main className="principal__root">
      <div className="principal__titulo">
        {voltarPara && <IoIosArrowBack size={24} onClick={() => navigate(voltarPara)} />}

        <h2>{titulo}</h2>
      </div>

      {children}
    </main>
  );
}

export default Principal;
