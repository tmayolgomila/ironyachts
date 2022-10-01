import "./styles.css";

export default function Archive(){
    return (
        <div className="cajaArchivos">
            <h2>Categorías</h2>
            <div className="cartasCategorias" >
                <div className="carta motores">
                <a>Motores</a>
                </div>
                <div className="carta calderas">
                <a>Calderas</a>
                </div>
                <div className="carta generadores">
                <a>Generadores</a>
                </div>
                <div className="carta compresores">
                <a>Compresores</a>
                </div>
                <div className="carta bombas">
                <a>Bombas</a>
                </div>
                <div className="carta reductoras">
                <a>Reductoras</a>
                </div>
            </div>
        </div>
    )
}