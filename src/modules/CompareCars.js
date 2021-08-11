import React from "react";
import Card from "./Card";
import "./CompareCars.css";

function CompareCars() {
  return (
    <div className="CompareCars" id="compare">
      <h4>Compare cars <i className="bi bi-calculator text-primary"></i></h4>
      <div className="Compare">
        <div>
          <Card></Card>
          <ul>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </div>
        <div>
          <Card></Card>
          <ul>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CompareCars;
