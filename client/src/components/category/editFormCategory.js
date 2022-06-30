import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useMutation, useQuery} from "react-query";
import {API} from "../../config/api";
import {Alert} from "react-bootstrap";
import {useEffect} from "react";

function EditFormCategory(props) {
    const id = props.id;
    const initialValue = {
        name: ''
    }

    const [data, setData] = useState(initialValue);

    const [message, setMessage] = useState(null);
    function handleChange(event) {
        setData({name: event.target.value});
    }

    let { data: category } = useQuery('editCategoryCache', async () => {
        const response = await API.get(`/category/${id}`);
        return response.data.data;
    });

    let navigate = useNavigate();

    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();
            // Configuration Content-type
            const config = {
                headers: {
                    'Content-type': 'application/json',
                },
            };

            // Data body => Convert Object to String
            const body = JSON.stringify(data);

            // Insert / Update data categories to database
            await API.patch(`/category/${id}`, body, config);

            // Handling response here
            navigate("../category", { replace: true })
        } catch (error) {
            const alert = (
                <Alert variant="danger" className="py-1">
                    Failed
                </Alert>
            );
            setMessage(alert);
            console.log(error);
            navigate(`../edit_category/${id}`, { replace: true })
        }
    });

    useEffect(() => {
        if (category) {
            setData({
                name: category.name,
            });
        }
    }, [category]);


    return (
        <div>
            {message}
            <form onSubmit={(e) => handleSubmit.mutate(e)}>
                <input type="text" className="form-control my-4" placeholder="name category" defaultValue={data?.name}  onChange={handleChange}/>
                <button className="btn btn-success w-100">Save</button>
            </form>
        </div>
    );
}

export default EditFormCategory;