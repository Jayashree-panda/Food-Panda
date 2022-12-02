import React, { useState } from "react";
import { Input, Icon, Menu } from "semantic-ui-react";
import styles from "../styles/Home.module.scss";

export default function Header() {
  const [activeItem, setActiveItem] = useState("home");
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };
  return (
    <div className={styles.header_container}>
      <Menu secondary>
        <Menu.Item>
          <h2 className={styles.food_panda}>FOOD PANDA</h2>
        </Menu.Item>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="about us"
          active={activeItem === "about us"}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="cart"
            active={activeItem === "cart"}
            onClick={handleItemClick}
          >
            <Icon name="cart" size="large" />
          </Menu.Item>
          <Menu.Item
            name="profile"
            active={activeItem === "profile"}
            onClick={handleItemClick}
          >
            <Icon name="user circle" size="big" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
