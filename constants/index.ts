export const navLinks = [
  { label: "Home", href: "home", id: "home" },
  { label: "Services", href: "services", id: "services" },
  { label: "Routes", href: "directions", id: "routes" },
  { label: "Why Us", href: "why-us", id: "whyUs" },
  { label: "Contact", href: "contact", id: "contact" },
];

export const transportOptions = [
  {
    id: 1,
    transportType: "Sedan",
    text: "Standard car – ideal for personal or family vehicles",
    image: "/assets/sedan.png",
    styles: { bg: "#D7F5E5" },
  },
  {
    id: 2,
    transportType: "Motorcycle",
    text: "Two-wheeled vehicles, handled with secure equipment",
    image: "/assets/motorcycle.png",
    styles: { bg: "#EEE1FE" },
  },
  {
    id: 3,
    transportType: "Suv",
    text: "Larger vehicles with more space or off-road capability",
    image: "/assets/jeep.png",
    styles: { bg: "#FFE9E3" },
  },
  {
    id: 4,
    transportType: "Van",
    text: "Commercial or multi-passenger transport vehicles",
    image: "/assets/van.png",
    styles: { bg: "#E5F0FF" },
  },
];

export const contactOptions = [
  {
    title: "Email Us",
    description: "Send us your inquiry — we’ll respond within one business day",
    contactInfo: "info@transferauto.ge",
    icon: "/assets/mail.png", // Replace with actual icon path
  },
  {
    title: "Visit Us",
    description: "Our office is open for appointments",
    contactInfo: "Tbilisi, Georgia",
    icon: "/assets/location.png", // Replace with actual icon path
  },
  {
    title: "Call Us",
    description: "We’re available 24/7",
    contactInfo: "+995 (511) 10 48 85",
    icon: "/assets/phone.png", // Replace with actual icon path
  },
];

export const whyUsOptions = [
  {
    title: "Trusted by car buyers, dealers & importers",
    description: "We’ve built long-term trust with thousands of customers — from individuals importing vehicles to major auto dealers",
    icon: "/assets/calendar.png",
    bgColor: "#EEE1FE",
  },
  {
    title: "Transparent pricing, no hidden fees",
    description: "Know what you’re paying for. Our quotes include everything — no surprise charges, ever",
    icon: "/assets/safe.png",
    bgColor: "#E5F0FF",
  },
  {
    title: "Real-time updates on delivery status",
    description: "Track your car every step of the way with our live delivery tracking system",
    icon: "/assets/money.png",
    bgColor: "#D7F5E5",
  },
  {
    title: "Experienced drivers and logistics team",
    description: "Your car is in good hands — driven by professionals, handled by experts, and delivered with care",
    icon: "/assets/people.png",
    bgColor: "#FFE9E3",
  },
];

export const transports = [
  {
    id: "sedan",
    label: "Sedan",
    desc: "Your car is in good hands — driven by professionals, handled by experts, and delivered with care",
    icon: "/assets/sedan.png",
  },
  {
    id: "jeep",
    label: "Suv",
    desc: "Larger vehicles with more space or off-road capability",
    icon: "/assets/jeep.png",
  },
  {
    id: "motorcycle",
    label: "Motorcycle",
    desc: "Two-wheeled vehicles, handled with secure equipment",
    icon: "/assets/motorcycle.png",
  },
  {
    id: "furgon",
    label: "Van",
    desc: "Commercial or multi-passenger transport vehicles",
    icon: "/assets/van.png",
  },
];

export const directions = [
  {
    id: 1,
    from: "Poti",
    to: "Tbilisi",
    distance: 300,
  },
  {
    id: 2,
    from: "Poti",
    to: "Batumi",
    distance: 70,
  },
  {
    id: 3,
    from: "Batumi",
    to: "Tbilisi",
    distance: 350,
  },
  {
    id: 4,
    from: "A",
    to: "B",
    distance: 0,
  },
];
