const features = [
  { title: "10 saniyede mühürlenir", desc: "Özel Frizbi-Press teknolojisiyle hızlı hazırlık." },
  { title: "Sıfır dökülme deneyimi", desc: "Kapalı form sayesinde soslar kıyafete damlamaz." },
  { title: "Her yerde rahat tüketim", desc: "Ofiste, araçta veya yürürken konforlu deneyim." },
];

export function FeatureSection() {
  return (
    <section id="lezzet" className="section-shell py-10 md:py-14">
      <div className="section-card p-7 sm:p-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">
          Geleceğin atıştırmalığı
        </p>
        <h2 className="font-[var(--font-display)] text-3xl font-bold sm:text-4xl">
          Dünyada bir ilk olan özel FrizbiFoods gıda teknolojisi
        </h2>
        <p className="mt-4 max-w-4xl leading-7 text-zinc-700">
          Aperatif yiyecekleriniz artık sadece 10 saniyede mühürlenerek önünüze geliyor. Tamamen
          kapalı formu sayesinde dökülme ve kirlenme riskini ortadan kaldıran bu inovatif tasarım;
          ofiste, araçta veya yürürken favori soslarınızın tadını kıyafetlerinizi düşünmeden
          çıkarmanıza olanak tanıyor. Özel ekmek yapısı ve benzersiz kapatma tekniği, içindeki
          malzemelerin ısı ve tazeliğini uzun süre korurken; klasik dönerden hamburgere, tatlıdan
          çiğ köfteye uzanan geniş ürün yelpazesiyle her damak tadına hitap eden, eşsiz bir
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
