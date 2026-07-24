import { L } from "../utils/localize";

const avatar = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=150&h=150&q=80`;

export const testimonials = [
  {
    id: 1,
    name: "Joshua Jones",
    role: L("Homeowner, Pristina", "Pronar shtëpie, Prishtinë"),
    rating: 5,
    avatar: avatar("photo-1500648767791-00dcc994a43e"),
    quote: L(
      "From the first site visit I knew we were in good hands. The design was beautiful, the crew was meticulous, and the garden has completely changed how we use our home.",
      "Që nga vizita e parë e kuptova se ishim në duar të sigurta. Dizajni ishte i mrekullueshëm, ekipi ishte i përpiktë dhe kopshti ka ndryshuar krejtësisht mënyrën si e përdorim shtëpinë."
    ),
  },
  {
    id: 2,
    name: "Kenneth Allen",
    role: L("Facilities manager", "Menaxher objektesh"),
    rating: 5,
    avatar: avatar("photo-1507003211169-0a1dd7228f2d"),
    quote: L(
      "Their office plant rental program is effortless. The plants always look immaculate, and the team handles everything — we genuinely never think about it.",
      "Programi i tyre i qirasë së bimëve për zyra është pa asnjë mundim. Bimët duken gjithmonë të përsosura dhe ekipi merret me gjithçka — ne s'na duhet të mendojmë fare."
    ),
  },
  {
    id: 3,
    name: "Judith Rodriguez",
    role: L("Homeowner, Prizren", "Pronare shtëpie, Prizren"),
    rating: 5,
    avatar: avatar("photo-1494790108377-be9c29b29330"),
    quote: L(
      "I never knew how much a garden could change a space until GreenArt rebuilt ours. Every plant arrived healthy, the finish is outstanding, and the aftercare has been superb.",
      "Nuk e dija sa shumë mund ta ndryshojë një kopsht një hapësirë derisa GreenArt rindërtoi tonin. Çdo bimë mbërriti e shëndetshme, përfundimi është i shkëlqyer dhe kujdesi i mëpasshëm ka qenë superb."
    ),
  },
  {
    id: 4,
    name: "Sarah Mitchell",
    role: L("Restaurant owner", "Pronare restoranti"),
    rating: 5,
    avatar: avatar("photo-1438761681033-6461ffad8d80"),
    quote: L(
      "Our courtyard dining area went from an afterthought to the most requested seating in the restaurant. Worth every cent.",
      "Zona jonë e ngrënies në oborr u kthye nga një hapësirë e harruar në vendin më të kërkuar të restorantit. Ia vlen çdo cent."
    ),
  },
  {
    id: 5,
    name: "David Chen",
    role: L("Property developer", "Zhvillues pronash"),
    rating: 4,
    avatar: avatar("photo-1472099645785-5658abf4ff4e"),
    quote: L(
      "Reliable at commercial scale — they hit every milestone on a tight program and the planting established beautifully. We've signed them for the next phase.",
      "Të besueshëm në shkallë komerciale — respektuan çdo afat në një program të ngjeshur dhe bimësia u zu shkëlqyeshëm. I kemi kontraktuar për fazën tjetër."
    ),
  },
  {
    id: 6,
    name: "Emily Watson",
    role: L("Homeowner, Peja", "Pronare shtëpie, Pejë"),
    rating: 5,
    avatar: avatar("photo-1544005313-94ddf0286df2"),
    quote: L(
      "The seasonal maintenance plan means our garden always looks cared for, whatever the month. The same friendly crew every visit, and they clearly love what they do.",
      "Plani i mirëmbajtjes sezonale do të thotë që kopshti ynë duket gjithmonë i kujdesur, në çdo muaj. I njëjti ekip i dashur në çdo vizitë, dhe duket qartë që e duan punën e tyre."
    ),
  },
];
