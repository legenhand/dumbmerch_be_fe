import {dataCategory} from "../../dummydata/dummydata";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {useMutation, useQuery} from "react-query";
import {API} from "../../config/api";
import DeleteData from "../modal/DeleteData";

function TableCategory() {
    let count = 0;

    // Create variabel for id product and confirm delete data with useState here ...
    const [idDelete, setIdDelete] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(null);

    let { data: categories, refetch } = useQuery('categoryCache', async () => {
            const response = await API.get('/categories');
            return response.data.data.categories;
    });

    const handleDelete = (id) => {
        setIdDelete(id);
        handleShow();
    };

    // Create init useState & function for handle show-hide modal confirm here ...
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const deleteById = useMutation(async (id) => {
        try {
            await API.delete(`/category/${id}`);
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
        <div className="container-fluid bg-black p-5" style={{
            height: "88vh"
        }}>
            <div className="d-flex">
                <Link to={"/add_category"}>
                    <Button variant="success" className="my-3">Add Category</Button>
                </Link>

            </div>
            <table className="table table-dark table-hover table-striped">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Category Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    categories?.map((data,index)=>{
                        count += 1;
                        return <tr key={index}>
                            <td>{count}</td>
                            <td>{data.name}</td>
                            <td>
                                <Link to={"/edit_category/" + data.id}>
                                    <button type="button" className="btn btn-success w-25 bg-success me-3 my-2">
                                        Edit
                                    </button>
                                </Link>
                                <button type="button" className="btn btn-danger bg-danger w-25 my-2" onClick={() => {
                                    handleDelete(data.id);
                                }}>
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

export default TableCategory;