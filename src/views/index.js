import React, { Fragment } from "react";
import video from "../assets/ink.mp4";
import "../assets/css/style.scss";
import { Nav, NavItem, NavLink } from "reactstrap";

const HomeView = () => (
  <Fragment>
    <div className="site_search">
      <a href="/login" className="contact_us ">
        CONTACT US
      </a>
    </div>
    <div>
      <div className="text-bkground">
        <h3 className="logoo">AUTHORS HAVEN</h3>
      </div>
    </div>
    <div className="ahalign nav-home overlay">
      <Nav vertical >
        <NavItem >
          <NavLink href="/login">LOGIN</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/register">SIGN UP</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/view-articles">HOME &gt;</NavLink>
        </NavItem>
      </Nav>
    </div>
    <div className="ahalign overlay ahmission">
      <h1>Share your story</h1>
      <h1>Get Inspired</h1>
    </div>
    <div className="video-background">
      <video
        id="vzaar-video-player"
        muted
        preload="metadata"
        playsInline="playsinline"
        tabIndex={-1}
        loop
        autoPlay
        src={video}
      />
    </div>
  </Fragment>
);
export default HomeView;
