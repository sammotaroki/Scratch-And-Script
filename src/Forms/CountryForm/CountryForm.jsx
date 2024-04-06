import React, { useRef } from "react";
import './CountryForm.css';
import { Label } from "../../Components/FormElements/Label/Label";
import { TextInputs } from "../../Components/FormElements/Inputs/TextInputs/TextInputs";
import { ButtonInput } from "../../Components/FormElements/Inputs/ButtonInputs/ButtonInputs";
import {PostCountry} from '../../services/CountryServices';


export function CountryForm() {
    const form = useRef(null);

    let countryData = {
        id: 0,
        countryCode: " ",
        countryName: " ",
        callingCode: 0,
        officialLanguage: " ",
        capital: " ",
        currency: " ",
        countryFlag: " ",
        internetUsers: 0,
        population: 0
    }

    const countrySubmit = async (e) => {
        e.preventDefault();

        const data = new FormData(form.current);
        let finalData;

        countryData.countryCode = data.get("txtCountryCode");
        countryData.countryName = data.get("txtCountryName");
        countryData.callingCode = Number.parseInt(data.get("txtCallingCode"));
        countryData.officialLanguage = data.get("txtOfficialLanguage");
        countryData.capital = data.get("txtCapital");
        countryData.currency = data.get("txtCurrency");
        countryData.countryFlag = data.get("txtFlag");
        countryData.internetUsers = Number.parseInt(data.get("txtInternetUsers"));
        countryData.population = Number.parseInt(data.get("txtPopulation"));
        countryData.url = data.get("txtUrl");

        const postedData = await PostCountry(countryData);
        if (postedData) {
            alert("Country Data Saved Successfully");
            clearForm();
        }


        console.log("Posted Data: ", postedData);
    }

    const clearForm = () => {
        document.getElementById("txtCountryCode").value = "";
        document.getElementById("txtCountryName").value = "";
        document.getElementById("txtCallingCode").value = "";
        document.getElementById("txtOfficialLanguage").value = "";
        document.getElementById("txtCapital").value = "";
        document.getElementById("txtCurrency").value = "";
        document.getElementById("txtFlag").value = "";
        document.getElementById("txtInternetUsers").value = "";
        document.getElementById("txtPopulation").value = "";
        document.getElementById("txtUrl").value = "";
    }

    return (
        <>
            <div className='countryForm' >
                <h4>Setup Country</h4>
                {/* Country Form */}
                <form ref={form} onSubmit={countrySubmit}>
                    <div className="formElemnt">
                        <div>
                            <Label labelId={"txtCountryCode"} labelName={"Country Code"}/>
                        </div>
                        <div>
                            <TextInputs elemId={"txtCountryCode"} elemType={"text"} elemName={"txtCountryCode"} reset/>
                        </div>
                        
                    </div>
                    <div className="formElemnt">
                        <div>
                            <Label labelId={"txtCountryName"} labelName={" Country Name"}/>
                        </div>
                        <div>
                            <TextInputs elemId={"txtCountryName"} elemType={"text"} elemName={"txtCountryName"} />
                        </div>
                        
                    </div>

                    <div className="formElemnt">
                        <div>
                            <Label labelId={"txtCallingCode"} labelName={"Calling Code"}/>
                        </div>
                        <div>
                            <TextInputs elemId={"txtCallingCode"} elemType={"text"} elemName={"txtCallingCode"} />
                        </div>
                        
                    </div>

                    <div className="formElemnt">
                        <div>
                            <Label labelId={"txtOfficialLanguage"} labelName={"Official Language"}/>
                        </div>
                        <div>
                            <TextInputs elemId={"txtOfficialLanguage"} elemType={"text"} elemName={"txtOfficialLanguage"} />
                        </div>
                        
                    </div>

                    <div className="formElemnt">
                        <div>
                            <Label labelId={"txtCapital"} labelName={"Capital"}/>
                        </div>
                        <div>
                            <TextInputs elemId={"txtCapital"} elemType={"text"} elemName={"txtCapital"} />
                        </div>
                        
                    </div>
                    <div className="formElemnt">
                        <div>
                            <Label labelId={"txtCurrency"} labelName={"Currency"}/>
                        </div>
                        <div>
                            <TextInputs elemId={"txtCurrency"} elemType={"text"} elemName={"txtCurrency"} />
                        </div>
                        
                    </div>
                    <div className="formElemnt">
                        <div>
                            <Label labelId={"txtFlag"} labelName={"Country Flag"}/>
                        </div>
                        <div>
                            <TextInputs elemId={"txtFlag"} elemType={"text"} elemName={"txtFlag"} />
                        </div>
                        
                    </div>
                    <div className="formElemnt">
                        <div>
                            <Label labelId={"txtInternetUsers"} labelName={"Internet Users"}/>
                        </div>
                        <div>
                            <TextInputs elemId={"txtInternetUsers"} elemType={"number"} elemName={"txtInternetUsers"} elemMin={"100000"} elemMax={"100000000000000"}/>
                        </div>
                        
                    </div>
                    <div className="formElemnt">
                        <div>
                            <Label labelId={"txtPopulation"} labelName={"Population"}/>
                        </div>
                        <div>
                            <TextInputs elemId={"txtPopulation"} elemType={"number"} elemName={"txtPopulation"} />
                        </div>
                        
                    </div>
                    <div className="formElemnt">
                        <div>
                            <Label labelId={"txtUrl"} labelName={"Url"}/>
                        </div>
                        <div>
                            <TextInputs elemId={"txtUrl"} elemType={"text"} elemName={"txtUrl"} />
                        </div>
                        
                    </div>

                    <div className="formSuffix" >
                        <ButtonInput elemId={"btnSaveCountry"} elemClass={"btnSuccess"} elemValue={"Save Country"} elemType={"submit"}/>
                    </div>
                </form>
            </div>
        </>
            );
}