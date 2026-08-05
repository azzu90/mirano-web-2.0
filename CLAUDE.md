## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Design-Regeln

- Ausnahme: Die PLIMA-Feature-Card auf /products trägt PLIMA-Markenfarben (--plima-primary #6D28D9, --plima-highlight #8444EE, Verlauf #9A84F4→#6B3FE4 für Accent-Leiste/Badge, Grün #40AF74 / Text #1E7A4C), strikt auf diese Card begrenzt. CTA-Button "plima.cloud besuchen" ist Verlauf (--plima-primary → --plima-highlight), nicht mehr flächig. Die PLIMA-Markenfarben-Ausnahme gilt NUR auf /products, nicht auf /references – der PLIMA-Case dort nutzt für seine Tech-Stack-Chips wie das allgemeine TechBand.astro die Original-Markenfarbe je Icon aus simple-icons (PlimaTechStack.astro, variant="brand").

### Tech-Stack-Band (TechBand.astro)

Aktueller Stand (Ergänzung nach Feedback Mislav, Backend-Architekt, 06.08.2026): Datenbank-Auswahl im Backend-Cluster war zu schmal (nur PostgreSQL) und Cloud/DevOps- sowie AI-Gruppe fehlten mehrere real genutzte Tools – auf sein Feedback hin ergänzt:

- **Frontend**: React, Next.js, Angular, Vue, TypeScript, Vaadin (technisch Frontend+Backend, aber laut Mislav hier einsortiert).
- **Backend**: Node.js, Java / Spring, Python, PostgreSQL, MySQL, MariaDB, MongoDB, GraphQL.
- **Cloud & DevOps**: AWS, Google Cloud, Docker, Kubernetes, Terraform, Jenkins, JFrog, Vercel, Hostinger (EU).
- **QA & Testing**: Cypress, Playwright, Selenium, JMeter.
- **SAP**: SAP, SAP Test Management.
- **AI**: Claude, Cursor, LangChain, Spring AI (kein eigenes simple-icons-Icon – nutzt siSpringboot mit), Hermes (kein Icon, reiner Text-Chip – siehe Korrektur unten), LLM Integration (generischer Sparkle-Platzhalter).
- **Workflow**: Linear, GitHub.

Bewusst getrennt von PLIMA-spezifischen Tech-Chips auf /products (PlimaTechStack.astro: Java, Spring Boot, Vaadin, PostgreSQL) – dort ist es der Stack eines einzelnen Produkts, im TechBand der gesamte Expertise-Pool. Überschneidende Icons (Spring Boot, Vaadin, PostgreSQL) sind beabsichtigt und keine Inkonsistenz.

**Korrektur 06.08.2026**: Das ursprünglich für "Hermes" (KI-Tool) verwendete `siHermes`-Icon aus simple-icons zeigt tatsächlich das Logo des Paketdienstleisters Hermes – Namensgleichheit, aber falsche Marke. Icon-Verweis entfernt, "Hermes" läuft jetzt als reiner Text-Chip ohne Icon (wie AWS/SAP Test Management).

**Wichtig für künftige Icon-Ergänzungen aus simple-icons**: Es reicht NICHT zu prüfen, ob ein Icon-Schlüssel existiert (`icons.siXyz !== undefined`) – der Schlüsselname garantiert nicht, dass das Icon die gemeinte Marke/das gemeinte Tool zeigt. simple-icons enthält viele gleichnamige, aber fachfremde Marken (Beispiel: `siHermes` = Paketdienstleister Hermes, nicht das KI-Tool). Vor jeder neuen Icon-Nutzung zusätzlich das SVG bzw. den Markennamen auf simpleicons.org visuell/inhaltlich verifizieren, dass es wirklich zur gemeinten Marke passt. Im Zweifel: Text-Chip ohne Icon (Muster: AWS, SAP Test Management, Hermes).

## Inhaltliche Festlegungen

- Headsquare: Freigegeben, aktiv (SHOW_HEADSQUARE=true in src/components/CaseTeaser.astro und src/views/ReferencesView.astro; schriftliche Freigabe von Michael Mayr liegt vor). Endkunde bleibt weiterhin NIE namentlich genannt.
- [x] IBAN im Impressum eingetragen (HR4724020061101287518, Erste & Steiermärkische Bank d.d.).
- Medizin-SaaS: nur als "vertikales SaaS für den Medizinbereich, kroatischer Markt, Q1/2027" beschreiben – nie Produktname oder Details.
- Das Wort "Body-Leasing" (DE/EN/HR) wird auf der Website nicht verwendet. Die Haltung dahinter bleibt: persönlich bekannte Profile statt CV-Datenbanken, eigene Produkte als Beweis für Delivery-Qualität.
- Founder-Story auf /about: Mirano-zentriert erzählen ("Warum es Mirano gibt"), nicht als Personen-Bio. Bescheidener Ton – kein Selbstlob, keine Zeugnis-Zitate/-Eigenschaftslisten; die Anekdote "am Ende wollten alle Teil davon sein" bleibt draußen. Keine Presse-Links (Lider/Netokracija bewusst weggelassen, Entscheidung Juli 2026). Das Kroatien-Engagement (kleinere kroatische Kunden) wird aktiv erwähnt.
- Deutsche Navigation/Seitentitel für /about: "Über Mirano" (nicht "Über uns") – in Header, Footer, title-Tag und Eyebrow.
- Zagreb-Fakten (korrigiert Juli 2026): erste Zagreb-Reise Q1 2021; ~1 Jahr Nearshore über PROCON IT; Direktanstellung CONET Technologies Holding zum 01.04.2022; Ende des Arbeitsverhältnisses Ende März 2025 → insgesamt ca. 4 Jahre Zagreb (nicht 3). SAP-Testmanagement 2018–2020 bei der Premium-Automobilmarke in München; UX-Arbeit ab 2020 als hausinternes Innovationsprojekt, Projektleitung erst später übernommen (nicht von Anfang an).
- Mitarbeiterzahlen-Fakten-Anker (Founder-Story-Update 06.08.2026): Die deutsche IT-Gruppe (CONET) hat insgesamt über 1.900 Mitarbeitende – nicht zu verwechseln mit der von Armin mitaufgebauten Zagreb-Niederlassung, die im Zeitraum 2021–2025 auf über 100 Mitarbeitende vor Ort wuchs. Beide Zahlen sind bewusst nebeneinander in der Founder-Story auf /about verwendet (Konzerngröße vs. Standort-Team); bei künftigen Textänderungen konsistent halten. Das bestehende Zitat in LocationsFounder.astro ("100-person IT organization") bezieht sich korrekt auf die Zagreb-Niederlassung, nicht auf den Konzern, und bleibt unverändert.

## Design Context

Strategic and visual context lives in [PRODUCT.md](PRODUCT.md) (register, users, positioning, brand personality, anti-references) and [DESIGN.md](DESIGN.md) (colors, typography, components, Do's/Don'ts) at the project root, with a machine-readable sidecar at `.impeccable/design.json`. Read these before design/UI work — `/impeccable` commands load them automatically.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
