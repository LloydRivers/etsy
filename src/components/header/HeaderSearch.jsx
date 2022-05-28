import React from "react";
import { Container, Input } from "./styled-header";

function HeaderSearch() {
  return (
    <Container>
      <div>
        <img
          style={{ width: "50px" }}
          src=" https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
          alt="logo"
        />
      </div>
      <div>
        <Input type="text" />
      </div>
      <div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis?
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
}

export default HeaderSearch;
