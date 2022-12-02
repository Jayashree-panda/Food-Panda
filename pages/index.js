import Head from "next/head";
import Image from "next/image";
import Header from "../genericComponents/header";
import TopBanner from "../pageComponents/topBanner";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.root_container}>
      <Header />
      <TopBanner />
    </div>
  );
}
