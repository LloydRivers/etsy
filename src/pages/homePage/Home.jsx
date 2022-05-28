import axios from "axios";
import React, { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState([]);
  const url = "https://fakestoreapi.com/products";

  const getData = () => {
    console.log("call function");
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    console.log("call useEffect");
    getData();
  }, []);

  return <div>On the Home</div>;
}

export default Home;
