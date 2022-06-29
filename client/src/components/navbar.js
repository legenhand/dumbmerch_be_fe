import logo from '../assets/logo.png';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../context/userContext";



function Navbar() {
    const [state, dispatch] = useContext(UserContext)

    let navigate = useNavigate()
    const logout = () => {
        dispatch({
            type: "LOGOUT"
        })
        navigate("/login")
    }
    let navTambahan = '';

    let isComplainAdmin = false;
    if(state.isLogin){
        if (state.user.status === 'admin') {
            isComplainAdmin = true;
            navTambahan = <div className="d-flex"><NavLink className={({ isActive }) =>
                isActive ? "nav-link me-4 text-primary" : "nav-link me-4 text-white" } to="/category">Category</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "nav-link me-4 text-primary" : "nav-link me-4 text-white" } to="/product">Product</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "nav-link me-4 text-primary" : "nav-link me-4 text-white" } to="/profile">Profile</NavLink>
                <button type="button" className="btn nav-link me-4 text-white" onClick={logout}>Logout</button>
            </div>;
        } else if (state.user.status === 'customer') {
            navTambahan = <div className="d-flex">
                <NavLink className={({ isActive }) =>
                    isActive ? "nav-link me-4 text-primary" : "nav-link me-4 text-white" } to="/profile">Profile</NavLink>
                <button type="button" className="btn nav-link me-4 text-white" onClick={logout}>Logout</button>
            </div>;
        }
    }else{
        navTambahan = <NavLink className={({ isActive }) =>
            isActive ? "nav-link me-4 text-primary" : "nav-link me-4 text-white" } to="/login">Login</NavLink>
    }

    return (
        <nav className="navbar navbar-expand-lg bg-black">
            <div className="container-fluid" style={{
                height: '10vh'
            }}>
                <Link to="/" className="h-100 ms-3"><img src={logo} alt="" className="h-100"/></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
                    <NavLink className={({ isActive }) =>
                        isActive ? "nav-link ms-auto me-4 text-primary" : "nav-link ms-auto me-4 text-white" } to={isComplainAdmin ? '/complain-admin' : '/complain'}>Complain</NavLink>
                    {navTambahan}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
