import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Navbar() {
  // useEffect()
  let p = 0;
let c=0;
  const deplo = useSelector((state) => state.cartinfo.cart);
  // console.log(deplo);
  deplo.forEach((element) => {
    (p+=element.price*50);
    c+=element.q;
    
  });

  // deplo.forEach(element => c+=element.q);
  //   console.log(deplo);
  // const p=deplo;
  //   useEffect(() => {

  //   }, [p])

  return (
    <nav className="nav">
      <div className="left">
        <h1>Vipin Store</h1>
      </div>
      <div className="right">
        <div className="qq">
          <Link to="/cart">
            <div className="p">{c}</div>
            <AiOutlineShoppingCart />
          </Link>
        </div>
        <h3> Rs: {p.toFixed(1)} </h3>
      </div>
    </nav>
  );
}

export default Navbar;
