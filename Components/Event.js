import React from "react";
import Maps from "./MapGoogle";

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
      <div>{/* <Maps /> */} Undervejs...</div>
    </div>
  );
}
