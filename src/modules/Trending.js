import React from "react";
import "./Trending.css";
import Card from "./Card";

function Trending({
  name,
  brand,
  mpn,
  reviews,
  color,
  images,
  offers,
  mainImage,
  description,
}) {
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
            <li onClick={modalOptionsHandler} className="select-color">
              {name}
            </li>
            <li onClick={modalOptionsHandler}>{brand}</li>
            <li onClick={modalOptionsHandler}>{description}</li>
            <li onClick={modalOptionsHandler}>{`${mpn} ${color}`}</li>
            <li onClick={modalOptionsHandler}>{`${offers[0].price}$`}</li>
          </ul>
        </div>
        <div className="Modal-render">
          <h4>{name}</h4>
          <p className="Modal-info">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            laboriosam atque dolorum in modi nostrum voluptas, autem reiciendis
            vitae ut quisquam at quae! Beatae sed repudiandae voluptas quasi
            magni. Tempore iusto pariatur veritatis assumenda rem ducimus ullam
            eveniet velit nesciunt nostrum. Eligendi eius enim alias dicta
            doloribus fuga aspernatur iste!
          </p>
          <button className="btn btn-primary Modal-btn">Book Now</button>
        </div>
        <div className="Modal-image">
          <img src={mainImage} alt={name} />
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
