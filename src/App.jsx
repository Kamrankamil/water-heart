import { useEffect, useMemo, useState } from 'react';
import AOS from 'aos';
import {
  Award,
  Baby,
  Building2,
  Camera,
  CirclePlay,
  CircleDollarSign,
  Droplets,
  Filter,
  Globe,
  GlassWater,
  Headset,
  Home,
  Image as ImageIcon,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sun,
  TestTubeDiagonal,
  ThumbsUp,
  Truck
} from 'lucide-react';
import 'aos/dist/aos.css';

const containerClass = 'mx-auto w-full max-w-[1600px] px-4 sm:px-6 xl:px-10';
const sectionKickerClass = 'font-display text-xs font-extrabold uppercase tracking-[0.22em] text-[#1565ff]';
const sectionTitleClass = 'font-display text-3xl font-extrabold tracking-[-0.04em] text-[#12316e] sm:text-4xl';
const softCardClass = 'h-full rounded-[28px] border border-[#d9e7ff] bg-white/95 shadow-[0_18px_40px_rgba(27,81,170,0.08)]';
const inputClass =
  'rounded-[18px] border border-[#d9e7ff] bg-[#f8fbff] px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#1565ff] focus:bg-white focus:ring-4 focus:ring-[#1565ff]/10';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact Us', href: '#contact' }
];

const heroFeatures = [
  { icon: Droplets, label: '100% Pure Water' },
  { icon: ShieldCheck, label: 'Quality Tested' },
  { icon: Truck, label: 'Fast Delivery' },
  { icon: CircleDollarSign, label: 'Affordable Prices' }
];

const offerCards = [
  { icon: Droplets, title: 'Clean Purified Water', text: 'Multi-stage purification for clean and reliable daily hydration.' },
  { icon: Building2, title: 'Water for Offices', text: 'Reliable scheduled water supply for offices and institutions.' },
  { icon: Home, title: 'Water for Homes', text: 'Safe mineral water delivered at your doorstep.' },
  { icon: GlassWater, title: 'Water Filling', text: 'Hygienic bottle and gallon filling with strict quality checks.' },
  { icon: Baby, title: 'Water for Infants & Children', text: 'Balanced minerals for safer hydration for little ones.' },
  { icon: Truck, title: 'Water Gallon Delivery', text: 'Fast and dependable delivery supported by optimized routes.' },
  { icon: Award, title: 'Water Heart 2.0 Halaal Water', text: 'Pakistan\'s first Halaal certified premium mineral water brand.' }
];

const processSteps = [
  {
    icon: Filter,
    title: 'Filtration',
    text: 'Raw water passes through sediment and carbon filtration systems.',
    image: '/assets/galleryimage2old.png'
  },
  {
    icon: Droplets,
    title: 'RO Purification',
    text: 'Advanced RO membrane technology removes impurities and bacteria.',
    image: '/assets/galleryimage6.png'
  },
  {
    icon: Sun,
    title: 'UV Sterilization',
    text: 'UV sterilization and mineral balancing ensure healthy drinking water.',
    image: '/assets/galleryimage1.png'
  },
  {
    icon: GlassWater,
    title: 'Bottle Filling',
    text: 'Hygienic bottle filling and quality testing before delivery.',
    image: '/assets/galleryimage4.png'
  }
];

const visionCards = [
  { icon: 'fa-chart-line', title: 'IPO at Karachi Stock Exchange', text: 'A transparent growth roadmap with strong governance and compliance.' },
  { icon: 'fa-map-location-dot', title: 'Nationwide Expansion', text: 'Expansion beyond Karachi to all major cities through phased growth.' },
  { icon: 'fa-hand-holding-heart', title: 'Healthy Pakistan Mission', text: 'Promoting safer hydration and stronger communities with pure water.' }
];

const compareRows = [
  ['Purity Level', 'Advanced Japanese Multi-Stage', 'Standard Filtration'],
  ['Taste', 'Balanced, Sweet & Light', 'Variable and inconsistent'],
  ['Safety Testing', 'Routine Lab Verification', 'Not always transparent'],
  ['Mineral Profile', 'Health-focused balancing', 'Often uncontrolled']
];

const gallery = [
  { image: '/assets/galleryimage1.png', title: 'Customers Waiting in Line' },
  { image: '/assets/galleryimage2old.png', title: 'Serving Our Valued Customers' },
  { image: '/assets/gallery-3.png', title: 'Advanced RO Filtration System' },
  { image: '/assets/galleryimage4.png', title: 'Bottle Filling Process' },
  { image: '/assets/galleryimage5.png', title: 'Pure Water, Healthy Life' },
  { image: '/assets/galleryimage6.png', title: 'Clean & Hygienic Water Plant' },
  { image: '/assets/galleryimage7.png', title: 'Healthy Water, Healthy Family' },
  { image: '/assets/galleryimage8.png', title: 'Home Delivery & Reliable Service' }
];

