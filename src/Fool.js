import "./fool.css";
import { useState, React } from "react";
import videoBg from "./video/rick.mp4";

export default function Fool() {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1>愚人節快樂</h1>
        {/* <p>To my site.</p> */}
      </div>
    </div>
  );
}
