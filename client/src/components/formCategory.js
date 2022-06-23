import React, {useState} from 'react';
import {dataCategory} from "../dummydata/dummydata";
import {useNavigate} from "react-router-dom";

function FormCategory(props) {
    const [data, setData] = useState(dataCategory);
    const [dataTemp, setdataTemp] = useState({name: ''});
    function handleChange(event) {
        setdataTemp({name: event.target.value});
    }

    let navigate = useNavigate();

    function handleSubmit(event) {
        dataCategory[props.id] = dataTemp.name;
        event.preventDefault();
        navigate("../category", { replace: true })
    }


    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" className="form-control my-4" placeholder="name category" defaultValue={data[props.id]} onChange={handleChange}/>
                <button className="btn btn-success w-100">Save</button>
            </form>
        </div>
    );
}

export default FormCategory;