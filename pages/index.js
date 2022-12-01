import Head from "next/head";
import Image from "next/image";
import Header from "../genericComponents/header";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <h1>hii</h1>
    </div>
  );
}
