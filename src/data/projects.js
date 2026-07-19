import { L } from "../utils/localize";

const img = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Stable category keys with localized labels, used for filtering. */
export const categoryLabels = {
  "garden-design": L("Garden Design", "Dizajn Kopshti"),
  commercial: L("Commercial", "Komerciale"),
  "lawn-care": L("Lawn Care", "Kujdes Kopshti"),
  "interior-plants": L("Interior Plants", "Bimë të Brendshme"),
};

export const projects = [
  {
    id: 1,
    title: L("Hillside Family Garden", "Kopsht Familjar në Kodrinë"),
    category: "garden-design",
    location: "Lake Oswego, OR",
    image: img("photo-1466692476868-aef1dfb1e735"),
    description: L(
      "A steep, unusable slope terraced into three garden rooms with native planting, a play lawn and an outdoor dining terrace.",
      "Një pjerrësi e papërdorshme e kthyer në tri dhoma kopshti me bimësi vendase, një hapësirë lojërash dhe një tarracë ngrënieje në natyrë."
    ),
  },
  {
    id: 2,
    title: L("Riverside Office Campus", "Kampus Zyrash buzë Lumit"),
    category: "commercial",
    location: "Vancouver, WA",
    image: img("photo-1444392061186-9fc38f84f726"),
    description: L(
      "Streetscape trees, rain gardens and a rooftop terrace planted for pollinators across a three-building campus.",
      "Pemë rrugësh, kopshte shiu dhe një tarracë e mbjellë për polenizuesit në një kampus me tre ndërtesa."
    ),
  },
  {
    id: 3,
    title: L("Heritage Garden Restoration", "Restaurim i një Kopshti Historik"),
    category: "lawn-care",
    location: "Salem, OR",
    image: img("photo-1568605114967-8130f3a36994"),
    description: L(
      "A century-old estate garden brought back from drought damage with aeration, overseeding and a smart irrigation retrofit.",
      "Kopshti njëqindvjeçar i një rezidence u rikthye nga dëmtimet e thatësirës me ajrosje, mbjellje shtesë dhe një sistem ujitjeje inteligjente."
    ),
  },
  {
    id: 4,
    title: L("Boutique Hotel Plantscape", "Gjelbërim Hoteli Butik"),
    category: "interior-plants",
    location: "Portland, OR",
    image: img("photo-1470058869958-2a77ade41c02"),
    description: L(
      "Lobby green wall, statement specimen trees and guest-floor planting with a weekly care program.",
      "Mur i gjelbër në holl, pemë deklarative dhe bimësi në katet e dhomave me një program javor kujdesi."
    ),
  },
  {
    id: 5,
    title: L("Orchard Kitchen Garden", "Kopsht Perimesh me Pemëtore"),
    category: "garden-design",
    location: "Hillsboro, OR",
    image: img("photo-1461354464878-ad92f492a5a0"),
    description: L(
      "Raised beds, espaliered fruit trees and a greenhouse — a productive garden designed for a family of keen cooks.",
      "Lehe të ngritura, pemë frutore espalier dhe një serë — një kopsht prodhues i dizajnuar për një familje kuzhinierësh të pasionuar."
    ),
  },
  {
    id: 6,
    title: L("Tech HQ Green Offices", "Zyra të Gjelbra për një Kompani Teknologjie"),
    category: "interior-plants",
    location: "Portland, OR",
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
