// Inhalte der 5 Leistungs-Detailseiten (EN/DE/HR)
import type { Lang } from '../i18n';

export const serviceSlugs = [
  'software-engineering',
  'team-extension',
  'qa-testing',
  'managed-services',
  'ai-automation',
] as const;
export type ServiceSlug = (typeof serviceSlugs)[number];

type Block = { h: string; d: string };
export type ServiceContent = {
  title: string;
  metaDesc: string;
  eyebrow: string;
  lead: string;
  offerTitle: string;
  offer: Block[];
  howTitle: string;
  how: string[];
};

export const services: Record<ServiceSlug, Record<Lang, ServiceContent>> = {
  'software-engineering': {
    en: {
      title: 'Software Engineering',
      metaDesc: 'Web applications, platforms and integrations from senior-led EU teams – from architecture to operations. Fixed price or T&M.',
      eyebrow: 'Service · Engineering',
      lead: 'We design, build and operate modern web and enterprise software – robust, scalable and documented. The same engineers who build our own products work in your project.',
      offerTitle: 'What we build',
      offer: [
        { h: 'Full-stack development', d: 'Frontend and backend systems with clean, testable code – React, Angular, Vue, Node.js, Java, Python.' },
        { h: 'APIs & integrations', d: 'REST and GraphQL interfaces, secure third-party integrations, migration of legacy interfaces.' },
        { h: 'Cloud-native engineering', d: 'Containerized systems on AWS, Azure or Google Cloud – Docker, Kubernetes, infrastructure as code with Terraform.' },
        { h: 'MVP & prototyping', d: 'Functional first versions in weeks, not quarters – our own product PLIMA went from idea to launch in 3 months.' },
        { h: 'Legacy modernization', d: 'Refactoring, replatforming and step-by-step migration from monolith to services – without stopping the business.' },
      ],
      howTitle: 'How we work',
      how: [
        'Fixed price or time & material – you choose the model that fits the risk profile',
        'Agile delivery with reviews every two weeks and partial, functional results per phase',
        'Direct access to the engineers and to the founder – no proxy layer',
        'EU contracts, GDPR-native, code and documentation belong to you',
      ],
    },
    de: {
      title: 'Software Engineering',
      metaDesc: 'Web-Anwendungen, Plattformen und Integrationen von Senior-geführten Teams aus der EU – von Architektur bis Betrieb. Festpreis oder T&M.',
      eyebrow: 'Leistung · Engineering',
      lead: 'Wir konzipieren, bauen und betreiben moderne Web- und Enterprise-Software – robust, skalierbar und dokumentiert. Dieselben Engineers, die unsere eigenen Produkte bauen, arbeiten in Ihrem Projekt.',
      offerTitle: 'Was wir bauen',
      offer: [
        { h: 'Full-Stack-Entwicklung', d: 'Frontend- und Backend-Systeme mit sauberem, testbarem Code – React, Angular, Vue, Node.js, Java, Python.' },
        { h: 'APIs & Integrationen', d: 'REST- und GraphQL-Schnittstellen, sichere Drittsystem-Anbindungen, Ablösung von Legacy-Schnittstellen.' },
        { h: 'Cloud-native Engineering', d: 'Containerisierte Systeme auf AWS, Azure oder Google Cloud – Docker, Kubernetes, Infrastructure as Code mit Terraform.' },
        { h: 'MVP & Prototyping', d: 'Funktionierende erste Versionen in Wochen statt Quartalen – unser eigenes Produkt PLIMA ging in 3 Monaten von der Idee zum Launch.' },
        { h: 'Legacy-Modernisierung', d: 'Refactoring, Replatforming und schrittweise Migration vom Monolithen zu Services – ohne den Betrieb anzuhalten.' },
      ],
      howTitle: 'Wie wir arbeiten',
      how: [
        'Festpreis oder Time & Material – Sie wählen das Modell, das zum Risikoprofil passt',
        'Agile Lieferung mit Reviews alle zwei Wochen und funktionalen Teilergebnissen pro Phase',
        'Direkter Draht zu den Engineers und zum Gründer – keine Zwischenschicht',
        'EU-Verträge, DSGVO-nativ, Code und Dokumentation gehören Ihnen',
      ],
    },
    hr: {
      title: 'Razvoj softvera',
      metaDesc: 'Web aplikacije, platforme i integracije timova vođenih seniorima iz EU – od arhitekture do produkcije. Fiksna cijena ili T&M.',
      eyebrow: 'Usluga · Engineering',
      lead: 'Osmišljavamo, gradimo i održavamo moderan web i enterprise softver – robustan, skalabilan i dokumentiran. Isti inženjeri koji grade naše proizvode rade na vašem projektu.',
      offerTitle: 'Što gradimo',
      offer: [
        { h: 'Full-stack razvoj', d: 'Frontend i backend sustavi s čistim, testabilnim kodom – React, Angular, Vue, Node.js, Java, Python.' },
        { h: 'API-ji i integracije', d: 'REST i GraphQL sučelja, sigurne integracije trećih sustava, zamjena naslijeđenih sučelja.' },
        { h: 'Cloud-native inženjering', d: 'Kontejnerizirani sustavi na AWS-u, Azureu ili Google Cloudu – Docker, Kubernetes, infrastruktura kao kod s Terraformom.' },
        { h: 'MVP i prototipiranje', d: 'Funkcionalne prve verzije u tjednima, ne kvartalima – naš proizvod PLIMA od ideje do lansiranja u 3 mjeseca.' },
        { h: 'Modernizacija naslijeđenih sustava', d: 'Refactoring, replatforming i postupna migracija s monolita na servise – bez zaustavljanja poslovanja.' },
      ],
      howTitle: 'Kako radimo',
      how: [
        'Fiksna cijena ili time & material – birate model koji odgovara profilu rizika',
        'Agilna isporuka s pregledima svaka dva tjedna i funkcionalnim rezultatima po fazama',
        'Izravan kontakt s inženjerima i osnivačem – bez posrednika',
        'EU ugovori, GDPR, kod i dokumentacija pripadaju vama',
      ],
    },
  },
  'team-extension': {
    en: {
      title: 'Experts & Team Extension',
      metaDesc: 'Senior developers, testers and consultants extend your team – remote-first from Zagreb, starting within 5–10 business days.',
      eyebrow: 'Service · Team extension',
      lead: 'Senior engineers from our curated pool extend your team – remote-first, integrated into your processes and tools, starting within 5–10 business days.',
      offerTitle: 'What you get',
      offer: [
        { h: 'Curated senior profiles', d: 'A pool deliberately capped at 40 experts with a high senior share – we propose profiles that actually match, not a CV pile.' },
        { h: 'Fast, low-risk start', d: 'Profiles within days, start within 5–10 business days, short notice periods – you stay flexible.' },
        { h: 'Real integration', d: 'Our people work in your sprints, your tools, your standups – with documented results, not just hours.' },
        { h: 'Legally clean setup', d: 'Remote-first with genuine service contracts under EU law. On-site assignments in Germany are structured to comply with labor-leasing rules.' },
      ],
      howTitle: 'How it works',
      how: [
        'Requirements call with the founder – role, stack, seniority, start date',
        'Matching profiles within a few days, interviews directly with the engineers',
        'Start remote-first; on-site kickoffs or workshops on request',
        'Monthly transparent invoicing, no hidden fees',
      ],
    },
    de: {
      title: 'Experten & Team Extension',
      metaDesc: 'Senior-Entwickler, Tester und Consultants erweitern Ihr Team – remote-first aus Zagreb, Start in 5–10 Werktagen.',
      eyebrow: 'Leistung · Team Extension',
      lead: 'Senior-Engineers aus unserem kuratierten Pool erweitern Ihr Team – remote-first, integriert in Ihre Prozesse und Tools, Start in 5–10 Werktagen.',
      offerTitle: 'Was Sie bekommen',
      offer: [
        { h: 'Kuratierte Senior-Profile', d: 'Ein bewusst auf 40 Experten begrenzter Pool mit hohem Senior-Anteil – wir schlagen Profile vor, die wirklich passen, keinen CV-Stapel.' },
        { h: 'Schneller Start ohne Risiko', d: 'Profile innerhalb weniger Tage, Start in 5–10 Werktagen, kurze Kündigungsfristen – Sie bleiben flexibel.' },
        { h: 'Echte Integration', d: 'Unsere Leute arbeiten in Ihren Sprints, Ihren Tools, Ihren Standups – mit dokumentierten Ergebnissen, nicht nur Stunden.' },
        { h: 'Rechtlich sauberes Setup', d: 'Remote-first mit echten Dienst-/Werkverträgen nach EU-Recht. Onsite-Einsätze in Deutschland werden AÜG-konform strukturiert.' },
      ],
      howTitle: 'So läuft es ab',
      how: [
        'Anforderungs-Call mit dem Gründer – Rolle, Stack, Seniorität, Starttermin',
        'Passende Profile innerhalb weniger Tage, Interviews direkt mit den Engineers',
        'Start remote-first; Kickoffs oder Workshops vor Ort auf Anfrage',
        'Monatlich transparente Abrechnung, keine versteckten Kosten',
      ],
    },
    hr: {
      title: 'Stručnjaci i proširenje tima',
      metaDesc: 'Senior developeri, testeri i konzultanti proširuju vaš tim – remote-first iz Zagreba, početak za 5–10 radnih dana.',
      eyebrow: 'Usluga · Proširenje tima',
      lead: 'Senior inženjeri iz našeg kuriranog poola proširuju vaš tim – remote-first, integrirani u vaše procese i alate, početak za 5–10 radnih dana.',
      offerTitle: 'Što dobivate',
      offer: [
        { h: 'Kurirani senior profili', d: 'Pool svjesno ograničen na 40 stručnjaka s visokim udjelom seniora – predlažemo profile koji stvarno odgovaraju.' },
        { h: 'Brz početak bez rizika', d: 'Profili unutar nekoliko dana, početak za 5–10 radnih dana, kratki otkazni rokovi – ostajete fleksibilni.' },
        { h: 'Prava integracija', d: 'Naši ljudi rade u vašim sprintovima, alatima i standupima – s dokumentiranim rezultatima, ne samo satima.' },
        { h: 'Pravno čist model', d: 'Remote-first s pravim ugovorima o djelu/uslugama po pravu EU. Angažmani na lokaciji u Njemačkoj strukturiraju se u skladu s propisima.' },
      ],
      howTitle: 'Kako funkcionira',
      how: [
        'Poziv o zahtjevima s osnivačem – uloga, stack, senioritet, datum početka',
        'Odgovarajući profili unutar nekoliko dana, intervjui izravno s inženjerima',
        'Početak remote-first; kickoff ili radionice uživo na upit',
        'Mjesečno transparentno fakturiranje, bez skrivenih troškova',
      ],
    },
  },
  'qa-testing': {
    en: {
      title: 'QA & Testing',
      metaDesc: 'Test management, test automation and quality assurance – including regulated environments such as insurance. ISTQB-experienced testers from the EU.',
      eyebrow: 'Service · Quality',
      lead: 'Test management and automation that hold up in regulated environments – our QA experts currently secure quality at a Munich insurance group.',
      offerTitle: 'What we cover',
      offer: [
        { h: 'Test management', d: 'Strategy, planning, coordination and reporting – embedded in your release process, including SAP test management.' },
        { h: 'Test automation', d: 'Maintainable automation with Cypress, Playwright and Selenium – UI, API and regression suites that stay green.' },
        { h: 'Performance & load testing', d: 'JMeter-based load scenarios that find limits before your customers do.' },
        { h: 'QA in regulated environments', d: 'Documentation, traceability and audit-ready processes – proven in insurance projects.' },
      ],
      howTitle: 'How we work',
      how: [
        'QA embedded in your development cycle, not bolted on at the end',
        'Metrics and reports your stakeholders can actually read',
        'Automation with handover – your team can maintain what we build',
        'Available as individual experts or as a managed QA team',
      ],
    },
    de: {
      title: 'QA & Testing',
      metaDesc: 'Testmanagement, Testautomatisierung und Qualitätssicherung – auch in regulierten Umgebungen wie Versicherungen. ISTQB-erfahrene Tester aus der EU.',
      eyebrow: 'Leistung · Qualität',
      lead: 'Testmanagement und Automatisierung, die in regulierten Umgebungen bestehen – unsere QA-Experten sichern aktuell die Qualität bei einem Münchner Versicherungskonzern.',
      offerTitle: 'Was wir abdecken',
      offer: [
        { h: 'Testmanagement', d: 'Strategie, Planung, Koordination und Reporting – eingebettet in Ihren Release-Prozess, inklusive SAP-Testmanagement.' },
        { h: 'Testautomatisierung', d: 'Wartbare Automatisierung mit Cypress, Playwright und Selenium – UI-, API- und Regressions-Suiten, die grün bleiben.' },
        { h: 'Performance- & Lasttests', d: 'JMeter-basierte Lastszenarien, die Grenzen finden, bevor es Ihre Kunden tun.' },
        { h: 'QA in regulierten Umgebungen', d: 'Dokumentation, Nachvollziehbarkeit und audit-fähige Prozesse – erprobt in Versicherungsprojekten.' },
      ],
      howTitle: 'Wie wir arbeiten',
      how: [
        'QA eingebettet in Ihren Entwicklungszyklus, nicht am Ende angeflanscht',
        'Metriken und Reports, die Ihre Stakeholder wirklich lesen können',
        'Automatisierung mit Übergabe – Ihr Team kann pflegen, was wir bauen',
        'Verfügbar als einzelne Experten oder als Managed-QA-Team',
      ],
    },
    hr: {
      title: 'QA i testiranje',
      metaDesc: 'Test management, automatizacija testiranja i osiguranje kvalitete – i u reguliranim okruženjima poput osiguranja.',
      eyebrow: 'Usluga · Kvaliteta',
      lead: 'Test management i automatizacija koji prolaze i u reguliranim okruženjima – naši QA stručnjaci trenutačno osiguravaju kvalitetu kod minhenskog osiguravajućeg koncerna.',
      offerTitle: 'Što pokrivamo',
      offer: [
        { h: 'Test management', d: 'Strategija, planiranje, koordinacija i izvještavanje – ugrađeno u vaš release proces, uključujući SAP test management.' },
        { h: 'Automatizacija testiranja', d: 'Održiva automatizacija s Cypressom, Playwrightom i Seleniumom – UI, API i regresijski paketi koji ostaju zeleni.' },
        { h: 'Testiranje performansi i opterećenja', d: 'JMeter scenariji opterećenja koji pronalaze granice prije vaših klijenata.' },
        { h: 'QA u reguliranim okruženjima', d: 'Dokumentacija, sljedivost i procesi spremni za reviziju – dokazano u projektima osiguranja.' },
      ],
      howTitle: 'Kako radimo',
      how: [
        'QA ugrađen u vaš razvojni ciklus, ne dodan na kraju',
        'Metrike i izvještaji koje dionici stvarno mogu čitati',
        'Automatizacija s primopredajom – vaš tim može održavati ono što izgradimo',
        'Dostupno kao pojedinačni stručnjaci ili kao managed QA tim',
      ],
    },
  },
  'managed-services': {
    en: {
      title: 'Managed Services & Support',
      metaDesc: 'SLA-based operations: helpdesk, infrastructure, maintenance and monitoring – ITIL-aligned, in German and English.',
      eyebrow: 'Service · Operations',
      lead: 'Predictable operations instead of firefighting: helpdesk, maintenance and monitoring under a clear SLA – ITIL-aligned, in German and English.',
      offerTitle: 'What we take over',
      offer: [
        { h: 'Helpdesk & user support', d: '1st and 2nd level support by email and phone – documented tickets, defined response times.' },
        { h: 'Application operations', d: 'Maintenance, updates and incident handling for the software we or others have built.' },
        { h: 'Monitoring & prevention', d: 'Proactive monitoring, alerting and regular health checks – problems get caught before users notice.' },
        { h: 'Documentation & training', d: 'Runbooks, user documentation and onboarding of new employees.' },
      ],
      howTitle: 'How the contract works',
      how: [
        'Clear SLA: response times, availability window and escalation path defined upfront',
        'Fixed monthly rate – budget certainty instead of surprise invoices',
        'ITIL-aligned processes, every ticket documented',
        'Quarterly service reviews with the founder',
      ],
    },
    de: {
      title: 'Managed Services & Support',
      metaDesc: 'SLA-basierter Betrieb: Helpdesk, Infrastruktur, Wartung und Monitoring – ITIL-orientiert, auf Deutsch und Englisch.',
      eyebrow: 'Leistung · Betrieb',
      lead: 'Planbarer Betrieb statt Feuerwehr: Helpdesk, Wartung und Monitoring unter klarem SLA – ITIL-orientiert, auf Deutsch und Englisch.',
      offerTitle: 'Was wir übernehmen',
      offer: [
        { h: 'Helpdesk & User-Support', d: '1st- und 2nd-Level-Support per E-Mail und Telefon – dokumentierte Tickets, definierte Reaktionszeiten.' },
        { h: 'Application Operations', d: 'Wartung, Updates und Incident-Handling für Software, die wir oder andere gebaut haben.' },
        { h: 'Monitoring & Prävention', d: 'Proaktives Monitoring, Alerting und regelmäßige Health-Checks – Probleme werden gefangen, bevor Nutzer sie merken.' },
        { h: 'Dokumentation & Schulung', d: 'Runbooks, Anwender-Dokumentation und Onboarding neuer Mitarbeitender.' },
      ],
      howTitle: 'So funktioniert der Vertrag',
      how: [
        'Klares SLA: Reaktionszeiten, Verfügbarkeitsfenster und Eskalationsweg vorab definiert',
        'Fester Monatspreis – Budgetsicherheit statt Überraschungsrechnungen',
        'ITIL-orientierte Prozesse, jedes Ticket dokumentiert',
        'Quartalsweise Service-Reviews mit dem Gründer',
      ],
    },
    hr: {
      title: 'Managed Services i podrška',
      metaDesc: 'Rad po SLA modelu: helpdesk, infrastruktura, održavanje i monitoring – prema ITIL-u, na njemačkom i engleskom.',
      eyebrow: 'Usluga · Operacije',
      lead: 'Predvidljiv rad umjesto gašenja požara: helpdesk, održavanje i monitoring uz jasan SLA – prema ITIL-u, na njemačkom i engleskom.',
      offerTitle: 'Što preuzimamo',
      offer: [
        { h: 'Helpdesk i korisnička podrška', d: '1st i 2nd level podrška e-poštom i telefonom – dokumentirani ticketi, definirana vremena odziva.' },
        { h: 'Operacije aplikacija', d: 'Održavanje, ažuriranja i rješavanje incidenata za softver koji smo izgradili mi ili drugi.' },
        { h: 'Monitoring i prevencija', d: 'Proaktivni monitoring, alarmiranje i redovite provjere – problemi se uhvate prije nego što ih korisnici primijete.' },
        { h: 'Dokumentacija i edukacija', d: 'Runbookovi, korisnička dokumentacija i onboarding novih zaposlenika.' },
      ],
      howTitle: 'Kako funkcionira ugovor',
      how: [
        'Jasan SLA: vremena odziva, prozor dostupnosti i put eskalacije definirani unaprijed',
        'Fiksna mjesečna cijena – sigurnost budžeta umjesto iznenađenja',
        'Procesi prema ITIL-u, svaki ticket dokumentiran',
        'Kvartalni pregledi usluge s osnivačem',
      ],
    },
  },
  'ai-automation': {
    en: {
      title: 'AI & Automation',
      metaDesc: 'AI consulting and hands-on integration – LLM workflows, intelligent document processing, AI-assisted development. We use AI daily in our own products.',
      eyebrow: 'Service · AI',
      lead: 'We bring AI into companies that don\u2019t have AI experience yet – pragmatically, GDPR-aware and with working results. We use Claude and Cursor daily in our own product development.',
      offerTitle: 'Where AI pays off',
      offer: [
        { h: 'LLM workflows & assistants', d: 'Internal assistants and automations built on large language models – connected to your data, hosted EU-compliant.' },
        { h: 'Intelligent document processing', d: 'Classification, extraction and routing of documents – OCR plus AI instead of manual sorting.' },
        { h: 'AI-assisted development', d: 'We accelerate delivery with AI tooling (Claude, Cursor) – and help your team adopt it safely.' },
        { h: 'AI readiness consulting', d: 'Honest assessment of where AI helps in your processes – and where it doesn\u2019t. No hype, a prioritized roadmap.' },
      ],
      howTitle: 'How we approach it',
      how: [
        'Start with one concrete process, not a strategy deck',
        'Prototype in weeks, measure the result, then scale',
        'GDPR and data residency considered from day one',
        'Knowledge transfer included – your team learns to run it',
      ],
    },
    de: {
      title: 'AI & Automatisierung',
      metaDesc: 'KI-Beratung und praktische Integration – LLM-Workflows, intelligente Dokumentenverarbeitung, AI-gestützte Entwicklung. Wir nutzen AI täglich in eigenen Produkten.',
      eyebrow: 'Leistung · AI',
      lead: 'Wir bringen KI in Unternehmen, die noch keine KI-Erfahrung haben – pragmatisch, DSGVO-bewusst und mit funktionierenden Ergebnissen. Claude und Cursor nutzen wir täglich in unserer eigenen Produktentwicklung.',
      offerTitle: 'Wo sich AI rechnet',
      offer: [
        { h: 'LLM-Workflows & Assistenten', d: 'Interne Assistenten und Automatisierungen auf Basis großer Sprachmodelle – angebunden an Ihre Daten, EU-konform gehostet.' },
        { h: 'Intelligente Dokumentenverarbeitung', d: 'Klassifikation, Extraktion und Routing von Dokumenten – OCR plus KI statt manueller Sortierung.' },
        { h: 'AI-gestützte Entwicklung', d: 'Wir beschleunigen die Lieferung mit AI-Tooling (Claude, Cursor) – und helfen Ihrem Team, es sicher einzusetzen.' },
        { h: 'AI-Readiness-Beratung', d: 'Ehrliche Einschätzung, wo KI in Ihren Prozessen hilft – und wo nicht. Kein Hype, eine priorisierte Roadmap.' },
      ],
      howTitle: 'Unser Vorgehen',
      how: [
        'Start mit einem konkreten Prozess, nicht mit einem Strategie-Deck',
        'Prototyp in Wochen, Ergebnis messen, dann skalieren',
        'DSGVO und Datenstandort von Tag eins mitgedacht',
        'Wissenstransfer inklusive – Ihr Team lernt, es selbst zu betreiben',
      ],
    },
    hr: {
      title: 'AI i automatizacija',
      metaDesc: 'AI savjetovanje i praktična integracija – LLM procesi, inteligentna obrada dokumenata, razvoj potpomognut AI-jem.',
      eyebrow: 'Usluga · AI',
      lead: 'Uvodimo AI u tvrtke koje još nemaju iskustva s umjetnom inteligencijom – pragmatično, uz GDPR i s rezultatima koji rade. Claude i Cursor svakodnevno koristimo u razvoju vlastitih proizvoda.',
      offerTitle: 'Gdje se AI isplati',
      offer: [
        { h: 'LLM procesi i asistenti', d: 'Interni asistenti i automatizacije na velikim jezičnim modelima – povezani s vašim podacima, hostani u skladu s EU pravilima.' },
        { h: 'Inteligentna obrada dokumenata', d: 'Klasifikacija, ekstrakcija i usmjeravanje dokumenata – OCR plus AI umjesto ručnog sortiranja.' },
        { h: 'Razvoj potpomognut AI-jem', d: 'Ubrzavamo isporuku AI alatima (Claude, Cursor) – i pomažemo vašem timu da ih sigurno usvoji.' },
        { h: 'AI readiness savjetovanje', d: 'Iskrena procjena gdje AI pomaže u vašim procesima – a gdje ne. Bez hypea, s prioritiziranom roadmapom.' },
      ],
      howTitle: 'Naš pristup',
      how: [
        'Početak s jednim konkretnim procesom, ne sa strateškom prezentacijom',
        'Prototip u tjednima, mjerenje rezultata, zatim skaliranje',
        'GDPR i lokacija podataka uključeni od prvog dana',
        'Prijenos znanja uključen – vaš tim uči samostalno upravljati rješenjem',
      ],
    },
  },
};
