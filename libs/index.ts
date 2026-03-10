import { Briefcase, Clock, Users } from "lucide-react";

//Navbar Links Configuration
export const navLinks = [
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about-us" },
  { name: "Blog", href: "/" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
];

// Footer Links Configuration
export const footerLinks = [
  {
    header: "Quick Links",
    links: [
      {
        title: "Our Services",
        href: "/services",
      },
      {
        title: "About Us",
        href: "/about-us",
      },
      {
        title: "FAQ",
        href: "/services#faq",
      },
      {
        title: "Blog",
        href: "/",
      },
      {
        title: "Career",
        href: "/career",
      },
    ],
  },
  {
    header: "Our Services",
    links: [
      {
        title: "In-Home Care",
        href: "/services#services",
      },
      {
        title: "Personal Care",
        href: "/services#services",
      },
      {
        title: "Medication Support",
        href: "/services#services",
      },
      {
        title: "Companionship",
        href: "/services#services",
      },
      {
        title: "Mobility Support",
        href: "/services#services",
      },
      {
        title: "Respite Care",
        href: "/services#services",
      },
    ],
  },
  {
    header: "Contact",
    links: [
      {
        title: "Contact Us",
        href: "/contact",
      },
      {
        title: "Book a Visit",
        href: "/contact",
      },
      {
        title: "Emergency Care",
        href: "/contact",
      },
    ],
  },
];

// Testimonial Contents
export const testimonialContent = [
  {
    content:
      "The caregivers have been an absolute blessing to our family. They handle every situation with grace, patience, and true professionalism. Highly recommended for better care.",
    name: "Morgan Kaplan",
  },
  {
    content:
      "Moving to home care was a big step, but Ebonics made the transition seamless. We have peace of mind knowing our father is safe an happy in his own environment.",
    name: "Richard Roe",
  },
  {
    content:
      "The care felt personal, not rushed. Our caregiver treated my mother with real kindness and respect. It's rare to find an agency that genuinely cares this much.",
    name: "Diane Lawson",
  },
];

// Process Step
export const processSteps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "We start by understanding your loved one’s unique needs, daily routines, and medical requirements in a no-obligation meeting.",
  },
  {
    number: "02",
    title: "Custom Care Plan",
    description:
      "Our experts design a personalized care plan tailored specifically for safety, comfort, and maintaining independence.",
  },
  {
    number: "03",
    title: "Match & Support",
    description:
      "We pair you with a compassionate, vetted caregiver and provide ongoing support to ensure the highest quality of care.",
  },
];

// Services Hero Slides Configuration
export const servicesHeroSlides = [
  {
    id: 1,
    title: "Compassionate Care",
    subtitle: "When you need it most",
    description:
      "Our comprehensive care services are designed to meet your unique needs with compassion and professionalism.",
    image: "/img/ebonics-caregiver-2.jpg",
    primaryButton: "Get Started",
    path: "/contact",
  },
  {
    id: 2,
    title: "24/7 Support",
    subtitle: "Always here for you",
    description:
      "We provide continuous care and support to ensure your loved ones are never alone and always safe.",
    image: "/img/ebonics-caregiver-3.jpg",
    primaryButton: "Schedule Care",
    path: "/contact",
  },
  {
    id: 3,
    title: "Personalized Care",
    subtitle: "Tailored to your needs",
    description:
      "Our caregivers provide not just assistance, but friendship and emotional support to enhance quality of life.",
    image: "/img/ebonics-caregiver-4.jpg",
    primaryButton: "Contact Us",
    path: "/contact",
  },
  {
    id: 4,
    title: "Expert Caregivers",
    subtitle: "Trusted professionals",
    description:
      "From dementia care to post-surgery recovery, we offer specialized services for every situation.",
    image: "/img/ebonics-caregiver-5.jpg",
    primaryButton: "Custom Plan",
    path: "/contact",
  },
];

