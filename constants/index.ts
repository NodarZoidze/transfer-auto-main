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
    transportType: "სედანი",
    text: "დროული მიწოდება რეალურ დროში თვალყურის დევნება თქვენი სიმშვიდისთვის",
    image: "/assets/sedan.png",
    styles: { bg: "#D7F5E5" },
  },
  {
    id: 2,
    transportType: "მოტოციკლი",
    text: "დროული მიწოდება რეალურ დროში თვალყურის დევნება თქვენი სიმშვიდისთვის",
    image: "/assets/motorcycle.png",
    styles: { bg: "#EEE1FE" },
  },
  {
    id: 3,
    transportType: "ჯიპი",
    text: "დროული მიწოდება რეალურ დროში თვალყურის დევნება თქვენი სიმშვიდისთვის",
    image: "/assets/jeep.png",
    styles: { bg: "#FFE9E3" },
  },
  {
    id: 4,
    transportType: "ფურგონი",
    text: "დროული მიწოდება რეალურ დროში თვალყურის დევნება თქვენი სიმშვიდისთვის",
    image: "/assets/van.png",
    styles: { bg: "#E5F0FF" },
  },
];

export const contactOptions = [
  {
    title: "მოგვწერეთ",
    description: "ესაუბრეთ ჩვენს მეგობრულ გუნდს.",
    contactInfo: "info@transferauto.ge",
    icon: "/assets/mail.png", // Replace with actual icon path
  },
  {
    title: "გვეწვიეთ",
    description: "ეწვიეთ ჩვენს ოფისს.",
    contactInfo: "123 Transport Street Tbilisi, Georgia",
    icon: "/assets/location.png", // Replace with actual icon path
  },
  {
    title: "დაგვირეკეთ",
    description: "ორშ-პარ 8:00 - 17:00",
    contactInfo: "+1 (555) 000-0000",
    icon: "/assets/phone.png", // Replace with actual icon path
  },
];

export const whyUsOptions = [
  {
    title: "სწრაფი და საიმედო",
    description: "დროული მიწოდება რეალურ დროში.",
    icon: "/assets/calendar.png",
    bgColor: "#EEE1FE",
  },
  {
    title: "უსაფრთხო და საიმედო",
    description: "ჩვენი ტრანსპორტი ყოველთვის უსაფრთხოა.",
    icon: "/assets/safe.png",
    bgColor: "#E5F0FF",
  },
  {
    title: "კონკურენტული ფასები",
    description: "ჩვენ გთავაზობთ საუკეთესო ფასებს.",
    icon: "/assets/money.png",
    bgColor: "#D7F5E5",
  },
  {
    title: "მეგობრული გუნდი",
    description: "ჩვენი გუნდი მუდამ მზადაა დაეხმაროს.",
    icon: "/assets/people.png",
    bgColor: "#FFE9E3",
  },
];

export const transports = [
  {
    id: "sedan",
    label: "სედანი",
    desc: "ოთხი კარები და განახლებული სალონი",
    icon: "/assets/sedan.png",
  },
  {
    id: "jeep",
    label: "ჯიპი",
    desc: "ოთხი კარები და განახლებული სალონი",
    icon: "/assets/jeep.png",
  },
  {
    id: "motorcycle",
    label: "მოტოციკლი",
    desc: "ოთხი კარები და განახლებული სალონი",
    icon: "/assets/motorcycle.png",
  },
  {
    id: "furgon",
    label: "ფურგონი",
    desc: "ოთხი კარები და განახლებული სალონი",
    icon: "/assets/van.png",
  },
];

export const directions = [
  {
    id: 1,
    from: "ფოთი",
    to: "თბილისი",
    distance: 350,
  },
  {
    id: 2,
    from: "ქუთაისი",
    to: "თბილისი",
    distance: 350,
  },
  {
    id: 3,
    from: "ფოთი",
    to: "ქუთაისი",
    distance: 350,
  },
  {
    id: 4,
    from: "გორი",
    to: "თბილისი",
    distance: 350,
  },
];