const galleryHighlights = [
  { icon: Droplets, title: '100% Pure', subtitle: '& Safe Water' },
  { icon: ShieldCheck, title: 'Advanced', subtitle: 'Purification' },
  { icon: TestTubeDiagonal, title: 'Healthy', subtitle: 'Minerals' },
  { icon: ThumbsUp, title: 'Better', subtitle: 'Taste' },
  { icon: Award, title: 'Quality You Can', subtitle: 'Trust' }
];

const contactItems = [
  { icon: Phone, text: '+92 315 8509804' },
  { icon: Mail, text: 'info@water-heart.vercel.app' },
  { icon: Globe, text: 'https://water-heart.vercel.app/' },
  { icon: MapPin, text: 'Karachi, Sindh, Pakistan' },
  { icon: Sun, text: 'Mon-Sat: 8:00 AM - 10:00 PM' }
];

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Our Quality', href: '#quality' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact Us', href: '#contact' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const counters = useMemo(() => [
    { target: 32, suffix: '+' },
    { target: 3, suffix: '+' },
    { target: 100, suffix: '%' }
  ], []);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 40, easing: 'ease-out-cubic' });
    const loadTimer = setTimeout(() => setIsLoaded(true), 650);
    const onScroll = () => setHeaderScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => {
      clearTimeout(loadTimer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      event.target.reset();
      setSubmitted(false);
    }, 1600);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <div
        aria-label="Loading website"
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-[linear-gradient(135deg,#031f59_0%,#0a3a7a_100%)] transition-all duration-500 ${isLoaded ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
      >
        <div className="flex flex-col items-center gap-6 text-center text-white">
          <div className="mb-2">
            <img
              src="/assets/Water Heart 5-liter jug with condensation.png"
              alt="Water Heart bottle"
              className="h-24 w-auto object-contain drop-shadow-[0_12px_24px_rgba(57,176,255,0.4)]"
            />
          </div>

          <div>
            <h2 className="font-display text-2xl font-black tracking-[-0.02em] text-white">
              Water Heart
            </h2>
            <p className="mt-1 font-display text-xs font-bold uppercase tracking-[0.14em] text-[#bfe1ff]">
              Pure • Hygienic • Healthy
            </p>
          </div>

          <div className="flex items-center gap-2">
            {[0, 150, 300].map((delay) => (
              <span
                key={delay}
                className="h-3 w-3 animate-bounce rounded-full bg-[#56b7ff]"
                style={{ animationDelay: `${delay}ms` }}
              />
            ))}
          </div>

          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-[#bfe1ff]">
            Purifying Your Experience...
          </p>

          <p className="mt-3 max-w-xs text-xs leading-5 text-[#a8d4ff]">
            Japan's Premium Mineral Water Coming to Pakistan
          </p>
        </div>
      </div>

      <a
        href="https://wa.me/923158509804"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-xl text-white shadow-[0_18px_36px_rgba(37,211,102,0.35)] transition hover:-translate-y-1"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${headerScrolled ? 'border-slate-200/80 bg-white/92 shadow-[0_10px_30px_rgba(15,41,84,0.08)] backdrop-blur-xl' : 'border-transparent bg-white/90'}`}
      >
        <div className={containerClass}>
          <nav className="flex items-center justify-between gap-4 py-3">
            <a href="#home" className="flex items-center gap-3 text-slate-900">
              <img src="/assets/logo.png" alt="Water Heart logo" className="h-10 w-10 rounded-full object-contain" />
              <div>
                <h1 className="font-display text-[0.95rem] font-extrabold uppercase leading-none tracking-[0.04em] text-[#0f2a63]">
                  Water Heart
                </h1>
                <p className="mt-1 text-[0.7rem] font-medium text-[#2d62be]">Drink It Clean &amp; Hygienic</p>
              </div>
            </a>

            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d9e7ff] text-lg text-[#1565ff] lg:hidden"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>

            <ul className="hidden items-center gap-8 text-[0.78rem] font-bold uppercase tracking-[0.08em] text-[#13316a] lg:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition hover:text-[#1565ff]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="tel:+923158509804"
              className="hidden items-center gap-2 rounded-full bg-[#1565ff] px-6 py-3 font-display text-[0.9rem] font-bold text-white shadow-[0_16px_34px_rgba(21,101,255,0.28)] transition hover:-translate-y-0.5 lg:inline-flex"
            >
              <i className="fa-solid fa-phone"></i>
              +92 315 8509804
            </a>
          </nav>

          {menuOpen && (
            <div className="mb-3 rounded-[24px] border border-[#d9e7ff] bg-white p-4 shadow-[0_20px_40px_rgba(18,49,110,0.08)] lg:hidden">
              <ul className="space-y-2 text-sm font-bold uppercase tracking-[0.08em] text-[#13316a]">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block rounded-2xl px-3 py-2 transition hover:bg-[#eff5ff] hover:text-[#1565ff]"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="tel:+923158509804"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1565ff] px-4 py-3 font-display font-bold text-white"
                  >
                    <i className="fa-solid fa-phone"></i>
                    +92 315 8509804
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <main className="overflow-hidden">
        <section
          id="home"
          className="relative overflow-hidden pb-10 pt-28 md:pt-32 lg:pt-36"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.96) 24%, rgba(255,255,255,0.72) 41%, rgba(255,255,255,0.12) 60%, rgba(255,255,255,0) 71%), url('/assets/hero image water heart.png')",
            backgroundSize: 'cover',
            backgroundPosition: '72% center'
          }}
        >
          <div className={containerClass}>
            <div className="grid min-h-[66vh] items-center gap-8 md:min-h-[72vh] lg:min-h-[78vh] lg:grid-cols-12">
              <div className="lg:col-span-6 xl:col-span-5" data-aos="fade-right">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#dbe9ff] px-5 py-3 font-display text-sm font-bold text-[#1565ff] shadow-[0_14px_30px_rgba(21,101,255,0.08)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#1565ff] to-[#39b0ff]"></span>
                  Premium Hygienic Water
                </span>

                <h2 className="mt-6 font-display text-[clamp(2.8rem,8vw,5.5rem)] font-black uppercase leading-[0.95] tracking-[-0.06em] text-[#12316e]">
                  Pure Water
                  <span className="block text-[#1565ff]">Healthy Life</span>
                </h2>

                <div className="mt-5 flex items-center gap-3">
                  <div className="h-px w-14 bg-[#245fc7]"></div>
                  <p className="font-display text-[1.05rem] font-bold text-[#163b7b] md:text-[1.2rem]">
                    Drink It Clean &amp; Hygienic
                  </p>
                </div>

                <p className="mt-5 max-w-[620px] text-base leading-8 text-[#4d6d96] md:text-lg">
                  Water Heart provides clean, hygienic and Japanese quality mineral drinking water for a healthier and better life.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="inline-flex min-h-12 min-w-[150px] items-center justify-center rounded-full bg-gradient-to-r from-[#0b63f4] to-[#2b86ff] px-6 py-3 font-display text-sm font-extrabold uppercase tracking-[0.04em] text-white shadow-[0_16px_34px_rgba(21,101,255,0.28)] transition hover:-translate-y-0.5"
                  >
                    Order Now
                  </a>
                  <a
                    href="#about"
                    className="inline-flex min-h-12 min-w-[160px] items-center justify-center gap-2 rounded-full border border-[#2f74ea] bg-white/92 px-6 py-3 font-display text-sm font-extrabold uppercase tracking-[0.04em] text-[#0b63f4] transition hover:bg-white"
                  >
                    Learn More
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
                  {heroFeatures.map((feature) => {
                    const FeatureIcon = feature.icon;

                    return (
                      <div
                        key={feature.label}
                        className="flex min-h-[82px] flex-col items-center justify-center gap-2 rounded-[16px] border border-[#dbe7fb] bg-white/92 px-2 py-3 text-center shadow-[0_14px_28px_rgba(23,73,151,0.08)] md:min-h-[86px] md:rounded-[18px] md:px-3 md:py-4"
                      >
                        <FeatureIcon className="h-4 w-4 text-[#1565ff]" strokeWidth={2.5} />
                        <span className="font-display text-[0.62rem] font-extrabold uppercase leading-[1.2] tracking-[0.02em] text-[#16386f] md:text-[0.7rem]">
                          {feature.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="quality" className="bg-[linear-gradient(135deg,#062763,#0c4fb8)] py-6 md:py-8">
          <div className={containerClass}>
            <div
              data-aos="fade-up"
              className="grid items-center gap-6 rounded-[26px] border border-white/10 bg-[linear-gradient(135deg,rgba(5,31,89,0.95),rgba(18,72,165,0.92))] p-4 md:grid-cols-12 md:p-5"
            >
              <div className="md:col-span-3 lg:col-span-2" data-aos="fade-right">
                <img
                  src="/assets/kidwater.png"
                  alt="Child drinking water"
                  className="h-full w-full rounded-[20px] object-cover"
                />
              </div>

              <div className="md:col-span-5 lg:col-span-5" data-aos="fade-up">
                <p className="text-lg leading-8 text-white md:text-[1.05rem]">
                  Pakistan is a poor water quality country. Under 10 years kids are dead by bad quality well water contaminated by lead metal.
                </p>
              </div>

              <div className="md:col-span-4 lg:col-span-5" data-aos="fade-left">
                <article className="rounded-[22px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <img
                      src="/assets/protection water heart.png"
                      alt="Water protection"
                      className="h-14 w-14 rounded-full border border-white/20 bg-white/10 object-cover p-1"
                    />
                    <div>
                      <h3 className="font-display text-lg font-extrabold uppercase tracking-[0.1em] text-[#ffd34f]">
                        Our Aim
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-white/90 md:text-base">
                        Water Heart aims to protect Pakistan children from dirty water and sickness.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#ffffff,#f4f8ff)] py-12 md:py-16">
          <div className={containerClass}>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <div data-aos="fade-up">
                <article className={`${softCardClass} flex flex-col p-5 text-center`}>
                  <h3 className="border-b-2 border-[#1565ff] pb-3 font-display text-[0.95rem] font-black uppercase tracking-[0.14em] text-[#12316e]">
                    Price Structure
                  </h3>
                  <div className="flex flex-1 items-center justify-center gap-4 py-8">
                    <img
                      src="/assets/Water Heart 5-liter jug with condensation.png"
                      alt="Water Heart 5-gallon jug"
                      className="w-32 object-contain drop-shadow-[0_8px_16px_rgba(0,80,200,0.18)]"
                    />
                    <div className="text-left">
                      <p className="font-display text-base font-extrabold uppercase tracking-[0.14em] text-[#12316e] md:text-lg">5 Gallons</p>
                      <p className="font-display text-2xl font-extrabold leading-none text-[#1565ff] md:text-3xl">
                        Rs.<span className="text-[3.5rem] leading-none md:text-[4.5rem]">120</span>
                      </p>
                    </div>
                  </div>
                  <div className="mx-3 mb-3 rounded-full bg-[#1565ff] px-4 py-3 font-display text-sm font-extrabold uppercase tracking-[0.08em] text-white">
                    From July 2026
                  </div>
                </article>
              </div>

              <div data-aos="fade-up" data-aos-delay="80">
                <article className={`${softCardClass} flex h-full flex-col p-5`}>
                  <h3 className="border-b-2 border-[#1565ff] pb-3 font-display text-[0.95rem] font-black uppercase tracking-[0.12em] leading-[1.4] text-[#12316e]">
                    Japanese Quality
                    <br />
                    Mineral Water
                  </h3>
                  <div className="flex justify-center gap-6 py-5">
                    {[
                      ['/assets/water heart calcium.png', 'Calcium Enriched'],
                      ['/assets/vitamin c water heart.png', 'Vitamin C Added']
                    ].map(([image, label]) => (
                      <div key={label} className="flex flex-col items-center gap-2 text-center">
                        <img
                          src={image}
                          alt={label}
                          className="h-14 w-14 rounded-full border-[2px] border-[#1565ff]/25 object-cover"
                        />
                        <span className="font-display text-[0.63rem] font-extrabold uppercase leading-[1.25] tracking-[0.08em] text-[#12316e]">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm leading-7 text-slate-600">
                    Water Heart is only one Japanese quality mineral water including calcium and Vitamin C.
                  </p>
                </article>
              </div>

              <div data-aos="fade-up" data-aos-delay="130">
                <article className={`${softCardClass} flex h-full flex-col overflow-hidden p-5`}>
                  <h3 className="border-b-2 border-[#1565ff] pb-3 font-display text-[0.95rem] font-black uppercase tracking-[0.14em] text-[#12316e]">
                    Our Services
                  </h3>
                  <ul className="flex flex-1 flex-col pt-3">
                    {[
                      ['fa-house', 'Home Delivery'],
                      ['fa-building', 'Office & Commercial Supply'],
                      ['fa-people-group', 'Events & Functions'],
                      ['fa-droplet', 'Bulk Supply Solutions']
                    ].map(([icon, label], index) => (
                      <li
                        key={label}
                        className={`flex items-center gap-3 py-3 text-[0.95rem] font-semibold text-[#143a75] ${index !== 3 ? 'border-b border-[#e6eefb]' : ''}`}
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eaf3ff] text-sm text-[#1565ff]">
                          <i className={`fa-solid ${icon}`}></i>
                        </span>
                        <span>{label}</span>
                      </li>
                    ))}
                  </ul>
                  <img
                    src="/assets/waterheart truck supply.png"
                    alt="Water Heart delivery truck"
                    className="mt-auto w-[calc(100%+2.5rem)] max-w-none translate-x-[-1.25rem] object-cover"
                  />
                </article>
              </div>

              <div data-aos="fade-up" data-aos-delay="180">
                <article className={`${softCardClass} flex h-full flex-col p-5`}>
                  <h3 className="border-b-2 border-[#1565ff] pb-3 font-display text-[0.95rem] font-black uppercase tracking-[0.14em] leading-[1.4] text-[#12316e]">
                    Why Choose
                    <br />
                    Water Heart?
                  </h3>
                  <ul className="space-y-3 pt-5">
                    {[
                      'Advanced Purification Technology',
                      '100% Hygienic & Safe',
                      'Mineral Enriched Water',
                      'Trusted Quality',
                      'Affordable Price'
                    ].map((item) => (
                      <li key={item} className="flex gap-3 text-[0.95rem] font-semibold leading-6 text-[#143a75]">
                        <i className="fa-solid fa-circle-check mt-0.5 text-base text-[#1565ff]"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-12 md:py-16">
          <div className={containerClass}>
            <SectionIntro kicker="What We Offer" title="Premium Water Services for Every Need" icon={Droplets} />

            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {offerCards.map((card, idx) => {
                const Icon = card.icon;

                return (
                  <div key={card.title} data-aos="fade-up" data-aos-delay={idx * 60}>
                    <article className="h-full rounded-[26px] border border-[#d9e7ff] bg-white p-6 shadow-[0_18px_36px_rgba(27,81,170,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(27,81,170,0.12)]">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0b63f4,#39b0ff)] text-white shadow-[0_16px_30px_rgba(21,101,255,0.25)]">
                        <Icon className="h-7 w-7 text-white" strokeWidth={2.4} />
                      </span>
                    <h4 className="mt-5 font-display text-xl font-extrabold tracking-[-0.03em] text-[#12316e]">
                      {card.title}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-slate-600 md:text-[0.95rem]">{card.text}</p>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#f9fcff,#ffffff)] py-12 md:py-16">
          <div className={containerClass}>
            <div className="mb-12 text-center" data-aos="fade-up">
              <h3 className="font-display text-[1.9rem] font-black uppercase tracking-[-0.02em] text-[#12316e] sm:text-[2.15rem]">
                <Truck className="mr-3 inline h-8 w-8 text-[#1565ff]" strokeWidth={2.4} />
                Our Services
              </h3>
              <div className="mx-auto mt-2 h-[3px] w-14 rounded-full bg-[#1565ff]"></div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: GlassWater,
                  title: 'Drinking Water',
                  description: 'Premium purified drinking water available in multiple bottle sizes.',
                  image: '/assets/Water Heart product trio.png'
                },
                {
                  icon: Truck,
                  title: 'Home Delivery',
                  description: 'Fast and reliable delivery service for homes and offices.',
                  image: '/assets/galleryimage8.png'
                },
                {
                  icon: Building2,
                  title: 'Commercial Supply',
                  description: 'Bulk water supply solutions for businesses and organizations.',
                  image: '/assets/galleryimage4.png'
                }
              ].map((service, idx) => {
                const ServiceIcon = service.icon;

                return (
                  <div key={service.title} data-aos="fade-up" data-aos-delay={idx * 80}>
                    <article className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[#e0e7ff] bg-white shadow-[0_12px_24px_rgba(27,81,170,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(27,81,170,0.12)]">
                      <div className="relative flex h-48 items-center justify-center bg-[#f5f9ff] md:h-56">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0b63f4,#39b0ff)] text-white shadow-[0_12px_24px_rgba(21,101,255,0.25)]">
                          <ServiceIcon className="h-6 w-6 text-white" strokeWidth={2.4} />
                        </div>
                        <h4 className="mt-4 font-display text-lg font-black uppercase tracking-[-0.02em] text-[#1565ff]">
                          {service.title}
                        </h4>
                        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 md:text-[0.95rem]">
                          {service.description}
                        </p>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

       <section id="investors" className="relative overflow-hidden py-0">
          <div className="absolute inset-0">
            <img
              src="/assets/water heat Clean water, growth, and purity.png"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-[86%_center]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,43,108,0.95)_0%,rgba(6,56,142,0.93)_41%,rgba(8,82,188,0.62)_67%,rgba(8,95,206,0.18)_100%)]"></div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1800px]">
            <div className="grid min-h-[380px] lg:grid-cols-[1fr_260px]">
              <div className="px-5 py-8 sm:px-8 lg:border-r lg:border-white/15 lg:px-14" data-aos="fade-right">
                <h3 className="inline-block bg-[#1b5cd8] px-2 font-display text-[1.85rem] font-black uppercase leading-none tracking-[-0.03em] text-white sm:text-[2.5rem] lg:text-[3.1rem]">
                  <CircleDollarSign className="mr-2 inline h-8 w-8 text-[#ffd34f]" strokeWidth={2.4} />
                  Fund Injection Plan
                </h3>
                <p className="mt-4 max-w-[760px] text-[0.9rem] leading-7 text-[#d6e7ff] sm:mt-6 sm:text-[1.02rem] sm:leading-8">
                  Inject fund this amount of fund to Water Heart to expand multiple location of shops and arrange franchisee shop chain in Karachi up to 50 shops by 2028.
                </p>

                <ul className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
                  {[
                    'Expand to 50 Shops in Karachi by 2028',
                    'Franchisee Shop Chain Network',
                    'Strengthen Purification Infrastructure',
                    'Concentrate fund to Water Heart mainly'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[0.95rem] font-semibold text-white sm:text-[1.02rem]">
                      <i className="fa-solid fa-circle-check text-[#ffd34f]"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 inline-flex rounded-[12px] bg-[#ffd34f] px-7 py-2.5 font-display text-[0.9rem] font-black uppercase tracking-[0.01em] text-[#032158] transition hover:-translate-y-0.5 hover:bg-[#ffe580] sm:mt-7 sm:px-9 sm:py-3 sm:text-[1.05rem]"
                >
                  Invest in Water Heart
                </a>
              </div>

              <div className="flex items-center justify-center border-t border-white/15 py-6 text-center lg:border-r lg:border-t-0 lg:border-white/15 lg:py-8" data-aos="fade-left">
                <div>
                  <p className="font-display text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-[#d7e8ff]">Up To</p>
                  <p className="font-display text-[4.2rem] font-black leading-none text-white sm:text-[5.2rem]">50</p>
                  <p className="font-display text-[0.92rem] font-extrabold uppercase leading-6 tracking-[0.08em] text-[#d7e8ff] sm:text-[1.08rem] sm:leading-7">
                    Shops
                    <br />
                    By 2028
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-[linear-gradient(180deg,#ffffff,#f6f9ff)] py-12 md:py-16">
          <div className={containerClass}>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div data-aos="zoom-in-right">
                <div className="overflow-hidden rounded-[32px] border border-[#d9e7ff] bg-white p-3 shadow-[0_24px_50px_rgba(16,61,140,0.1)]">
                  <img src="/assets/gallery-2.png" alt="Water purification plant" className="h-full w-full rounded-[24px] object-cover" />
                </div>
              </div>

              <div data-aos="zoom-in-left">
                <SectionIntro kicker="Who We Are" title="Trusted International Water Expertise" align="left" icon={Building2} />
                <p className="mt-5 text-base leading-8 text-slate-600 md:text-[1.02rem]">
                  Water Heart is the subsidiary of DTS Inc Japan established since 1994 with branches in Pakistan, Japan, and USA. Water Heart is Pakistan's first Halaal Certified Water brand providing premium quality mineral water using advanced Japanese purification technology.
                </p>

                <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {counters.map((counter, idx) => (
                    <CounterBox key={counter.target} target={counter.target} suffix={counter.suffix} delay={idx * 120} />
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    [Award, 'Halaal Certified'],
                    [TestTubeDiagonal, 'Lab Tested'],
                    [ShieldCheck, 'Hygienic Facility']
                  ].map(([Icon, label]) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full border border-[#d9e7ff] bg-white px-4 py-2 text-sm font-semibold text-[#16407f] shadow-[0_10px_24px_rgba(21,101,255,0.06)]"
                    >
                      <Icon className="h-4 w-4 text-[#1565ff]" strokeWidth={2.4} />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-12 md:py-14">
          <div className="absolute inset-0">
            <img
              src="/assets/shape image.png"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,84,169,0.92)_0%,rgba(10,67,145,0.88)_100%)]"></div>
          </div>

          <div className={containerClass}>
            <div className="relative mx-auto max-w-[1220px] z-10">
              <div className="text-center" data-aos="fade-up">
                <h3 className="font-display text-[1.6rem] font-black uppercase tracking-[-0.02em] text-white sm:text-[2.25rem]">
                  <Filter className="mr-3 inline h-8 w-8 text-[#8fd3ff]" strokeWidth={2.4} />
                  Our Purification Process
                </h3>
                <div className="mx-auto mt-3 h-[3px] w-14 rounded-full bg-white/90"></div>
              </div>

              <div className="pointer-events-none absolute left-[13%] right-[13%] top-[124px] hidden border-t-2 border-dotted border-white/70 lg:block"></div>

              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step, idx) => (
                  <div key={step.title} data-aos="zoom-in" data-aos-delay={idx * 80}>
                    <article className="relative text-center">
                      <div className="mb-4 flex justify-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#39b0ff,#0b63f4)] text-xl text-white shadow-[0_12px_24px_rgba(57,176,255,0.3)]">
                          <step.icon className="h-6 w-6" strokeWidth={2.4} />
                        </span>
                      </div>
                      <div className="relative mx-auto h-[156px] w-[156px] rounded-full border-[3px] border-white/80 bg-white/10 p-1 shadow-[0_18px_30px_rgba(0,22,62,0.25)]">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="h-full w-full rounded-full object-cover"
                        />
                        <span className="absolute left-1/2 top-[-16px] flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-[#cbdfff] bg-white font-display text-sm font-black text-[#1d4ea1]">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h4 className="mt-6 font-display text-[1.2rem] font-black uppercase tracking-[-0.01em] text-white sm:text-[1.55rem]">
                        {step.title}
                      </h4>
                      <p className="mx-auto mt-2 max-w-[230px] text-[0.9rem] leading-6 text-[#dbe9ff] sm:text-[1.02rem] sm:leading-7">
                        {step.text}
                      </p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        


        <section id="gallery" className="bg-[linear-gradient(180deg,#f9fcff,#ffffff)] py-10 md:py-12">
          <div className={containerClass}>
            <div className="text-center" data-aos="fade-up">
              <div className="mb-3 flex justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0b63f4,#39b0ff)] text-lg text-white shadow-[0_12px_24px_rgba(21,101,255,0.25)]">
                  <ImageIcon className="h-6 w-6" strokeWidth={2.4} />
                </span>
              </div>
              <h3 className="font-display text-[1.9rem] font-black uppercase tracking-[-0.02em] text-[#12316e] sm:text-[2.15rem]">
                Our Plant Gallery
              </h3>
              <div className="mx-auto mt-2 h-[3px] w-14 rounded-full bg-[#1565ff]"></div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" data-aos="fade-up" data-aos-delay="70">
              {gallery.map((item, idx) => (
                <article key={item.image} className="rounded-[14px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-[180px] w-full rounded-[14px] border border-[#dce7f9] object-cover shadow-[0_8px_20px_rgba(15,58,132,0.12)] md:h-[230px]"
                  />
                  <p className="mt-2 text-center font-display text-[1rem] font-bold text-[#193979]">
                    {idx + 1}. {item.title}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-[18px] border border-[#d9e7ff] bg-[linear-gradient(90deg,#eef4ff,#e7f0ff)] px-4 py-4 md:px-6" data-aos="fade-up" data-aos-delay="110">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {galleryHighlights.map((item) => (
                  <div key={item.subtitle} className="flex items-center justify-center gap-3 text-[#1f3f83] lg:justify-start">
                    <item.icon className="h-8 w-8 text-[#3156a5]" strokeWidth={2.2} />
                    <p className="font-display text-[1.03rem] font-bold leading-[1.1]">
                      <span className="block">{item.title}</span>
                      <span className="block">{item.subtitle}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#f5f9ff,#ecf4ff)] py-12 md:py-16">
          <div className={containerClass}>
            <div className="mb-8 text-center" data-aos="fade-up">
              <SectionIntro
                kicker="Take a Water Test"
                title="Feel The Difference in Every Sip"
                description="Compare Water Heart with market brands and observe higher purity, smoother sweetness and lighter taste profile. Our process is designed for safer family hydration."
                icon={TestTubeDiagonal}
              />
            </div>

            <div className="mt-8 overflow-hidden rounded-[28px] border border-[#d9e7ff] bg-white shadow-[0_18px_40px_rgba(27,81,170,0.08)]" data-aos="fade-up" data-aos-delay="90">
              <div className="grid items-center lg:grid-cols-[minmax(0,1fr)_220px]">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left">
                    <thead className="bg-[#1565ff] text-white">
                      <tr>
                        <th className="px-5 py-4 font-display text-xs font-extrabold uppercase tracking-[0.12em]">Quality Factor</th>
                        <th className="px-5 py-4 font-display text-xs font-extrabold uppercase tracking-[0.12em]">Water Heart</th>
                        <th className="px-5 py-4 font-display text-xs font-extrabold uppercase tracking-[0.12em]">Typical Market Water</th>
                      </tr>
                    </thead>
                    <tbody>
                      {compareRows.map((row, idx) => (
                        <tr key={row[0]} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#f7faff]'}>
                          <td className="px-5 py-4 font-semibold text-[#12316e]">{row[0]}</td>
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-2.5 text-slate-600">
                              <i className="fa-solid fa-circle-check text-lg text-[#10b981]"></i>
                              <span>{row[1]}</span>
                            </div>
                          </td>
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-2.5 text-slate-600">
                              <i className="fa-solid fa-circle-xmark text-lg text-[#ef4444]"></i>
                              <span>{row[2]}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="hidden h-full items-center justify-center bg-[linear-gradient(180deg,#f7fbff,#edf4ff)] lg:flex">
                  <img
                    src="/assets/splashing glass water heart.png"
                    alt="Splashing glass of water"
                    className="h-[190px] w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-16">
          <div className={containerClass}>
            <div className="grid items-stretch gap-6 lg:grid-cols-2">
              <div data-aos="fade-right">
                <article className="h-full rounded-[24px] border border-[#d9e7ff] bg-white p-5 shadow-[0_18px_40px_rgba(27,81,170,0.08)] md:rounded-[30px] md:p-8">
                  <div className="grid items-center gap-5 sm:grid-cols-[270px_1fr]">
                    <img
                      src="/assets/image form water heart.png"
                      alt="Water Heart contact"
                      className="h-[230px] w-full rounded-[22px] object-contain md:h-[260px]"
                    />
                    <div>
                      <p className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-[#1565ff]">Get In Touch</p>
                      <h3 className="mt-2 font-display text-[2rem] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#12316e] md:text-4xl">
                        <Headset className="mr-3 inline h-8 w-8 text-[#1565ff]" strokeWidth={2.4} />
                        We Are Here To
                        <br />
                        Provide You Pure
                        <br />
                        &amp; Safe Water
                      </h3>
                      <ul className="mt-5 space-y-2.5">
                        {contactItems.slice(0, 3).map((item) => (
                          <li key={item.text} className="flex items-center gap-3 text-[0.95rem] font-bold text-[#12316e] md:text-[1.15rem]">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1565ff] text-xs text-white">
                              <item.icon className="h-3.5 w-3.5" strokeWidth={2.5} />
                            </span>
                            <span>{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </div>

              <div data-aos="fade-left">
                <form
                  className="h-full rounded-[24px] border border-[#d9e7ff] bg-white p-5 shadow-[0_18px_40px_rgba(27,81,170,0.08)] md:rounded-[30px] md:p-8"
                  onSubmit={onFormSubmit}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input type="text" placeholder="Your Name" required className={inputClass} />
                    <input type="email" placeholder="Your Email" required className={inputClass} />
                  </div>
                  <input type="tel" placeholder="Phone Number" required className={`${inputClass} mt-4 w-full`} />
                  <textarea rows="5" placeholder="Your Message" required className={`${inputClass} mt-4 w-full resize-none`} />
                  <button
                    type="submit"
                    className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#1565ff] px-8 py-2.5 font-display text-sm font-extrabold uppercase tracking-[0.04em] text-white shadow-[0_16px_34px_rgba(21,101,255,0.24)] transition hover:-translate-y-0.5"
                  >
                    <i className={`fa-solid ${submitted ? 'fa-check' : 'fa-paper-plane'}`}></i>
                    {submitted ? 'Message Sent' : 'Send Message'}
                  </button>
                  <p className="mt-4 text-sm text-slate-500">Our team will contact you shortly.</p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden text-[#d5e8ff]">
        <div className="absolute inset-0">
          <img
            src="/assets/water heart fotter image.png"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,33,88,0.94)_0%,rgba(4,61,152,0.9)_54%,rgba(4,84,199,0.62)_100%)]"></div>
        </div>
        <div className="relative z-10 py-10 md:py-12">
          <div className={containerClass}>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12">
              <div className="md:col-span-6 lg:col-span-3">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/logo.png"
                    alt="Water Heart logo"
                    className="h-12 w-12 object-contain"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                  <div>
                    <h4 className="font-display text-[1.15rem] font-extrabold uppercase tracking-[0.04em] text-white">
                      Water Heart
                    </h4>
                    <p className="text-sm text-white/70">Drink It Clean &amp; Hygienic</p>
                  </div>
                </div>
                <p className="mt-5 max-w-xs text-sm leading-7 text-[#d5e8ff]">
                  We are committed to providing premium quality Japanese mineral water with calcium and Vitamin C for a healthy and better life.
                </p>
                <div className="mt-5 flex gap-3">
                  {[Globe, Camera, MessageCircle, CirclePlay].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:-translate-y-0.5 hover:bg-white/25"
                    >
                      <Icon className="h-5 w-5" strokeWidth={2.3} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="col-span-6 lg:col-span-2">
                <h5 className="border-b border-white/30 pb-3 font-display text-sm font-black uppercase tracking-[0.14em] text-white">
                  Quick Links
                </h5>
                <ul className="mt-4 space-y-2 text-sm">
                  {footerLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="transition hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-6 lg:col-span-3">
                <h5 className="border-b border-white/30 pb-3 font-display text-sm font-black uppercase tracking-[0.14em] text-white">
                  Contact Us
                </h5>
                <ul className="mt-4 space-y-3 text-sm">
                  {[
                    [Phone, '+92 315 8509804'],
                    [Mail, 'info@water-heart.com'],
                    [Globe, 'www.water-heart.com'],
                    [MapPin, 'Karachi, Pakistan']
                  ].map(([Icon, label]) => (
                    <li key={label} className="flex items-start gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/12 text-white">
                        <Icon className="h-4 w-4" strokeWidth={2.4} />
                      </span>
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative md:col-span-6 lg:col-span-4">
                <h5 className="border-b border-white/30 pb-3 font-display text-sm font-black uppercase tracking-[0.14em] text-white">
                  Working Hours
                </h5>
                <div className="mt-4 flex items-center gap-3 text-sm text-white">
                  <Sun className="h-6 w-6" strokeWidth={2.4} />
                  <div>
                    <p>Mon - Sun</p>
                    <p>8:00 AM - 10:00 PM</p>
                  </div>
                </div>
                <div className="mt-8 space-y-1 font-display text-xl font-black uppercase text-white md:text-2xl">
                  <p>We Deliver Purity</p>
                  <p>We Deliver Health</p>
                </div>
                <div className="h-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 border-t border-white/20 py-4 text-center text-sm text-white/85">
          © 2026 Water Heart. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

function SectionIntro({ kicker, title, description, light = false, align = 'center', icon }) {
  const centered = align === 'center';
  const Icon = icon;

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : ''}>
      {Icon ? (
        <div className={`mb-3 flex ${centered ? 'justify-center' : 'justify-start'}`}>
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0b63f4,#39b0ff)] text-lg text-white shadow-[0_12px_24px_rgba(21,101,255,0.25)]">
            <Icon className="h-6 w-6" strokeWidth={2.4} />
          </span>
        </div>
      ) : null}
      <p className={`${sectionKickerClass} ${light ? 'text-[#8dc9ff]' : ''}`}>{kicker}</p>
      <h3 className={`mt-3 ${sectionTitleClass} ${light ? 'text-white' : ''}`}>{title}</h3>
      {description ? (
        <p className={`mt-4 text-base leading-8 ${light ? 'text-[#d5e6ff]' : 'text-slate-600'}`}>{description}</p>
      ) : null}
    </div>
  );
}

function CounterBox({ target, suffix, delay }) {
  const [value, setValue] = useState(0);
  const meta =
    target === 32
      ? { label: 'Years Experience', icon: 'fa-calendar-check' }
      : target === 3
        ? { label: 'Countries Presence', icon: 'fa-earth-asia' }
        : { label: 'Quality Compliance', icon: 'fa-shield-check' };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const start = performance.now();
          const duration = 1200 + delay;
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            setValue(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        });
      },
      { threshold: 0.45 }
    );

    const el = document.getElementById(`counter-${target}-${delay}`);
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [target, delay]);

  return (
    <article
      id={`counter-${target}-${delay}`}
      className="rounded-[24px] border border-[#d9e7ff] bg-white p-4 text-center shadow-[0_14px_30px_rgba(27,81,170,0.08)]"
    >
      <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf3ff] text-[#1565ff]">
        <i className={`fa-solid ${meta.icon}`}></i>
      </span>
      <h4 className="font-display text-3xl font-black leading-none text-[#1565ff] md:text-4xl">
        {value}
        {suffix}
      </h4>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#4e6f9b] md:text-[0.74rem]">
        {meta.label}
      </p>
    </article>
  );
}

export default App;
