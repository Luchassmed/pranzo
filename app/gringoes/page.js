import React from "react";
import Hero from "../../components/Hero.js";
import Event from "../../components/Event.js";
import Invite from "../../components/Invite.js";
import Footer from "../../components/Footer.js";

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
