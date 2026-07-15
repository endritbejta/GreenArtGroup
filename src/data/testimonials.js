const avatar = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=150&h=150&q=80`;

export const testimonials = [
  {
    id: 1,
    name: "Joshua Jones",
    role: "Homeowner, Portland",
    rating: 5,
    avatar: avatar("photo-1500648767791-00dcc994a43e"),
    quote:
      "From the first site visit I knew we were in good hands. The design was beautiful, the crew was meticulous, and the garden has completely changed how we use our home.",
  },
  {
    id: 2,
    name: "Kenneth Allen",
    role: "Facilities Manager",
    rating: 5,
    avatar: avatar("photo-1507003211169-0a1dd7228f2d"),
    quote:
      "Their office plant rental program is effortless. The plants always look immaculate, and the team handles everything — we genuinely never think about it.",
  },
  {
    id: 3,
    name: "Judith Rodriguez",
    role: "Homeowner, Lake Oswego",
    rating: 5,
    avatar: avatar("photo-1494790108377-be9c29b29330"),
    quote:
      "I never knew how much a garden could change a space until GreenArt rebuilt ours. Every plant arrived healthy, the finish is outstanding, and the aftercare has been superb.",
  },
  {
    id: 4,
    name: "Sarah Mitchell",
    role: "Restaurant Owner",
    rating: 5,
    avatar: avatar("photo-1438761681033-6461ffad8d80"),
    quote:
      "Our courtyard dining area went from an afterthought to the most requested seating in the restaurant. Worth every cent.",
  },
  {
    id: 5,
    name: "David Chen",
    role: "Property Developer",
    rating: 4,
    avatar: avatar("photo-1472099645785-5658abf4ff4e"),
    quote:
      "Reliable at commercial scale — they hit every milestone on a tight program and the planting established beautifully. We've signed them for the next phase.",
  },
  {
    id: 6,
    name: "Emily Watson",
    role: "Homeowner, Beaverton",
    rating: 5,
    avatar: avatar("photo-1544005313-94ddf0286df2"),
    quote:
      "The seasonal maintenance plan means our garden always looks cared for, whatever the month. The same friendly crew every visit, and they clearly love what they do.",
  },
];
