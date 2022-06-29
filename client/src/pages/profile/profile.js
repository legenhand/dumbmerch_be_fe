import React from 'react';
import Navbar from "../../components/navbar";
import MyProfile from "../../components/profile/myProfile";
import MyTransaction from "../../components/transaction/myTransaction";

function Profile() {
    return (
        <div>
            <Navbar/>
            <div className="container-fluid bg-black p-5" style={{
                height: '88vh'
            }}>
                <div className="row">
                        <MyProfile/>
                        <MyTransaction/>
                </div>
            </div>
        </div>
    );
}

export default Profile;