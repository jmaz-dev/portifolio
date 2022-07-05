import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { appWithTranslation } from "next-i18next";
import App from "next/app";
import nextI18NextConfig from '../next-i18next.config.js';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    );
  }
}

export default appWithTranslation(MyApp, nextI18NextConfig);
