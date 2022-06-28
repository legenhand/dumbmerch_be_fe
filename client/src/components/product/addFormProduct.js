import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useMutation} from "react-query";
import {API} from "../../config/api";



function AddFormProduct(props) {
    const initialValues = {
        name : '',
        desc : '',
        price: 0,
        qty: 0,
        image: '',
        category: ''
    }
    const [categories, setCategories] = useState([]); //Store all category data
    const [categoryId, setCategoryId] = useState([]); //Save the selected category id
    const [preview, setPreview] = useState(null); //For image preview
    const [form, setForm] = useState(initialValues);
    const [message, setMessage] = useState(null);

    // Handle change data on form
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:
                e.target.type === 'file' ? e.target.files : e.target.value,
        });

        // Create image url for preview
        if (e.target.type === 'file') {
            let url = URL.createObjectURL(e.target.files[0]);
            setPreview(url);
        }
    };

    let navigate = useNavigate();

    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();

            // Configuration
            const config = {
                headers: {
                    'Content-type': 'multipart/form-data',
                },
            };

            // Store data with FormData as object
            const formData = new FormData();

            formData.set('name', form.name);
            formData.set('desc', form.desc);
            formData.set('price', form.price);
            formData.set('qty', form.qty);
            formData.set('category', form.category);
            formData.set('image', form.image[0], form.image[0].name);


            // Insert product data
            const response = await API.post('/product', formData, config);

            navigate('/product');
        } catch (error) {
            console.log(error);
        }
    });

    return (
        <div>
            <form onSubmit={(e) => handleSubmit.mutate(e)}>
                {preview && (
                    <div>
                        <img
                            src={preview}
                            style={{
                                maxWidth: '150px',
                                maxHeight: '150px',
                                objectFit: 'cover',
                            }}
                            alt={preview}
                        />
                    </div>
                )}
                <input type="file" className="form-control" placeholder="Upload Image" name="image" onChange={handleChange}/>
                <input type="text" className="form-control my-4" placeholder="Name Product" name="name" onChange={handleChange}/>
                <textarea name="desc" id="desc" cols="30" rows="5" className="form-control" placeholder="Description" onChange={handleChange}></textarea>
                <input type="text" name="price" className="form-control my-4" placeholder="Price" onChange={handleChange}/>
                <input type="text" name="category" className="form-control my-4" placeholder="category" onChange={handleChange}/>
                <input type="text" name="qty" className="form-control my-4" placeholder="stock" onChange={handleChange}/>
                <button className="btn btn-success w-100">Save</button>
            </form>
        </div>
    );
}

export default AddFormProduct;