import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar';
import { CountryDropdown } from 'react-country-region-selector';
import Data from '../../data.json'

class Marketing extends Component {
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

            <div>
                <Navbar />
                <div className='title'>
                    <h3>Electronic Marketing</h3>
                </div>
                <div className='body_container'>
                    <Sidebar />
                    <div className='content_body'>
                        <div className='content_search'>
                            <div>
                                <label>Please select: </label>
                                <CountryDropdown className='content_select' value={country1} onChange={(val) => this.selectCountry1(val)} whitelist={['AO', 'DZ', 'BJ', 'BW', 'BF', 'BI', 'CV', 'CF', 'TD', 'KM', 'CG', 'CD', 'CI', 'CM', 'DJ', 'EG', 'GQ', 'ER', 'SZ', 'ET', 'GA', 'GM', 'GH', 'GN', 'GW', 'KE', 'LS', 'LR', 'LY', 'MG', 'MW', 'ML', 'MR', 'MU', 'MA', 'MZ', 'NA', 'NE', 'NG', 'RW', 'ST', 'SN', 'SC', 'SL', 'SO', 'ZA', 'SD', 'SS', 'TZ', 'TG', 'TN', 'UG', 'ZM', 'ZW']} />
                            </div>

                            <div>
                                <label>Compare to: </label>
                                <CountryDropdown className='content_select' value={country2} onChange={(val) => this.selectCountry2(val)} whitelist={['AO', 'DZ', 'BJ', 'BW', 'BF', 'BI', 'CV', 'CF', 'TD', 'KM', 'CG', 'CD', 'CI', 'CM', 'DJ', 'EG', 'GQ', 'ER', 'SZ', 'ET', 'GA', 'GM', 'GH', 'GN', 'GW', 'KE', 'LS', 'LR', 'LY', 'MG', 'MW', 'ML', 'MR', 'MU', 'MA', 'MZ', 'NA', 'NE', 'NG', 'RW', 'ST', 'SN', 'SC', 'SL', 'SO', 'ZA', 'SD', 'SS', 'TZ', 'TG', 'TN', 'UG', 'ZM', 'ZW']} />
                            </div>
                        </div>
                        <div className='paragraph'>
                            {Data && Data.filter(data => {
                                if (country1 === "") {
                                    return data[0];
                                } else if (data.name.includes(country1)) {
                                    return data;
                                } else if (country2 === "") {
                                    return data[0];
                                } else if (data.name.includes(country2)) {
                                    return data;
                                }
                            }).map((data, index) => (
                                <div className='box' key={index}>
                                    <h2>{data.name}</h2>
                                    <p>{data.marketing}</p>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Marketing