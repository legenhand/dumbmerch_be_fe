import React, {useState} from 'react';
import {dataProduct} from "../dummydata/dummydata";
import {useNavigate} from "react-router-dom";



function FormProduct(props) {
    const id = props.id;
    const initialValues = {
        name : dataProduct[id].name,
        desc : dataProduct[id].desc,
        price: dataProduct[id].price,
        stock: dataProduct[id].stock,
        image: dataProduct[id].image,
    }
    const [data, setData] = useState(dataProduct);
    const [dataTemp, setdataTemp] = useState(initialValues);
    function handleChange(event) {
        const {name, value} = event.target;
        setdataTemp({
            ...dataTemp,
            [name]: value,
        });
    }

    let navigate = useNavigate();

    function handleSubmit(event) {
        dataProduct[id] = dataTemp;
        event.preventDefault();
        navigate("../product", { replace: true })
    }


    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="file" className="form-control" placeholder="Upload Image"/>
                <input type="text" className="form-control my-4" placeholder="Name Product" defaultValue={data[id].name} name="name" onChange={handleChange}/>
                <textarea name="desc" id="desc" cols="30" rows="5" className="form-control" placeholder="Description" onChange={handleChange} defaultValue={data[id].desc}></textarea>
                <input type="text" name="price" className="form-control my-4" placeholder="Price" defaultValue={data[id].price} onChange={handleChange}/>
                <input type="text" name="stock" className="form-control my-4" placeholder="stock" defaultValue={data[id].stock} onChange={handleChange}/>
                <button className="btn btn-success w-100">Save</button>
            </form>
        </div>
    );
}

export default FormProduct;