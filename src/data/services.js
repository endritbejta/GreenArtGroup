import { L } from "../utils/localize";

const img = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const services = [
  {
    id: 1,
    slug: "lawn-care",
    title: L("Lawn Care", "Kujdesi për Kopshtin"),
    icon: "sprout",
    featured: true,
    image: img("photo-1568605114967-8130f3a36994"),
    shortDescription: L(
      "Mowing, fertilizing, aeration and seasonal treatments that keep your lawn thick, healthy and deep green all year.",
      "Kositje, plehërim, ajrosje dhe trajtime sezonale që e mbajnë kopshtin tuaj të dendur, të shëndetshëm dhe të gjelbër gjatë gjithë vitit."
    ),
    description: L(
      "A great lawn doesn't happen by accident. Our lawn care programs combine precision mowing, soil-tested fertilization, aeration, overseeding and weed control into a schedule tailored to your grass type and local climate. Whether you need a weekly maintenance visit or a full lawn renovation, our certified technicians treat your turf like their own.",
      "Një kopsht i bukur nuk krijohet rastësisht. Programet tona të kujdesit kombinojnë kositjen e saktë, plehërimin e bazuar në analizën e tokës, ajrosjen, mbjelljen shtesë dhe kontrollin e barërave të këqija në një plan të përshtatur për llojin e barit dhe klimën tuaj lokale. Qoftë për një vizitë javore mirëmbajtjeje apo për një rinovim të plotë të kopshtit, teknikët tanë të certifikuar kujdesen për barin tuaj si për të tyren."
    ),
    benefits: [
      L(
        "Custom fertilization plans based on soil analysis",
        "Plane plehërimi të personalizuara sipas analizës së tokës"
      ),
      L(
        "Weekly or bi-weekly mowing schedules",
        "Orare kositjeje javore ose çdo dy javë"
      ),
      L(
        "Aeration and overseeding for dense, resilient turf",
        "Ajrosje dhe mbjellje shtesë për një bar të dendur e të qëndrueshëm"
      ),
      L(
        "Safe, targeted weed and pest control",
        "Kontroll i sigurt dhe i synuar i barërave të këqija dhe dëmtuesve"
      ),
      L(
        "Seasonal cleanups included in annual plans",
        "Pastrime sezonale të përfshira në planet vjetore"
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
          "Gjatë sezonit të rritjes, shumica e kopshteve përfitojnë nga kositja javore. Në muajt më të ngadaltë kalojmë në vizita çdo dy javë, që bari të mos pritet kurrë shumë shkurt."
        ),
      },
      {
        question: L(
          "Are your treatments safe for kids and pets?",
          "A janë trajtimet tuaja të sigurta për fëmijët dhe kafshët shtëpiake?"
        ),
        answer: L(
          "Yes. We use targeted, low-impact products and always let you know the short re-entry window after each application.",
          "Po. Përdorim produkte të synuara me ndikim të ulët dhe ju njoftojmë gjithmonë për periudhën e shkurtër të pritjes pas çdo aplikimi."
        ),
      },
      {
        question: L(
          "Can you revive a damaged lawn?",
          "A mund ta rikuperoni një kopsht të dëmtuar?"
        ),
        answer: L(
          "In most cases, yes. We start with a soil test, then build a renovation plan combining aeration, overseeding and fertilization. Full recovery usually takes one to two seasons.",
          "Në shumicën e rasteve, po. Fillojmë me një analizë të tokës, pastaj ndërtojmë një plan rinovimi që kombinon ajrosjen, mbjelljen shtesë dhe plehërimin. Rikuperimi i plotë zakonisht zgjat një deri në dy sezone."
        ),
      },
    ],
  },
  {
    id: 2,
    slug: "garden-design",
    title: L("Garden Design", "Dizajn Kopshti"),
    icon: "flower",
    featured: true,
    image: img("photo-1466692476868-aef1dfb1e735"),
    shortDescription: L(
      "Bespoke garden concepts — from planting plans to complete outdoor rooms designed around how you live.",
      "Koncepte kopshtesh të personalizuara — nga planet e mbjelljes deri te hapësira të plota të jashtme, të dizajnuara sipas mënyrës si jetoni."
    ),
    description: L(
      "Our designers turn underused outdoor space into gardens you'll actually live in. We begin with a site visit and a conversation about how you want the space to feel, then develop planting plans, hardscape layouts and lighting concepts. You receive clear visuals before a single spade hits the ground, and our crews build exactly what was agreed.",
      "Dizajnerët tanë e kthejnë hapësirën e papërdorur të jashtme në kopshte ku do të doni të jetoni vërtet. Fillojmë me një vizitë në terren dhe një bisedë se si dëshironi ta ndieni hapësirën, pastaj zhvillojmë planet e mbjelljes, strukturat dhe konceptet e ndriçimit. Ju merrni vizualizime të qarta para se të fillojë puna, dhe ekipet tona ndërtojnë pikërisht atë që është rënë dakord."
    ),
    benefits: [
      L(
        "Personal design consultation at your property",
        "Konsultë personale dizajni në pronën tuaj"
      ),
      L(
        "Detailed planting and layout plans with visuals",
        "Plane të detajuara mbjelljeje dhe organizimi me vizualizime"
      ),
      L(
        "Plant selection matched to soil, light and maintenance appetite",
        "Zgjedhje bimësh sipas tokës, dritës dhe kohës që keni për mirëmbajtje"
      ),
      L(
        "Seamless handover to our own build crews",
        "Kalim i qetë te ekipet tona të ndërtimit"
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
          "Një dizajn tipik rezidencial zgjat dy deri në katër javë nga vizita në terren deri te plani përfundimtar, në varësi të madhësisë dhe kompleksitetit të hapësirës."
        ),
      },
      {
        question: L(
          "Can you work with an existing garden?",
          "A mund të punoni me një kopsht ekzistues?"
        ),
        answer: L(
          "Absolutely. Many of our projects are redesigns that keep mature trees and the best existing features while rethinking the rest.",
          "Absolutisht. Shumë nga projektet tona janë ridizajnime që ruajnë pemët e vjetra dhe elementet më të mira ekzistuese, duke rimenduar pjesën tjetër."
        ),
      },
      {
        question: L(
          "Do you also build the design?",
          "A e ndërtoni edhe vetë dizajnin?"
        ),
        answer: L(
          "Yes — design and build under one roof is our specialty. It keeps budgets honest and the finished garden true to the plan.",
          "Po — dizajni dhe ndërtimi nën një çati është specialiteti ynë. Kjo i mban buxhetet të sakta dhe kopshtin përfundimtar besnik ndaj planit."
        ),
      },
    ],
  },
  {
    id: 4,
    slug: "tree-care",
    title: L("Tree Care", "Kujdesi për Pemët"),
    icon: "scissors",
    featured: false,
    image: img("photo-1502082553048-f009c37129b9"),
    shortDescription: L(
      "Certified arborists for pruning, health assessments, cabling and safe removals.",
      "Arboristë të certifikuar për krasitje, vlerësime shëndetësore, përforcime dhe heqje të sigurta."
    ),
    description: L(
      "Trees are the most valuable living assets on your property — and the most dangerous to work on without training. Our certified arborists prune for health and shape, diagnose disease, install support systems for mature specimens and carry out safe, insured removals when there is no alternative.",
      "Pemët janë pasuria më e vlefshme e gjallë e pronës suaj — dhe më e rrezikshmja për t'u punuar pa trajnim. Arboristët tanë të certifikuar krasitin për shëndet dhe formë, diagnostikojnë sëmundjet, instalojnë sisteme mbështetëse për pemët e vjetra dhe kryejnë heqje të sigurta e të siguruara kur nuk ka alternativë tjetër."
    ),
    benefits: [
      L(
        "ISA-certified arborists on every job",
        "Arboristë të certifikuar ISA në çdo punë"
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
        "Kabllim dhe përforcim për pemët e moçme"
      ),
      L(
        "Fully insured removals and stump grinding",
        "Heqje plotësisht të siguruara dhe bluarje trungjesh"
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
          "Shumica e llojeve reagojnë më mirë ndaj krasitjes në fund të dimrit, para lulëzimit pranveror. Disa pemë të lulëzuara krasiten menjëherë pas lulëzimit — ju këshillojmë për secilën pemë."
        ),
      },
      {
        question: L(
          "My tree looks sick. Can it be saved?",
          "Pema ime duket e sëmurë. A mund të shpëtohet?"
        ),
        answer: L(
          "Often, yes — early diagnosis matters. An arborist visit includes a full health assessment and a written treatment recommendation.",
          "Shpesh, po — diagnoza e hershme ka rëndësi. Vizita e arboristit përfshin një vlerësim të plotë shëndetësor dhe një rekomandim me shkrim për trajtimin."
        ),
      },
      {
        question: L(
          "Are you insured for removals?",
          "A jeni të siguruar për heqjet?"
        ),
        answer: L(
          "Fully. We carry comprehensive liability coverage and follow strict rigging protocols on every removal.",
          "Plotësisht. Kemi mbulim të plotë përgjegjësie dhe ndjekim protokolle strikte sigurie në çdo heqje."
        ),
      },
    ],
  },
  {
    id: 5,
    slug: "irrigation",
    title: L("Irrigation Systems", "Sisteme Ujitjeje"),
    icon: "droplets",
    featured: false,
    image: img("photo-1416879595882-3373a0480b5b"),
    shortDescription: L(
      "Smart irrigation design, installation and servicing that saves water and keeps plants thriving.",
      "Dizajn, instalim dhe servisim i ujitjes inteligjente që kursen ujë dhe i mban bimët të lulëzuara."
    ),
    description: L(
      "Hand-watering is the first thing busy garden owners give up on. We design and install smart irrigation — drip lines, pop-up sprinklers and weather-aware controllers — so every bed and lawn zone gets exactly the water it needs. We also service and winterize existing systems of any brand.",
      "Ujitja me dorë është gjëja e parë që braktisin pronarët e zënë të kopshteve. Ne dizajnojmë dhe instalojmë ujitje inteligjente — linja pikuese, spërkatës dhe kontrollues që ndjekin motin — që çdo lehe dhe zonë kopshti të marrë saktësisht ujin që i duhet. Servisojmë dhe dimërojmë edhe sisteme ekzistuese të çdo marke."
    ),
    benefits: [
      L(
        "Zone-by-zone design for lawns, beds and pots",
        "Dizajn zonë-për-zonë për kopshte, lehe dhe vazo"
      ),
      L(
        "Smart controllers that adjust to the weather",
        "Kontrollues inteligjentë që përshtaten me motin"
      ),
      L(
        "Water savings of up to 40% versus manual watering",
        "Kursim uji deri në 40% krahasuar me ujitjen manuale"
      ),
      L(
        "Servicing and repairs for all major brands",
        "Servisim dhe riparime për të gjitha markat kryesore"
      ),
      L(
        "Seasonal start-up and winterization plans",
        "Plane sezonale ndezjeje dhe dimërimi"
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
          "Zakonisht e kundërta. Zonimi inteligjent dhe kontrolluesit e bazuar në mot zakonisht e ulin përdorimin e ujit të jashtëm me 30–40% krahasuar me ujitjen me zorrë."
        ),
      },
      {
        question: L(
          "Can you add irrigation to an established garden?",
          "A mund të shtoni ujitje në një kopsht të formuar?"
        ),
        answer: L(
          "Yes. Drip systems in particular can be retrofitted into mature beds with minimal disturbance.",
          "Po. Sistemet pikuese në veçanti mund të instalohen në lehe të rritura me shqetësim minimal."
        ),
      },
      {
        question: L(
          "Do systems need annual maintenance?",
          "A kanë nevojë sistemet për mirëmbajtje vjetore?"
        ),
        answer: L(
          "We recommend a spring start-up check and an autumn winterization to protect pipes from frost — both are covered by our care plans.",
          "Rekomandojmë një kontroll ndezjeje në pranverë dhe një dimërim në vjeshtë për t'i mbrojtur tubat nga ngrica — të dyja mbulohen nga planet tona të kujdesit."
        ),
      },
    ],
  },
  {
    id: 6,
    slug: "interior-plants",
    title: L("Interior Plants", "Bimë të Brendshme"),
    icon: "leaf",
    featured: true,
    image: img("photo-1470058869958-2a77ade41c02"),
    shortDescription: L(
      "Interior planting design and care that turns homes and workplaces into green sanctuaries.",
      "Dizajn dhe kujdes për bimët e brendshme që i kthen shtëpitë dhe vendet e punës në oaze të gjelbra."
    ),
    description: L(
      "Bring the outside in. We design interior plantscapes for homes, offices and hospitality spaces — selecting species that thrive in your light conditions, styling them in planters that suit the interior, and offering ongoing care visits so everything stays lush without you lifting a finger.",
      "Sillni natyrën brenda. Ne dizajnojmë hapësira të gjelbra të brendshme për shtëpi, zyra dhe ambiente mikpritjeje — duke zgjedhur lloje që lulëzojnë në kushtet tuaja të dritës, duke i stiluar në vazo që i shkojnë interierit dhe duke ofruar vizita të rregullta kujdesi, që gjithçka të mbetet e harlisur pa lëvizur ju gishtin."
    ),
    benefits: [
      L(
        "Light-level assessment before any plant is chosen",
        "Vlerësim i nivelit të dritës para se të zgjidhet ndonjë bimë"
      ),
      L(
        "Designer planters and styling included",
        "Vazo dizajnerësh dhe stilim të përfshira"
      ),
      L(
        "Ongoing care visits with plant replacement guarantee",
        "Vizita të vazhdueshme kujdesi me garanci zëvendësimi të bimëve"
      ),
      L(
        "Air-purifying, low-allergen species available",
        "Lloje që pastrojnë ajrin dhe me alergji të ulët"
      ),
      L(
        "Installations from a single statement plant to full green walls",
        "Instalime nga një bimë e vetme deklarative deri te mure të plota të gjelbra"
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
          "Në planet tona të kujdesit, bimët janë të garantuara — nëse njëra bie ndonëse vizitohet nga ne, e zëvendësojmë pa pagesë."
        ),
      },
      {
        question: L(
          "My space has very little natural light. Any options?",
          "Hapësira ime ka shumë pak dritë natyrale. A ka mundësi?"
        ),
        answer: L(
          "Plenty. There is a surprising range of low-light species, and we can supplement with discreet grow lighting where needed.",
          "Plot. Ekziston një gamë befasuese llojesh për dritë të ulët, dhe mund të shtojmë ndriçim diskret rritjeje aty ku duhet."
        ),
      },
      {
        question: L(
          "How often do care visits happen?",
          "Sa shpesh bëhen vizitat e kujdesit?"
        ),
        answer: L(
          "Most interiors do well with a visit every one to two weeks, covering watering, feeding, pruning and pest checks.",
          "Shumica e ambienteve të brendshme ecin mirë me një vizitë çdo një deri në dy javë, që përfshin ujitjen, ushqyerjen, krasitjen dhe kontrollet për dëmtues."
        ),
      },
    ],
  },
  {
    id: 7,
    slug: "plant-delivery",
    title: L("Plant Delivery", "Dërgesa Bimësh"),
    icon: "truck",
    featured: false,
    image: img("photo-1509423350716-97f9360b4e09"),
    shortDescription: L(
      "Healthy, nursery-fresh plants hand-delivered and placed exactly where you want them.",
      "Bimë të shëndetshme e të freskëta nga fidanishtja, të dorëzuara dhe të vendosura pikërisht aty ku i doni."
    ),
    description: L(
      "Skip the trunk full of soil. Choose from our nursery's range of indoor and outdoor plants and we'll deliver them healthy, inspected and ready to thrive — with optional placement and potting on arrival. Perfect for gifts, new homes and instant garden refreshes.",
      "Harrojeni bagazhin plot dhé. Zgjidhni nga gama e fidanishtes sonë të bimëve të brendshme dhe të jashtme dhe ne do t'i dorëzojmë të shëndetshme, të kontrolluara dhe gati për të lulëzuar — me shërbim opsional vendosjeje dhe mbjelljeje në vazo në mbërritje. Perfekte për dhurata, shtëpi të reja dhe rifreskime të menjëhershme kopshti."
    ),
    benefits: [
      L(
        "Every plant inspected and hardened off before delivery",
        "Çdo bimë kontrollohet dhe përgatitet para dërgesës"
      ),
      L(
        "Careful transport — no crushed leaves or snapped stems",
        "Transport i kujdesshëm — pa gjethe të shtypura a kërcell të thyer"
      ),
      L(
        "Optional potting and placement service on arrival",
        "Shërbim opsional mbjelljeje dhe vendosjeje në mbërritje"
      ),
      L(
        "Gift wrapping and personal notes available",
        "Paketim dhurate dhe shënime personale në dispozicion"
      ),
      L(
        "Freshness guarantee on every delivery",
        "Garanci freskie për çdo dërgesë"
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
          "Dërgojmë anembanë Kosovës. Për porosi më të mëdha mund të organizojmë dërgesa edhe më larg — mjafton të pyesni."
        ),
      },
      {
        question: L(
          "Can I send plants as a gift?",
          "A mund të dërgoj bimë si dhuratë?"
        ),
        answer: L(
          "Yes — add gift wrapping and a handwritten note at checkout, and we'll deliver on the date you choose.",
          "Po — shtoni paketimin e dhuratës dhe një shënim të shkruar me dorë në porosi, dhe ne dorëzojmë në datën që zgjidhni."
        ),
      },
      {
        question: L(
          "What if my plant arrives damaged?",
          "Po nëse bima mbërrin e dëmtuar?"
        ),
        answer: L(
          "Our freshness guarantee covers every delivery. Send us a photo within 48 hours and we'll replace the plant free of charge.",
          "Garancia jonë e freskisë mbulon çdo dërgesë. Na dërgoni një foto brenda 48 orësh dhe e zëvendësojmë bimën falas."
        ),
      },
    ],
  },
  {
    id: 8,
    slug: "commercial-plants",
    title: L("Commercial Plants", "Gjelbërim Komercial"),
    icon: "building",
    featured: false,
    image: img("photo-1444392061186-9fc38f84f726"),
    shortDescription: L(
      "Large-scale planting for developments, retail spaces and public realm projects.",
      "Mbjellje në shkallë të gjerë për komplekse, hapësira tregtare dhe projekte publike."
    ),
    description: L(
      "We partner with developers, architects and facility managers to deliver planting at commercial scale — from streetscape trees and rooftop gardens to lobby plantscapes and seasonal displays. Our teams handle specification, supply, installation and long-term maintenance contracts.",
      "Bashkëpunojmë me zhvillues, arkitektë dhe menaxherë objektesh për të realizuar gjelbërim në shkallë komerciale — nga pemët e rrugëve dhe kopshtet në tarraca deri te hapësirat e gjelbra në hyrje dhe dekoret sezonale. Ekipet tona merren me specifikimin, furnizimin, instalimin dhe kontratat afatgjata të mirëmbajtjes."
    ),
    benefits: [
      L(
        "Specification support for architects and designers",
        "Mbështetje specifikimi për arkitektë dhe dizajnerë"
      ),
      L(
        "Trade supply of trees, shrubs and perennials at scale",
        "Furnizim me pemë, shkurre dhe bimë shumëvjeçare në sasi të mëdha"
      ),
      L(
        "Rooftop, courtyard and public realm expertise",
        "Ekspertizë për tarraca, oborre dhe hapësira publike"
      ),
      L(
        "Seasonal display programs for retail environments",
        "Programe dekorimesh sezonale për ambiente tregtare"
      ),
      L(
        "Long-term maintenance contracts with SLAs",
        "Kontrata mirëmbajtjeje afatgjata me nivele shërbimi"
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
          "Po — rregullisht çmojmë dhe instalojmë nga plane mbjelljeje BIM dhe CAD, dhe mund të sugjerojmë alternativa më ekonomike kur furnizimi është i kufizuar."
        ),
      },
      {
        question: L(
          "Can you maintain what you install?",
          "A mund ta mirëmbani atë që instaloni?"
        ),
        answer: L(
          "That's our preferred model. Maintenance contracts include defined service levels, reporting and plant replacement.",
          "Ky është modeli ynë i preferuar. Kontratat e mirëmbajtjes përfshijnë nivele të përcaktuara shërbimi, raportim dhe zëvendësim bimësh."
        ),
      },
      {
        question: L(
          "What project sizes do you take on?",
          "Çfarë madhësish projektesh merrni përsipër?"
        ),
        answer: L(
          "From a single lobby installation to multi-phase developments. Our largest planting contract to date covered 4.5 acres of mixed-use public realm.",
          "Nga një instalim i vetëm në hyrje deri te zhvillime shumëfazëshe. Kontrata jonë më e madhe e gjelbërimit deri tani mbuloi 1.8 hektarë hapësirë publike me përdorim të përzier."
        ),
      },
    ],
  },
  {
    id: 9,
    slug: "office-plant-rental",
    title: L("Office Plant Rental", "Qira Bimësh për Zyra"),
    icon: "briefcase",
    featured: false,
    image: img("photo-1485955900006-10f4d324d411"),
    shortDescription: L(
      "Rotating rental plants for offices — always fresh, always cared for, never your problem.",
      "Bimë me qira për zyra — gjithmonë të freskëta, gjithmonë të mirëmbajtura, kurrë problemi juaj."
    ),
    description: L(
      "Get all the benefits of a green office with none of the responsibility. Our rental program supplies premium plants in designer planters, visits regularly to keep them thriving, and rotates in fresh specimens so your space always looks its best. One simple monthly fee covers everything.",
      "Përfitoni të gjitha të mirat e një zyre të gjelbër pa asnjë përgjegjësi. Programi ynë i qirasë ofron bimë premium në vazo dizajnerësh, i viziton rregullisht që të mbeten të harlisura dhe i rrotullon me ekzemplarë të freskët, që hapësira juaj të duket gjithmonë në formën më të mirë. Një tarifë e thjeshtë mujore mbulon gjithçka."
    ),
    benefits: [
      L(
        "No upfront investment — one monthly fee covers it all",
        "Pa investim fillestar — një tarifë mujore mbulon gjithçka"
      ),
      L(
        "Regular care visits by our horticulturists",
        "Vizita të rregullta kujdesi nga hortikulturistët tanë"
      ),
      L(
        "Free rotation and replacement of tired plants",
        "Rrotullim dhe zëvendësim falas i bimëve të lodhura"
      ),
      L(
        "Designer planters matched to your interior",
        "Vazo dizajnerësh të përshtatura me interierin tuaj"
      ),
      L(
        "Proven boost to workplace wellbeing and acoustics",
        "Përmirësim i provuar i mirëqenies dhe akustikës në punë"
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
          "Programet fillojnë nga 149 € në muaj për një zyrë të vogël, përfshirë vazot, vizitat e kujdesit dhe zëvendësimet. Ju japim çmim të saktë pas një vizite falas në ambient."
        ),
      },
      {
        question: L(
          "Is there a minimum contract?",
          "A ka kontratë minimale?"
        ),
        answer: L(
          "Our standard agreement runs 12 months, with flexible upgrade options as your team or space grows.",
          "Marrëveshja jonë standarde zgjat 12 muaj, me opsione fleksibël përmirësimi ndërsa rritet ekipi apo hapësira juaj."
        ),
      },
      {
        question: L(
          "What happens if we move office?",
          "Po nëse ndërrojmë zyrë?"
        ),
        answer: L(
          "We move the plants with you. Relocation within our service area is included in the program.",
          "I zhvendosim bimët bashkë me ju. Rivendosja brenda zonës sonë të shërbimit është e përfshirë në program."
        ),
      },
    ],
  },
  {
    id: 10,
    slug: "seasonal-maintenance",
    title: L("Seasonal Maintenance", "Mirëmbajtje Sezonale"),
    icon: "calendar",
    featured: true,
    image: img("photo-1461354464878-ad92f492a5a0"),
    shortDescription: L(
      "Year-round garden care programs — spring prep, summer upkeep, autumn cleanup and winter protection.",
      "Programe kujdesi gjatë gjithë vitit — përgatitje pranverore, mirëmbajtje verore, pastrim vjeshtor dhe mbrojtje dimërore."
    ),
    description: L(
      "Gardens change with the seasons, and so does the work they need. Our maintenance programs schedule the right tasks at the right time: spring bed preparation and mulching, summer pruning and feeding, autumn leaf clearance and bulb planting, and winter protection for tender plants. One plan, a beautiful garden all year.",
      "Kopshtet ndryshojnë me stinët, dhe bashkë me to edhe puna që u duhet. Programet tona të mirëmbajtjes planifikojnë detyrat e duhura në kohën e duhur: përgatitja e leheve dhe mulçimi në pranverë, krasitja dhe ushqyerja në verë, pastrimi i gjetheve dhe mbjellja e tulipanëve në vjeshtë, dhe mbrojtja e bimëve delikate në dimër. Një plan i vetëm, një kopsht i bukur gjithë vitin."
    ),
    benefits: [
      L(
        "A written annual care calendar for your garden",
        "Një kalendar vjetor kujdesi me shkrim për kopshtin tuaj"
      ),
      L(
        "The same dedicated crew on every visit",
        "I njëjti ekip i përkushtuar në çdo vizitë"
      ),
      L(
        "Spring and autumn deep-maintenance visits",
        "Vizita të thelluara mirëmbajtjeje në pranverë dhe vjeshtë"
      ),
      L(
        "Mulching, feeding and pruning at optimal times",
        "Mulçim, ushqyerje dhe krasitje në kohët optimale"
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
          "Shumica e kopshteve ndjekin një ritëm dyjavor gjatë sezonit të rritjes dhe mujor në dimër, me vizita të thelluara çdo pranverë dhe vjeshtë."
        ),
      },
      {
        question: L(
          "Can I pick only certain seasons?",
          "A mund të zgjedh vetëm disa stinë?"
        ),
        answer: L(
          "Yes — although the annual program is the best value, we also offer standalone spring prep and autumn cleanup packages.",
          "Po — ndonëse programi vjetor është vlera më e mirë, ofrojmë edhe paketa të veçanta përgatitjeje pranverore dhe pastrimi vjeshtor."
        ),
      },
      {
        question: L(
          "Do you take away green waste?",
          "A i largoni mbetjet e gjelbra?"
        ),
        answer: L(
          "Always. Everything we remove is composted or recycled, and removal is included in the program price.",
          "Gjithmonë. Gjithçka që largojmë kompostohet ose riciklohet, dhe largimi është i përfshirë në çmimin e programit."
        ),
      },
    ],
  },
];

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);

export const getFeaturedServices = () =>
  services.filter((service) => service.featured);
