import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'text',
  name: props => props.name,
  placeholder: props => props.placeholder,
  maxLength: '7',
  pattern: '#[0-9A-Fa-f]{6}',
  required: true
})`
  width: 200px;
  height: 40px;
  margin-bottom: 10px;
  padding: 10px;
  border: 2px solid #000000;
  font-size: 16px;
  color: #000000;
`;

export default Input;
