import React from "react";
import { Segment, Icon } from "semantic-ui-react";
import styles from "../styles/Home.module.scss";

export default function TopBanner() {
  const renderRating = () => {
    const ratingElem = [];
    for (let i = 0; i < 5; i++) {
      ratingElem.push(<Icon name="star" />);
    }
    return ratingElem;
  };
  return (
    <div className={styles.banner_conainer}>
      <div className={styles.prime_content}>
        <p>100% quality food</p>
        <h1>Quick Delivery at your Door Steps</h1>
        <p>Best Service to fulfill your expectations.</p>
      </div>
      <div className={styles.food_image__container}>
        <img src="/foodBanner.jpg" />
      </div>
      <div className={styles.side_info__container}>
        <div className={styles.side_info__subcontainer}>
          <img src="/delivery.jpg" />
          <div>
            <p>Fast Delivery</p>
            <p>We Have Promised To Deliver Within 30 Mins</p>
          </div>
        </div>
        <div className={styles.side_info__subcontainer}>
          <img src="/food.jpg" />
          <div>
            <p>Easy Order</p>
            <p>Easy order and pick up delivery at your doorstep</p>
          </div>
        </div>
        <div className={styles.side_info__subcontainer}>
          <img src="/girl-eat.jpeg" />
          <div>
            <p>Best Quality</p>
            <p>Enjoy your food fresh crispy and hot with best quality</p>
          </div>
        </div>
        <Segment raised className={styles.food_container}>
          <div>
            <h3>Hamburger</h3>
            <div>{renderRating()}</div>
            <p>$ 70.90</p>
            <p>ORDER NOW</p>
          </div>
          <div>
            <img src="/hamburger.jpeg" />
          </div>
        </Segment>
      </div>
    </div>
  );
}
