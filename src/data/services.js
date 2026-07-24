import { L } from "../utils/localize";

const img = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const services = [
  {
    id: 1,
    slug: "lawn-care",
    title: L("Lawn care", "Mirëmbajtje kopshti"),
    icon: "sprout",
    featured: true,
    image: img("photo-1568605114967-8130f3a36994"),
    shortDescription: L(
      "Mowing, fertilizing, aeration and seasonal treatments that keep your lawn thick, healthy and deep green all year.",
      "Kositje, plehërim, ajrosje dhe trajtime sezonale që e mbajnë barin të dendur, të shëndetshëm dhe të gjelbër gjatë gjithë vitit."
    ),
    description: L(
      "A great lawn doesn't happen by accident. Our lawn care programs combine precision mowing, soil-tested fertilization, aeration, overseeding and weed control into a schedule tailored to your grass type and local climate. Whether you need a weekly maintenance visit or a full lawn renovation, our certified technicians treat your turf like their own.",
      "Një kopsht i rregullt nuk mbahet rastësisht. Programet tona përfshijnë kositje të saktë, plehërim sipas gjendjes së tokës, ajrosje, rimbjellje dhe kontroll të barërave të këqija. Pavarësisht nëse ju duhet mirëmbajtje javore apo rikthim i plotë i barit, ekipi ynë punon me plan të qartë dhe kujdes të vazhdueshëm."
    ),
    benefits: [
      L(
        "Custom fertilization plans based on soil analysis",
        "Plan plehërimi sipas gjendjes së tokës"
      ),
      L(
        "Weekly or bi-weekly mowing schedules",
        "Kositje javore ose çdo dy javë"
      ),
      L(
        "Aeration and overseeding for dense, resilient turf",
        "Ajrosje dhe rimbjellje për bar më të dendur"
      ),
      L(
        "Safe, targeted weed and pest control",
        "Kontroll i kujdesshëm i barërave të këqija dhe dëmtuesve"
      ),
      L(
        "Seasonal cleanups included in annual plans",
        "Pastrime sezonale brenda planeve vjetore"
      ),
    ],
    gallery: [
      img("photo-1568605114967-8130f3a36994", 600),
      img("photo-1558904541-efa843a96f01", 600),
      img("photo-1416879595882-3373a0480b5b", 600),
    ],
    faq: [
      {
        question: L(
          "How often should my lawn be mowed?",
          "Sa shpesh duhet kositur kopshti?"
        ),
        answer: L(
          "During the growing season, most lawns benefit from weekly mowing. In slower months we switch to bi-weekly visits so the grass is never cut too short.",
          "Gjatë sezonit të rritjes, shumica e kopshteve kanë nevojë për kositje javore. Në muajt më të qetë kalojmë në vizita çdo dy javë, që bari të mos pritet më shumë se duhet."
        ),
      },
      {
        question: L(
          "Are your treatments safe for kids and pets?",
          "A janë trajtimet tuaja të sigurta për fëmijët dhe kafshët shtëpiake?"
        ),
        answer: L(
          "Yes. We use targeted, low-impact products and always let you know the short re-entry window after each application.",
          "Po. Përdorim produkte me ndikim të ulët dhe ju njoftojmë gjithmonë sa kohë duhet të prisni pas çdo trajtimi."
        ),
      },
      {
        question: L(
          "Can you revive a damaged lawn?",
          "A mund ta rikuperoni një kopsht të dëmtuar?"
        ),
        answer: L(
          "In most cases, yes. We start with a soil test, then build a renovation plan combining aeration, overseeding and fertilization. Full recovery usually takes one to two seasons.",
          "Në shumicën e rasteve, po. Fillojmë me kontroll të tokës dhe më pas përgatisim plan rinovimi me ajrosje, rimbjellje dhe plehërim. Rikuperimi i plotë zakonisht zgjat një deri në dy sezone."
        ),
      },
    ],
  },
  {
    id: 2,
    slug: "garden-design",
    title: L("Garden design", "Dizajn kopshti"),
    icon: "flower",
    featured: true,
    image: img("photo-1466692476868-aef1dfb1e735"),
    shortDescription: L(
      "Bespoke garden concepts — from planting plans to complete outdoor rooms designed around how you live.",
      "Koncepte të personalizuara për kopshtin tuaj, nga plani i mbjelljes deri te hapësira të plota të jashtme që përshtaten me mënyrën si jetoni."
    ),
    description: L(
      "Our designers turn underused outdoor space into gardens you'll actually live in. We begin with a site visit and a conversation about how you want the space to feel, then develop planting plans, hardscape layouts and lighting concepts. You receive clear visuals before a single spade hits the ground, and our crews build exactly what was agreed.",
      "Dizajnerët tanë i kthejnë hapësirat e papërdorura në kopshte ku dëshironi të kaloni kohë. Fillojmë me vizitë në terren dhe bisedë për atmosferën që doni të krijoni, pastaj përgatisim planin e mbjelljes, strukturat, rrugicat dhe ndriçimin. Para nisjes së punës merrni pamje të qarta të projektit, ndërsa ekipi ynë realizon atë që është dakorduar."
    ),
    benefits: [
      L(
        "Personal design consultation at your property",
        "Konsultë personale dizajni në pronën tuaj"
      ),
      L(
        "Detailed planting and layout plans with visuals",
        "Plane të detajuara mbjelljeje dhe organizimi"
      ),
      L(
        "Plant selection matched to soil, light and maintenance appetite",
        "Zgjedhje bimësh sipas tokës, dritës dhe kohës që keni për kujdes"
      ),
      L(
        "Seamless handover to our own build crews",
        "Kalimi nga dizajni te realizimi bëhet nga i njëjti ekip"
      ),
      L(
        "Aftercare guidance for the first growing season",
        "Udhëzime kujdesi për sezonin e parë të rritjes"
      ),
    ],
    gallery: [
      img("photo-1466692476868-aef1dfb1e735", 600),
      img("photo-1490750967868-88aa4486c946", 600),
      img("photo-1416879595882-3373a0480b5b", 600),
    ],
    faq: [
      {
        question: L(
          "How long does a garden design take?",
          "Sa kohë zgjat një dizajn kopshti?"
        ),
        answer: L(
          "A typical residential design takes two to four weeks from site visit to final plan, depending on the size and complexity of the space.",
          "Një projekt dizajni për shtëpi zakonisht zgjat dy deri në katër javë, nga vizita në terren deri te plani final. Koha varet nga madhësia dhe kompleksiteti i hapësirës."
        ),
      },
      {
        question: L(
          "Can you work with an existing garden?",
          "A mund të punoni me një kopsht ekzistues?"
        ),
        answer: L(
          "Absolutely. Many of our projects are redesigns that keep mature trees and the best existing features while rethinking the rest.",
          "Po. Shumë projekte janë ridizajnime ku ruajmë pemët e rritura dhe elementet më të mira ekzistuese, ndërsa pjesën tjetër e organizojmë më mirë."
        ),
      },
      {
        question: L(
          "Do you also build the design?",
          "A e ndërtoni edhe vetë dizajnin?"
        ),
        answer: L(
          "Yes — design and build under one roof is our specialty. It keeps budgets honest and the finished garden true to the plan.",
          "Po. Dizajni dhe realizimi nga i njëjti ekip është një nga përparësitë tona. Kjo e mban buxhetin të qartë dhe rezultatin besnik ndaj planit."
        ),
      },
    ],
  },
  {
    id: 4,
    slug: "tree-care",
    title: L("Tree care", "Kujdes për pemët"),
    icon: "scissors",
    featured: false,
    image: img("photo-1502082553048-f009c37129b9"),
    shortDescription: L(
      "Certified arborists for pruning, health assessments, cabling and safe removals.",
      "Krasitje, kontroll shëndeti, përforcim dhe heqje e sigurt e pemëve kur është e nevojshme."
    ),
    description: L(
      "Trees are the most valuable living assets on your property — and the most dangerous to work on without training. Our certified arborists prune for health and shape, diagnose disease, install support systems for mature specimens and carry out safe, insured removals when there is no alternative.",
      "Pemët janë ndër pjesët më të vlefshme të një prone, por kërkojnë punë të kujdesshme. Ne bëjmë krasitje për shëndet dhe formë, kontrollojmë sëmundjet, vendosim mbështetje për pemë të vjetra dhe kryejmë heqje të sigurta vetëm kur nuk ka zgjidhje tjetër."
    ),
    benefits: [
      L(
        "ISA-certified arborists on every job",
        "Specialistë të përgatitur për punë me pemë"
      ),
      L(
        "Structural pruning that protects long-term health",
        "Krasitje strukturore që mbron shëndetin afatgjatë"
      ),
      L(
        "Disease and pest diagnosis with treatment plans",
        "Diagnostikim sëmundjesh e dëmtuesish me plane trajtimi"
      ),
      L(
        "Cabling and bracing for veteran trees",
        "Mbështetje dhe përforcim për pemët e vjetra"
      ),
      L(
        "Fully insured removals and stump grinding",
        "Heqje e sigurt dhe bluarje trungjesh"
      ),
    ],
    gallery: [
      img("photo-1502082553048-f009c37129b9", 600),
      img("photo-1441974231531-c6227db76b6e", 600),
      img("photo-1523712999610-f77fbcfc3843", 600),
    ],
    faq: [
      {
        question: L(
          "When is the best time to prune?",
          "Kur është koha më e mirë për krasitje?"
        ),
        answer: L(
          "Most species respond best to late-winter pruning, before the spring flush. Some flowering trees are pruned right after blooming — we'll advise per tree.",
          "Shumica e pemëve krasiten më mirë në fund të dimrit, para rritjes pranverore. Disa lloje që lulëzojnë krasiten menjëherë pas lulëzimit. Ne ju këshillojmë sipas rastit."
        ),
      },
      {
        question: L(
          "My tree looks sick. Can it be saved?",
          "Pema ime duket e sëmurë. A mund të shpëtohet?"
        ),
        answer: L(
          "Often, yes — early diagnosis matters. An arborist visit includes a full health assessment and a written treatment recommendation.",
          "Shpesh, po. Sa më herët të kontrollohet, aq më mirë. Vizita përfshin vlerësim të gjendjes dhe rekomandim me shkrim për trajtim."
        ),
      },
      {
        question: L(
          "Are you insured for removals?",
          "A jeni të siguruar për heqjet?"
        ),
        answer: L(
          "Fully. We carry comprehensive liability coverage and follow strict rigging protocols on every removal.",
          "Po. Heqjet bëhen me pajisje të përshtatshme, plan sigurie dhe kujdes për pronën përreth."
        ),
      },
    ],
  },
  {
    id: 5,
    slug: "irrigation",
    title: L("Irrigation systems", "Sisteme ujitjeje"),
    icon: "droplets",
    featured: false,
    image: img("photo-1416879595882-3373a0480b5b"),
    shortDescription: L(
      "Smart irrigation design, installation and servicing that saves water and keeps plants thriving.",
      "Dizajn, instalim dhe servis i ujitjes inteligjente që kursen ujë dhe i mban bimët në gjendje të mirë."
    ),
    description: L(
      "Hand-watering is the first thing busy garden owners give up on. We design and install smart irrigation — drip lines, pop-up sprinklers and weather-aware controllers — so every bed and lawn zone gets exactly the water it needs. We also service and winterize existing systems of any brand.",
      "Kur dita është e ngarkuar, ujitja me dorë shpesh mbetet pas. Ne projektojmë dhe instalojmë sisteme inteligjente me pika, spërkatës dhe kontrollues sipas motit, që çdo zonë të marrë sasinë e duhur të ujit. Servisojmë dhe përgatisim për dimër edhe sisteme ekzistuese."
    ),
    benefits: [
      L(
        "Zone-by-zone design for lawns, beds and pots",
        "Dizajn sipas zonave për bar, lehe dhe vazo"
      ),
      L(
        "Smart controllers that adjust to the weather",
        "Kontrollues inteligjentë që përshtatin ujitjen me motin"
      ),
      L(
        "Water savings of up to 40% versus manual watering",
        "Kursim uji deri në 40% krahasuar me ujitjen me dorë"
      ),
      L(
        "Servicing and repairs for all major brands",
        "Servis dhe riparime për markat kryesore"
      ),
      L(
        "Seasonal start-up and winterization plans",
        "Nisje pranverore dhe përgatitje për dimër"
      ),
    ],
    gallery: [
      img("photo-1416879595882-3373a0480b5b", 600),
      img("photo-1463936575829-25148e1db1b8", 600),
      img("photo-1466692476868-aef1dfb1e735", 600),
    ],
    faq: [
      {
        question: L(
          "Will irrigation increase my water bill?",
          "A do ta rrisë ujitja faturën e ujit?"
        ),
        answer: L(
          "Usually the opposite. Smart zoning and weather-based controllers typically cut outdoor water use by 30–40% compared to hose watering.",
          "Zakonisht ndodh e kundërta. Zonimi dhe kontrolluesit sipas motit mund ta ulin përdorimin e ujit për 30-40% krahasuar me ujitjen me zorrë."
        ),
      },
      {
        question: L(
          "Can you add irrigation to an established garden?",
          "A mund të shtoni ujitje në një kopsht të formuar?"
        ),
        answer: L(
          "Yes. Drip systems in particular can be retrofitted into mature beds with minimal disturbance.",
          "Po. Sidomos sistemet me pika mund të vendosen në lehe të formuara pa dëmtuar shumë hapësirën ekzistuese."
        ),
      },
      {
        question: L(
          "Do systems need annual maintenance?",
          "A kanë nevojë sistemet për mirëmbajtje vjetore?"
        ),
        answer: L(
          "We recommend a spring start-up check and an autumn winterization to protect pipes from frost — both are covered by our care plans.",
          "Rekomandojmë kontroll në pranverë dhe përgatitje në vjeshtë për t'i mbrojtur tubat nga ngrica. Të dyja mund të përfshihen në planet tona të kujdesit."
        ),
      },
    ],
  },
  {
    id: 6,
    slug: "interior-plants",
    title: L("Interior plants", "Bimë të brendshme"),
    icon: "leaf",
    featured: true,
    image: img("photo-1470058869958-2a77ade41c02"),
    shortDescription: L(
      "Interior planting design and care that turns homes and workplaces into green sanctuaries.",
      "Dizajn dhe kujdes për bimë të brendshme që u japin më shumë jetë shtëpive, zyrave dhe lokaleve."
    ),
    description: L(
      "Bring the outside in. We design interior plantscapes for homes, offices and hospitality spaces — selecting species that thrive in your light conditions, styling them in planters that suit the interior, and offering ongoing care visits so everything stays lush without you lifting a finger.",
      "Ne krijojmë gjelbërim të brendshëm për shtëpi, zyra, hotele dhe lokale. Zgjedhim bimë që përshtaten me dritën dhe temperaturën e ambientit, i vendosim në vazo që shkojnë me interierin dhe ofrojmë vizita kujdesi që bimët të duken mirë pa u bërë barrë për ju."
    ),
    benefits: [
      L(
        "Light-level assessment before any plant is chosen",
        "Vlerësim i dritës para zgjedhjes së bimëve"
      ),
      L(
        "Designer planters and styling included",
        "Vazo dhe stilim të përshtatura me ambientin"
      ),
      L(
        "Ongoing care visits with plant replacement guarantee",
        "Vizita të rregullta kujdesi dhe zëvendësim kur nevojitet"
      ),
      L(
        "Air-purifying, low-allergen species available",
        "Lloje që pastrojnë ajrin dhe janë më miqësore për alergjitë"
      ),
      L(
        "Installations from a single statement plant to full green walls",
        "Nga një bimë dekorative te mure të plota të gjelbra"
      ),
    ],
    gallery: [
      img("photo-1470058869958-2a77ade41c02", 600),
      img("photo-1485955900006-10f4d324d411", 600),
      img("photo-1463320726281-696a485928c7", 600),
    ],
    faq: [
      {
        question: L("What if a plant dies?", "Po nëse një bimë thahet?"),
        answer: L(
          "On our care plans, plants are guaranteed — if one declines despite our visits, we replace it at no cost.",
          "Në planet tona të kujdesit, nëse një bimë dobësohet pavarësisht mirëmbajtjes sonë, e zëvendësojmë pa pagesë shtesë."
        ),
      },
      {
        question: L(
          "My space has very little natural light. Any options?",
          "Hapësira ime ka shumë pak dritë natyrale. A ka mundësi?"
        ),
        answer: L(
          "Plenty. There is a surprising range of low-light species, and we can supplement with discreet grow lighting where needed.",
          "Po. Ka shumë lloje që përshtaten me dritë të ulët, dhe aty ku duhet mund të shtojmë ndriçim diskret për rritje."
        ),
      },
      {
        question: L(
          "How often do care visits happen?",
          "Sa shpesh bëhen vizitat e kujdesit?"
        ),
        answer: L(
          "Most interiors do well with a visit every one to two weeks, covering watering, feeding, pruning and pest checks.",
          "Shumica e ambienteve kanë nevojë për vizitë çdo një deri në dy javë. Vizita përfshin ujitje, ushqim, krasitje të lehtë dhe kontroll për dëmtues."
        ),
      },
    ],
  },
  {
    id: 7,
    slug: "plant-delivery",
    title: L("Plant delivery", "Dërgesë bimësh"),
    icon: "truck",
    featured: false,
    image: img("photo-1509423350716-97f9360b4e09"),
    shortDescription: L(
      "Healthy, nursery-fresh plants hand-delivered and placed exactly where you want them.",
      "Bimë të shëndetshme nga fidanishtja, të dorëzuara me kujdes dhe të vendosura aty ku ju duhen."
    ),
    description: L(
      "Skip the trunk full of soil. Choose from our nursery's range of indoor and outdoor plants and we'll deliver them healthy, inspected and ready to thrive — with optional placement and potting on arrival. Perfect for gifts, new homes and instant garden refreshes.",
      "Zgjidhni bimët nga fidanishtja jonë dhe ne i sjellim të kontrolluara, të shëndetshme dhe gati për mbjellje. Mund të përfshijmë edhe vendosjen apo mbjelljen në vazo. Shërbim praktik për dhurata, shtëpi të reja, zyra dhe rifreskim të shpejtë të kopshtit."
    ),
    benefits: [
      L(
        "Every plant inspected and hardened off before delivery",
        "Çdo bimë kontrollohet para nisjes"
      ),
      L(
        "Careful transport — no crushed leaves or snapped stems",
        "Transport i kujdesshëm, pa dëmtuar gjethet apo kërcellin"
      ),
      L(
        "Optional potting and placement service on arrival",
        "Mbjellje dhe vendosje opsionale në destinacion"
      ),
      L(
        "Gift wrapping and personal notes available",
        "Paketim dhurate dhe shënim personal sipas kërkesës"
      ),
      L(
        "Freshness guarantee on every delivery",
        "Garanci për gjendjen e bimës në dorëzim"
      ),
    ],
    gallery: [
      img("photo-1509423350716-97f9360b4e09", 600),
      img("photo-1463320726281-696a485928c7", 600),
      img("photo-1485955900006-10f4d324d411", 600),
    ],
    faq: [
      {
        question: L(
          "What areas do you deliver to?",
          "Në cilat zona dërgoni?"
        ),
        answer: L(
          "We deliver across all of Kosovo. For larger orders we can arrange delivery further afield — just ask.",
          "Dërgojmë në gjithë Kosovën. Për porosi më të mëdha mund të organizojmë edhe dërgesa jashtë zonave të zakonshme."
        ),
      },
      {
        question: L(
          "Can I send plants as a gift?",
          "A mund të dërgoj bimë si dhuratë?"
        ),
        answer: L(
          "Yes — add gift wrapping and a handwritten note at checkout, and we'll deliver on the date you choose.",
          "Po. Mund të shtoni paketim dhurate dhe shënim personal, ndërsa ne e dorëzojmë në datën që zgjidhni."
        ),
      },
      {
        question: L(
          "What if my plant arrives damaged?",
          "Po nëse bima mbërrin e dëmtuar?"
        ),
        answer: L(
          "Our freshness guarantee covers every delivery. Send us a photo within 48 hours and we'll replace the plant free of charge.",
          "Nëse bima mbërrin e dëmtuar, na dërgoni një foto brenda 48 orësh dhe e zëvendësojmë pa pagesë."
        ),
      },
    ],
  },
  {
    id: 8,
    slug: "commercial-plants",
    title: L("Commercial plants", "Gjelbërim për biznese"),
    icon: "building",
    featured: false,
    image: img("photo-1444392061186-9fc38f84f726"),
    shortDescription: L(
      "Large-scale planting for developments, retail spaces and public realm projects.",
      "Gjelbërim në shkallë më të madhe për komplekse, zyra, lokale, hapësira tregtare dhe projekte publike."
    ),
    description: L(
      "We partner with developers, architects and facility managers to deliver planting at commercial scale — from streetscape trees and rooftop gardens to lobby plantscapes and seasonal displays. Our teams handle specification, supply, installation and long-term maintenance contracts.",
      "Bashkëpunojmë me zhvillues, arkitektë dhe menaxherë objektesh për të realizuar gjelbërim në ambiente biznesi. Nga pemët dhe tarracat e gjelbra te hyrjet, hollet dhe dekorimet sezonale, ne merremi me specifikim, furnizim, instalim dhe mirëmbajtje afatgjatë."
    ),
    benefits: [
      L(
        "Specification support for architects and designers",
        "Mbështetje për arkitektë dhe dizajnerë gjatë specifikimit"
      ),
      L(
        "Trade supply of trees, shrubs and perennials at scale",
        "Furnizim me pemë, shkurre dhe bimë në sasi të mëdha"
      ),
      L(
        "Rooftop, courtyard and public realm expertise",
        "Zgjidhje për tarraca, oborre dhe hapësira publike"
      ),
      L(
        "Seasonal display programs for retail environments",
        "Dekorime sezonale për ambiente tregtare"
      ),
      L(
        "Long-term maintenance contracts with SLAs",
        "Kontrata mirëmbajtjeje afatgjata me nivel të qartë shërbimi"
      ),
    ],
    gallery: [
      img("photo-1444392061186-9fc38f84f726", 600),
      img("photo-1600596542815-ffad4c1539a9", 600),
      img("photo-1441974231531-c6227db76b6e", 600),
    ],
    faq: [
      {
        question: L(
          "Do you work from landscape architect drawings?",
          "A punoni nga vizatimet e arkitektëve të peizazhit?"
        ),
        answer: L(
          "Yes — we regularly price and install from BIM and CAD planting plans, and can suggest value-engineered alternatives where supply is tight.",
          "Po. Punojmë me plane BIM dhe CAD, bëjmë çmimin dhe instalimin, si dhe sugjerojmë alternativa më ekonomike kur furnizimi është i kufizuar."
        ),
      },
      {
        question: L(
          "Can you maintain what you install?",
          "A mund ta mirëmbani atë që instaloni?"
        ),
        answer: L(
          "That's our preferred model. Maintenance contracts include defined service levels, reporting and plant replacement.",
          "Po, dhe zakonisht këtë e rekomandojmë. Kontratat e mirëmbajtjes përfshijnë nivel të qartë shërbimi, raportim dhe zëvendësim bimësh kur nevojitet."
        ),
      },
      {
        question: L(
          "What project sizes do you take on?",
          "Çfarë madhësish projektesh merrni përsipër?"
        ),
        answer: L(
          "From a single lobby installation to multi-phase developments. Our largest planting contract to date covered 4.5 acres of mixed-use public realm.",
          "Nga një instalim i vogël në hyrje deri te projekte me disa faza. E vlerësojmë çdo kërkesë sipas hapësirës, afatit dhe kapacitetit të nevojshëm."
        ),
      },
    ],
  },
  {
    id: 9,
    slug: "office-plant-rental",
    title: L("Office plant rental", "Qira bimësh për zyra"),
    icon: "briefcase",
    featured: false,
    image: img("photo-1485955900006-10f4d324d411"),
    shortDescription: L(
      "Rotating rental plants for offices — always fresh, always cared for, never your problem.",
      "Bimë me qira për zyra, gjithmonë të freskëta, të mirëmbajtura dhe pa angazhim shtesë për ekipin tuaj."
    ),
    description: L(
      "Get all the benefits of a green office with none of the responsibility. Our rental program supplies premium plants in designer planters, visits regularly to keep them thriving, and rotates in fresh specimens so your space always looks its best. One simple monthly fee covers everything.",
      "Krijoni një zyrë më të gjelbër pa u marrë vetë me kujdesin e bimëve. Programi ynë përfshin bimë cilësore, vazo të përshtatura me ambientin, vizita të rregullta mirëmbajtjeje dhe zëvendësim kur është e nevojshme. Një pagesë mujore mbulon të gjithë shërbimin."
    ),
    benefits: [
      L(
        "No upfront investment — one monthly fee covers it all",
        "Pa investim fillestar, me pagesë të thjeshtë mujore"
      ),
      L(
        "Regular care visits by our horticulturists",
        "Vizita të rregullta kujdesi nga ekipi ynë"
      ),
      L(
        "Free rotation and replacement of tired plants",
        "Rrotullim dhe zëvendësim i bimëve kur humbin freskinë"
      ),
      L(
        "Designer planters matched to your interior",
        "Vazo të përshtatura me interierin tuaj"
      ),
      L(
        "Proven boost to workplace wellbeing and acoustics",
        "Ambiente pune më të këndshme, më të gjalla dhe më të qeta"
      ),
    ],
    gallery: [
      img("photo-1485955900006-10f4d324d411", 600),
      img("photo-1470058869958-2a77ade41c02", 600),
      img("photo-1463320726281-696a485928c7", 600),
    ],
    faq: [
      {
        question: L("What does rental cost?", "Sa kushton qiraja?"),
        answer: L(
          "Programs start at €149/month for a small office setup, including planters, care visits and replacements. We'll quote precisely after a free site visit.",
          "Programet fillojnë nga 149 € në muaj për një zyrë të vogël dhe përfshijnë vazot, vizitat e kujdesit dhe zëvendësimet. Çmimin e saktë e japim pas një vizite falas në ambient."
        ),
      },
      {
        question: L(
          "Is there a minimum contract?",
          "A ka kontratë minimale?"
        ),
        answer: L(
          "Our standard agreement runs 12 months, with flexible upgrade options as your team or space grows.",
          "Marrëveshja standarde zgjat 12 muaj, me mundësi fleksibile për ndryshim nëse rritet ekipi apo hapësira juaj."
        ),
      },
      {
        question: L(
          "What happens if we move office?",
          "Po nëse ndërrojmë zyrë?"
        ),
        answer: L(
          "We move the plants with you. Relocation within our service area is included in the program.",
          "I zhvendosim bimët bashkë me ju. Zhvendosja brenda zonës sonë të shërbimit është e përfshirë në program."
        ),
      },
    ],
  },
  {
    id: 10,
    slug: "seasonal-maintenance",
    title: L("Seasonal maintenance", "Mirëmbajtje sezonale"),
    icon: "calendar",
    featured: true,
    image: img("photo-1461354464878-ad92f492a5a0"),
    shortDescription: L(
      "Year-round garden care programs — spring prep, summer upkeep, autumn cleanup and winter protection.",
      "Kujdes gjatë gjithë vitit: përgatitje në pranverë, mirëmbajtje në verë, pastrim në vjeshtë dhe mbrojtje në dimër."
    ),
    description: L(
      "Gardens change with the seasons, and so does the work they need. Our maintenance programs schedule the right tasks at the right time: spring bed preparation and mulching, summer pruning and feeding, autumn leaf clearance and bulb planting, and winter protection for tender plants. One plan, a beautiful garden all year.",
      "Kopshti ndryshon me stinët, prandaj edhe kujdesi duhet të jetë i planifikuar. Programet tona vendosin punët në kohën e duhur: përgatitje dhe mulçim në pranverë, krasitje e ushqim në verë, pastrim gjethesh dhe mbjellje në vjeshtë, si dhe mbrojtje për bimët delikate në dimër. Një plan i qartë për një kopsht të rregullt gjithë vitin."
    ),
    benefits: [
      L(
        "A written annual care calendar for your garden",
        "Kalendar vjetor kujdesi për kopshtin tuaj"
      ),
      L(
        "The same dedicated crew on every visit",
        "I njëjti ekip i përkushtuar në çdo vizitë"
      ),
      L(
        "Spring and autumn deep-maintenance visits",
        "Vizita më të plota mirëmbajtjeje në pranverë dhe vjeshtë"
      ),
      L(
        "Mulching, feeding and pruning at optimal times",
        "Mulçim, ushqyerje dhe krasitje në kohën e duhur"
      ),
      L(
        "Priority booking for extra work and repairs",
        "Përparësi rezervimi për punë shtesë dhe riparime"
      ),
    ],
    gallery: [
      img("photo-1461354464878-ad92f492a5a0", 600),
      img("photo-1490750967868-88aa4486c946", 600),
      img("photo-1466692476868-aef1dfb1e735", 600),
    ],
    faq: [
      {
        question: L(
          "How often do maintenance visits happen?",
          "Sa shpesh bëhen vizitat e mirëmbajtjes?"
        ),
        answer: L(
          "Most gardens are on a fortnightly rhythm through the growing season and monthly in winter, with deep-maintenance visits each spring and autumn.",
          "Gjatë sezonit të rritjes, shumica e kopshteve mirëmbahen çdo dy javë. Në dimër zakonisht mjafton një vizitë mujore, me kontrolle më të plota në pranverë dhe vjeshtë."
        ),
      },
      {
        question: L(
          "Can I pick only certain seasons?",
          "A mund të zgjedh vetëm disa stinë?"
        ),
        answer: L(
          "Yes — although the annual program is the best value, we also offer standalone spring prep and autumn cleanup packages.",
          "Po. Programi vjetor është më i leverdishëm, por ofrojmë edhe paketa të veçanta për përgatitje pranverore dhe pastrim vjeshtor."
        ),
      },
      {
        question: L(
          "Do you take away green waste?",
          "A i largoni mbetjet e gjelbra?"
        ),
        answer: L(
          "Always. Everything we remove is composted or recycled, and removal is included in the program price.",
          "Po. Mbetjet që largojmë i kompostojmë ose riciklojmë, dhe largimi është i përfshirë në çmimin e programit."
        ),
      },
    ],
  },
];

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);

export const getFeaturedServices = () =>
  services.filter((service) => service.featured);
