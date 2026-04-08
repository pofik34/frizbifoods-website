export function Footer() {
  return (
    <footer className="mt-auto border-t border-orange-100 bg-white">
      <div className="section-shell flex flex-col gap-3 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-semibold text-zinc-900">FrizbiFoods</span> - Yeni nesil fast food
          deneyimi
        </p>
        <div className="flex gap-4">
          <a href="tel:+905412385488" className="hover:text-orange-700">
            +90 541 238 54 88
          </a>
          <a href="mailto:info@frizbifoods.com" className="hover:text-orange-700">
            info@frizbifoods.com
          </a>
        </div>
      </div>
    </footer>
  );
}
