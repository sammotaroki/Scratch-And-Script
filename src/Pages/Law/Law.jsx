import React, { Component } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Law.css'
import { GetCategoryInfoByCountryIdAndCategoryId } from '../../services/CategoryInfoServices'
import withRouter from '../../withRouter'
import { SelectInputs } from '../../Components/FormElements/Inputs/SelectInputs/SelectInput'
import { GetCountries } from '../../services/CountryServices'
import Partners from '../../Components/Partners/Partners'
import Banner from '../../Components/Banner/Banner'

class Law extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country1: 1,
            country2: 0,
            categoryId: 0,
            categoryInfo1: "",
            categoryInfo2: "",
            countryData: [],
            loadData: false
        };

        this.selectCountry1 = this.selectCountry1.bind(this);
        this.selectCountry2 = this.selectCountry2.bind(this);
    }

    componentDidMount() {
        if (!this.state.loadData) {
            // this.setState({categoryId: })
            this.CountryData();
            this.CategoryData1();
            this.setState({ loadData: true });


        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.params !== this.props.params) {
            this.CategoryData1();
            this.CategoryData2();
        }
    }

    selectCountry1(val) {
        console.log("Country 1: ", val);
        this.setState({
            country1: val
        }, () => {
            this.CategoryData1();
        });
    }

    selectCountry2(val) {
        console.log("Country 2: ", val);
        this.setState({
            country2: val
        }, () => {
            this.CategoryData2();
        });
        // if (val !== 0) {
        //     this.setState({ country2: val });
        //     this.CategoryData2();
        // }
    }


    async CountryData() {
        await GetCountries(0, 100000).then((data) => {
            let starndardArray = [];
            data.content.forEach((country) => {
                let standardData = {
                    id: 0,
                    value: ""
                };
                standardData.id = country.id;
                standardData.value = country.countryName;
                starndardArray.push(standardData);

            });
            this.setState({ countryData: starndardArray });
        });
    }



    async CategoryData1() {
        await GetCategoryInfoByCountryIdAndCategoryId(this.state.country1, this.props.params.id)
            .then((data) => {
                if (data.length > 0) {
                    this.setState({ categoryInfo1: data[0].categoryInformation })
                } else {
                    this.setState({ categoryInfo1: "No Data!" })
                }

            });
        console.log("Category info: ", this.categoryInfo);
    }

    async CategoryData2() {
        await GetCategoryInfoByCountryIdAndCategoryId(this.state.country2, this.props.params.id)
            .then((data) => {
                if (data.length > 0) {
                    this.setState({ categoryInfo2: data[0].categoryInformation })
                } else {
                    this.setState({ categoryInfo2: "No Data!" })
                }

            });
        console.log("Category info: ", this.categoryInfo);
    }

    createMarkup(text) { return { __html: text }; };

    render() {
        const { country1, country2, categoryInfo1, categoryInfo2, countryData } = this.state;
        return (

            <div>
                <Navbar />
                <div className='title'>
                    <h3>Law</h3>
                </div>
                <div className='body_container'>
                    <div class="navigation">
                        <Sidebar />
                    </div>

                    <div className='content_body'>
                        <div className='content_search'>
                            <div>
                                <label>Please select: </label>
                                <div>
                                    <SelectInputs elemName={"selCountry1"} elemId={"selCountry1"} optionData={countryData} sendValueToParent={this.selectCountry1} />
                                </div>
                            </div>

                            <div>
                                <label>Compare to: </label>
                                <div>
                                    <SelectInputs elemName={"selCountry2"} elemId={"selCountry2"} optionData={countryData} sendValueToParent={this.selectCountry2} />
                                </div>
                            </div>
                        </div>
                        <div className='paragraph'>
                            <div id="comparison1">
                                <div dangerouslySetInnerHTML={this.createMarkup(categoryInfo1)} />
                            </div>
                            {categoryInfo2 && (
                                <div id="comparison2">
                                    <div dangerouslySetInnerHTML={this.createMarkup(categoryInfo2)} />
                                </div>
                            )}
                            {/* {Data && Data.filter(data => {
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
                                    <img src={data.image} alt='' className='country_img' />
                                    <h2>{data.name}</h2>
                                    <p>{data.law}</p>
                                    
                                </div>
                            ))
                            } */}

                        </div>
                    </div>
                </div>
                <Partners />
                <Banner />
            </div>
        )
    }
}
export default withRouter(Law) 