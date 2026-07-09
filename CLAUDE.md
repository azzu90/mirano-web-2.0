## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Design-Regeln

- Ausnahme: Die PLIMA-Feature-Card auf /products sowie der PLIMA-Case auf /references (nur die Tech-Stack-Chips) tragen PLIMA-Markenfarben (--plima-primary #6D28D9, --plima-highlight #8444EE, Verlauf #9A84F4→#6B3FE4 für Accent-Leiste/Badge, Grün #40AF74 / Text #1E7A4C), strikt auf diese Elemente begrenzt. CTA-Button "plima.cloud besuchen" ist Verlauf (--plima-primary → --plima-highlight), nicht mehr flächig.

## Inhaltliche Festlegungen

- Headsquare: Nennung entfernt (SHOW_HEADSQUARE=false in src/components/CaseTeaser.astro und src/views/ReferencesView.astro).
- [x] IBAN im Impressum eingetragen (HR4724020061101287518, Erste & Steiermärkische Bank d.d.).
- Medizin-SaaS: nur als "vertikales SaaS für den Medizinbereich, kroatischer Markt, Q1/2027" beschreiben – nie Produktname oder Details.
- Das Wort "Body-Leasing" (DE/EN/HR) wird auf der Website nicht verwendet. Die Haltung dahinter bleibt: persönlich bekannte Profile statt CV-Datenbanken, eigene Produkte als Beweis für Delivery-Qualität.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
