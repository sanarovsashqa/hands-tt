import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstColor: null, secondColor: null };
  }

  onSubmit = evt => {
    const { firstColor, secondColor } = this.state;

    evt.preventDefault();
    this.props.updateColor(firstColor, secondColor);
  };

  onInputChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <StyledForm onSubmit={this.onSubmit}>
        <Input
          name={'firstColor'}
          placeholder={'Первый цвет'}
          onChange={this.onInputChange}
        />
        <Input
          name={'secondColor'}
          placeholder={'Второй цвет'}
          onChange={this.onInputChange}
        />
        <Button>Go!</Button>
      </StyledForm>
    );
  }
}

export default Form;
