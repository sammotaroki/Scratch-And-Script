import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Label } from "../../Components/FormElements/Label/Label";
import { SelectInputs } from "../../Components/FormElements/Inputs/SelectInputs/SelectInput";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import './CategoryInfoForm.css';
import { ButtonInput } from "../../Components/FormElements/Inputs/ButtonInputs/ButtonInputs";
import { useEffect, useRef, useState } from "react";
import { GetCountries } from "../../services/CountryServices";
import { GetCategories } from "../../services/CategoryServices";
import { DeleteCategoryInfos, GetCategoryInfos, PostCategoryInfo, UpdateCategoryInfo } from "../../services/CategoryInfoServices";
import { Table } from "../../Components/Table/Table";
import ReactPaginate from "react-paginate";


export function CategoryInfoForm() {
    const categoryInfoForm = useRef(null);
    
    const [countryData, setCountries] = useState([]);
    const [categoryData, setCategories] = useState([]);
    const [editorData, setEditorData] = useState(" ");
    const [categoryInfoData, setCategoryInfoData] = useState([]);
    const [categoryInfoData2, setCategoryInfoData2] = useState([]);
    const [pageableData, setPageableData] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [editData, editCategoryInfo] = useState(false);
    const [editId, editPrimaryId] = useState(0);

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
        
        GetCategoryInfoData(0, 10);
        
        GetCategories(0, 100000).then((data) => {
            
            let starndardArray = [];
            
            data.content.forEach((category) => {
                let standardData = {
                    id: 0,
                    value: ""
                };
                standardData.id = category.id;
                standardData.value = category.name;
                starndardArray.push(standardData);
                
            });
            setCategories(starndardArray);
        });

        

        

    }, []) ;
    

    const GetCategoryInfoData = async (page, size) => {

        await GetCategoryInfos(page, 10).then((data) => {
            let categoryInfoList = [];
            setCategoryInfoData2(data.content);
            data.content.forEach((categoryInfo) => {

                

                let categoryInfoArray = [];
                categoryInfoArray.push(categoryInfo.country.countryName);
                categoryInfoArray.push(categoryInfo.category.name);
                categoryInfoArray.push(categoryInfo.categoryInformation.substring(0, 50) + "...");
                categoryInfoArray.push(categoryInfo.id);

                categoryInfoList.push(categoryInfoArray);
            });

            setCategoryInfoData(categoryInfoList);

            const pageableArray = [];

            pageableArray.push(pageableData);
            setPageableData(pageableArray);

            console.log("Category Info Data: ", data);
        });
    }

    const DeleteCategoryInfoData = async (id) => {
        await DeleteCategoryInfos(id);
        window.location.reload();
    }


    const categoryInfoSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData(categoryInfoForm.current);
        let finalData;

        if (!editData) {

            let categoryInfoData = {
                id:	0,
                imageUrl:	" ",
                categoryId: 0,
                countryId: 0,
                categoryInformation: " "
                
            }

            categoryInfoData.countryId = Number.parseInt(data.get("selCountry"));
            categoryInfoData.categoryId = Number.parseInt(data.get("selCategory"));
            categoryInfoData.categoryInformation = editorData;
            

            const postedData = await PostCategoryInfo(categoryInfoData);
            if (postedData) {
                alert("Category Info Saved Successfully");
                clearCategoryInfoForm();
            }
        } else {
            const categoryInfoData = findCategoryInfo(editId);

            categoryInfoData.country.id = Number.parseInt(data.get("selCountry"));
            categoryInfoData.category.id = Number.parseInt(data.get("selCategory"));
            categoryInfoData.categoryInformation = editorData;

            const postedData = await UpdateCategoryInfo(categoryInfoData);
            if (postedData) {
                alert("Category Info Updated Successfully");
                clearCategoryInfoForm();
            }
            window.location.reload();
        }


        
    }

    const clearCategoryInfoForm = () => {
        document.getElementById("selCountry").value = "";
        document.getElementById("selCategory").value = "";
        const domEditableElement = document.querySelector('.ck-editor__editable');
        // Get the editor instance from the editable element.
        const editorInstance = domEditableElement.ckeditorInstance;
        // Use the editor instance API.
        editorInstance.setData('');
    }

    const handlePagination = (data) => {
        GetCategoryInfoData(data.selected, 10);

        console.log(data);
    }

    const findCategoryInfo = (data) => {
        return categoryInfoData2.find((categoryInfo) =>
            categoryInfo.id === data);
    }

    const handleCategoryEdit = (id) => {
        editCategoryInfo(true)
        editPrimaryId(id);

        const filteredData = findCategoryInfo(id);

        console.log(`Filtered data ${filteredData}`);

        setSelectedCountry(filteredData.country.id);
        setSelectedCategory(filteredData.category.id);
        setEditorData(filteredData.categoryInformation);
    }

    const handleCategoryDelete = (data) => {
        DeleteCategoryInfoData(data);

        console.log(data);
    }

    return(
        <>
        <div className="categoryForm">
            <form ref={categoryInfoForm} onSubmit={categoryInfoSubmit}>
                <div className="selectDetailsRow">
                    <div id="selectCountry">
                        <div>
                            <Label labelId={"selCountry"} labelName={"Country"}/>
                        </div>
                        <div>
                            <SelectInputs elemName={"selCountry"} elemId={"selCountry"} optionData={countryData} optionsState={selectedCountry}/> 
                        </div>
                    </div>
                    <div id="selectCategory">
                        <div>
                            <Label labelId={"selCategory"} labelName={"Category"}/>
                        </div>
                        <div>
                            <SelectInputs elemName={"selCategory"} elemId={"selCategory"} optionData={categoryData} optionsState={selectedCategory}/> 
                        </div>
                    </div>
                </div>
                <div className="detailsRow">
                    <div id="categoryInfo">
                        <div>
                            <Label labelId={"categoryEditor"} labelName={"Category Information"}/>
                        </div>
                        <div>
                            <CKEditor id={"categoryEditor"} name={"categoryEditor"}
                                editor={ ClassicEditor }
                                data={editorData}
                                onReady={ editor => {
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {
                                    setEditorData(editor.getData());
                                    console.log( editor.getData() );
                                } }
                                onBlur={ ( event, editor ) => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ ( event, editor ) => {
                                    console.log( 'Focus.', editor );
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="formSuffix" >
                    <ButtonInput elemId={"btnSaveCountryLegislation"} elemClass={!editData ? "btnSuccess" : "btnEdit"} 
                    elemValue={!editData ? "Save Category Information" : "Update Category Information"} elemType={"submit"}/>
                </div>
            </form>
        </div>

        <div className="categoryTable">
            <Table tableHeader={["Country", "Category", "Category Information", "Actions"]} tableData={categoryInfoData} 
            pageDetails={pageableData} handlePageChange={handlePagination} handleEdit={handleCategoryEdit} handleDelete={handleCategoryDelete}/>
            
        </div>
            
        </>
    )
}