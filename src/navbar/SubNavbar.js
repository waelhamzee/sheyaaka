import React from "react";
import { Card, CardBody, ListGroup, ListGroupItem } from "reactstrap";

const SubNavbar = () => {
    return (
        <Card style={{ border: "none" , paddingBottom:'1rem'}}>
        <CardBody className="i0">
          <ListGroup horizontal style={{ margin: "0 auto" }}>
            <ListGroupItem href="#" tag="a">
              New In
            </ListGroupItem>
            <ListGroupItem href="#" tag="a">
              Shop By
            </ListGroupItem>
            <ListGroupItem href="#" tag="a">
              Designers
            </ListGroupItem>
            <ListGroupItem href="#" tag="a">
              Clothing
            </ListGroupItem>
            <ListGroupItem href="#" tag="a">
              Shoes
            </ListGroupItem>
            <ListGroupItem href="#" tag="a">
              Bags
            </ListGroupItem>
            <ListGroupItem href="#" tag="a">
              Accessories
            </ListGroupItem>
            <ListGroupItem href="#" tag="a">
              Sale
            </ListGroupItem>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroupItem>
              <img src={require("../images/Group 113.png")} alt="heart" />
            </ListGroupItem>
            <ListGroupItem>
              <img src={require("../images/Group 112.png")} alt="heart" />
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    )
}

export default SubNavbar