import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonAtomContainer = styled.li`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #f0f0f0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const ButtonAtom = ({ text, value, setShowComponent }) => {
  const handleClick = () => {
    setShowComponent(value);

    console.log(`Esta en la pantalla ${value ? "Izquierda" : "Derecha"}`);
  };

  return (
    <ButtonAtomContainer>
      <button onClick={handleClick}>{text}</button>
    </ButtonAtomContainer>
  );
};

ButtonAtom.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  setShowComponent: PropTypes.func.isRequired,
};

export default ButtonAtom;