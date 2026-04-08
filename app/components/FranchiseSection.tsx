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
            Turkiye genelinde hizla buyuyen FrizbiFoods ailesine katilin
          </h2>
          <p className="mt-4 leading-7 text-zinc-700">
            Gastronomi dunyasinin en yenilikci ve karli yatirim firsatini yakalayin. Anahtar
            teslim bayilik paketimizle size sadece dukkanin kapisini acmak kaliyor; ozel
            Frizbi-Press makinesinden dikkat cekici ic-dis mekan reklam materyallerine ve hazir
            menu iceriklerine kadar tum operasyonel destegi eksiksiz sagliyoruz.
          </p>
          <p className="mt-4 leading-7 text-zinc-700">
            Sosu akmayan, dokulmeyen ve her ortamda kolayca tuketilen bu benzersiz konseptle, dusuk
            maliyet ve yuksek kazanc avantajini kullanarak bolgenizin en populer aperatif fastfood
            lezzet duragi olmaya hazir olun.
          </p>
          <a
            href="mailto:info@frizbifoods.com"
            className="mt-6 inline-flex rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
          >
            Bayilik Formu icin Mail Gonder
          </a>
        </div>
        <div className="flex items-center">
          <Image
            src="/images/franchise-ai.svg"
            alt="FrizbiFoods bayilik noktasi konsepti"
            width={1000}
            height={900}
            className="h-full min-h-64 w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
