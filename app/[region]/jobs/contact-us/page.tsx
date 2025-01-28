import ContactCorPoration from "@/app/components/ContactUs/ContactCorPoration";
import ContactHero from "@/app/components/ContactUs/ContactHero";
import Customers from "@/app/components/ContactUs/Customers";
import GetInTouch from "@/app/components/ContactUs/GetInTouch";
import OurTeam from "@/app/components/ContactUs/OurTeam";
import Blogs from "@/app/components/Home/Blogs";
import NewsletterSection from "@/app/components/Home/NewsletterSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Your Favourite Job Portal.",
};

export default function ContactUsPage() {
  return (
    <>
      <ContactHero />
      <ContactCorPoration />
      <GetInTouch />
      <OurTeam />
      <Blogs />
      <Customers />
      <NewsletterSection />
    </>
  );
}
