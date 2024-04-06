import React, { useEffect, useRef, useState } from "react";
import './SetupForm.css';
import { Label } from "../../Components/FormElements/Label/Label";
import { TextInputs } from "../../Components/FormElements/Inputs/TextInputs/TextInputs";
import { ButtonInput } from "../../Components/FormElements/Inputs/ButtonInputs/ButtonInputs";
import { GetLegislatureType, PostLegislatureType } from "../../services/LegislatureTypeService";
import { GetLegislatureProtection, PostLegislatureProtection } from "../../services/LegislatureProtectionService";
import { PostCategory } from "../../services/CategoryServices";
import Navbar from "../../Components/Navbar/Navbar";
import { SelectInputs } from "../../Components/FormElements/Inputs/SelectInputs/SelectInput";
import { PostCountryLegislation } from "../../services/CountryLegislationService";
import { GetCountries } from "../../services/CountryServices";

export function SetupForm() {
    const legislatureTypeForm = useRef(null);
    const legislatureProtectionForm = useRef(null);
    const categoryForm = useRef(null);
    const countryLegisForm = useRef(null);

    const [countryData, setCountries] = useState([]);
    const [legislationTypeData, setLegislations] = useState([]);
    const [legislationProtectionData, setLegislationProtections] = useState([]);

    useEffect (() => {
        
        GetCountries(0, 100000).then((data) => {
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
            setCountries(starndardArray);
        });
        
        
        
        GetLegislatureType(0, 100000).then((data) => {
            
            let starndardArray = [];
            
            data.content.forEach((type) => {
                let standardData = {
                    id: 0,
                    value: ""
                };
                standardData.id = type.id;
                standardData.value = type.legislatureType;
                starndardArray.push(standardData);
                
            });
            setLegislations(starndardArray);
        });
        
        

        GetLegislatureProtection(0, 100000).then((data) => {
            
            let starndardArray = [];
            data.content.map((protection) => {
                let standardData = {
                    id: 0,
                    value: ""
                };
                standardData.id = protection.id;
                standardData.value = protection.protection;
                starndardArray.push(standardData);
                
            });
            setLegislationProtections(starndardArray);
        });
        

    }, []) ;

    let legislatureTypeData = {
        id: 0,
        legislatureType: ""
    }
       

    const legTypeSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData(legislatureTypeForm.current);
        let finalData;

        legislatureTypeData.legislatureType = data.get("txtLegislatureType");
        

        const postedData = await PostLegislatureType(legislatureTypeData);
        if (postedData) {
            alert("Legislature Type Saved Successfully");
            clearlegTypeForm();
        }


        console.log("Posted Data: ", postedData);
    }

    const legProtectionSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData(legislatureProtectionForm.current);
        let finalData;

        let legislatureProtectionData = {
            id: 0,
            protection: ""
        }

        legislatureProtectionData.protection = data.get("txtLegislatureProtection");
        

        const postedData = await PostLegislatureProtection(legislatureProtectionData);
        if (postedData) {
            alert("Legislature Protection Saved Successfully");
            clearlegProtectionForm();
        }


        console.log("Posted Data: ", postedData);
    }

    const categorySubmit = async (e) => {
        e.preventDefault();

        const data = new FormData(categoryForm.current);
        let finalData;

        let categoryData = {
            id: 0,
            name: "",
            icon: ""
        }

        categoryData.name = data.get("txtCategoryName");
        categoryData.icon = data.get("txtCategoryIcon");
        

        const postedData = await PostCategory(categoryData);
        if (postedData) {
            alert("Category Saved Successfully");
            clearCategoryForm();
        }


        console.log("Posted Data: ", postedData);
    }

    const countryLegisSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData(countryLegisForm.current);
        let finalData;

        let countryLegisData = {
            id: null,
            countryId: 0,
            legislatureName: "",
            legislatureTypeId: 0,
            legislatureProtectionId: 0
            
        }

        countryLegisData.legislatureName = data.get("txtCountryLegisName");
        countryLegisData.countryId = Number.parseInt(data.get("selCountry"));
        countryLegisData.legislatureTypeId = Number.parseInt(data.get("selLegisType"));
        countryLegisData.legislatureProtectionId = Number.parseInt(data.get("selLegisProtection"));
        

        const postedData = await PostCountryLegislation(countryLegisData);
        if (postedData) {
            alert("Category Saved Successfully");
            clearCountryLegislationForm();
        }


        console.log("Posted Data: ", postedData);
    }

    const clearlegTypeForm = () => {
        document.getElementById("txtLegislatureType").value = "";
    }

    const clearlegProtectionForm = () => {
        document.getElementById("txtLegislatureProtection").value = "";
    }

    const clearCategoryForm = () => {
        document.getElementById("txtCategoryName").value = "";
        document.getElementById("txtCategoryIcon").value = "";
    }

    const clearCountryLegislationForm = () => {
        document.getElementById("txtCountryLegisName").value = "";
        document.getElementById("selCountry").value = "";
        document.getElementById("selLegisType").value = "";
        document.getElementById("selLegisProtection").value = "";
    }

    return (
        <>
            
            <div id="setupForm">
                <div className="legislatureRow">
                <h4>Setup Legislature</h4>
                    <div id="legislatureType">
                        <form ref={legislatureTypeForm} onSubmit={legTypeSubmit}>
                            <div>
                                <Label labelId={"txtLegislatureType"} labelName={"Legislature Type"}/>
                            </div>
                            <div>
                                <TextInputs elemType={"text"} elemName={"txtLegislatureType"} elemId={"txtLegislatureType"}/> 
                            </div>
                            <div className="formSuffix" >
                                <ButtonInput elemId={"btnSaveLegType"} elemClass={"btnSuccess"} elemValue={"Save Legislature Type"} elemType={"submit"}/>
                            </div>
                        </form>
                    </div>
                    <div id="legislatureProtection">
                        <form ref={legislatureProtectionForm} onSubmit={legProtectionSubmit}>
                            <div>
                                <Label labelId={"txtLegislatureProtection"} labelName={"Legislature Protection"}/>
                            </div>
                            <div>
                                <TextInputs elemType={"text"} elemName={"txtLegislatureProtection"} elemId={"txtLegislatureProtection"}/> 
                            </div>
                            <div className="formSuffix" >
                                <ButtonInput elemId={"btnSaveLegProtection"} elemClass={"btnSuccess"} elemValue={"Save Legislature Protection"}/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="categoryRow">
                    <h4>Setup Category</h4>
                        <div>
                            <form ref={categoryForm} onSubmit={categorySubmit}>
                                <div id="categoryName">
                                    <div>
                                        <Label labelId={"txtCategoryName"} labelName={"Category"}/>
                                    </div>
                                    <div>
                                        <TextInputs elemType={"text"} elemName={"txtCategoryName"} elemId={"txtCategoryName"}/> 
                                    </div>
                                </div>
                                
                                <div id="categoryIcon">
                                    <div>
                                        <Label labelId={"txtCategoryIcon"} labelName={"Category Icon"}/>
                                    </div>
                                    <div>
                                        <TextInputs elemType={"text"} elemName={"txtCategoryIcon"} elemId={"txtCategoryIcon"}/> 
                                    </div>

                                </div>
                                <div className="formSuffix" >
                                    <ButtonInput elemId={"btnSaveCategories"} elemClass={"btnSuccess"} elemValue={"Save Categories"}/>
                                </div>
                                
                            </form>
                        </div>
                        
                </div>

                {/* COuntry LEgislation Setup */}

                <div className="countryLegislatureRow">
                    <h4>Setup Category</h4>
                        <div>
                            <form ref={countryLegisForm} onSubmit={countryLegisSubmit}>
                                <div id="countryLegisName">
                                    <div>
                                        <Label labelId={"txtCountryLegisName"} labelName={"Legislation Name"}/>
                                    </div>
                                    <div>
                                        <TextInputs elemType={"text"} elemName={"txtCountryLegisName"} elemId={"txtCountryLegisName"}/> 
                                    </div>
                                </div>
                                
                                <div id="countrySelect">
                                    <div>
                                        <Label labelId={"selCountry"} labelName={"Country"}/>
                                    </div>
                                    <div>
                                        <SelectInputs elemName={"selCountry"} elemId={"selCountry"} optionData={countryData} /> 
                                    </div>

                                </div>
                                <div id="legisTypeSelect">
                                    <div>
                                        <Label labelId={"selLegisType"} labelName={"Legislature Type"}/>
                                    </div>
                                    <div>
                                        <SelectInputs elemName={"selLegisType"} elemId={"selLegisType"} optionData={legislationTypeData} /> 
                                    </div>

                                </div>
                                <div id="legisProtectionSelect">
                                    <div>
                                        <Label labelId={"selLegisProtection"} labelName={"Legislature Protection"}/>
                                    </div>
                                    <div>
                                        <SelectInputs elemName={"selLegisProtection"} elemId={"selLegisProtection"} optionData={legislationProtectionData}/> 
                                    </div>

                                </div>
                                <div className="formSuffix" >
                                    <ButtonInput elemId={"btnSaveCountryLegislation"} elemClass={"btnSuccess"} elemValue={"Save Country Legislation"} elemType={"submit"}/>
                                </div>
                                
                            </form>
                        </div>
                        
                </div>
            </div>
        </>
    );
} 
