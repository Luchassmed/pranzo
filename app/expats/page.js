import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fdf6e3] to-[#fceae1] text-[#2c2c2c] p-8 font-serif">
      <div className="max-w-3xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">Les Expats</h1>
        </header>

        <section className="space-y-4 text-lg">
          <p>
            <strong>Messieurs, Senhores,</strong>
          </p>

          <p>
            For en aften inviterer vi jer sydpå – ikke i krop, men i sjæl. Til
            et bord, hvor maden bærer varmen fra Syden, og musikken lyder som en
            aften i skyggen af Pont Neuf. Vi har vandret gaderne i Toulouse,
            mærket rytmen i Lissabon og lært, at nogle oplevelser skal deles.
          </p>

          <p>
            <strong>D. 11. April</strong> åbner vi dørene til noget, der kun
            kendes af de få. Et måltid, en stemning, en oplevelse, som bringer
            jer tættere på det, vi har smagt.
          </p>

          <p>
            <em>Hvor og hvornår? Tålmodighed, mes amis.</em> De rette spor vil
            føre jer frem. Giv denne besked et ❤️, hvis I kommer og smager på
            syden sammen med os. <br />
            <span className="block mt-2 italic">
              Avec amour pour nos frères.
            </span>
          </p>
        </section>

        <hr className="border-t border-[#d4a373]" />

        <section className="space-y-4 text-lg">
          <p>
            Fredag kl. 17:30 bedes du møde op chez moi. Vi starter med en drink,
            der enten vil tage dig til en strand i Algarve eller Côte d’Azur.
          </p>
          <p>
            Hvad skal der ellers ske? Det må guderne i Toulouse og Lissabon
            vide.
          </p>
          <p>
            Er det Frankrig? Er det Portugal? Er det hemmeligt? &quot;Oui.&quot;
          </p>

          <p>
            Er det Frankrig? Er det Portugal? Er det hemmeligt?{" "}
            <strong>Oui.</strong>
          </p>

          <p>Vi stiller få krav, men dem vi stiller, mener vi alvorligt:</p>

          <ul className="list-disc list-inside">
            <li>
              Medbring jernhesten – cykel er <em>obrigatòrio</em>.
            </li>
            <li>Vær åbne. For mennesker. For hinanden. For det uventede.</li>
          </ul>

          <p>
            À bientôt, até breve –<br />
            <strong>Les Expats</strong>
          </p>
        </section>
      </div>
    </main>
  );
}
