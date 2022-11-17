import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Box, Container, Row, Column } from "./HeaderStyles";
export default function Header() {
  const happyFace=()=>{
    toast.success("Welcome ADMIN",{
      position: toast.POSITION.TOP_CENTER
  })
  }
  return (
    <Box className="text-center">
      <Container>
        <Row>
          <Column>
            <h4 style={{ color: "lightgray", fontSize: 25 ,cursor:"pointer" }} onClick={happyFace}>Hi there,,,</h4>
          </Column>
          <Column>
            <Link
              className="list-group-item list-group-item-active"
              style={{ color: "white", fontSize: 21 }}
              to="/home"
            >
              Home
            </Link>
          </Column>
          <Column>
            <Link
              className="list-group-item list-group-item-active"
              style={{ color: "white", fontSize: 21 }}
              to="/users"
            >
              Show Users
            </Link>
          </Column>
          <Column>
            <Link
              className="list-group-item list-group-item-active"
              style={{ color: "white", fontSize: 21 }}
              to=""
            >
              Add User
            </Link>
          </Column>
          <Column>
            <Link
              className="list-group-item list-group-item-active"
              style={{ color: "white", fontSize: 21 }}
              to="/admin"
            >
              Admin
            </Link>
          </Column>
          <Column>
            <Link
              className="list-group-item list-group-item-active"
              style={{ color: "white", fontSize: 21 }}
              to="/about"
            >
              About Us
            </Link>
          </Column>
          <Column>
            <Link
              className="list-group-item list-group-item-active"
              style={{ color: "white", fontSize: 21 }}
              to="/"
            >
              SignOut
            </Link>
          </Column>
        </Row>
      </Container>
      <Column
        style={{ paddingLeft: 1524, float: "right", position: "absolute" }}
      >
        {/* <FooterLink href="#">About Us </FooterLink> */}

        <Link to="/home">
          <img
            src={require("../Image/logo.jpg")}
            alt="logo"
            style={{ height: "60px", top: 11, position: "fixed" }}
          />
        </Link>
      </Column>
    </Box>
  );
}
