import React from "react";
import logo from "./assets/images/logo.svg";
import styles from "./App.module.css";
import Robot from "./components/Robot";
import robots from "./mockdata/robots.json";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles["appHeader"]}>
        <img src={logo} className={styles["appLogo"]} alt="" />
        <h1>罗伯特机器人购物平台</h1>
      </div>
      <ShoppingCart />
      <div className={styles.robotList}>
        {robots.map((robot) => (
          <Robot id={robot.id} name={robot.name} email={robot.email} />
        ))}
      </div>
    </div>
  );
}

export default App;
