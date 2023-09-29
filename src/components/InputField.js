import React, { Component } from 'react'

export class InputField extends Component {
    render() {
        const inputStyle = {
            width: '400px',
            padding: '10px'
        }
        return (
            <div className='form-group'>
                <input type="text" className='form-control mx-auto my-3 text-center' value={this.props.input} style={inputStyle} readOnly/>
            </div>
        )
    }
}

export default InputField