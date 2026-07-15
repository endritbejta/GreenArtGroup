const portrait = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=500&h=600&q=80`;

export const team = [
  {
    id: 1,
    name: "Kenneth Allen",
    role: "Senior Landscape Expert",
    image: portrait("photo-1500648767791-00dcc994a43e"),
  },
  {
    id: 2,
    name: "Paula Mora",
    role: "Landscape Designer",
    image: portrait("photo-1494790108377-be9c29b29330"),
  },
  {
    id: 3,
    name: "Alex Buckmaster",
    role: "Design Specialist",
    image: portrait("photo-1507003211169-0a1dd7228f2d"),
  },
  {
    id: 4,
    name: "Frances Swann",
    role: "Horticultural Consultant",
    image: portrait("photo-1534528741775-53994a69daeb"),
  },
  {
    id: 5,
    name: "Marcus Reed",
    role: "Certified Arborist",
    image: portrait("photo-1506794778202-cad84cf45f1d"),
  },
  {
    id: 6,
    name: "Lena Ortiz",
    role: "Interior Plant Stylist",
    image: portrait("photo-1544005313-94ddf0286df2"),
  },
];