// Services List Configuration
export const servicesList = [
  {
    id: 1,
    title: "In-Home Care Services",
    description:
      "Professional caregivers provide comprehensive support in the comfort of your home, ensuring safety, comfort, and personalized attention for daily living activities.",
    images: ["/img/ebonics-caregiver-6.jpg", "/img/ebonics-caregiver-7.jpg"],
  },
  {
    id: 2,
    title: "Personal Care & Assistance",
    description:
      "Dedicated support with personal hygiene, mobility assistance, medication reminders, and daily living activities to maintain independence and dignity.",
    images: ["/img/ebonics-caregiver-8.jpg", "/img/ebonics-caregiver-9.jpg"],
  },
  {
    id: 3,
    title: "Medication Support & Management",
    description:
      "Experienced caregivers ensure proper medication administration, timing, and monitoring to maintain health and prevent complications.",
    images: ["/img/ebonics-caregiver-10.jpg", "/img/ebonics-caregiver-11.jpg"],
  },
  {
    id: 4,
    title: "Companionship & Emotional Support",
    description:
      "Compassionate caregivers provide friendship, conversation, and emotional support to combat loneliness and enhance mental well-being.",
    images: ["/img/ebonics-caregiver-12.jpg", "/img/ebonics-caregiver-13.jpg"],
  },
  {
    id: 5,
    title: "Mobility Support & Safety",
    description:
      "Specialized assistance with walking, transfers, fall prevention, and home safety modifications to ensure secure movement.",
    images: ["/img/ebonics-caregiver-14.jpg", "/img/ebonics-caregiver-15.jpg"],
  },
  {
    id: 6,
    title: "Respite Care Services",
    description:
      "Temporary professional care giving family caregivers a break while ensuring their loved ones receive quality, compassionate support.",
    images: ["/img/ebonics-caregiver-2.jpg", "/img/ebonics-caregiver-3.jpg"],
  },
];

//Service FAQ Configuration
export const servicesFAQs = [
  {
    question: "What types of care services do you offer?",
    answer:
      "We offer comprehensive care services including personal care, companionship, elderly care, post-hospital care, nursing support, childcare, hospital escort, housekeeping, postpartum care, specialized abilities care, and driver services.",
  },
  {
    question: "How do I know which care service is right for my family?",
    answer:
      "We start with a free consultation to understand your specific needs, daily routines, and health requirements. Our experts then recommend the most suitable care plan tailored to your situation.",
  },
  {
    question: "Are your caregivers trained and certified?",
    answer:
      "Yes, all our caregivers undergo rigorous training, background checks, and certification processes. They are experienced professionals dedicated to providing compassionate, reliable care.",
  },
  {
    question: "Can care services be customized to our schedule?",
    answer:
      "Absolutely! We create flexible care plans that adapt to your schedule, whether you need 24/7 support, part-time care, or occasional assistance. Your routine determines our service timing.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We provide care services throughout the local metropolitan area. Contact us to confirm availability in your specific location, as we're continuously expanding our service areas.",
  },
  {
    question: "How do you ensure quality and consistency?",
    answer:
      "We maintain high standards through regular caregiver training, client feedback systems, and quality assurance checks. Each care plan includes ongoing supervision and support coordination.",
  },
];

// Career FAQ Configuration
export const careerFAQs = [
  {
    question: "What qualifications do I need to become a caregiver?",
    answer:
      "We look for compassionate individuals with experience in caregiving. While formal certifications are valued, we also provide comprehensive training to qualified candidates. Most importantly, we seek people with genuine passion for helping others.",
  },
  {
    question: "What kind of training do you provide?",
    answer:
      "We offer extensive on-the-job training, professional development workshops, and continuing education opportunities. Our training covers everything from specialized care techniques to communication skills and emergency response protocols.",
  },
  {
    question: "How flexible are the work schedules?",
    answer:
      "We understand the importance of work-life balance. We offer various scheduling options including full-time, part-time, weekend, and live-in positions. Our goal is to accommodate both your needs and our clients' requirements.",
  },
  {
    question: "What opportunities for career growth are available?",
    answer:
      "CareBridge provides clear pathways for advancement. From senior caregiver positions to care coordination roles, we support your professional growth. Many of our team leaders started as caregivers and advanced within the organization.",
  },
  {
    question: "What benefits do you offer?",
    answer:
      "We provide competitive compensation, comprehensive health insurance, paid time off, and retirement plans. Additionally, we offer ongoing education support and wellness programs to ensure your overall well-being.",
  },
  {
    question: "How do you support work-life balance?",
    answer:
      "We believe in supporting our team members both inside and outside of work. This includes flexible scheduling, family support resources, and creating a positive work environment where you can thrive both personally and professionally.",
  },
];

// Work With Us Cards Configuration
export const workWithUsCards = [
  {
    icon: Briefcase,
    title: "Competitive compensation",
    desc: "We pay fairly for the meaningful work you do every day",
    button: "Learn",
    large: true,
  },
  {
    icon: Clock,
    title: "Schedules built around your life",
    desc: "Choose shifts that fit your needs and commitments",
  },
  {
    icon: Users,
    title: "A team that has your back",
    desc: "Support, training, and respect from colleagues who care",
  },
];

// Contact Information Configuration
export const contactInfo = [
  {
    title: "Contact",
    content: "(+234) 9039746329",
  },
  {
    title: "Email",
    content: "ebonicshomecareservices98@gmail.com",
  },
  {
    title: "Location",
    content: "M5 HADEJA STREET/IBRAHIM TAIWO RD KADUNA, KADUNA STATE",
  },
];

// Navigation Links Configuration
export const navigationLinks = [
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about-us" },
  { name: "Blog", href: "/" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
];
