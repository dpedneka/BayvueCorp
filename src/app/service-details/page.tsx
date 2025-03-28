import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import service_bg from "@/assets/images/media/img_32.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import shape from "@/assets/images/shape/shape_27.svg";
import ServiceDetailsArea from "@/components/services/service-details-area";
import NewsletterBanner from "@/components/newsletter/newsletter-banner";

export const metadata: Metadata = {
  title: "Service Details Page",
};

const ServiceDetailsPage = () => {
  return (
    <main>
      {/* breadcrumb start */}
      <BreadcrumbOne
        title="Single Service Details"
        subtitle="Offering solutions & services to address a spectrum of financial issues"
        page="Services"
        shape={shape}
        bg_img={service_bg}
        style_2={true}
        cls="me-xl-4"
      />
      {/* breadcrumb end */}

      {/* service details area start */}
      <ServiceDetailsArea />
      {/* service details area end */}

      {/* fancy banner three start */}
      <FancyBannerThree />
      {/* fancy banner three end */}

      {/* news letter start */}
      <NewsletterBanner />
      {/* news letter end */}
    </main>
  );
};

export default ServiceDetailsPage;
