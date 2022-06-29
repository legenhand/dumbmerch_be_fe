import React from 'react';
import Navbar from "../../components/navbar";
import AddFormCategory from "../../components/category/addFormCategory";

function EditCategory() {
    return (
        <div>
            <Navbar/>
            <div className="container-fluid bg-black p-5 text-white" style={{height: '88vh'}}>
                <h4>Add Category</h4>
                <AddFormCategory/>
            </div>
        </div>
    );
}

export default EditCategory;