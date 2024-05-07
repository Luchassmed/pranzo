import React from "react";
import Iframe from "react-iframe";

export default function Event() {
  return (
    <div className="flex flex-col md:flex-row bg-[#FCF4EC] p-10 md:p-20 justify-between content-between">
      <div className="items-center md:items-start flex flex-col justify-center gap-4">
        <p className="text-lg md:text-xl">Dato for denne Pranzo:</p>
        <p className="text-xl md:text-3xl">Søndag, den 26. maj, 2024</p>

        <a
          target="_blank"
          href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MjJjM2wzMnAwcDkxZ2VmNnJwOWQ1cjVuaG0gZXF1aXgxMzM3QG0&amp;tmsrc=equix1337%40gmail.com"
        >
          <p className="underline text-lg md:text-xl">
            Tilføj til min kalender
          </p>
        </a>
      </div>
      <div className="text-center">
        {/* Google Maps Widget er Undervejs... */}
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.090323194148!2d12.5896767!3d55.687417399999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652531f6b9ea14f%3A0x19f4cf53612ed6eb!2sGernersgade%203%2C%201319%20K%C3%B8benhavn!5e0!3m2!1sda!2sdk!4v1715106990278!5m2!1sda!2sdk"
          width="600"
          height="300"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></Iframe>
      </div>
    </div>
  );
}
