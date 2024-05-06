import React from "react";

export default function Invite() {
  return (
    <div className="flex flex-col bg-[#FCF4EC] pb-10 px-10 md:px-20 items-center">
      <div className="flex flex-col items-center md:mx-64 text-center">
        <p className="text-3xl text-[#D59957] font-bold pb-10">
          Hva så skideskure
        </p>
        <div className="italic flex flex-col gap-4 font-light">
          <p className="font-light">
            Da Amerikanerne ikke kan finde ud af at afholde Pranzo, så må el
            gringos hellere løbe med den.
          </p>
          <p>
            Vi vil derfor gerne invitere til Pranzo søndag den 26. maj. Da vi
            påtænker, at mange er ramt af eksamenspres, så bare rolig for denne
            Pranzo bliver mere lowkey og afslappet.
          </p>
          <p>
            Vi forventer stærkt fremmøde kl. 10 hos Szpirt, hvor vi vil have
            sørget for lidt morgenmad - resten af programmet vil vi først
            afsløre på dagen.
          </p>
        </div>
      </div>
    </div>
  );
}
