import React, { Component } from 'react';

class NumberButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', 'C', '=', '+'
      ],
    };
  }

  render() {
    const operators = ["+", "-", "/", "*", "=", "C"];
    const { buttons } = this.state;

    const buttonStyle = {
      margin: '4px',
      padding: '8px',
      fontSize: '16px',
      width: '94px'
    };

    return (
      <div>
        {buttons.map((button, index) => (
          <React.Fragment key={button}>
            <button style={buttonStyle} type='button' value={button} className={(operators.includes(button) ? 'btn btn-warning' : 'btn btn-primary')}
              onClick={(!isNaN(button) ? this.props.onClick : (button === "=" ? this.props.onClickProcess : this.props.onAddOperator))}>{button}
            </button>
            {(index + 1) % 4 === 0 && <br />}
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default NumberButtons;