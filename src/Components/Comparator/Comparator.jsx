import React, { Component } from 'react'
import { CountryDropdown } from 'react-country-region-selector';
import './Comparator.css'

class Comparator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country1: '',
            country2: '',
        };
    }

    selectCountry1(val) {
        this.setState({ country1: val })
    }

    selectCountry2(val) {
        this.setState({ country2: val })
    }

    render() {
        const { country1, country2 } = this.state;
        return (
            <div className='comparator'>
                <div className='comp_body'>
                    <div className='searchbox'>
                        <label>Please select: </label>
                        <CountryDropdown className='selectbox' value={country1} onChange={(val) => this.selectCountry1(val)} />
                    </div>
                    <div className='searchbox'>
                        <label>Compare to: </label>
                        <CountryDropdown className='selectbox' value={country2} onChange={(val) => this.selectCountry2(val)} />
                    </div>
                    <button className='go' onClick={({})}>
                        GO
                    </button>

                    {/* Fetch and display comparison results here */}
                </div>
            </div>
        )
    }

}


export default Comparator