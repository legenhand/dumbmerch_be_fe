import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {convertToRupiah} from "../../helper/helper";
import {useMutation, useQuery} from "react-query";
import {API} from "../../config/api";
import {Button} from "react-bootstrap";
import {useEffect} from "react";
import DeleteData from "../modal/DeleteData";

function TableProduct(props) {
    let count = 0;
    const [idDelete, setIdDelete] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(null);
    let { data: products, refetch } = useQuery('productsTableCache', async () => {
        const response = await API.get('/products');
        return response.data.data;
    });
    // Create init useState & function for handle show-hide modal confirm here ...
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleRemove(index){

    }
    const handleDelete = (id) => {
        setIdDelete(id);
        handleShow();
    };

    const deleteById = useMutation(async (id) => {
        try {
            await API.delete(`/product/${id}`);
            await refetch();
        } catch (error) {
            console.log(error);
        }
    });

    useEffect(() => {
        if (confirmDelete) {
            // Close modal confirm delete data
            handleClose();
            // execute delete data by id function
            deleteById.mutate(idDelete);
            setConfirmDelete(null);
        }
    }, [confirmDelete]);

    return (
        <div className="container-fluid bg-black px-5" style={{
            height: "100%",
            minHeight: "88vh"
        }}>
            <div className="d-flex">
                <Link to={"/add_product"}>
                    <Button variant="success" className="my-3">Add Product</Button>
                </Link>

            </div>
            <table className="table table-dark table-hover table-striped">
                <thead>
                    <tr>
                        <th>No</th>
                        <th className="text-truncate w-25">Photo</th>
                        <th>Product Name</th>
                        <th className="w-25">Product Desc</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    products?.map((data,index)=>{
                        count += 1;
                        return <tr key={index}>
                            <td>{count}</td>
                            <td><img src={data.image} alt="" width="100" height="100"/></td>
                            <td>{data.name}</td>
                            <td>{data.desc}</td>
                            <td>{convertToRupiah(data.price)}</td>
                            <td>{data.qty}</td>
                            <td>
                                <Link to={"/edit_product/" + data.id}>
                                    <button type="button" className="btn btn-success w-50 bg-success me-3 my-2">
                                        Edit
                                    </button>
                                </Link>
                                <button type="button" className="btn btn-danger bg-danger w-50 my-2" onClick={() => {
                                    handleDelete(data.id)}}>
                                    Delete
                                </button>

                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <DeleteData
                setConfirmDelete={setConfirmDelete}
                show={show}
                handleClose={handleClose}
            />
        </div>
    );
}

export default TableProduct;