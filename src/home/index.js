import "./styles.css";
import fotoTitulo from "./Biblioyachts.jpg"

export default function Home(){
    return(
        <div>
            <img className="titulo" src={fotoTitulo}></img>
            <h2 className="subTitulo" >La correcta gestión de los datos aumenta la eficiencia.</h2>
            <div className="textoInfo" >
            <p>BiblioYachts es un archivo de manuales de taller para el mantenimiento y reparación de embarcaciones.</p>
            <p>Construyamos entre todos los talleres una biblioteca donde encontrar toda la información oficial disponible, accesible y organizada por categorías para facilitar y agilizar nuestro trabajo.</p>
            </div>
        </div>
    )
}