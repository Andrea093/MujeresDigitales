import PropTypes from "prop-types";
import './AddTask.css'; // Asegúrate de importar el archivo CSS

const AddTask = ({ listTask, setlistTask }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const title = e.target[0].value; // Obtén el valor del input
        const description = e.target[1].value; // Obtén el valor del textarea

        setlistTask([...listTask, { title, description }]);
    };

    return (
        <section>
            <h1>Agregar una tarea</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Título de la tarea" />
                <textarea placeholder="Descripción de la tarea"></textarea>

                <button type="submit" className="coquette-button">Agregar</button>
            </form>
        </section>
    );
};

AddTask.propTypes = {
    listTask: PropTypes.array.isRequired,
    setlistTask: PropTypes.func.isRequired,
};

export default AddTask;