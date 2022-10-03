import "./styles.css";
import { Link } from "react-router-dom";

export default function Archive() {
  return (
    <div className="cajaArchivos">
      <h2 className="categoriash2">CATEGORÍAS</h2>
      <div className="cartasCategorias">
        <ul>
        <Link to="/motores">
          <li>Motores</li>
        </Link>

        <Link to="/motores">
          <li>Calderas</li>
        </Link>

        <Link to="/motores">
          <li>Generadores</li>
        </Link>

        <Link to="/motores">
          <li>Compresores</li>
        </Link>

        <Link to="/motores">
          <li>Bombas</li>
        </Link>

        <Link to="/motores">
          <li>Reductoras</li>
        </Link>
        </ul>
      </div>
    </div>
  );
}
