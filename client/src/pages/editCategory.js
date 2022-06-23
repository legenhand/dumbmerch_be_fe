import React from 'react';
import Navbar from "../components/navbar";
import FormCategory from "../components/formCategory";
import {useParams} from "react-router-dom";

function EditCategory(props) {
    let { id } = useParams();
    return (
        <div>
            <Navbar/>
            <div className="container-fluid bg-black p-5 text-white" style={{height: '88vh'}}>
                <h4>Edit Category</h4>
                <FormCategory id={id}/>
            </div>
        </div>
    );
}

export default EditCategory;