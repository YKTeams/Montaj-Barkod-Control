import React from "react";
import styled from "styled-components";
import ProductList from "./ProductList";
import "../services/printBarcode.js";
import "./pages/barkod.css";
import "./tablo.css";
import "./poweredBy.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
//import firebase from "firebase";
//import ProductList from "./ProductList";
export default function Viewers() {
  const notify = () =>
    toast.info("BEKLEYİNİZ !", {
      position: "top-center",
      autoClose: 11000,
      hideProgressBar: false,
      closeOnClick: true,
      theme: "colored",
    });
  return (
    <Container>
      <Wrap>
        <input
          class="test"
          name="itemId"
          //onBlur="getVal()"
          //KULLANICI TESTINE SOKUNUZ
          onBlur="getVal()"
          placeholder="PART ID"
          type="text"
          id="item"
        />
      </Wrap>
      <Wrap>
        <input
          class="test"
          name="ProdId"
          //onBlur="getProd()"
          //KULLANICI TESTINE SOKUNUZ
          onBlur="getProd()"
          placeholder="ORDER ID"
          type="text"
          id="prodId"
        />
      </Wrap>
      <Wrap>
        <input
          class="test"
          name="oprId"
          placeholder="OPERATOR ISMI"
          type="text"
          id="opr"
        />
      </Wrap>
      <div>
        <Button onClick={notify} id="myBtn" onclick="myFunction()">
          GETİR
        </Button>
      </div>
      {/* <div>
        <Button id="myBtn1" onclick="myFunction1()">
          YAZDIR
        </Button>
      </div> */}

      <Wrapper>
        <Text id="durumId">DURUM</Text>
      </Wrapper>

      <ToastContainer
        position="top-center"
        autoClose={11000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="poweredBy">
        <h4>Powered By YARIŞ KABIN Robotic Engineers</h4>
      </div>

      <ProductList></ProductList>
      <table className="tablo" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>NO</th>
            <th>OPR ISMI</th>
            <th>ITEM ID</th>
            <th>PRODUCT ID</th>
            <th>DURUM NO</th>
            <th>ZAMAN</th>
          </tr>
        </thead>
        <tbody id="tbody1"></tbody>
      </table>
      <svg className="barkod" id="code128"></svg>
      <svg className="barkod" id="code129"></svg>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 5px;
  display: grid;
  padding: 20px 0px 26px;
  grid-gap: 25px;
  grid-template-columns: repeat(3, minmax(1, 1fr));
  text-align: center;
`;

const Wrap = styled.div`
  display: grid;
  img {
    width: 100%;
    //height: 100%;
    object-fit: cover;
  }

  input {
    font-size: 25px;
    border-radius: 15px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.5);
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 63%) 0px 6px 0px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    text-align: center;
    margin-top: 1px;
    color: turquoise;
    background: url("images/home-background.png") center center / cover;
    padding: 40px;
    padding-left: 0px;
    padding-right: 0px;

    &:hover {
      box-shadow: rgba(60 210 300 / 100%) 0px 20px 28px -16px,
        rgba(0 0 0 / 72%) 0px 30px 22px -10px;
      transform: scale(1.02);
      border-color: rgba(2, 249, 249, 0.8);
    }
  }
`;

const Wrapper = styled.div`
  border-radius: 20px;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.5);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  text-align: center;
  img {
    width: 100%;
    //height: 100%;
    object-fit: cover;
  }

  // &:hover {
  //   box-shadow: rgba(1 210 60 / 100%) 0px 40px 58px -16px,
  //     rgba(0 0 0 / 72%) 0px 30px 22px -10px;
  //   transform: scale(1.02);
  //   border-color: rgba(1,210, 60, 0.8);
  // }
  // box-shadow: rgba(60 210 300 / 100%) 0px 40px 58px -16px,
  //         rgba(0 0 0 / 72%) 0px 30px 22px -10px;
  //       transform: scale(1.02);
  //       border-color: rgba(0, 249, 249, 0.8);
`;
const Text = styled.div`
  font-size: 35px;
  color: turquoise;
  padding: 0px 65px 26px;
  margin-top: 29px;
  text-align: center;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: "gray" : "black";
  color: "black" : "turquoise";
  border: 3px solid rgba(249,249,249,0.1);
  font-size: 2.5em;
  margin-left: 0px;
  margin-top: 0.1em;
  padding: 0.350em 2em;
  border-radius: 15px;
  text-align: center;
  &:hover {
    box-shadow: rgba(60 210 300 / 100%) 0px 40px 58px -16px,
    rgba(0 0 0 / 100%) 0px 5px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(2,249,249,0.8);
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    }
  text: Başarılı
  {
    box-shadow: rgba(60 210 300 / 100%) 0px 40px 58px -16px,
    rgba(0 0 0 / 100%) 0px 5px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(2,249,249,0.8);
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
  }  
`;
