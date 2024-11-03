import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.primary ? '#4CAF50' : '#008CBA'};
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  &:hover {
    opacity: 0.9;
  }
`;

export default Button;

