import Image from "next/image";

export function Hero() {
  return (
    <section className="section-shell grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
      <div className="space-y-6">
        <p className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">
          FrizbiFoods Lezzeti
        </p>
        <h1 className="font-[var(--font-display)] text-4xl font-extrabold leading-tight sm:text-5xl">
          Siradisi bir lezzet deneyimi icin{" "}
          <span className="gradient-text">FrizbiFoods</span>
        </h1>
        <p className="max-w-xl text-base leading-7 text-zinc-700 sm:text-lg">
          Siradan atistirmaliklardan sikildiniz mi? Sosu akmayan, dokulmeyen, disi citir ici
          efsane FrizbiFoods lezzetleriyle tanisin. Donerden burgere, tatlidan cig kofteye her sey
          simdi tamamen kapali ve el yakmayan formunda.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#iletisim"
            className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            Iletisime Gec
          </a>
          <a
            href="#bayilik"
            className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold transition hover:border-orange-300 hover:text-orange-700"
          >
            Bayilik Bilgisi Al
          </a>
        </div>
      </div>
      <div className="section-card relative overflow-hidden p-3">
        <Image
          src="/images/hero-ai.svg"
          alt="FrizbiFoods modern fast food sunumu"
          width={1200}
          height={900}
          priority
          className="h-[320px] w-full rounded-2xl object-cover sm:h-[420px]"
        />
      </div>
    </section>
  );
}
