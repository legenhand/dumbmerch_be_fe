import React from 'react';
import Navbar from "../../components/navbar";
import {useParams} from "react-router-dom";
import EditFormCategory from "../../components/category/editFormCategory";

function EditCategory(props) {
    let { id } = useParams();
    return (
        <div>
            <Navbar/>
            <div className="container-fluid bg-black p-5 text-white" style={{height: '88vh'}}>
                <h4>Edit Category</h4>
                <EditFormCategory id={id}/>
            </div>
        </div>
    );
}

export default EditCategory;