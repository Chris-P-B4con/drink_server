import React from "react";

import { CardHeader, CardBody, CardFooter,CardWrapper } from "./CardStyles";

function Card(props) {
  console.log(props.children);
  return (
    <CardWrapper>
      <CardHeader>
        <h2>{props.title}</h2>
      </CardHeader>
      <CardBody className={props.status ? "active" : "inactive"}>
        {props.footer ? props.children.slice(0, -1) : props.children}
      </CardBody>
      <CardFooter>
      {props.footer ? props.children.slice(-1)[0] : ""}
      </CardFooter>
      
    </CardWrapper>
  );
}

export default Card;
