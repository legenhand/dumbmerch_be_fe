import {dataCategory} from "../dummydata/dummydata";
import {useState} from "react";
import {Link} from "react-router-dom";

function TableCategory() {
    const [data, setData] = useState(dataCategory);
    let count = 0;

    function handleRemove(index){
        setData((prevState)=>{
            let items = [...prevState];
            items.splice(index, 1);
            return items;
        })
        dataCategory.splice(index,1);
    }

    return (
        <div className="container-fluid bg-black p-5" style={{
            height: "88vh"
        }}>
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
                    data.map((data,index)=>{
                        count += 1;
                        return <tr key={index}>
                            <td>{count}</td>
                            <td>{data}</td>
                            <td>
                                <Link to={"/edit_category/" + index}>
                                    <button type="button" className="btn btn-success w-25 bg-success me-3 my-2">
                                        Edit
                                    </button>
                                </Link>
                                <button type="button" className="btn btn-danger bg-danger w-25 my-2" onClick={() => handleRemove(index)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    })}
                </tbody>

            </table>
        </div>
    );
}

export default TableCategory;