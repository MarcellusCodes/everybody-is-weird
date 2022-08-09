import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-primary">
      <Head>
        <title>Everybody is weird</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-secondary-primary">Everybody is weird</h1>
      </main>
    </div>
  );
};

export default Home;