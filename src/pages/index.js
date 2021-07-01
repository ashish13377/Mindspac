import React from "react";
import Layout from "@/components/layout";
import CallToActionOne from "@/components/call-to-action-one";
import Footer from "@/components/footer";
import BlogHome from "@/components/blog-home";
import ParallaxOne from "@/components/parallax-1";
import TeamCarousel from "@/components/team-carousel";
import FunfactOne from "@/components/funfact-one";
import TrustedClient from "@/components/trusted-client";
import SubscribeForm from "@/components/subscribe-form";
import ServiceTwo from "@/components/service-two";
import AboutTwo from "@/components/about-two";
import VideoTwo from "@/components/video-two";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import SliderOne from "@/components/slider-one";
import TestimonialsOneCarousel from "@/components/testimonials-carousel";

const HomeOne = () => {

  return (
    
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Home">
          <HeaderOne />
          <SliderOne />
          <AboutTwo />
          <ServiceTwo />
          <VideoTwo />
          <SubscribeForm />
          <FunfactOne />
          <TrustedClient />
          <TeamCarousel />
          <TestimonialsOneCarousel />
          <ParallaxOne />
          <BlogHome />
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeOne;
