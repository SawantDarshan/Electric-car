import React from "react";
import "./Trending.css";
import Card from "./Card";

function Trending({ name, price, info, performance, reviews, image }) {
  const modalOptionsHandler = (e) => {
    const list = e.target.parentElement.childNodes;
    list.forEach((element) => {
      element.classList.remove("select-color");
    });
    e.target.classList.toggle("select-color");
  };

  return (
    <section className="Trending container-fluid" id="trending">
      <article className="Modal">
        <div className="Modal-options">
          <ul>
            <li onClick={modalOptionsHandler}>name</li>
            <li onClick={modalOptionsHandler}>price</li>
            <li onClick={modalOptionsHandler}>info</li>
            <li onClick={modalOptionsHandler}>performance</li>
            <li onClick={modalOptionsHandler}>reviews</li>
          </ul>
        </div>
        <div className="Modal-render">
          <h4>lorem ipsum</h4>
          <p className="Modal-info">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
            officia, non animi tenetur hic odit molestiae saepe? Quisquam ipsam
            in hic fugit illo blanditiis expedita nostrum, iusto nesciunt sint
            repudiandae!
          </p>
          <button className="btn btn-primary Modal-btn">Book Now</button>
        </div>
        <div className="Modal-image">
          <img src="" alt="" />
        </div>
      </article>
      <br />
      <hr />
      <br />
      <h4>
        Trending <i className="bi bi-bar-chart-fill text-primary"></i>
      </h4>
      <article className="card-group">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </article>
    </section>
  );
}

export default Trending;
