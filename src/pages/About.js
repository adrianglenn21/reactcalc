import React, { Component } from 'react'
import Header from '../components/Header'

export class About extends Component {
    render() {
        const currentYear = new Date().getFullYear();
        return (
            <>
                <Header />
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-6 mt-5'>
                            <div className='card mt-5 rounded-lg'>
                                <div className='card-body text-center'>
                                    <p className='h2'>
                                        <img src={process.env.PUBLIC_URL + '/calculator.png'} alt="Logo" width={'40px'} height={'40px'} />
                                        <span className='ml-1'>ReactCalc</span>
                                    </p>
                                    <br />
                                    <p className='h6'>
                                        <span>Created by: Adrian Glenn</span>
                                        <br />
                                        <span>Github: <a href='https://github.com/adrianglenn21' target='_blank' rel="noreferrer">https://github.com/adrianglenn21</a></span>
                                        <br />
                                        <span>{currentYear}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default About