const img = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const services = [
  {
    id: 1,
    slug: "lawn-care",
    title: "Lawn Care",
    icon: "sprout",
    featured: true,
    image: img("photo-1568605114967-8130f3a36994"),
    shortDescription:
      "Mowing, fertilizing, aeration and seasonal treatments that keep your lawn thick, healthy and deep green all year.",
    description:
      "A great lawn doesn't happen by accident. Our lawn care programs combine precision mowing, soil-tested fertilization, aeration, overseeding and weed control into a schedule tailored to your grass type and local climate. Whether you need a weekly maintenance visit or a full lawn renovation, our certified technicians treat your turf like their own.",
    benefits: [
      "Custom fertilization plans based on soil analysis",
      "Weekly or bi-weekly mowing schedules",
      "Aeration and overseeding for dense, resilient turf",
      "Safe, targeted weed and pest control",
      "Seasonal cleanups included in annual plans",
    ],
    gallery: [
      img("photo-1568605114967-8130f3a36994", 600),
      img("photo-1558904541-efa843a96f01", 600),
      img("photo-1416879595882-3373a0480b5b", 600),
    ],
    faq: [
      {
        question: "How often should my lawn be mowed?",
        answer:
          "During the growing season, most lawns benefit from weekly mowing. In slower months we switch to bi-weekly visits so the grass is never cut too short.",
      },
      {
        question: "Are your treatments safe for kids and pets?",
        answer:
          "Yes. We use targeted, low-impact products and always let you know the short re-entry window after each application.",
      },
      {
        question: "Can you revive a damaged lawn?",
        answer:
          "In most cases, yes. We start with a soil test, then build a renovation plan combining aeration, overseeding and fertilization. Full recovery usually takes one to two seasons.",
      },
    ],
  },
  {
    id: 2,
    slug: "garden-design",
    title: "Garden Design",
    icon: "flower",
    featured: true,
    image: img("photo-1466692476868-aef1dfb1e735"),
    shortDescription:
      "Bespoke garden concepts — from planting plans to complete outdoor rooms designed around how you live.",
    description:
      "Our designers turn underused outdoor space into gardens you'll actually live in. We begin with a site visit and a conversation about how you want the space to feel, then develop planting plans, hardscape layouts and lighting concepts. You receive clear visuals before a single spade hits the ground, and our crews build exactly what was agreed.",
    benefits: [
      "Personal design consultation at your property",
      "Detailed planting and layout plans with visuals",
      "Plant selection matched to soil, light and maintenance appetite",
      "Seamless handover to our own build crews",
      "Aftercare guidance for the first growing season",
    ],
    gallery: [
      img("photo-1466692476868-aef1dfb1e735", 600),
      img("photo-1490750967868-88aa4486c946", 600),
      img("photo-1416879595882-3373a0480b5b", 600),
    ],
    faq: [
      {
        question: "How long does a garden design take?",
        answer:
          "A typical residential design takes two to four weeks from site visit to final plan, depending on the size and complexity of the space.",
      },
      {
        question: "Can you work with an existing garden?",
        answer:
          "Absolutely. Many of our projects are redesigns that keep mature trees and the best existing features while rethinking the rest.",
      },
      {
        question: "Do you also build the design?",
        answer:
          "Yes — design and build under one roof is our specialty. It keeps budgets honest and the finished garden true to the plan.",
      },
    ],
  },
  {
    id: 3,
    slug: "landscaping",
    title: "Landscaping",
    icon: "trees",
    featured: true,
    image: img("photo-1600585154340-be6161a56a0c"),
    shortDescription:
      "Complete landscape construction — patios, paths, planting, turf and water features built to last.",
    description:
      "From a blank plot to a finished landscape, our construction teams handle grading, drainage, stonework, decking, planting and lawns. We manage the whole project with a single point of contact, transparent pricing and a workmanship guarantee, so transforming your outdoors feels exciting rather than stressful.",
    benefits: [
      "Full project management with one point of contact",
      "Patios, walkways, retaining walls and decking",
      "Drainage and grading done right the first time",
      "Mature tree and specimen plant sourcing",
      "Workmanship guarantee on all hard landscaping",
    ],
    gallery: [
      img("photo-1600585154340-be6161a56a0c", 600),
      img("photo-1600596542815-ffad4c1539a9", 600),
      img("photo-1512917774080-9991f1c4c750", 600),
    ],
    faq: [
      {
        question: "How much does landscaping cost?",
        answer:
          "Projects range widely — a simple planting refresh starts around $2,500, while full garden builds typically run $15,000 and up. We always provide a detailed, fixed quote first.",
      },
      {
        question: "Do you handle permits?",
        answer:
          "Yes. Where structural work, drainage or tree removal needs permits, we prepare and file the paperwork as part of the project.",
      },
      {
        question: "How disruptive is the build?",
        answer:
          "We fence off work zones, protect access paths and leave the site tidy every evening. Most residential builds finish within two to six weeks.",
      },
    ],
  },
  {
    id: 4,
    slug: "tree-care",
    title: "Tree Care",
    icon: "scissors",
    featured: false,
    image: img("photo-1502082553048-f009c37129b9"),
    shortDescription:
      "Certified arborists for pruning, health assessments, cabling and safe removals.",
    description:
      "Trees are the most valuable living assets on your property — and the most dangerous to work on without training. Our certified arborists prune for health and shape, diagnose disease, install support systems for mature specimens and carry out safe, insured removals when there is no alternative.",
    benefits: [
      "ISA-certified arborists on every job",
      "Structural pruning that protects long-term health",
      "Disease and pest diagnosis with treatment plans",
      "Cabling and bracing for veteran trees",
      "Fully insured removals and stump grinding",
    ],
    gallery: [
      img("photo-1502082553048-f009c37129b9", 600),
      img("photo-1441974231531-c6227db76b6e", 600),
      img("photo-1523712999610-f77fbcfc3843", 600),
    ],
    faq: [
      {
        question: "When is the best time to prune?",
        answer:
          "Most species respond best to late-winter pruning, before the spring flush. Some flowering trees are pruned right after blooming — we'll advise per tree.",
      },
      {
        question: "My tree looks sick. Can it be saved?",
        answer:
          "Often, yes — early diagnosis matters. An arborist visit includes a full health assessment and a written treatment recommendation.",
      },
      {
        question: "Are you insured for removals?",
        answer:
          "Fully. We carry comprehensive liability coverage and follow strict rigging protocols on every removal.",
      },
    ],
  },
  {
    id: 5,
    slug: "irrigation",
    title: "Irrigation Systems",
    icon: "droplets",
    featured: false,
    image: img("photo-1416879595882-3373a0480b5b"),
    shortDescription:
      "Smart irrigation design, installation and servicing that saves water and keeps plants thriving.",
    description:
      "Hand-watering is the first thing busy garden owners give up on. We design and install smart irrigation — drip lines, pop-up sprinklers and weather-aware controllers — so every bed and lawn zone gets exactly the water it needs. We also service and winterize existing systems of any brand.",
    benefits: [
      "Zone-by-zone design for lawns, beds and pots",
      "Smart controllers that adjust to the weather",
      "Water savings of up to 40% versus manual watering",
      "Servicing and repairs for all major brands",
      "Seasonal start-up and winterization plans",
    ],
    gallery: [
      img("photo-1416879595882-3373a0480b5b", 600),
      img("photo-1463936575829-25148e1db1b8", 600),
      img("photo-1466692476868-aef1dfb1e735", 600),
    ],
    faq: [
      {
        question: "Will irrigation increase my water bill?",
        answer:
          "Usually the opposite. Smart zoning and weather-based controllers typically cut outdoor water use by 30–40% compared to hose watering.",
      },
      {
        question: "Can you add irrigation to an established garden?",
        answer:
          "Yes. Drip systems in particular can be retrofitted into mature beds with minimal disturbance.",
      },
      {
        question: "Do systems need annual maintenance?",
        answer:
          "We recommend a spring start-up check and an autumn winterization to protect pipes from frost — both are covered by our care plans.",
      },
    ],
  },
  {
    id: 6,
    slug: "interior-plants",
    title: "Interior Plants",
    icon: "leaf",
    featured: true,
    image: img("photo-1470058869958-2a77ade41c02"),
    shortDescription:
      "Interior planting design and care that turns homes and workplaces into green sanctuaries.",
    description:
      "Bring the outside in. We design interior plantscapes for homes, offices and hospitality spaces — selecting species that thrive in your light conditions, styling them in planters that suit the interior, and offering ongoing care visits so everything stays lush without you lifting a finger.",
    benefits: [
      "Light-level assessment before any plant is chosen",
      "Designer planters and styling included",
      "Ongoing care visits with plant replacement guarantee",
      "Air-purifying, low-allergen species available",
      "Installations from a single statement plant to full green walls",
    ],
    gallery: [
      img("photo-1470058869958-2a77ade41c02", 600),
      img("photo-1485955900006-10f4d324d411", 600),
      img("photo-1463320726281-696a485928c7", 600),
    ],
    faq: [
      {
        question: "What if a plant dies?",
        answer:
          "On our care plans, plants are guaranteed — if one declines despite our visits, we replace it at no cost.",
      },
      {
        question: "My space has very little natural light. Any options?",
        answer:
          "Plenty. There is a surprising range of low-light species, and we can supplement with discreet grow lighting where needed.",
      },
      {
        question: "How often do care visits happen?",
        answer:
          "Most interiors do well with a visit every one to two weeks, covering watering, feeding, pruning and pest checks.",
      },
    ],
  },
  {
    id: 7,
    slug: "plant-delivery",
    title: "Plant Delivery",
    icon: "truck",
    featured: false,
    image: img("photo-1509423350716-97f9360b4e09"),
    shortDescription:
      "Healthy, nursery-fresh plants hand-delivered and placed exactly where you want them.",
    description:
      "Skip the trunk full of soil. Choose from our nursery's range of indoor and outdoor plants and we'll deliver them healthy, inspected and ready to thrive — with optional placement and potting on arrival. Perfect for gifts, new homes and instant garden refreshes.",
    benefits: [
      "Every plant inspected and hardened off before delivery",
      "Careful transport — no crushed leaves or snapped stems",
      "Optional potting and placement service on arrival",
      "Gift wrapping and personal notes available",
      "Freshness guarantee on every delivery",
    ],
    gallery: [
      img("photo-1509423350716-97f9360b4e09", 600),
      img("photo-1463320726281-696a485928c7", 600),
      img("photo-1485955900006-10f4d324d411", 600),
    ],
    faq: [
      {
        question: "What areas do you deliver to?",
        answer:
          "We deliver across the greater Portland metro area. For larger orders we can arrange delivery further afield — just ask.",
      },
      {
        question: "Can I send plants as a gift?",
        answer:
          "Yes — add gift wrapping and a handwritten note at checkout, and we'll deliver on the date you choose.",
      },
      {
        question: "What if my plant arrives damaged?",
        answer:
          "Our freshness guarantee covers every delivery. Send us a photo within 48 hours and we'll replace the plant free of charge.",
      },
    ],
  },
  {
    id: 8,
    slug: "commercial-plants",
    title: "Commercial Plants",
    icon: "building",
    featured: false,
    image: img("photo-1444392061186-9fc38f84f726"),
    shortDescription:
      "Large-scale planting for developments, retail spaces and public realm projects.",
    description:
      "We partner with developers, architects and facility managers to deliver planting at commercial scale — from streetscape trees and rooftop gardens to lobby plantscapes and seasonal displays. Our teams handle specification, supply, installation and long-term maintenance contracts.",
    benefits: [
      "Specification support for architects and designers",
      "Trade supply of trees, shrubs and perennials at scale",
      "Rooftop, courtyard and public realm expertise",
      "Seasonal display programs for retail environments",
      "Long-term maintenance contracts with SLAs",
    ],
    gallery: [
      img("photo-1444392061186-9fc38f84f726", 600),
      img("photo-1600596542815-ffad4c1539a9", 600),
      img("photo-1441974231531-c6227db76b6e", 600),
    ],
    faq: [
      {
        question: "Do you work from landscape architect drawings?",
        answer:
          "Yes — we regularly price and install from BIM and CAD planting plans, and can suggest value-engineered alternatives where supply is tight.",
      },
      {
        question: "Can you maintain what you install?",
        answer:
          "That's our preferred model. Maintenance contracts include defined service levels, reporting and plant replacement.",
      },
      {
        question: "What project sizes do you take on?",
        answer:
          "From a single lobby installation to multi-phase developments. Our largest planting contract to date covered 4.5 acres of mixed-use public realm.",
      },
    ],
  },
  {
    id: 9,
    slug: "office-plant-rental",
    title: "Office Plant Rental",
    icon: "briefcase",
    featured: false,
    image: img("photo-1485955900006-10f4d324d411"),
    shortDescription:
      "Rotating rental plants for offices — always fresh, always cared for, never your problem.",
    description:
      "Get all the benefits of a green office with none of the responsibility. Our rental program supplies premium plants in designer planters, visits regularly to keep them thriving, and rotates in fresh specimens so your space always looks its best. One simple monthly fee covers everything.",
    benefits: [
      "No upfront investment — one monthly fee covers it all",
      "Regular care visits by our horticulturists",
      "Free rotation and replacement of tired plants",
      "Designer planters matched to your interior",
      "Proven boost to workplace wellbeing and acoustics",
    ],
    gallery: [
      img("photo-1485955900006-10f4d324d411", 600),
      img("photo-1470058869958-2a77ade41c02", 600),
      img("photo-1463320726281-696a485928c7", 600),
    ],
    faq: [
      {
        question: "What does rental cost?",
        answer:
          "Programs start at $149/month for a small office setup, including planters, care visits and replacements. We'll quote precisely after a free site visit.",
      },
      {
        question: "Is there a minimum contract?",
        answer:
          "Our standard agreement runs 12 months, with flexible upgrade options as your team or space grows.",
      },
      {
        question: "What happens if we move office?",
        answer:
          "We move the plants with you. Relocation within our service area is included in the program.",
      },
    ],
  },
  {
    id: 10,
    slug: "seasonal-maintenance",
    title: "Seasonal Maintenance",
    icon: "calendar",
    featured: false,
    image: img("photo-1461354464878-ad92f492a5a0"),
    shortDescription:
      "Year-round garden care programs — spring prep, summer upkeep, autumn cleanup and winter protection.",
    description:
      "Gardens change with the seasons, and so does the work they need. Our maintenance programs schedule the right tasks at the right time: spring bed preparation and mulching, summer pruning and feeding, autumn leaf clearance and bulb planting, and winter protection for tender plants. One plan, a beautiful garden all year.",
    benefits: [
      "A written annual care calendar for your garden",
      "The same dedicated crew on every visit",
      "Spring and autumn deep-maintenance visits",
      "Mulching, feeding and pruning at optimal times",
      "Priority booking for extra work and repairs",
    ],
    gallery: [
      img("photo-1461354464878-ad92f492a5a0", 600),
      img("photo-1490750967868-88aa4486c946", 600),
      img("photo-1466692476868-aef1dfb1e735", 600),
    ],
    faq: [
      {
        question: "How often do maintenance visits happen?",
        answer:
          "Most gardens are on a fortnightly rhythm through the growing season and monthly in winter, with deep-maintenance visits each spring and autumn.",
      },
      {
        question: "Can I pick only certain seasons?",
        answer:
          "Yes — although the annual program is the best value, we also offer standalone spring prep and autumn cleanup packages.",
      },
      {
        question: "Do you take away green waste?",
        answer:
          "Always. Everything we remove is composted or recycled, and removal is included in the program price.",
      },
    ],
  },
];

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);

export const getFeaturedServices = () =>
  services.filter((service) => service.featured);
