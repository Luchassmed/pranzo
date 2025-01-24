import React from "react";
import Hero from "../../components/Hero";
import Event from "../../components/Event";
import Invite from "@/components/Invite";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

export default function page() {
  return (
    <div>
      <Hero />
      <Event />
      <Invite />
      <Footer />
    </div>
  );
}
