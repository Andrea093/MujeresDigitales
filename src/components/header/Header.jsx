import PropTypes from "prop-types";
import { useState } from "react"; // Importar useState para manejar el estado
import BottonAtom from "./components/BottonAtom";
import './Header.css'; // Asegúrate de que la ruta sea correcta

const Header = ({ setShowComponent }) => {
    const [taskStatus, setTaskStatus] = useState(null); // Estado para manejar el estado de las tareas

    const handleCheckStatus = () => {
        // Cambia el estado de la tarea entre 'Pendiente' y 'Realizada'
        setTaskStatus((prevStatus) => (prevStatus === "Pendiente" ? "Realizada" : "Pendiente"));
    };

    return (
        <header>
            <nav>
                <ul>
                    <BottonAtom text="Agregar Tarea" value={true} setShowComponent={setShowComponent} />
                    <BottonAtom text="Ver Tareas" value={false} setShowComponent={setShowComponent} />
                    <li>
                        <button className="coquette-button" onClick={handleCheckStatus}>
                            {taskStatus === "Pendiente" ? "Estado: Pendiente" : "Estado: Realizada"}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

Header.propTypes = {
    setShowComponent: PropTypes.func.isRequired,
};

export default Header;