import React from "react";
import { Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <div>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/reviews" eventKey="link-1">Reviews</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/checkout" eventKey="link-2">Checkout</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contactUs" eventKey="link-3">
            Contact Us
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavBar;
