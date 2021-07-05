import React, { useState } from "react";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Concept from "../components/Concept";
import Gallery from "../components/Gallery";
import VirtualTour from "../components/VirtualTour";
import MasterPlan from "../components/MasterPlan";
import Banner from "../components/Banner";
import FullWidthImage from "../components/FullWidthImage";
import Houses from "../components/Houses";
import TextBanner from "../components/TextBanner";
import MapSection from "../components/MapSection";
import ProgressSlider from "../components/ProgressSlider";
import Form from "../components/Form";

const IndexPage = () => {
  const [openedForm, setOpenedForm] = useState(false);

  return (
    <Layout>
      <SEO title="Inicio" />
      <Header setOpenedForm={setOpenedForm} />
      <HeroImage setOpenedForm={setOpenedForm} />
      <Concept />
      <Gallery />
      <VirtualTour />
      <MasterPlan />
      <Banner setOpenedForm={setOpenedForm} />
      <FullWidthImage />
      <Houses setOpenedForm={setOpenedForm} />
      <TextBanner />
      <MapSection />
      {/* <ProgressSlider /> */}
      <Footer setOpenedForm={setOpenedForm} />
      <Form opened={openedForm} setOpenedForm={setOpenedForm} />
    </Layout>
  );
};

export default IndexPage;
