import Image from "next/image";

const steps = [
  {
    title: "Hazirlik: Taze Malzemelerin Uyumu",
    text: "Her sey, FrizbiFoods'un ozel receteli, yumusak ve puruzsuz dokulu ozel dairesel ekmegiyle baslar. Musterinin istegine gore taze doner eti, gurme burger koftesi veya eriyen peynirler ve istege bagli sarkuteri urunleri veya cikolatali dondurma cesitleri ekmegin tam merkezine yerlestirilir. Malzemeler ekmegin icinde kaldigi icin hazirlik asamasinda bile hijyen maksimum seviyededir.",
    image: "/images/process-prep-ai.svg",
  },
  {
    title: "Muhurleme: Frizbi-Press Teknolojisi ile",
    text: "Hazirlanan diskler, markamiza ozel Frizbi-Press makinesine yerlestirilir. Makine, ekmegin kenarlarini yuksek isi ve basincla birbirine kaynatir. Bu islem, icindeki tum sosu ve lezzeti hapseder. Sadece kisa bir surede ekmegin disi altin sarisi bir citirliga ulasir, ici ise sicak ve sulu kalir.",
    image: "/images/process-seal-ai.svg",
  },
  {
    title: "Sunum: Akmayan, Kokmayan Lezzet Deneyimi",
    text: "FrizbiFoods'un gercek farki tuketim aninda ortaya cikar. Tamamen kapali ekmek yapisi sayesinde soslar kiyafete damlamaz, malzemeler arabadan veya elden dusmez. Yururken, arac kullanirken veya ofiste dokulme endisesi olmadan konforlu bir hizli yemek deneyimi sunulur.",
    image: "/images/process-serve-ai.svg",
  },
];

export function ProcessSteps() {
  return (
    <section id="surec" className="section-shell py-10 md:py-14">
      <div className="mb-7">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">
          Uretim sureci
        </p>
        <h2 className="mt-3 font-[var(--font-display)] text-3xl font-bold sm:text-4xl">
          Hazirliktan sunuma uc adimda FrizbiFoods
        </h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {steps.map((step) => (
          <article key={step.title} className="section-card overflow-hidden">
            <Image
              src={step.image}
              alt={step.title}
              width={1000}
              height={700}
              className="h-44 w-full object-cover"
            />
            <div className="space-y-3 p-5">
              <h3 className="font-[var(--font-display)] text-xl font-semibold">{step.title}</h3>
              <p className="text-sm leading-6 text-zinc-700">{step.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
