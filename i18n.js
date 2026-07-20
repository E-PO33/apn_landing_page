(function () {
  var TRANSLATIONS = {
  "bs": {
    "brand.subtitle": "Platforma",
    "nav.moduli": "Moduli",
    "nav.zasto": "Zašto APN",
    "nav.platforma": "Platforma",
    "nav.sigurnost": "Sigurnost",
    "nav.kontakt": "Kontakt",
    "nav.prijava": "Prijava",
    "nav.cta_demo": "Zatraži demo",
    "hero.badge": "APN Platforma",
    "hero.title": "Operativni sistem<br>za kompanije<br><span class=\"font-display italic text-primary\">u pokretu.</span>",
    "hero.subtitle": "Putni nalozi, radni nalozi i Asset Management — jedna interna\n                  platforma koja povezuje uposlenike, vozila, opremu i svaki\n                  resurs kompanije. Dizajnirana za kompanije čije poslovanje\n                  svakodnevno izlazi izvan kancelarije.",
    "hero.cta_secondary": "Obilazak platforme",
    "trust.security": "Enterprise sigurnost",
    "trust.encrypted": "Kriptirani podaci",
    "trust.uptime": "99,99% dostupnost",
    "industries.title": "Napravljeno za kompanije koje posluju izvan kancelarije.",
    "industries.automotive": "Automotive",
    "industries.banks": "Banke",
    "industries.telecom": "Telekom",
    "industries.construction": "Građevina",
    "industries.service_companies": "Servisne kompanije",
    "industries.sales_teams": "Prodajni timovi",
    "industries.public_institutions": "Javne ustanove",
    "industries.energy": "Energetika",
    "moduli.badge": "Šta APN radi",
    "moduli.title": "Sve što vaš tim treba,\n                <span class=\"font-display italic text-primary\">povezano</span>.",
    "moduli.subtitle": "Fokusirana interna platforma: putni nalozi, radni nalozi, Asset\n                Management, korisnici i izvještaji — bez nepotrebnih modula.",
    "modules.card1.title": "Putni nalozi",
    "modules.card1.desc": "Digitalno kreiranje putnih naloga koje traži zakonodavac.",
    "modules.card2.title": "Radni nalozi",
    "modules.card2.desc": "Interni radni nalozi za svaki servis, popravku ili\n                  intervenciju.",
    "modules.card3.desc": "White-label registar imovine — vozila, laptopi, alati, oprema.\n                  Svaka klasa ima svoja pravila.",
    "modules.card4.desc": "Specijalizovani modul za kompanije koje koriste službena\n                  vozila — nadograđen na Asset Management: registracija,\n                  servisi, osiguranje, kilometraža i istorija iz jednog\n                  registra.",
    "modules.card5.desc": "Uposlenici, uloge i pristupi. Svaki korisnik vidi tačno ono\n                  što treba.",
    "modules.card6.title": "Izvještaji po korisniku i imovini",
    "modules.card6.desc": "Precizni izvještaji po uposleniku i po svakoj jedinici\n                  imovine.",
    "zasto.badge": "Zašto APN",
    "zasto.title": "Sve operacije. Jedna\n                <span class=\"font-display italic text-primary\">povezana platforma</span>.",
    "zasto.subtitle": "Umjesto izoliranih aplikacija, svaki odjel radi u jednoj\n                platformi sa jedinstvenim izvorom istine.",
    "zasto.node_mgmt": "Menadžment",
    "zasto.node_sales": "Prodaja",
    "zasto.node_field": "Terenski timovi",
    "zasto.node_it": "IT",
    "zasto.node_warehouse": "Magacin",
    "zasto.node_admin": "Administracija",
    "zasto.node_finance": "Finansije",
    "zasto.node_fleet": "Fleet",
    "zasto.node_subtitle": "Platforma",
    "zasto.node_caption": "Operativna platforma",
    "timeline.badge": "Dnevne operacije",
    "timeline.title": "Jedan dan, jedna\n                <span class=\"font-display italic text-primary\">povezana historija</span>.",
    "timeline.subtitle": "Svaka radnja automatski ažurira historiju uposlenika i asseta.\n                Bez preklapanja, bez dupliranja, bez zaboravljanja.",
    "timeline.item1": "Laptop i vozilo dodijeljeni zaposleniku",
    "timeline.item2": "Putni nalog odobren",
    "timeline.item3": "Sastanak sa klijentom",
    "timeline.item4": "Radni nalog otvoren",
    "timeline.item5": "Nova oprema dodijeljena",
    "timeline.item6": "Servis završen",
    "timeline.item7": "Putni nalog zatvoren",
    "platforma.badge": "Obilazak platforme",
    "platforma.title": "Interna operativa,\n                <span class=\"font-display italic text-primary\">bez papira</span>.",
    "platforma.subtitle": "Putni nalozi za zakonodavca, radni nalozi za servis i\n                intervencije, Asset Management za sve što kompanija posjeduje —\n                u jednom sistemu.",
    "automation.badge": "Automatizacija",
    "automation.title": "Automatizirajte\n                <span class=\"font-display italic text-primary\">rutinu</span>.",
    "automation.subtitle": "Oslobodite tim od ponavljajućih zadataka. APN prati, obavještava\n                i ažurira u pozadini.",
    "automation.card1.title": "Podsjetnici za registraciju vozila",
    "automation.card1.desc": "Nikad više propuštena registracija — upozorenja sedmicama\n                  unaprijed.",
    "automation.card2.title": "Istek garancija",
    "automation.card2.desc": "Praćenje garancija za svu opremu i imovinu, 24/7.",
    "automation.card3.title": "Istek licenci",
    "automation.card3.desc": "Softverske i poslovne licence obnovljene na vrijeme.",
    "automation.card4.title": "Kalibracija opreme",
    "automation.card4.desc": "Termini kreirani iz standarda i vremenskih okidača.",
    "automation.card5.title": "Preventivno održavanje",
    "automation.card5.desc": "Automatski planovi za svaku klasu asseta.",
    "automation.card6.title": "Workflow odobravanja",
    "automation.card6.desc": "Digitalni workflow do potpisa i arhive.",
    "automation.card7.title": "Dodjela asseta",
    "automation.card7.desc": "Zaduženja i razduženja u nekoliko klikova.",
    "automation.card8.title": "Email izvještaji",
    "automation.card8.desc": "Sedmični i mjesečni sažeci na email.",
    "automation.card9.title": "Notifikacije radnih naloga",
    "automation.card9.desc": "Tim obaviješten pri svakoj promjeni statusa.",
    "automation.card10.title": "Istek dokumenata",
    "automation.card10.desc": "Ugovori, certifikati i dokumenti praćeni po datumu isteka.",
    "security.badge": "Sigurnost",
    "security.title": "Enterprise sigurnost,\n                <span class=\"font-display italic text-primary\">ugrađena</span>.",
    "security.subtitle": "Operativni podaci, poslovna dokumentacija, imovina i korisnici\n                zaštićeni su istim kontrolama kakve očekuju velike organizacije.",
    "security.card1.title": "Role-based dozvole",
    "security.card1.desc": "Granularne dozvole po timovima i lokacijama.",
    "security.card2.title": "Audit logovi",
    "security.card2.desc": "Svaka akcija zabilježena i pretraživa.",
    "security.card3.title": "Cloud infrastruktura",
    "security.card3.desc": "Redundantna, geo-distribuirana.",
    "security.card4.title": "Kriptirana pohrana",
    "security.card4.desc": "AES-256 u mirovanju, TLS 1.3 u prijenosu.",
    "security.card5.title": "Historija aktivnosti",
    "security.card5.desc": "Svaki korisnik, svaka radnja, uvijek dostupno.",
    "security.card6.title": "Multi-company podrška",
    "security.card6.desc": "Više firmi, jedan sistem, odvojene dozvole.",
    "mobileapp.badge": "Mobilna aplikacija",
    "mobileapp.title": "APN u vašem\n                  <span class=\"font-display italic text-primary\">džepu</span>.",
    "mobileapp.subtitle": "Isti sistem, ista historija. Za servisere, prodavače, vozače i\n                  menadžere — u kancelariji, na parkingu ili na putu.",
    "mobileapp.feat1": "Pretraga asseta",
    "mobileapp.feat2": "Putni nalozi",
    "mobileapp.feat3": "Radni nalozi",
    "mobileapp.feat4": "QR inventura",
    "mobileapp.feat5": "Digitalni potpis",
    "mobileapp.feat6": "Dodjela opreme",
    "mobileapp.feat7": "Push notifikacije",
    "mobileapp.feat8": "Offline režim",
    "cta.badge": "Krenite s APN-om",
    "cta.title": "Vodite cijelu operativu iz\n                <span class=\"font-display italic text-primary\">jedne platforme.</span>",
    "cta.subtitle": "Bez obzira upravljate li prodajnim timovima, servisnim ekipama,\n                voznim parkom ili poslovnom opremom — APN povezuje ljude,\n                imovinu i procese u jedinstven operativni sistem.",
    "cta.secondary_button": "Zakaži prezentaciju",
    "cta.trust1": "Implementacija za dane",
    "cta.trust2": "Enterprise SLA",
    "cta.trust3": "Posvećen success tim",
    "kontakt.badge": "Zatražite demo",
    "kontakt.title": "Razgovarajmo o\n                  <span class=\"font-display italic text-primary\">vašem timu</span>.",
    "kontakt.subtitle": "Popunite formular i naš tim će vas kontaktirati u roku od\n                  24h da dogovorimo demo prilagođen vašoj kompaniji.",
    "kontakt.address": "Sarajevo, Bosna i Hercegovina",
    "kontakt.form.name_label": "Ime i prezime",
    "kontakt.form.email_label": "Email",
    "kontakt.form.company_label": "Kompanija",
    "kontakt.form.phone_label": "Telefon <span class=\"optional\">(opcionalno)</span>",
    "kontakt.form.message_label": "Poruka",
    "kontakt.form.submit": "Pošalji zahtjev",
    "kontakt.form.note": "Javit ćemo vam se u roku od 24h. Bez obaveza.",
    "kontakt.form.success_title": "Hvala! Vaš zahtjev je zaprimljen.",
    "kontakt.form.success_body": "Javit ćemo vam se uskoro na navedeni email ili telefon.",
    "footer.description": "APN — Operativni sistem za kompanije koje upravljaju ljudima,\n                imovinom i terenskim operacijama.",
    "footer.address": "Sarajevo · Bosna i Hercegovina",
    "footer.col_product": "Proizvod",
    "footer.link_pregled": "Pregled",
    "footer.link_integracije": "Integracije",
    "footer.link_novosti": "Novosti",
    "footer.col_solutions": "Rješenja",
    "footer.link_auto_kuce": "Auto kuće",
    "footer.link_vozni_park": "Vozni park",
    "footer.link_rent_a_car": "Rent-a-Car",
    "footer.link_leasing": "Leasing",
    "footer.col_industries": "Industrije",
    "footer.link_automotive": "Automotive",
    "footer.link_mobilnost": "Mobilnost",
    "footer.link_servis": "Servis",
    "footer.link_enterprise": "Enterprise",
    "footer.col_company": "Kompanija",
    "footer.link_onama": "O nama",
    "footer.link_karijere": "Karijere",
    "footer.link_press": "Press",
    "footer.col_legal": "Pravno",
    "footer.link_privatnost": "Privatnost",
    "footer.link_uvjeti": "Uvjeti",
    "footer.link_dpa": "DPA",
    "footer.rights": "Sva prava zadržana.",
    "kontakt.form.company_placeholder": "Naziv kompanije",
    "kontakt.form.message_placeholder": "Recite nam nešto o vašim operacijama i šta vas najviše zanima...",
    "aria.lang_select": "Odaberite jezik",
    "aria.menu_toggle": "Otvori meni"
  },
  "en": {
    "nav.moduli": "Modules",
    "nav.zasto": "Why APN",
    "nav.platforma": "Platform",
    "nav.sigurnost": "Security",
    "nav.kontakt": "Contact",
    "nav.prijava": "Log in",
    "nav.cta_demo": "Request a demo",
    "brand.subtitle": "Platform",
    "hero.badge": "APN Platform",
    "hero.title": "Operating system<br>for companies<br><span class=\"font-display italic text-primary\">on the move.</span>",
    "hero.subtitle": "Travel orders, work orders and Asset Management — one internal platform connecting your employees, vehicles, equipment and every company resource. Built for companies whose business runs beyond the office, every day.",
    "hero.cta_secondary": "Take a platform tour",
    "trust.security": "Enterprise security",
    "trust.encrypted": "Encrypted data",
    "trust.uptime": "99.99% uptime",
    "industries.title": "Built for companies that operate beyond the office.",
    "industries.automotive": "Automotive",
    "industries.banks": "Banks",
    "industries.telecom": "Telecom",
    "industries.construction": "Construction",
    "industries.service_companies": "Service companies",
    "industries.sales_teams": "Sales teams",
    "industries.public_institutions": "Public institutions",
    "industries.energy": "Energy",
    "moduli.badge": "What APN does",
    "moduli.title": "Everything your team needs,\n                <span class=\"font-display italic text-primary\">connected</span>.",
    "moduli.subtitle": "A focused internal platform: travel orders, work orders, Asset\n                Management, users and reports — without unnecessary modules.",
    "modules.card1.title": "Travel orders",
    "modules.card1.desc": "Digital creation of travel orders required by law.",
    "modules.card2.title": "Work orders",
    "modules.card2.desc": "Internal work orders for every service, repair or\n                  intervention.",
    "modules.card3.desc": "A white-label asset registry — vehicles, laptops, tools, equipment.\n                  Every class has its own rules.",
    "modules.card4.desc": "A specialized module for companies using company\n                  vehicles — built on top of Asset Management: registration,\n                  servicing, insurance, mileage and history from one\n                  register.",
    "modules.card5.desc": "Employees, roles and access. Every user sees exactly\n                  what they need.",
    "modules.card6.title": "Reports by user and asset",
    "modules.card6.desc": "Precise reports for every employee and every asset\n                  unit.",
    "zasto.badge": "Why APN",
    "zasto.title": "All operations. One\n                <span class=\"font-display italic text-primary\">connected platform</span>.",
    "zasto.subtitle": "Instead of isolated apps, every department works in one\n                platform with a single source of truth.",
    "zasto.node_mgmt": "Management",
    "zasto.node_sales": "Sales",
    "zasto.node_field": "Field teams",
    "zasto.node_it": "IT",
    "zasto.node_warehouse": "Warehouse",
    "zasto.node_admin": "Administration",
    "zasto.node_finance": "Finance",
    "zasto.node_fleet": "Fleet",
    "zasto.node_subtitle": "Platform",
    "zasto.node_caption": "Operating platform",
    "timeline.badge": "Daily operations",
    "timeline.title": "One day, one\n                <span class=\"font-display italic text-primary\">connected history</span>.",
    "timeline.subtitle": "Every action automatically updates employee and asset history.\n                No overlap, no duplication, nothing forgotten.",
    "timeline.item1": "Laptop and vehicle assigned to employee",
    "timeline.item2": "Travel order approved",
    "timeline.item3": "Client meeting",
    "timeline.item4": "Work order opened",
    "timeline.item5": "New equipment assigned",
    "timeline.item6": "Service completed",
    "timeline.item7": "Travel order closed",
    "platforma.badge": "Platform tour",
    "platforma.title": "Internal operations,\n                <span class=\"font-display italic text-primary\">paperless</span>.",
    "platforma.subtitle": "Travel orders for compliance, work orders for service and\n                repairs, Asset Management for everything the company owns —\n                in one system.",
    "automation.badge": "Automation",
    "automation.title": "Automate\n                <span class=\"font-display italic text-primary\">the routine</span>.",
    "automation.subtitle": "Free your team from repetitive tasks. APN tracks, notifies\n                and updates in the background.",
    "automation.card1.title": "Vehicle registration reminders",
    "automation.card1.desc": "Never miss a registration again — alerts weeks\n                  in advance.",
    "automation.card2.title": "Warranty expiry",
    "automation.card2.desc": "Warranty tracking for all equipment and assets, 24/7.",
    "automation.card3.title": "License expiry",
    "automation.card3.desc": "Software and business licenses renewed on time.",
    "automation.card4.title": "Equipment calibration",
    "automation.card4.desc": "Appointments generated from standards and time-based triggers.",
    "automation.card5.title": "Preventive maintenance",
    "automation.card5.desc": "Automatic plans for every asset class.",
    "automation.card6.title": "Approval workflow",
    "automation.card6.desc": "A digital workflow through to signature and archiving.",
    "automation.card7.title": "Asset assignment",
    "automation.card7.desc": "Assign and return assets in a few clicks.",
    "automation.card8.title": "Email reports",
    "automation.card8.desc": "Weekly and monthly summaries by email.",
    "automation.card9.title": "Work order notifications",
    "automation.card9.desc": "Your team is notified on every status change.",
    "automation.card10.title": "Document expiry",
    "automation.card10.desc": "Contracts, certificates and documents tracked by expiry date.",
    "security.badge": "Security",
    "security.title": "Enterprise security,\n                <span class=\"font-display italic text-primary\">built in</span>.",
    "security.subtitle": "Operational data, business documentation, assets and users\n                are protected by the same controls large organizations expect.",
    "security.card1.title": "Role-based permissions",
    "security.card1.desc": "Granular permissions by team and location.",
    "security.card2.title": "Audit logs",
    "security.card2.desc": "Every action logged and searchable.",
    "security.card3.title": "Cloud infrastructure",
    "security.card3.desc": "Redundant, geo-distributed.",
    "security.card4.title": "Encrypted storage",
    "security.card4.desc": "AES-256 at rest, TLS 1.3 in transit.",
    "security.card5.title": "Activity history",
    "security.card5.desc": "Every user, every action, always available.",
    "security.card6.title": "Multi-company support",
    "security.card6.desc": "Multiple companies, one system, separate permissions.",
    "mobileapp.badge": "Mobile app",
    "mobileapp.title": "APN in your\n                  <span class=\"font-display italic text-primary\">pocket</span>.",
    "mobileapp.subtitle": "Same system, same history. For technicians, sales reps, drivers and\n                  managers — at the office, in the lot, or on the road.",
    "mobileapp.feat1": "Asset search",
    "mobileapp.feat2": "Travel orders",
    "mobileapp.feat3": "Work orders",
    "mobileapp.feat4": "QR inventory",
    "mobileapp.feat5": "Digital signature",
    "mobileapp.feat6": "Equipment assignment",
    "mobileapp.feat7": "Push notifications",
    "mobileapp.feat8": "Offline mode",
    "cta.badge": "Get started with APN",
    "cta.title": "Run your entire operation from\n                <span class=\"font-display italic text-primary\">one platform.</span>",
    "cta.subtitle": "Whether you manage sales teams, service crews,\n                a vehicle fleet or business equipment — APN connects people,\n                assets and processes into a single operating system.",
    "cta.secondary_button": "Schedule a presentation",
    "cta.trust1": "Implementation in days",
    "cta.trust2": "Enterprise SLA",
    "cta.trust3": "Dedicated success team",
    "kontakt.badge": "Request a demo",
    "kontakt.title": "Let's talk about\n                  <span class=\"font-display italic text-primary\">your team</span>.",
    "kontakt.subtitle": "Fill out the form and our team will contact you within\n                  24h to arrange a demo tailored to your company.",
    "kontakt.address": "Sarajevo, Bosnia and Herzegovina",
    "kontakt.form.name_label": "Full name",
    "kontakt.form.email_label": "Email",
    "kontakt.form.company_label": "Company",
    "kontakt.form.phone_label": "Phone <span class=\"optional\">(optional)</span>",
    "kontakt.form.message_label": "Message",
    "kontakt.form.submit": "Send request",
    "kontakt.form.note": "We'll get back to you within 24h. No obligation.",
    "kontakt.form.success_title": "Thank you! Your request has been received.",
    "kontakt.form.success_body": "We'll be in touch soon at the email or phone number you provided.",
    "footer.description": "APN — an operating system for companies managing people,\n                assets and field operations.",
    "footer.address": "Sarajevo · Bosnia and Herzegovina",
    "footer.col_product": "Product",
    "footer.link_pregled": "Overview",
    "footer.link_integracije": "Integrations",
    "footer.link_novosti": "News",
    "footer.col_solutions": "Solutions",
    "footer.link_auto_kuce": "Car dealerships",
    "footer.link_vozni_park": "Fleet",
    "footer.link_rent_a_car": "Rent-a-Car",
    "footer.link_leasing": "Leasing",
    "footer.col_industries": "Industries",
    "footer.link_automotive": "Automotive",
    "footer.link_mobilnost": "Mobility",
    "footer.link_servis": "Service",
    "footer.link_enterprise": "Enterprise",
    "footer.col_company": "Company",
    "footer.link_onama": "About us",
    "footer.link_karijere": "Careers",
    "footer.link_press": "Press",
    "footer.col_legal": "Legal",
    "footer.link_privatnost": "Privacy",
    "footer.link_uvjeti": "Terms",
    "footer.link_dpa": "DPA",
    "footer.rights": "All rights reserved.",
    "kontakt.form.company_placeholder": "Company name",
    "kontakt.form.message_placeholder": "Tell us a bit about your operations and what interests you most...",
    "aria.lang_select": "Select language",
    "aria.menu_toggle": "Open menu"
  },
  "de": {
    "nav.moduli": "Module",
    "nav.zasto": "Warum APN",
    "nav.platforma": "Plattform",
    "nav.sigurnost": "Sicherheit",
    "nav.kontakt": "Kontakt",
    "nav.prijava": "Anmelden",
    "nav.cta_demo": "Demo anfordern",
    "brand.subtitle": "Plattform",
    "hero.badge": "APN Plattform",
    "hero.title": "Betriebssystem<br>für Unternehmen<br><span class=\"font-display italic text-primary\">in Bewegung.</span>",
    "hero.subtitle": "Reiseaufträge, Arbeitsaufträge und Asset Management — eine interne Plattform, die Mitarbeiter, Fahrzeuge, Ausrüstung und jede Unternehmensressource verbindet. Entwickelt für Unternehmen, deren Geschäft täglich über das Büro hinausgeht.",
    "hero.cta_secondary": "Plattform-Tour starten",
    "trust.security": "Enterprise-Sicherheit",
    "trust.encrypted": "Verschlüsselte Daten",
    "trust.uptime": "99,99 % Verfügbarkeit",
    "industries.title": "Entwickelt für Unternehmen, die über das Büro hinaus agieren.",
    "industries.automotive": "Automotive",
    "industries.banks": "Banken",
    "industries.telecom": "Telekom",
    "industries.construction": "Bauwesen",
    "industries.service_companies": "Dienstleistungsunternehmen",
    "industries.sales_teams": "Vertriebsteams",
    "industries.public_institutions": "Öffentliche Einrichtungen",
    "industries.energy": "Energie",
    "moduli.badge": "Was APN leistet",
    "moduli.title": "Alles, was Ihr Team braucht,\n                <span class=\"font-display italic text-primary\">vernetzt</span>.",
    "moduli.subtitle": "Eine fokussierte interne Plattform: Reiseaufträge, Arbeitsaufträge,\n                Asset Management, Benutzer und Berichte — ohne unnötige Module.",
    "modules.card1.title": "Reiseaufträge",
    "modules.card1.desc": "Digitale Erstellung gesetzlich vorgeschriebener Reiseaufträge.",
    "modules.card2.title": "Arbeitsaufträge",
    "modules.card2.desc": "Interne Arbeitsaufträge für jeden Service, jede Reparatur\n                  oder jeden Einsatz.",
    "modules.card3.desc": "Ein White-Label-Anlagenregister — Fahrzeuge, Laptops, Werkzeuge,\n                  Ausrüstung. Jede Klasse hat eigene Regeln.",
    "modules.card4.desc": "Ein spezialisiertes Modul für Unternehmen mit Firmenfahrzeugen\n                  — aufbauend auf Asset Management: Zulassung, Service,\n                  Versicherung, Kilometerstand und Historie aus einem\n                  Register.",
    "modules.card5.desc": "Mitarbeiter, Rollen und Zugriffsrechte. Jeder Benutzer sieht\n                  genau das, was er braucht.",
    "modules.card6.title": "Berichte nach Benutzer und Anlage",
    "modules.card6.desc": "Präzise Berichte für jeden Mitarbeiter und jede\n                  Anlageneinheit.",
    "zasto.badge": "Warum APN",
    "zasto.title": "Alle Abläufe. Eine\n                <span class=\"font-display italic text-primary\">vernetzte Plattform</span>.",
    "zasto.subtitle": "Statt isolierter Anwendungen arbeitet jede Abteilung in einer\n                Plattform mit einer einzigen verlässlichen Datenquelle.",
    "zasto.node_mgmt": "Management",
    "zasto.node_sales": "Vertrieb",
    "zasto.node_field": "Außendienstteams",
    "zasto.node_it": "IT",
    "zasto.node_warehouse": "Lager",
    "zasto.node_admin": "Verwaltung",
    "zasto.node_finance": "Finanzen",
    "zasto.node_fleet": "Fleet",
    "zasto.node_subtitle": "Plattform",
    "zasto.node_caption": "Betriebsplattform",
    "timeline.badge": "Tägliche Abläufe",
    "timeline.title": "Ein Tag, eine\n                <span class=\"font-display italic text-primary\">vernetzte Historie</span>.",
    "timeline.subtitle": "Jede Aktion aktualisiert automatisch die Mitarbeiter- und\n                Anlagenhistorie. Keine Überschneidungen, keine Duplikate, nichts wird vergessen.",
    "timeline.item1": "Laptop und Fahrzeug einem Mitarbeiter zugewiesen",
    "timeline.item2": "Reiseauftrag genehmigt",
    "timeline.item3": "Kundentermin",
    "timeline.item4": "Arbeitsauftrag eröffnet",
    "timeline.item5": "Neue Ausrüstung zugewiesen",
    "timeline.item6": "Service abgeschlossen",
    "timeline.item7": "Reiseauftrag abgeschlossen",
    "platforma.badge": "Plattform-Tour",
    "platforma.title": "Interner Betrieb,\n                <span class=\"font-display italic text-primary\">papierlos</span>.",
    "platforma.subtitle": "Reiseaufträge für die Compliance, Arbeitsaufträge für Service und\n                Einsätze, Asset Management für alles, was dem Unternehmen gehört —\n                in einem System.",
    "automation.badge": "Automatisierung",
    "automation.title": "Automatisieren Sie\n                <span class=\"font-display italic text-primary\">die Routine</span>.",
    "automation.subtitle": "Befreien Sie Ihr Team von wiederkehrenden Aufgaben. APN überwacht,\n                benachrichtigt und aktualisiert im Hintergrund.",
    "automation.card1.title": "Erinnerungen zur Fahrzeugzulassung",
    "automation.card1.desc": "Verpassen Sie nie wieder eine Zulassung — Warnungen\n                  Wochen im Voraus.",
    "automation.card2.title": "Garantieablauf",
    "automation.card2.desc": "Garantieverfolgung für alle Geräte und Anlagen, rund um die Uhr.",
    "automation.card3.title": "Lizenzablauf",
    "automation.card3.desc": "Software- und Geschäftslizenzen werden rechtzeitig erneuert.",
    "automation.card4.title": "Gerätekalibrierung",
    "automation.card4.desc": "Termine werden aus Standards und zeitbasierten Auslösern erstellt.",
    "automation.card5.title": "Vorbeugende Wartung",
    "automation.card5.desc": "Automatische Pläne für jede Anlagenklasse.",
    "automation.card6.title": "Freigabe-Workflow",
    "automation.card6.desc": "Ein digitaler Workflow bis zur Unterschrift und Archivierung.",
    "automation.card7.title": "Anlagenzuweisung",
    "automation.card7.desc": "Zuweisung und Rückgabe in wenigen Klicks.",
    "automation.card8.title": "E-Mail-Berichte",
    "automation.card8.desc": "Wöchentliche und monatliche Zusammenfassungen per E-Mail.",
    "automation.card9.title": "Benachrichtigungen zu Arbeitsaufträgen",
    "automation.card9.desc": "Ihr Team wird bei jeder Statusänderung benachrichtigt.",
    "automation.card10.title": "Ablauf von Dokumenten",
    "automation.card10.desc": "Verträge, Zertifikate und Dokumente werden nach Ablaufdatum verfolgt.",
    "security.badge": "Sicherheit",
    "security.title": "Enterprise-Sicherheit,\n                <span class=\"font-display italic text-primary\">integriert</span>.",
    "security.subtitle": "Betriebsdaten, Geschäftsunterlagen, Anlagen und Benutzer werden\n                durch dieselben Kontrollen geschützt, die große Organisationen erwarten.",
    "security.card1.title": "Rollenbasierte Berechtigungen",
    "security.card1.desc": "Granulare Berechtigungen nach Team und Standort.",
    "security.card2.title": "Audit-Protokolle",
    "security.card2.desc": "Jede Aktion wird protokolliert und ist durchsuchbar.",
    "security.card3.title": "Cloud-Infrastruktur",
    "security.card3.desc": "Redundant, geografisch verteilt.",
    "security.card4.title": "Verschlüsselte Speicherung",
    "security.card4.desc": "AES-256 im Ruhezustand, TLS 1.3 bei der Übertragung.",
    "security.card5.title": "Aktivitätsverlauf",
    "security.card5.desc": "Jeder Benutzer, jede Aktion, jederzeit verfügbar.",
    "security.card6.title": "Multi-Company-Unterstützung",
    "security.card6.desc": "Mehrere Unternehmen, ein System, getrennte Berechtigungen.",
    "mobileapp.badge": "Mobile App",
    "mobileapp.title": "APN in Ihrer\n                  <span class=\"font-display italic text-primary\">Tasche</span>.",
    "mobileapp.subtitle": "Dasselbe System, dieselbe Historie. Für Techniker, Vertriebsmitarbeiter,\n                  Fahrer und Manager — im Büro, auf dem Hof oder unterwegs.",
    "mobileapp.feat1": "Anlagensuche",
    "mobileapp.feat2": "Reiseaufträge",
    "mobileapp.feat3": "Arbeitsaufträge",
    "mobileapp.feat4": "QR-Inventur",
    "mobileapp.feat5": "Digitale Unterschrift",
    "mobileapp.feat6": "Gerätezuweisung",
    "mobileapp.feat7": "Push-Benachrichtigungen",
    "mobileapp.feat8": "Offline-Modus",
    "cta.badge": "Starten Sie mit APN",
    "cta.title": "Steuern Sie Ihren gesamten Betrieb von\n                <span class=\"font-display italic text-primary\">einer Plattform aus.</span>",
    "cta.subtitle": "Ob Sie Vertriebsteams, Serviceteams,\n                einen Fuhrpark oder Geschäftsausrüstung verwalten — APN verbindet\n                Menschen, Anlagen und Prozesse in einem einzigen Betriebssystem.",
    "cta.secondary_button": "Präsentation vereinbaren",
    "cta.trust1": "Implementierung in wenigen Tagen",
    "cta.trust2": "Enterprise-SLA",
    "cta.trust3": "Engagiertes Success-Team",
    "kontakt.badge": "Demo anfordern",
    "kontakt.title": "Sprechen wir über\n                  <span class=\"font-display italic text-primary\">Ihr Team</span>.",
    "kontakt.subtitle": "Füllen Sie das Formular aus — unser Team meldet sich innerhalb\n                  von 24 Stunden, um eine auf Ihr Unternehmen zugeschnittene Demo zu vereinbaren.",
    "kontakt.address": "Sarajevo, Bosnien und Herzegowina",
    "kontakt.form.name_label": "Vor- und Nachname",
    "kontakt.form.email_label": "E-Mail",
    "kontakt.form.company_label": "Unternehmen",
    "kontakt.form.phone_label": "Telefon <span class=\"optional\">(optional)</span>",
    "kontakt.form.message_label": "Nachricht",
    "kontakt.form.submit": "Anfrage senden",
    "kontakt.form.note": "Wir melden uns innerhalb von 24 Stunden bei Ihnen. Unverbindlich.",
    "kontakt.form.success_title": "Vielen Dank! Ihre Anfrage ist eingegangen.",
    "kontakt.form.success_body": "Wir melden uns in Kürze per E-Mail oder Telefon bei Ihnen.",
    "footer.description": "APN — ein Betriebssystem für Unternehmen, die Mitarbeiter,\n                Anlagen und Außendiensteinsätze verwalten.",
    "footer.address": "Sarajevo · Bosnien und Herzegowina",
    "footer.col_product": "Produkt",
    "footer.link_pregled": "Übersicht",
    "footer.link_integracije": "Integrationen",
    "footer.link_novosti": "Neuigkeiten",
    "footer.col_solutions": "Lösungen",
    "footer.link_auto_kuce": "Autohäuser",
    "footer.link_vozni_park": "Fuhrpark",
    "footer.link_rent_a_car": "Rent-a-Car",
    "footer.link_leasing": "Leasing",
    "footer.col_industries": "Branchen",
    "footer.link_automotive": "Automotive",
    "footer.link_mobilnost": "Mobilität",
    "footer.link_servis": "Service",
    "footer.link_enterprise": "Enterprise",
    "footer.col_company": "Unternehmen",
    "footer.link_onama": "Über uns",
    "footer.link_karijere": "Karriere",
    "footer.link_press": "Presse",
    "footer.col_legal": "Rechtliches",
    "footer.link_privatnost": "Datenschutz",
    "footer.link_uvjeti": "AGB",
    "footer.link_dpa": "DPA",
    "footer.rights": "Alle Rechte vorbehalten.",
    "kontakt.form.company_placeholder": "Firmenname",
    "kontakt.form.message_placeholder": "Erzählen Sie uns etwas über Ihren Betrieb und was Sie am meisten interessiert …",
    "aria.lang_select": "Sprache auswählen",
    "aria.menu_toggle": "Menü öffnen"
  }
};

  var META = {
  "bs": {
    "title": "APN — Operativni sistem za kompanije u pokretu",
    "description": "APN je operativna platforma za kompanije koje upravljaju ljudima, imovinom i terenskim operacijama. Putni nalozi, radni nalozi i Asset Management u jednom sistemu."
  },
  "en": {
    "title": "APN — Operating system for companies on the move",
    "description": "APN is an operating platform for companies managing people, assets and field operations. Travel orders, work orders and Asset Management in one system."
  },
  "de": {
    "title": "APN — Betriebssystem für Unternehmen in Bewegung",
    "description": "APN ist eine Betriebsplattform für Unternehmen, die Mitarbeiter, Anlagen und Außendiensteinsätze verwalten. Reiseaufträge, Arbeitsaufträge und Asset Management in einem System."
  }
};

  var SUPPORTED = ["bs", "en", "de"];
  var DEFAULT_LANG = "bs";
  var STORAGE_KEY = "apn-lang";

  function getSavedLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    return null;
  }

  function t(key, lang) {
    var table = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
    if (table && Object.prototype.hasOwnProperty.call(table, key)) return table[key];
    var fallback = TRANSLATIONS[DEFAULT_LANG];
    return fallback ? fallback[key] : undefined;
  }

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT_LANG;

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var val = t(key, lang);
      if (val != null) el.innerHTML = val;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      var val = t(key, lang);
      if (val != null) el.setAttribute("placeholder", val);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria-label");
      var val = t(key, lang);
      if (val != null) el.setAttribute("aria-label", val);
    });

    var metaSet = META[lang] || META[DEFAULT_LANG];
    if (metaSet) {
      if (metaSet.title) document.title = metaSet.title;
      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && metaSet.description) metaDesc.setAttribute("content", metaSet.description);
      var ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle && metaSet.title) ogTitle.setAttribute("content", metaSet.title);
      var ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc && metaSet.description) ogDesc.setAttribute("content", metaSet.description);
    }

    document.querySelectorAll(".lang-current, #lang-current").forEach(function (el) {
      el.textContent = lang.toUpperCase();
    });

    document.querySelectorAll(".lang-option").forEach(function (el) {
      el.classList.toggle("is-active", el.getAttribute("data-lang") === lang);
    });
    document.querySelectorAll(".lang-pill").forEach(function (el) {
      el.classList.toggle("is-active", el.getAttribute("data-lang") === lang);
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function initLangSwitcher() {
    var toggle = document.getElementById("lang-toggle");
    var menu = document.getElementById("lang-menu");

    if (toggle && menu) {
      toggle.addEventListener("click", function (e) {
        e.stopPropagation();
        var isOpen = menu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });

      document.addEventListener("click", function (e) {
        if (!menu.contains(e.target) && e.target !== toggle) {
          menu.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });

      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          menu.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    }

    document.querySelectorAll(".lang-option, .lang-pill").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        applyLang(lang);
        if (menu) {
          menu.classList.remove("is-open");
          if (toggle) toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  function init() {
    var lang = getSavedLang() || DEFAULT_LANG;
    applyLang(lang);
    initLangSwitcher();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
