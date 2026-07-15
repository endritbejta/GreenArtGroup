const img = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const projects = [
  {
    id: 1,
    title: "Hillside Family Garden",
    category: "Garden Design",
    location: "Lake Oswego, OR",
    image: img("photo-1466692476868-aef1dfb1e735"),
    description:
      "A steep, unusable slope terraced into three garden rooms with native planting, a play lawn and an outdoor dining terrace.",
  },
  {
    id: 2,
    title: "Modern Courtyard Retreat",
    category: "Landscaping",
    location: "Portland, OR",
    image: img("photo-1600585154340-be6161a56a0c"),
    description:
      "Full courtyard rebuild with porcelain paving, architectural planting and integrated lighting for year-round evening use.",
  },
  {
    id: 3,
    title: "Riverside Office Campus",
    category: "Commercial",
    location: "Vancouver, WA",
    image: img("photo-1444392061186-9fc38f84f726"),
    description:
      "Streetscape trees, rain gardens and a rooftop terrace planted for pollinators across a three-building campus.",
  },
  {
    id: 4,
    title: "Heritage Lawn Restoration",
    category: "Lawn Care",
    location: "Salem, OR",
    image: img("photo-1568605114967-8130f3a36994"),
    description:
      "A century-old estate lawn brought back from drought damage with aeration, overseeding and a smart irrigation retrofit.",
  },
  {
    id: 5,
    title: "Boutique Hotel Plantscape",
    category: "Interior Plants",
    location: "Portland, OR",
    image: img("photo-1470058869958-2a77ade41c02"),
    description:
      "Lobby green wall, statement specimen trees and guest-floor planting with a weekly care program.",
  },
  {
    id: 6,
    title: "Orchard Kitchen Garden",
    category: "Garden Design",
    location: "Hillsboro, OR",
    image: img("photo-1461354464878-ad92f492a5a0"),
    description:
      "Raised beds, espaliered fruit trees and a greenhouse — a productive garden designed for a family of keen cooks.",
  },
  {
    id: 7,
    title: "Creekside Native Landscape",
    category: "Landscaping",
    location: "Beaverton, OR",
    image: img("photo-1441974231531-c6227db76b6e"),
    description:
      "Erosion control and native re-planting along 300 feet of creek frontage, with a boardwalk path through the trees.",
  },
  {
    id: 8,
    title: "Tech HQ Green Offices",
    category: "Interior Plants",
    location: "Portland, OR",
    image: img("photo-1485955900006-10f4d324d411"),
    description:
      "Two hundred rental plants across four floors, with acoustic planting dividers and a monthly rotation program.",
  },
];

export const projectCategories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];
