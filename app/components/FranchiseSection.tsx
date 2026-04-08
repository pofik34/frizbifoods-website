import Image from "next/image";

export function FranchiseSection() {
  return (
    <section id="bayilik" className="section-shell py-10 md:py-14">
      <div className="section-card grid gap-7 overflow-hidden p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">
            Bayilik / Franchising
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-bold sm:text-4xl">
            Türkiye genelinde hızla büyüyen FrizbiFoods ailesine katılın
          </h2>
          <p className="mt-4 leading-7 text-zinc-700">
            Gastronomi dünyasının en yenilikçi ve karlı yatırım fırsatını yakalayın. Anahtar
            teslim bayilik paketimizle size sadece dükkanın kapısını açmak kalıyor; özel
            Frizbi-Press makinesinden dikkat çekici iç-dış mekan reklam materyallerine ve hazır
            menü içeriklerine kadar tüm operasyonel desteği eksiksiz sağlıyoruz.
          </p>
          <p className="mt-4 leading-7 text-zinc-700">
            Sosu akmayan, dökülmeyen ve her ortamda kolayca tüketilen bu benzersiz konseptle, düşük
            maliyet ve yüksek kazanç avantajını kullanarak bölgenizin en popüler aperatif fastfood
            lezzet durağı olmaya hazır olun.
          </p>
          <a
            href="#iletisim"
            className="mt-6 inline-flex rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
          >
            Bayilik Formu İçin Mail Gönder
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/original/2211-765x1024.png"
            alt="FrizbiFoods bayilik orijinal görseli"
            width={1000}
            height={900}
            className="h-full min-h-64 w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
