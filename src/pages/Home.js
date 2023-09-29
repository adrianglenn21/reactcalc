import React, { Component } from 'react'
import Header from '../components/Header'
import InputField from '../components/InputField'
import NumberButtons from '../components/NumberButtons'

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            newValue: '',
            operation: '',
            total: ''
        };
    }

    onClick = (event) => {
        const clickedValue = event.target.value;
        this.setState({ newValue: this.state.newValue + clickedValue });
    }

    onAddOperator = (event) => {
        const { value, newValue } = this.state
        const clickedValue = event.target.value;

        if (clickedValue === 'C') {
            this.setState({ value: '', newValue: '' });
        } else {
            this.setState({ operation: clickedValue, newValue: ' ' });
            if (!value) {
                this.setState({ value: newValue });
            }
        }
    }

    onClickProcess = (event) => {
        const { value, newValue, operation } = this.state;

        switch (operation) {
            case "+":
                this.setState({ newValue: parseFloat(value) + parseFloat(newValue) });
                break;
            case "-":
                this.setState({ newValue: parseFloat(value) - parseFloat(newValue) });
                break;
            case "*":
                this.setState({ newValue: parseFloat(value) * parseFloat(newValue) });
                break;
            case "/":
                this.setState({ newValue: parseFloat(value) / parseFloat(newValue) });
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <>
                <Header />
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-6'>
                            <div className='text-center mt-5 py-5 border rounded-lg'>
                                <>
                                    <InputField input={this.state.newValue} />
                                    <NumberButtons onClick={this.onClick} onAddOperator={this.onAddOperator} onClickProcess={this.onClickProcess} />
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home