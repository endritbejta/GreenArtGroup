import { L } from "../utils/localize";

const img = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Stable category keys with localized labels, used for filtering. */
export const categoryLabels = {
  "garden-design": L("Garden design", "Dizajn kopshti"),
  commercial: L("Commercial", "Komerciale"),
  "lawn-care": L("Lawn care", "Mirëmbajtje kopshti"),
  "interior-plants": L("Interior plants", "Bimë të brendshme"),
};

export const projects = [
  {
    id: 1,
    title: L("Hillside family garden", "Kopsht familjar në kodrinë"),
    category: "garden-design",
    location: L("Prizren, Kosovo", "Prizren, Kosovë"),
    image: img("photo-1466692476868-aef1dfb1e735"),
    description: L(
      "A steep, unusable slope terraced into three garden rooms with native planting, a play lawn and an outdoor dining terrace.",
      "Një pjerrësi e papërdorshme e kthyer në tri dhoma kopshti me bimësi vendase, një hapësirë lojërash dhe një tarracë ngrënieje në natyrë."
    ),
  },
  {
    id: 2,
    title: L("Riverside office campus", "Kampus zyrash buzë lumit"),
    category: "commercial",
    location: L("Pristina, Kosovo", "Prishtinë, Kosovë"),
    image: img("photo-1444392061186-9fc38f84f726"),
    description: L(
      "Streetscape trees, rain gardens and a rooftop terrace planted for pollinators across a three-building campus.",
      "Pemë rrugësh, kopshte shiu dhe një tarracë e mbjellë për polenizuesit në një kampus me tre ndërtesa."
    ),
  },
  {
    id: 3,
    title: L("Heritage garden restoration", "Restaurim i një kopshti historik"),
    category: "lawn-care",
    location: L("Peja, Kosovo", "Pejë, Kosovë"),
    image: img("photo-1568605114967-8130f3a36994"),
    description: L(
      "A century-old estate garden brought back from drought damage with aeration, overseeding and a smart irrigation retrofit.",
      "Kopshti njëqindvjeçar i një rezidence u rikthye nga dëmtimet e thatësirës me ajrosje, mbjellje shtesë dhe një sistem ujitjeje inteligjente."
    ),
  },
  {
    id: 4,
    title: L("Boutique hotel plantscape", "Gjelbërim hoteli butik"),
    category: "interior-plants",
    location: L("Pristina, Kosovo", "Prishtinë, Kosovë"),
    image: img("photo-1470058869958-2a77ade41c02"),
    description: L(
      "Lobby green wall, statement specimen trees and guest-floor planting with a weekly care program.",
      "Mur i gjelbër në holl, pemë deklarative dhe bimësi në katet e dhomave me një program javor kujdesi."
    ),
  },
  {
    id: 5,
    title: L("Orchard kitchen garden", "Kopsht perimesh me pemëtore"),
    category: "garden-design",
    location: L("Gjakova, Kosovo", "Gjakovë, Kosovë"),
    image: img("photo-1461354464878-ad92f492a5a0"),
    description: L(
      "Raised beds, espaliered fruit trees and a greenhouse — a productive garden designed for a family of keen cooks.",
      "Lehe të ngritura, pemë frutore espalier dhe një serë — një kopsht prodhues i dizajnuar për një familje kuzhinierësh të pasionuar."
    ),
  },
  {
    id: 6,
    title: L("Tech HQ green offices", "Zyra të gjelbra për kompani teknologjie"),
    category: "interior-plants",
    location: L("Ferizaj, Kosovo", "Ferizaj, Kosovë"),
    image: img("photo-1485955900006-10f4d324d411"),
    description: L(
      "Two hundred rental plants across four floors, with acoustic planting dividers and a monthly rotation program.",
      "Dyqind bimë me qira në katër kate, me ndarës akustikë bimorë dhe një program mujor rrotullimi."
    ),
  },
];

export const projectCategoryKeys = [
  ...new Set(projects.map((project) => project.category)),
];
