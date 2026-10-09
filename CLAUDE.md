## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Design-Regeln

- Ausnahme: Die PLIMA-Feature-Card auf /products trägt PLIMA-Markenfarben (--plima-primary #6D28D9, --plima-highlight #8444EE, Verlauf #9A84F4→#6B3FE4 für Accent-Leiste/Badge, Grün #40AF74 / Text #1E7A4C), strikt auf diese Card begrenzt. CTA-Button "plima.cloud besuchen" ist Verlauf (--plima-primary → --plima-highlight), nicht mehr flächig. Die PLIMA-Markenfarben-Ausnahme gilt NUR auf /products, nicht auf /references – der PLIMA-Case dort nutzt für seine Tech-Stack-Chips wie das allgemeine TechBand.astro die Original-Markenfarbe je Icon aus simple-icons (PlimaTechStack.astro, variant="brand").

### Design-System-Showcase (/design-system, seit 21.08.2026)

- Eigenständige Seite (EN/DE/HR: `src/views/DesignSystemView.astro` + drei Page-Shims), NICHT in der Hauptnavigation – nur kleiner Footer-Link in der Bottom-Row (EN "Design system", DE "Designsystem", HR "Sustav dizajna"). Bewusst indexiert (Sitemap, kein noindex).
- **Standing-Rule: Werte nie von Hand in den View kopieren.** Alle gezeigten Werte (Hex, px, ms, Bezier, clamp) werden zur Build-Zeit aus `src/styles/tokens.css` geparst (`src/utils/design-tokens.ts`; Kontrast-Badges: `src/utils/contrast.ts`). Die PLIMA-Ausnahme-Farben werden live aus den `--plima-*`-Props in `src/views/ProductsView.astro` geparst und auf /design-system NUR als klar gekennzeichnete Dokumentation gezeigt (Quarantäne-Block, kleine Dots) – das ist Doku-Kontext, keine Aufweichung der Regel "PLIMA-Farben nur auf /products".
- Rollen-/Regel-Prosa ist dreisprachige Copy im View, gekeyt am Token-Namen: verschwindet ein Token aus tokens.css, verschwindet seine Kachel (Build-Warnung `[design-tokens]`), der Build bricht nie. Neue Tokens tauchen erst auf, wenn sie in die Namenslisten/Rollen-Copy des Views aufgenommen werden.
- **Logo-Schutzzone (neu definiert mit dieser Seite, Nutzer-bestätigt 21.08.2026): x = Höhe der M-Marke** auf allen Seiten – demonstriert im Clear-Space-Block der Seite (`.cs-frame`).
- **Icon solo (`public/favicon.svg`, neu seit 09.10.2026):** Kreis mit Verlauf #FF3131 → #FF904D (45°-Diagonale, oben links → unten rechts, `userSpaceOnUse`) und das m als **echte Aussparung** (Alpha 0, kein weißes m auf Kreis). Das m ragt rechts über den Kreis hinaus (wie im Lockup), daher auf dunklem Grund eine offene Kante rechts – **gewollt**. Datei ist geprüft: nicht mit SVGO nachoptimieren, nicht neu zeichnen. Eingebunden ausschließlich als `<img src="/favicon.svg">` (Base.astro `<link rel="icon">`, Icon-solo-Kachel und Schutzzonen-Legende in DesignSystemView) – nie per CSS nachbauen. `public/favicon.ico` (16/32/48, transparent) ist daraus abgeleitet; bei Änderung am SVG neu erzeugen.
- Muted-Drift behoben (21.08.2026): DESIGN.md-Frontmatter und `.impeccable/design.json` sagten noch `#7A8288`, tokens.css ist mit `#687076` (AA-Fix) die Quelle der Wahrheit – beide Dokumente angeglichen.

### Tech-Stack-Band (TechBand.astro)

**Aktueller Stand (Ergänzung/Bereinigung nach Nutzerfeedback, 06.08.2026)**: SAP-Gruppe komplett entfernt (beide Einträge "SAP" und "SAP Test Management", ersatzlos, keine Ersetzung). "JFrog" aus Cloud & DevOps entfernt (Gruppe passt jetzt wieder auf eine Zeile). "Test Management" zu QA & Testing ergänzt – generisches, handgezeichnetes Klemmbrett-mit-Häkchen-Inline-SVG (`testManagementSvg` in TechBand.astro), da keine Marke, gleiche Technik wie das LLM-Integration-Icon. "Astro" zu Frontend ergänzt (siAstro, Hex #BC52EE, gegen simple-icons geprüft).

- **Frontend**: React, Next.js, Angular, Vue, TypeScript, Vaadin (technisch Frontend+Backend, aber laut Mislav hier einsortiert), Astro.
- **Backend**: Node.js, Java / Spring, Python, PostgreSQL, MySQL, MariaDB, MongoDB, GraphQL.
- **Cloud & DevOps**: AWS, Google Cloud, Docker, Kubernetes, Terraform, Jenkins, Vercel, Hostinger (EU).
- **QA & Testing**: Cypress, Playwright, Selenium, JMeter, Test Management (generisches Icon, keine Marke).
- **AI**: Claude, Cursor, LangChain, Spring AI (kein eigenes simple-icons-Icon – nutzt siSpringboot mit), LLM Integration (generischer Sparkle-Platzhalter).
- **Workflow**: Linear, GitHub.

Frühere Ergänzung (Feedback Mislav, Backend-Architekt, 06.08.2026): Datenbank-Auswahl im Backend-Cluster war zu schmal (nur PostgreSQL) und Cloud/DevOps- sowie AI-Gruppe fehlten mehrere real genutzte Tools – auf sein Feedback hin ergänzt (MySQL/MariaDB/MongoDB, Jenkins/JFrog, LangChain/Spring AI/Hermes). JFrog und die separate SAP-Gruppe sind seit der Bereinigung 06.08.2026 wieder entfernt (siehe oben).

Bewusst getrennt von PLIMA-spezifischen Tech-Chips auf /products (PlimaTechStack.astro: Java, Spring Boot, Vaadin, PostgreSQL) – dort ist es der Stack eines einzelnen Produkts, im TechBand der gesamte Expertise-Pool. Überschneidende Icons (Spring Boot, Vaadin, PostgreSQL) sind beabsichtigt und keine Inkonsistenz.

**Korrektur 06.08.2026**: Das ursprünglich für "Hermes" (KI-Tool) verwendete `siHermes`-Icon aus simple-icons zeigt tatsächlich das Logo des Paketdienstleisters Hermes – Namensgleichheit, aber falsche Marke. Icon-Verweis zunächst entfernt, "Hermes" lief kurzzeitig als reiner Text-Chip. Am selben Tag ersatzlos aus der Liste entfernt (kein Workaround-Symbol, siehe Standing-Regel unten) – auch kein Ersatz durch ChatGPT/OpenAI o. ä., da dafür ebenfalls kein offizielles Icon existiert.

**Wichtig für künftige Icon-Ergänzungen aus simple-icons**: Es reicht NICHT zu prüfen, ob ein Icon-Schlüssel existiert (`icons.siXyz !== undefined`) – der Schlüsselname garantiert nicht, dass das Icon die gemeinte Marke/das gemeinte Tool zeigt. simple-icons enthält viele gleichnamige, aber fachfremde Marken (Beispiel: `siHermes` = Paketdienstleister Hermes, nicht das KI-Tool). Vor jeder neuen Icon-Nutzung zusätzlich das SVG bzw. den Markennamen auf simpleicons.org visuell/inhaltlich verifizieren, dass es wirklich zur gemeinten Marke passt.

**Standing-Regel (06.08.2026): Kein Eintrag ohne passendes Icon.** Kein Workaround-Symbol für ein Tool suchen, das kein offizielles Icon hat (Ausnahme: die AWS-Wolke ist bereits etabliert und bleibt die einzige; "Test Management" seit 06.08.2026 als zweite Ausnahme mit generischem Klemmbrett-Icon, siehe oben). Im Zweifel den Eintrag weglassen, statt ihn als nackten Text-Chip ohne Icon zu zeigen – das war der Fehler bei Hermes. Der frühere reine Text-Chip "SAP Test Management" (SAP-Gruppe) wurde am 06.08.2026 zusammen mit "SAP" komplett aus dem Band entfernt – die Frage "entfernen oder Icon nachrüsten" ist damit erledigt (entfernt).

## Inhaltliche Festlegungen

- Headsquare: Namentliche Nennung ist freigegeben und gilt konsistent auf allen Seiten (src/components/CaseTeaser.astro, src/views/ReferencesView.astro) – schriftliche Freigabe von Michael Mayr liegt vor. Seit 07.08.2026 fest im Text verankert, kein Feature-Flag mehr (das frühere SHOW_HEADSQUARE in src/content/site.ts wurde entfernt, da die Freigabe endgültig ist). Endkunde (Versicherungskonzern) bleibt weiterhin NIE namentlich genannt.
- [x] IBAN im Impressum eingetragen (HR4724020061101287518, Erste & Steiermärkische Bank d.d.).
- Vercel Analytics: bewusster, dokumentierter Einsatz für anonyme, cookiefreie Reichweitenmessung (keine personenbezogene Nachverfolgung, keine dauerhaften Kennungen, keine Cookies) – Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO, so in PrivacyView.astro (alle drei Sprachen) beschrieben.
- [ ] Offener Punkt: Die Datenschutzerklärung (PrivacyView.astro) ist bislang ein Basistext und wurde noch NICHT juristisch geprüft – vor Livegang von einem Juristen freigeben lassen. Der interne Platzhalter-Hinweis dazu wurde aus dem öffentlichen Seitentext entfernt (07.08.2026), die Prüfung selbst steht weiterhin aus.
- Medizin-SaaS: nur als "vertikales SaaS für den Medizinbereich, kroatischer Markt, Q1/2027" beschreiben – nie Produktname oder Details.
- Das Wort "Body-Leasing" (DE/EN/HR) wird auf der Website nicht verwendet. Die Haltung dahinter bleibt: persönlich bekannte Profile statt CV-Datenbanken, eigene Produkte als Beweis für Delivery-Qualität.
- Founder-Story auf /about: Mirano-zentriert erzählen ("Warum es Mirano gibt"), nicht als Personen-Bio. Bescheidener Ton – kein Selbstlob, keine Zeugnis-Zitate/-Eigenschaftslisten; die Anekdote "am Ende wollten alle Teil davon sein" bleibt draußen. Keine Presse-Links (Lider/Netokracija bewusst weggelassen, Entscheidung Juli 2026). Das Kroatien-Engagement (kleinere kroatische Kunden) wird aktiv erwähnt.
- Deutsche Navigation/Seitentitel für /about: "Über Mirano" (nicht "Über uns") – in Header, Footer, title-Tag und Eyebrow.
- Zagreb-Fakten (korrigiert Juli 2026): erste Zagreb-Reise Q1 2021; ~1 Jahr Nearshore über PROCON IT; Direktanstellung CONET Technologies Holding zum 01.04.2022; Ende des Arbeitsverhältnisses Ende März 2025 → insgesamt ca. 4 Jahre Zagreb (nicht 3). SAP-Testmanagement 2018–2020 bei der Premium-Automobilmarke in München (via PROCON IT); UX-Arbeit ab 2020 als hausinternes Innovationsprojekt, Projektleitung erst später übernommen (nicht von Anfang an).
- **Korrektur 06.08.2026 (Zeitstrahl /about)**: 2008-Einstieg war bei Mawoh GmbH (jetzt im Zeitstrahl genannt). Das UX-Innovationsprojekt ab 2020 hatte entgegen einer vorherigen Annahme NICHTS mit dem Premium-Automobilhersteller/PROCON-IT-Einsatz zu tun – Armin hat es eigenständig vorangetrieben und mit Team & Aufträgen ausgebaut, erst später die Projektleitung übernommen. Die 2018/2020-Verknüpfung über denselben Kunden gilt also nur für das SAP-Testmanagement, nicht für die UX-Arbeit.
- Mitarbeiterzahlen-Fakten-Anker (Founder-Story-Update 06.08.2026): Die deutsche IT-Gruppe (CONET) hat insgesamt über 1.900 Mitarbeitende – nicht zu verwechseln mit der von Armin mitaufgebauten Zagreb-Niederlassung, die im Zeitraum 2021–2025 auf über 100 Mitarbeitende vor Ort wuchs. Beide Zahlen sind bewusst nebeneinander in der Founder-Story auf /about verwendet (Konzerngröße vs. Standort-Team); bei künftigen Textänderungen konsistent halten. Das bestehende Zitat in LocationsFounder.astro ("100-person IT organization") bezieht sich korrekt auf die Zagreb-Niederlassung, nicht auf den Konzern, und bleibt unverändert.

## Kontaktseite – bewusste Entscheidung

Keine Selbstbedienungs-Terminbuchung (kein Calendly o. ä.) auf /contact – bewusst durch einen Mailto-CTA (info@mirano-solutions.com) plus dieselbe Adresse zusätzlich als sichtbaren, kopierbaren Klartext ersetzt (Fallback, falls der mailto-Klick beim Besucher nichts öffnet). Begründung: Der Gründer hat wenig planbare freie Slots, ein öffentlicher Buchungskalender würde entweder ständig leerlaufen oder falsche Verfügbarkeit suggerieren. Telefonnummer bleibt als klickbarer tel:-Link bestehen. Umgesetzt in src/views/ContactView.astro (alle drei Sprachen).

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
