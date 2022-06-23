import React from 'react';
import {dataProfile} from "../dummydata/dummydata";

function MyProfile(props) {
    return (
        <div className="col-7">
            <h4 className="text-primary">My Profile</h4>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-5">
                        <img src={dataProfile.image} alt="" height="300vh" width="100%" className="rounded-3"/>
                    </div>
                    <div className="col">
                        <p>
                            <span className="text-primary fw-bolder">Name</span> <br/>
                            <span className="text-white">{dataProfile.name}</span>
                        </p>
                        <p>
                            <span className="text-primary fw-bolder">Email</span> <br/>
                            <span className="text-white">{dataProfile.email}</span>
                        </p>
                        <p>
                            <span className="text-primary fw-bolder">Phone</span> <br/>
                            <span className="text-white">{dataProfile.phone}</span>
                        </p>
                        <p>
                            <span className="text-primary fw-bolder">Gender</span> <br/>
                            <span className="text-white">{dataProfile.gender}</span>
                        </p>
                        <p>
                            <span className="text-primary fw-bolder">Address</span> <br/>
                            <span className="text-white">{dataProfile.address}</span>
                        </p>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default MyProfile;