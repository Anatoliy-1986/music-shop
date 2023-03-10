import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Header } from "@/components/header";
import { MainBlock } from "@/components/mainBlock";
import { SliderCollection } from "@/components/sliderBlock";
import { HeadphoneParameters } from "@/components/headphoneParameters";
import { LatestProductBlock } from "@/components/latestProductBlock";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Music shop</title>
        <meta name="description" content="Listen the music and enjoy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/logo.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <MainBlock />
      <SliderCollection />
      <HeadphoneParameters />
      <LatestProductBlock />
    </>
  );
}
