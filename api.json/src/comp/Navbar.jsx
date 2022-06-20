import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <styledLink to="/"> HOME</styledLink>
        <styledLink to="/Login"> LOGIN</styledLink>
    )
};

export default Navbar;

