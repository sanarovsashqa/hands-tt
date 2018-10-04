import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Form from 'components/Form';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${props =>
    `linear-gradient(${props.firstColor}, ${props.secondColor})`};
`;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstColor: null, secondColor: null };
  }

  updateColor = (firstColor, secondColor) => {
    this.setState({ firstColor, secondColor });
  };

  render() {
    const { firstColor, secondColor } = this.state;

    return (
      <StyledMain firstColor={firstColor} secondColor={secondColor}>
        <Title>Введите цвета в формате #rrggbb</Title>
        <Form updateColor={this.updateColor} />
      </StyledMain>
    );
  }
}

export default Main;
