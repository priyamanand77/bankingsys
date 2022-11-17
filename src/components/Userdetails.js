import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText,
  Container,
} from "reactstrap";

export default function Userdetails({details}) {
  return (
    <div>
      <Card
        className="container my-2"
        style={{
          width: "23rem",
          height: "27rem",
        }}
      >
        <img
          className="container"
          style={{
            width: "10rem",
            height: "10rem",
          }}
          alt="user img"
          src="user.png"
        />
        <CardBody>
          <CardTitle tag="h5">User Details</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Full Name: {details.fullnname}
          </CardSubtitle>
          <CardText>Age :{details.age}</CardText>
          <CardText>DOB : {details.dob}</CardText>
          <CardText>Balance :{details.balance} </CardText>
          <CardText>Email : {details.email}</CardText>
     
          <Container>
          <button type="button" className="btn btn-success ">
              Show All
            </button>
            <button type="button" className="btn btn-warning mx-3 ">
              Update
            </button>
            <button type="button" className="btn btn-danger ">
              Delete
            </button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
}
