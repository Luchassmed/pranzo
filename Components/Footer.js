import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#FCF4EC] flex flex-col md:grid md:grid-cols-3 md:grid-rows-1 gap-4 justify-between py-10 px-10 md:px-20">
      <div className="flex flex-row">
        <img src="/luch.png" className=" md:h-32 h-20" />
        <img src="/karl.png" className=" md:h-32 h-20" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-lg">Ses med dig</p>
        <p className="text-xl">Karl, Luchas & Marcus</p>
      </div>
      <div className="flex flex-row justify-end">
        <img src="/szpirt.png" className=" md:h-32 h-20" />
        <img src="/holdet.png" className=" md:h-32 h-20 -rotate-12" />
      </div>
    </div>
  );
}
