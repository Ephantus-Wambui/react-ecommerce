import React from "react";
import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Reviews from "./Reviews";
import Checkout from "./Checkout";
import Contactus from "./Contactus";

function NavBar() {
  return (
    <Router>
      <div>
        <Nav fill variant="tabs">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/reviews" eventKey="link-1">
              Reviews
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/checkout" eventKey="link-2">
              Checkout
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contactUs" eventKey="link-3">
              Contact Us
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/reviews" component={Reviews} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/contactUs" component={Contactus} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default NavBar;
