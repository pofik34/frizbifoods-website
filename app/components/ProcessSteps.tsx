import Image from "next/image";

const steps = [
  {
    title: "Hazırlık: Taze Malzemelerin Uyumu",
    text: "Her şey, FrizbiFoods'un özel reçeteli, yumuşak ve pürüzsüz dokulu özel dairesel ekmeğiyle başlar. Müşterinin isteğine göre taze döner eti, gurme burger köftesi veya eriyen peynirler ve isteğe bağlı şarküteri ürünleri veya çikolatalı dondurma çeşitleri ekmeğin tam merkezine yerleştirilir. Malzemeler ekmeğin içinde kaldığı için hazırlık aşamasında bile hijyen maksimum seviyededir.",
    image: "/images/original/004-816x419.png",
  },
  {
    title: "Mühürleme: Frizbi-Press Teknolojisi ile",
    text: "Hazırlanan diskler, markamıza özel Frizbi-Press makinesine yerleştirilir. Makine, ekmeğin kenarlarını yüksek ısı ve basınçla birbirine kaynatır. Bu işlem, içindeki tüm sosu ve lezzeti hapseder. Sadece kısa bir sürede ekmeğin dışı altın sarısı bir çıtırlığa ulaşır, içi ise sıcak ve sulu kalır.",
    image: "/images/original/009-816x457.png",
  },
  {
    title: "Sunum: Akmayan, Kokmayan Lezzet Deneyimi",
    text: "FrizbiFoods'un gerçek farkı tüketim anında ortaya çıkar. Tamamen kapalı ekmek yapısı sayesinde soslar kıyafete damlamaz, malzemeler arabadan veya elden düşmez. Yürürken, araç kullanırken veya ofiste dökülme endişesi olmadan konforlu bir hızlı yemek deneyimi sunulur.",
    image: "/images/original/0005-1-816x473.png",
  },
];

export function ProcessSteps() {
  return (
    <section id="surec" className="section-shell py-10 md:py-14">
      <div className="mb-7">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">
          Üretim süreci
        </p>
        <h2 className="mt-3 font-[var(--font-display)] text-3xl font-bold sm:text-4xl">
          Hazırlıktan sunuma üç adımda FrizbiFoods
        </h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {steps.map((step) => (
          <article key={step.title} className="section-card overflow-hidden">
            <div className="overflow-hidden">
              <Image
                src={step.image}
                alt={step.title}
                width={1000}
                height={700}
                className="h-44 w-full object-cover object-center"
              />
            </div>
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
