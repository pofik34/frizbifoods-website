const features = [
  { title: "10 saniyede muhurlenir", desc: "Ozel Frizbi-Press teknolojisiyle hizli hazirlik." },
  { title: "Sifir dokulme deneyimi", desc: "Kapali form sayesinde soslar kiyafete damlamaz." },
  { title: "Her yerde rahat tuketim", desc: "Ofiste, aracta veya yururken konforlu deneyim." },
];

export function FeatureSection() {
  return (
    <section id="lezzet" className="section-shell py-10 md:py-14">
      <div className="section-card p-7 sm:p-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">
          Gelecegin atistirmaligi
        </p>
        <h2 className="font-[var(--font-display)] text-3xl font-bold sm:text-4xl">
          Dunyada bir ilk olan ozel FrizbiFoods gida teknolojisi
        </h2>
        <p className="mt-4 max-w-4xl leading-7 text-zinc-700">
          Aperatif yiyecekleriniz artik sadece 10 saniyede muhurlenerek onunuze geliyor. Tamamen
          kapali formu sayesinde dokulme ve kirlenme riskini ortadan kaldiran bu inovatif tasarim;
          ofiste, aracta veya yururken favori soslarinizin tadini kiyafetlerinizi dusunmeden
          cikarmaniza olanak taniyor. Ozel ekmek yapisi ve benzersiz kapatma teknigi, icindeki
          malzemelerin isi ve tazeligini uzun sure korurken; klasik donerden hamburgere, tatlidan
          cig kofteye uzanan genis urun yelpazesiyle her damak tadina hitap eden, essiz bir
          gastronomi deneyimi sunuyor.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-orange-100 bg-orange-50/60 p-5">
              <h3 className="font-[var(--font-display)] text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-700">{feature.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
