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
    "hero.title": "Putni nalozi, radni nalozi<br>i Asset Management<br><span class=\"font-display italic text-primary\">u jednom sistemu.</span>",
    "hero.subtitle": "APN je operativna platforma za kompanije u Bosni i Hercegovini i\n                  regiji koje upravljaju ljudima, vozilima i opremom. Objedinjuje\n                  digitalne putne naloge, radne naloge, Asset Management i Fleet\n                  Management u jednu internu platformu — bez papira, bez razbacanih\n                  Excel tabela.",
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
    "modules.card1.desc": "Digitalno kreiranje putnih naloga koje traži zakonodavac. APN\n                  vodi kompletnu evidenciju putnih naloga kao zakonodavno\n                  usklađene digitalne putne naloge, s PDF arhivom i digitalnim\n                  potpisom.",
    "modules.card2.title": "Radni nalozi",
    "modules.card2.desc": "Interni radni nalozi za svaki servis, popravku ili\n                  intervenciju. Kao softver za radne naloge, APN prati\n                  zaduženja, dijelove i status u jednom sistemu za radne\n                  naloge, dostupnom cijelom timu.",
    "modules.card3.desc": "White-label registar imovine — vozila, laptopi, alati, oprema.\n                  Ovaj asset management sistem pokriva svaku klasu imovine i\n                  olakšava upravljanje imovinom u cijeloj kompaniji.",
    "modules.card4.desc": "Specijalizovani modul za kompanije koje koriste službena\n                  vozila — nadograđen na Asset Management: registracija,\n                  servisi, osiguranje, kilometraža i istorija iz jednog\n                  registra. Kao fleet management sistem, pokriva potpuno\n                  upravljanje voznim parkom na jednom mjestu.",
    "modules.card5.desc": "Uposlenici, uloge i pristupi. Svaki korisnik vidi tačno ono\n                  što treba — upravljanje korisnicima i ulogama uz granularne\n                  dozvole i potpune audit logove.",
    "modules.card6.title": "Izvještaji po korisniku i imovini",
    "modules.card6.desc": "Precizni izvještaji po uposleniku i po svakoj jedinici\n                  imovine — analitika troškova i iskorištenosti spremna za\n                  export u par klikova.",
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
    "footer.link_uvjeti": "Uslovi korištenja",
    "footer.link_dpa": "DPA",
    "footer.rights": "Sva prava zadržana.",
    "kontakt.form.company_placeholder": "Naziv kompanije",
    "kontakt.form.message_placeholder": "Recite nam nešto o vašim operacijama i šta vas najviše zanima...",
    "aria.lang_select": "Odaberite jezik",
    "aria.menu_toggle": "Otvori meni",
    "footer.link_putni_nalozi": "Putni nalozi",
    "footer.link_radni_nalozi": "Radni nalozi",
    "footer.link_asset_management": "Asset Management",
    "footer.link_fleet_management": "Fleet Management",
    "footer.link_user_management": "User Management",
    "footer.link_izvjestaji": "Izvještaji",
    "footer.link_cijene": "Cijene",
    "footer.link_sigurnost_compliance": "Sigurnost i compliance",
    "faq.badge": "Pitanja i odgovori",
    "faq.title": "Često postavljana pitanja (FAQ)",
    "faq.subtitle": "Odgovori na najčešća pitanja o putnim i radnim nalozima, Asset\n                Managementu, Fleet Managementu i sigurnosti u APN-u.",
    "faq.q1.question": "Koji softver koristiti za putne i radne naloge?",
    "faq.q1.answer": "APN je jedinstven softver za putne naloge i radne naloge —\n                  umjesto dvije odvojene aplikacije, oba procesa rade u istoj\n                  platformi, sa zajedničkim korisnicima, vozilima i evidencijom.\n                  To eliminira duplo unošenje podataka i olakšava internu\n                  kontrolu.",
    "faq.q2.question": "Da li su digitalni putni nalozi u APN-u validni za inspekciju?",
    "faq.q2.answer": "Da. Digitalni putni nalozi u APN-u sadrže sve podatke koje\n                  zakonodavac traži — svrhu puta, destinaciju, kilometražu,\n                  gorivo i odobrenja — uz digitalni potpis i PDF arhivu spremnu\n                  za inspekciju u bilo kojem trenutku.",
    "faq.q3.question": "Kako APN pomaže kod upravljanja flotom?",
    "faq.q3.answer": "Fleet management modul je nadograđen na Asset Management i\n                  prati registraciju, osiguranje, servise, kilometražu i\n                  dodjelu vozila vozačima. Podsjetnici upozoravaju sedmicama\n                  unaprijed na istek registracije ili servisa, tako da\n                  upravljanje voznim parkom postaje proaktivno, ne reaktivno.",
    "faq.q4.question": "Može li se APN koristiti za asset management cijele kompanije?",
    "faq.q4.answer": "Da. APN je white-label asset management sistem koji pokriva\n                  vozila, IT opremu, alate, namještaj i industrijsku opremu u\n                  jednom registru, sa klasama, amortizacijom i garancijama po\n                  jedinici imovine — ne samo za vozni park.",
    "faq.q5.question": "Da li APN podržava različite uloge i dozvole?",
    "faq.q5.answer": "Da. User Management modul omogućava granularne dozvole po\n                  timovima, lokacijama i odjelima, uz kompletan audit trail\n                  svake akcije. Multi-company podrška dodatno odvaja pristup i\n                  podatke između više firmi u istom sistemu.",
    "faq.q6.question": "Koliko traje implementacija APN-a?",
    "faq.q6.answer": "Implementacija traje za dane, ne mjesece — postavljanje\n                  osnovnih modula (putni nalozi, radni nalozi, registar\n                  imovine) tipično je spremno za korištenje unutar prve\n                  sedmice, uz posvećen success tim za onboarding."
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
    "hero.title": "Travel orders, work orders<br>and Asset Management<br><span class=\"font-display italic text-primary\">in one system.</span>",
    "hero.subtitle": "APN is an operating platform for companies in Bosnia and Herzegovina and the region that manage people, vehicles and equipment. It brings digital travel orders, work orders, Asset Management and Fleet Management together in one internal platform — no paper, no scattered spreadsheets.",
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
    "modules.card1.desc": "Digital creation of travel orders required by law. APN keeps complete travel order records as legally compliant digital travel orders, with a PDF archive and digital signature.",
    "modules.card2.title": "Work orders",
    "modules.card2.desc": "Internal work orders for every service, repair or intervention. As work order software, APN tracks assignments, parts and status in one work order system available to the whole team.",
    "modules.card3.desc": "A white-label asset registry — vehicles, laptops, tools, equipment. This asset management system covers every asset class and simplifies asset management across the whole company.",
    "modules.card4.desc": "A specialized module for companies using company vehicles — built on top of Asset Management: registration, servicing, insurance, mileage and history from one register. As a fleet management system, it covers complete fleet management in one place.",
    "modules.card5.desc": "Employees, roles and access. Every user sees exactly what they need — user and role management with granular permissions and complete audit logs.",
    "modules.card6.title": "Reports by user and asset",
    "modules.card6.desc": "Precise reports for every employee and every asset unit — cost and utilization analytics ready for export in a few clicks.",
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
    "aria.menu_toggle": "Open menu",
    "footer.link_putni_nalozi": "Travel orders",
    "footer.link_radni_nalozi": "Work orders",
    "footer.link_asset_management": "Asset Management",
    "footer.link_fleet_management": "Fleet Management",
    "footer.link_user_management": "User Management",
    "footer.link_izvjestaji": "Reports",
    "footer.link_cijene": "Pricing",
    "footer.link_sigurnost_compliance": "Security & compliance",
    "faq.badge": "Questions & answers",
    "faq.title": "Frequently asked questions (FAQ)",
    "faq.subtitle": "Answers to the most common questions about travel orders, work orders, Asset Management, Fleet Management and security in APN.",
    "faq.q1.question": "Which software should I use for travel and work orders?",
    "faq.q1.answer": "APN is a single software for both travel orders and work orders — instead of two separate applications, both processes run in the same platform, sharing users, vehicles and records. This eliminates double data entry and makes internal control easier.",
    "faq.q2.question": "Are digital travel orders in APN valid for inspection?",
    "faq.q2.answer": "Yes. Digital travel orders in APN contain all the data required by law — purpose of trip, destination, mileage, fuel and approvals — with a digital signature and a PDF archive ready for inspection at any time.",
    "faq.q3.question": "How does APN help with fleet management?",
    "faq.q3.answer": "The fleet management module is built on top of Asset Management and tracks registration, insurance, servicing, mileage and driver assignment. Reminders warn weeks in advance of registration or service due dates, so fleet management becomes proactive instead of reactive.",
    "faq.q4.question": "Can APN be used for asset management across the whole company?",
    "faq.q4.answer": "Yes. APN is a white-label asset management system covering vehicles, IT equipment, tools, furniture and industrial equipment in one register, with classes, depreciation and warranties per asset unit — not just for the vehicle fleet.",
    "faq.q5.question": "Does APN support different roles and permissions?",
    "faq.q5.answer": "Yes. The User Management module allows granular permissions by team, location and department, with a complete audit trail of every action. Multi-company support additionally separates access and data between multiple companies in the same system.",
    "faq.q6.question": "How long does APN implementation take?",
    "faq.q6.answer": "Implementation takes days, not months — setting up the core modules (travel orders, work orders, asset register) is typically ready to use within the first week, with a dedicated success team for onboarding."
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
    "hero.title": "Reiseaufträge, Arbeitsaufträge<br>und Asset Management<br><span class=\"font-display italic text-primary\">in einem System.</span>",
    "hero.subtitle": "APN ist eine Betriebsplattform für Unternehmen in Bosnien und Herzegowina und der Region, die Mitarbeiter, Fahrzeuge und Ausrüstung verwalten. Sie vereint digitale Reiseaufträge, Arbeitsaufträge, Asset Management und Fleet Management in einer internen Plattform — ohne Papier, ohne verstreute Excel-Tabellen.",
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
    "modules.card1.desc": "Digitale Erstellung gesetzlich vorgeschriebener Reiseaufträge. APN führt eine vollständige Reiseauftragsverwaltung als rechtskonforme digitale Reiseaufträge, mit PDF-Archiv und digitaler Unterschrift.",
    "modules.card2.title": "Arbeitsaufträge",
    "modules.card2.desc": "Interne Arbeitsaufträge für jeden Service, jede Reparatur oder jeden Einsatz. Als Software für Arbeitsaufträge verfolgt APN Zuweisungen, Teile und Status in einem Arbeitsauftragssystem, das dem gesamten Team zur Verfügung steht.",
    "modules.card3.desc": "Ein White-Label-Anlagenregister — Fahrzeuge, Laptops, Werkzeuge, Ausrüstung. Dieses Asset-Management-System deckt jede Anlagenklasse ab und vereinfacht das Anlagenmanagement im gesamten Unternehmen.",
    "modules.card4.desc": "Ein spezialisiertes Modul für Unternehmen mit Firmenfahrzeugen — aufbauend auf Asset Management: Zulassung, Service, Versicherung, Kilometerstand und Historie aus einem Register. Als Fleet-Management-System deckt es die komplette Fuhrparkverwaltung an einem Ort ab.",
    "modules.card5.desc": "Mitarbeiter, Rollen und Zugriffsrechte. Jeder Benutzer sieht genau das, was er braucht — Benutzer- und Rollenverwaltung mit granularen Berechtigungen und vollständigen Audit-Protokollen.",
    "modules.card6.title": "Berichte nach Benutzer und Anlage",
    "modules.card6.desc": "Präzise Berichte für jeden Mitarbeiter und jede Anlageneinheit — Kosten- und Auslastungsanalysen, exportbereit in wenigen Klicks.",
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
    "aria.menu_toggle": "Menü öffnen",
    "footer.link_putni_nalozi": "Reiseaufträge",
    "footer.link_radni_nalozi": "Arbeitsaufträge",
    "footer.link_asset_management": "Asset Management",
    "footer.link_fleet_management": "Fleet Management",
    "footer.link_user_management": "User Management",
    "footer.link_izvjestaji": "Berichte",
    "footer.link_cijene": "Preise",
    "footer.link_sigurnost_compliance": "Sicherheit & Compliance",
    "faq.badge": "Fragen & Antworten",
    "faq.title": "Häufig gestellte Fragen (FAQ)",
    "faq.subtitle": "Antworten auf die häufigsten Fragen zu Reiseaufträgen, Arbeitsaufträgen, Asset Management, Fleet Management und Sicherheit in APN.",
    "faq.q1.question": "Welche Software eignet sich für Reise- und Arbeitsaufträge?",
    "faq.q1.answer": "APN ist eine einzige Software für Reiseaufträge und Arbeitsaufträge — statt zwei getrennter Anwendungen laufen beide Prozesse in derselben Plattform, mit gemeinsamen Benutzern, Fahrzeugen und Datensätzen. Das eliminiert doppelte Dateneingabe und erleichtert die interne Kontrolle.",
    "faq.q2.question": "Sind digitale Reiseaufträge in APN für Kontrollen gültig?",
    "faq.q2.answer": "Ja. Digitale Reiseaufträge in APN enthalten alle gesetzlich geforderten Daten — Reisezweck, Ziel, Kilometerstand, Kraftstoff und Genehmigungen — mit digitaler Unterschrift und einem jederzeit kontrollbereiten PDF-Archiv.",
    "faq.q3.question": "Wie unterstützt APN die Flottenverwaltung?",
    "faq.q3.answer": "Das Fleet-Management-Modul baut auf Asset Management auf und verfolgt Zulassung, Versicherung, Service, Kilometerstand und Fahrerzuweisung. Erinnerungen warnen Wochen im Voraus vor Ablauf von Zulassung oder Service, sodass die Fuhrparkverwaltung proaktiv statt reaktiv wird.",
    "faq.q4.question": "Kann APN für das Asset Management des gesamten Unternehmens genutzt werden?",
    "faq.q4.answer": "Ja. APN ist ein White-Label-Asset-Management-System, das Fahrzeuge, IT-Ausrüstung, Werkzeuge, Möbel und Industrieausrüstung in einem Register abdeckt — mit Klassen, Abschreibung und Garantien pro Anlageneinheit, nicht nur für den Fuhrpark.",
    "faq.q5.question": "Unterstützt APN unterschiedliche Rollen und Berechtigungen?",
    "faq.q5.answer": "Ja. Das User-Management-Modul ermöglicht granulare Berechtigungen nach Team, Standort und Abteilung, mit einem vollständigen Audit-Trail jeder Aktion. Die Multi-Company-Unterstützung trennt zusätzlich Zugriff und Daten zwischen mehreren Unternehmen im selben System.",
    "faq.q6.question": "Wie lange dauert die Implementierung von APN?",
    "faq.q6.answer": "Die Implementierung dauert Tage, nicht Monate — die Einrichtung der Kernmodule (Reiseaufträge, Arbeitsaufträge, Anlagenregister) ist in der Regel innerhalb der ersten Woche einsatzbereit, mit einem engagierten Success-Team für das Onboarding."
  }
};

  var META = {
  "bs": {
    "title": "APN — Putni i radni nalozi, Asset & Fleet Management",
    "description": "APN je platforma za putne naloge, radne naloge, Asset Management i Fleet Management — za kompanije u BiH i regiji koje upravljaju ljudima i imovinom."
  },
  "en": {
    "title": "APN — Travel & Work Orders, Asset & Fleet Management",
    "description": "APN is a platform for travel orders, work orders, Asset Management and Fleet Management — for companies in Bosnia & Herzegovina and the region managing people and assets."
  },
  "de": {
    "title": "APN — Reise- & Arbeitsaufträge, Asset & Fleet Management",
    "description": "APN ist eine Plattform für Reiseaufträge, Arbeitsaufträge, Asset Management und Fleet Management — für Unternehmen in Bosnien-Herzegowina und der Region."
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

    // Only the homepage has per-language META entries; subpages keep their
    // own static, page-specific <title>/description untouched.
    var isHome = !!document.getElementById("moduli");
    var metaSet = isHome ? (META[lang] || META[DEFAULT_LANG]) : null;
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
