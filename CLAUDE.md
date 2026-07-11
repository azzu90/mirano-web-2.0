## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Design-Regeln

- Ausnahme: Die PLIMA-Feature-Card auf /products trägt PLIMA-Markenfarben (--plima-primary #6D28D9, --plima-highlight #8444EE, Verlauf #9A84F4→#6B3FE4 für Accent-Leiste/Badge, Grün #40AF74 / Text #1E7A4C), strikt auf diese Card begrenzt. CTA-Button "plima.cloud besuchen" ist Verlauf (--plima-primary → --plima-highlight), nicht mehr flächig. Die PLIMA-Markenfarben-Ausnahme gilt NUR auf /products, nicht auf /references – der PLIMA-Case dort nutzt für seine Tech-Stack-Chips wie das allgemeine TechBand.astro die Original-Markenfarbe je Icon aus simple-icons (PlimaTechStack.astro, variant="brand").

## Inhaltliche Festlegungen

- Headsquare: Freigegeben, aktiv (SHOW_HEADSQUARE=true in src/components/CaseTeaser.astro und src/views/ReferencesView.astro; schriftliche Freigabe von Michael Mayr liegt vor). Endkunde bleibt weiterhin NIE namentlich genannt.
- [x] IBAN im Impressum eingetragen (HR4724020061101287518, Erste & Steiermärkische Bank d.d.).
- Medizin-SaaS: nur als "vertikales SaaS für den Medizinbereich, kroatischer Markt, Q1/2027" beschreiben – nie Produktname oder Details.
- Das Wort "Body-Leasing" (DE/EN/HR) wird auf der Website nicht verwendet. Die Haltung dahinter bleibt: persönlich bekannte Profile statt CV-Datenbanken, eigene Produkte als Beweis für Delivery-Qualität.
- Founder-Story auf /about: Mirano-zentriert erzählen ("Warum es Mirano gibt"), nicht als Personen-Bio. Bescheidener Ton – kein Selbstlob, keine Zeugnis-Zitate/-Eigenschaftslisten; die Anekdote "am Ende wollten alle Teil davon sein" bleibt draußen. Keine Presse-Links (Lider/Netokracija bewusst weggelassen, Entscheidung Juli 2026). Das Kroatien-Engagement (kleinere kroatische Kunden) wird aktiv erwähnt.
- Deutsche Navigation/Seitentitel für /about: "Über Mirano" (nicht "Über uns") – in Header, Footer, title-Tag und Eyebrow.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
