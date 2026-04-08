# FrizbiFoods Website

Modern, mobile-first FrizbiFoods kurumsal sitesi (`Next.js + TypeScript + Tailwind CSS`).

## Local Gelistirme

```bash
npm install
npm run dev
```

Siteyi tarayicida ac:

- [http://localhost:3000](http://localhost:3000)

## Build Komutlari

```bash
npm run build
npm run start
npm run lint
```

## Proje Yapisi

- `app/page.tsx`: Ana landing sayfa
- `app/components/*`: Hero, surec, bayilik, iletisim, navbar, footer bileşenleri
- `public/images/*`: AI gorsel yer tutuculari (istersen gercek gorsellerle degistir)

## GitHub'a Yukleme

1. GitHub'da yeni repo olustur (onerilen ad: `frizbifoods-website`).
2. Asagidaki komutlari proje klasorunde calistir:

```bash
git init
git add .
git commit -m "Build modern FrizbiFoods website"
git branch -M main
git remote add origin https://github.com/<kullanici-adin>/frizbifoods-website.git
git push -u origin main
```

## Vercel Deploy

1. [Vercel](https://vercel.com/) hesabinda **Add New Project** sec.
2. GitHub reponu bagla ve `frizbifoods-website` reposunu sec.
3. Framework otomatik olarak `Next.js` algilanir.
4. **Deploy** butonuna bas.
5. Deploy bittiginde canli URL olusur (`https://...vercel.app`).

Opsiyonel:
- Sonraki push'larda production deploy otomatik guncellenir.
- Ozel domain eklemek icin Vercel `Domains` bolumunu kullan.
