import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { logout } from "../../redux/features/auth/authSlicer";

const Navbar = () => {
    const dispatch = useAppDispatch()
    const select = useAppSelector((state) => state.auth.user)
    let isUser: boolean = false
    if (select) {
        isUser = true
    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <NavLink to='/' className="btn btn-ghost text-xl">Phone Market</NavLink>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {
                        isUser ? <button onClick={() => dispatch(logout())} className="btn btn-error"><li>Log out</li></button> : <><li><NavLink to='/login'>Log in</NavLink></li>
                            <li><NavLink to='/register'>Register</NavLink></li></>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;