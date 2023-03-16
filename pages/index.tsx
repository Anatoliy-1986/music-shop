import Head from "next/head";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { MainBlock } from "@/components/mainBlock";
import { SliderCollection } from "@/components/sliderBlock";
import { HeadphoneParameters } from "@/components/headphoneParameters";
import { LatestProductBlock } from "@/components/latestProductBlock";
import { AdvantagesBlock } from "@/components/advantagesBlock";
import { RegForm } from "@/components/regBlock";
import { Footer } from "@/components/footer";

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
      </Head>
      <Header />
      <MainBlock />
      <SliderCollection />
      <HeadphoneParameters />
      <LatestProductBlock />
      <AdvantagesBlock />
      <RegForm />
      <Footer />
    </>
  );
}
