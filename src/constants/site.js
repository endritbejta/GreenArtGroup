import { L } from "../utils/localize";

export const SITE = {
  name: "GreenArt Group",
  phone: "+1 (555) 234-7890",
  email: "hello@greenartgroup.com",
  address: "789 Garden Lane, Portland, OR 97201",
  mapQuery: "Portland, OR",
  hours: [
    {
      days: L("Monday – Friday", "E Hënë – E Premte"),
      time: "8:00 AM – 6:00 PM",
    },
    { days: L("Saturday", "E Shtunë"), time: "9:00 AM – 4:00 PM" },
    { days: L("Sunday", "E Diel"), time: L("Closed", "Mbyllur") },
  ],
  socials: [
    { name: "Facebook", icon: "facebook", href: "https://facebook.com" },
    { name: "Instagram", icon: "instagram", href: "https://instagram.com" },
    { name: "X (Twitter)", icon: "twitter", href: "https://x.com" },
    { name: "LinkedIn", icon: "linkedin", href: "https://linkedin.com" },
  ],
};

/** Nav items; labels resolve through the `nav.*` translation keys. */
export const NAV_LINKS = [
  { key: "home", to: "/" },
  { key: "about", to: "/about" },
  { key: "services", to: "/services" },
  { key: "projects", to: "/projects" },
  { key: "contact", to: "/contact" },
];
