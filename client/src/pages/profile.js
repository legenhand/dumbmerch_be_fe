import React from 'react';
import Navbar from "../components/navbar";
import MyProfile from "../components/myProfile";
import MyTransaction from "../components/myTransaction";

function Profile(props) {
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