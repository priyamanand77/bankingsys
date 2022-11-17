import React, { useState, useEffect } from "react";
import Userdetails from "./Userdetails";
import { toast } from "react-toastify";
import { myAxios } from "../API/api";
export default function AllUsers() {
  useEffect(() => {
    document.title = "AllUser";
  }, []);

  const getdata = () => {
    myAxios.get('/getUserDetail').then(
      function (response) {
        console.log(response.data);
        setUser(response.data);
        toast.success("Users Featched SuccessFully", {
          position: toast.POSITION.TOP_CENTER,
        });
      },
      (error) => {
        console.log("some error occured");
        toast.error("something went wrong !!!")
      }
    );
  };

  useEffect(() => {
    getdata();
  }, []);

  const [user, setUser] = useState([
    {
      name: "mohan",
      age: "22",
      dob: "1998-05-14",
      balance: "22000.0",
      email: "anand77@gmail.com",
    },
  ]);

  return (
    
      <div
        style={{
          height: "65vh",
          width:"100%",
          borderRadius:"10px",
          position: "relative",
          backgroundColor: "",
          overflow: "scroll",
          overflowX: "hidden",
        }}
      >
        
        {user.length > 0
          ? user.map((i) => <Userdetails key={i.email} details={i} />)
          : "Empty User"}
     
      </div>
  
  );
}
