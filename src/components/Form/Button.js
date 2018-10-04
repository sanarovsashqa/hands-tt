import styled from 'styled-components';

const Input = styled.button.attrs({
  type: 'submit'
})`
  width: 200px;
  height: 40px;
  padding: 5px;
  border: 2px solid #000000;
  font-size: 20px;
  color: #ffffff;
  background-color: #000000;
  cursor: pointer;
`;

export default Input;
