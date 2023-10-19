import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
// import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";
import Form from "react-bootstrap/Form";

const Headers = () => {
  const mycarts = useSelector((state) => state.cartreducer.carts);
  //  console.log(mycarts);

  const { darkMode, toggle } = useContext(DarkModeContext);

  return (
    <>
      <Navbar style={{ height: "60px", background: "black", color: "white" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-2">
            <h3 className="text-light">Ecommerce</h3>
          </NavLink>
          <NavLink to="/cart" className="text-decoration-none text-light mx-2">
            <div id="ex4">
              <span
                className="p1 fa-stack fa-2x has-badge"
                data-count={mycarts.length}
              >
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
            </div>
          </NavLink>

        {/* Dark Mode */}
          <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            label={!darkMode ? "Light" : "Dark"}
            onChange={toggle}
          />
        </Container>
      </Navbar>
    </>
  );
};

export default Headers;
