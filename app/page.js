import React from "react";
import Hero from "../Components/Hero";
import Event from "../Components/Event";
import Invite from "@/Components/Invite";
import Footer from "@/Components/Footer";

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
