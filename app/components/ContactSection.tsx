export function ContactSection() {
  return (
    <section id="iletisim" className="section-shell py-10 md:py-14">
      <div className="grid gap-5 lg:grid-cols-2">
        <article className="section-card p-7 sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">Iletisim</p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-bold sm:text-4xl">
            Bize ulasin
          </h2>
          <ul className="mt-6 space-y-4 text-zinc-700">
            <li>
              <span className="block text-xs uppercase tracking-wider text-zinc-500">Telefon</span>
              <a className="text-lg font-semibold text-zinc-900" href="tel:+905412385488">
                +90 541 238 54 88
              </a>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-wider text-zinc-500">Email</span>
              <a className="text-lg font-semibold text-zinc-900" href="mailto:info@frizbifoods.com">
                info@frizbifoods.com
              </a>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-wider text-zinc-500">Adres</span>
              <p className="text-lg font-semibold text-zinc-900">Adapazari / Sakarya</p>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-wider text-zinc-500">
                Calisma Saatleri
              </span>
              <p className="text-lg font-semibold text-zinc-900">10:00 - 18:00</p>
            </li>
          </ul>
        </article>
        <article className="section-card p-7 sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">
            Hizli talep formu
          </p>
          <h3 className="mt-3 font-[var(--font-display)] text-2xl font-bold">Sizi arayalim</h3>
          <form className="mt-6 space-y-3">
            <input
              type="text"
              placeholder="Ad Soyad"
              className="w-full rounded-xl border border-orange-100 bg-white px-4 py-3 text-sm outline-none ring-orange-500 focus:ring-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-orange-100 bg-white px-4 py-3 text-sm outline-none ring-orange-500 focus:ring-2"
            />
            <textarea
              placeholder="Mesajiniz"
              rows={4}
              className="w-full rounded-xl border border-orange-100 bg-white px-4 py-3 text-sm outline-none ring-orange-500 focus:ring-2"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Gonder
            </button>
          </form>
        </article>
      </div>
    </section>
  );
}
