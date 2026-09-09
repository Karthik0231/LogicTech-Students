import React, { useEffect, useMemo, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import {
  ArrowRight, CheckCircle2, ChevronDown, Code2, Copy, Gift, GraduationCap,
  Instagram, Menu, MessageCircle, Phone, Rocket, ShieldCheck, Sparkles, Users, X, Zap,
  Send, IndianRupee
} from 'lucide-react';
import './styles.css';
import logo from './assets/logictech-logo.png';

const stacks = [
  { name: 'MERN Stack', line: 'MongoDB · Express · React · Node.js', icon: 'https://cdn.simpleicons.org/mongodb/47A248', copy: 'Modern full-stack web applications with clean APIs, authentication and dashboards.' },
  { name: 'PHP ', line: 'PHP · MySQL', icon: 'https://cdn.simpleicons.org/php/777BB4', copy: 'Reliable, structured applications for portals, management systems and academic use cases.' },
  { name: 'React Native', line: 'React Native · Firebase', icon: 'https://cdn.simpleicons.org/react/61DAFB', copy: 'Cross-platform Android and iOS applications with polished, responsive interfaces.' },
];

const supportingTech = [
  ['React', 'https://cdn.simpleicons.org/react/61DAFB'],
  ['Node.js', 'https://cdn.simpleicons.org/nodedotjs/5FA04E'],
  ['MongoDB', 'https://cdn.simpleicons.org/mongodb/47A248'],
  ['Express', 'https://cdn.simpleicons.org/express/111827'],
  ['PHP', 'https://cdn.simpleicons.org/php/777BB4'],
  ['React Native', 'https://cdn.simpleicons.org/react/61DAFB'],
  ['MySQL', 'https://cdn.simpleicons.org/mysql/4479A1'],
  ['PostgreSQL', 'https://cdn.simpleicons.org/postgresql/4169E1'],
  ['Firebase', 'https://cdn.simpleicons.org/firebase/FFCA28'],
  ['Git', 'https://cdn.simpleicons.org/git/F05032'],
];

const projects = [
  { title: 'Campus Management Portal', cat: 'MERN', stack: 'MongoDB · Express · React · Node.js', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=88', tag: 'Full Stack', desc: 'A polished multi-role portal with authentication, dashboards, records and workflow-driven modules.' },
  { title: 'Student Attendance System', cat: 'PHP', stack: 'PHP  · MySQL', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=88', tag: 'Management', desc: 'Structured attendance, student records, faculty controls and reporting in a clean web application.' },
  { title: 'Food Delivery App', cat: 'React Native', stack: 'React Native · Firebase', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=88', tag: 'Mobile', desc: 'A mobile-first experience covering browsing, cart, orders, profiles and a modern app flow.' },
  { title: 'Project & Task Manager', cat: 'PHP', stack: 'PHP  · MySQL', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=88', tag: 'Management', desc: 'API-driven task management with authentication, structured data and an intuitive project dashboard.' },
  { title: 'Service Booking Platform', cat: 'MERN', stack: 'MongoDB · Express · React · Node.js', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=88', tag: 'Backend', desc: 'A fast service-booking backend with validation, secure API flows and production-style structure.' },
  { title: 'College Event App', cat: 'React Native', stack: 'React Native · Firebase', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=88', tag: 'App', desc: 'Event discovery, registrations, notifications and profile flows presented in a refined mobile UI.' },
];

const faqs = [
  ['Can I bring my own project idea?', 'Yes. Share your topic or even a rough problem statement. We can discuss the scope and suggest a practical technology stack.'],
  ['Are the prices affordable?', 'Yes. We keep student projects competitively priced and scope them around the actual requirements instead of adding unnecessary features.'],
  ['Which technologies do you work with?', 'Our student solutions focus on MERN, PHP, React Native, with supporting databases and development tools where required.'],
  ['Will someone contact me after I submit?', 'Yes. The enquiry is sent to LogicTech and our team can contact you using the phone number you provide.'],
  ['How does Refer & Earn work?', 'Share LogicTech with a friend and ask them to mention your name in their enquiry. A qualifying new project can earn you a ₹500 referral reward after verification and payment confirmation.'],
];

const referralText = 'Hey! Check out LogicTech Student Solutions for affordable student project development and guidance. If you need a project, you can send them an enquiry and mention my name.';

function App() {
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState(null);
  const [popup, setPopup] = useState(false);
  const [category, setCategory] = useState('All');
  const [sent, setSent] = useState(false);
  const filtered = useMemo(() => category === 'All' ? projects : projects.filter(p => p.cat === category), [category]);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, smoothTouch: false });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      ScrollTrigger.update();
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-copy .eyebrow', { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.15 });
      gsap.fromTo('.hero h1', { y: 42, opacity: 0, filter: 'blur(10px)' }, { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.15, ease: 'power4.out', delay: 0.25 });
      gsap.fromTo('.hero-lead', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.45 });
      gsap.fromTo('.hero-actions', { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.6 });
      gsap.fromTo('.hero-proof', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, ease: 'power3.out', delay: 0.75 });
      gsap.to('.hero-bg', { scale: 1.08, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
      gsap.to('.hero-lines i', { yPercent: 16, stagger: 0.35, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
      gsap.to('.hero-tech-track', { xPercent: -8, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    });
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    const key = 'logictech_student_popup_seen_v3';
    const timer = window.setTimeout(() => {
      if (!localStorage.getItem(key)) {
        localStorage.setItem(key, '1');
        setPopup(true);
      }
    }, 5000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('modal-open', popup);
    return () => document.body.classList.remove('modal-open');
  }, [popup]);

  useEffect(() => {
    if (!popup) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setPopup(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [popup]);

  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));
    return () => reveal.disconnect();
  }, [category]);

  const go = (id) => {
    setMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const closePopup = () => setPopup(false);

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top" onClick={() => go('top')}>
            <img src={logo} alt="LogicTech Solutions" />
            <span><b>LOGICTECH</b><small>STUDENT SOLUTIONS</small></span>
          </a>
          <nav className={menu ? 'open' : ''} aria-label="Primary navigation">
            <a href="#solutions" onClick={() => go('solutions')}>Solutions</a>
            <a href="#stacks" onClick={() => go('stacks')}>Tech Stacks</a>
            <a href="#projects" onClick={() => go('projects')}>Projects</a>
            <a href="#process" onClick={() => go('process')}>How It Works</a>
            <a href="#referral" onClick={() => go('referral')}>Refer & Earn</a>
            <a href="#faq" onClick={() => go('faq')}>FAQ</a>
          </nav>
          <button className="nav-cta" onClick={() => setPopup(true)}>Start Enquiry <ArrowRight size={16} /></button>
          <button className="menu" onClick={() => setMenu(!menu)} aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu}>{menu ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-bg" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-lines" aria-hidden="true"><i /><i /><i /><i /></div>
          <div className="hero-inner hero-inner-single">
            <div className="hero-copy reveal">
              <div className="eyebrow">---LOGICTECH STUDENT SOLUTIONS</div>
              <h1>Have an idea?<br /><span>Let’s build it.</span></h1>
              <p className="hero-lead">Professional, affordable student projects built around modern technology — so you get something that works, looks impressive and is easier to understand when it is time to present.</p>
              <div className="hero-actions">
                <button className="primary" onClick={() => setPopup(true)}>Start Your Project <ArrowRight size={18} /></button>
                <button className="ghost-light" onClick={() => go('projects')}>Explore Project Ideas <ArrowRight size={17} /></button>
              </div>
              <div className="hero-proof"><span><CheckCircle2 /> Affordable student pricing</span><span><CheckCircle2 /> Modern UI & clean code</span><span><CheckCircle2 /> We’ll contact you</span></div>
            </div>
            <div className="hero-tech-rail">
              <span className="rail-label">BUILT WITH</span>
              <div className="hero-tech-track">{supportingTech.slice(0, 9).map(([name, icon]) => <span key={name}><img src={icon} alt={name} />{name}</span>)}</div>
            </div>
          </div>
          <div className="hero-scroll">SCROLL TO EXPLORE <span /></div>
        </section>
        <section className="trust-strip"><div>Professional project experience</div><div>Web · Mobile · Backend</div><div>MERN · PHP · React Native </div><div>Affordable student solutions</div></section>

        <section className="section reveal" id="solutions">
          <div className="section-head"><div><span className="kicker">WHAT WE HELP WITH</span><h2>Built around what <span>students actually need.</span></h2></div><p>Tell us the topic, course requirement or even just an idea. We help shape it into a practical software project without making the process complicated.</p></div>
          <div className="solution-grid">
            <article><div className="iconbox"><GraduationCap /></div><h3>Final Year Projects</h3><p>Well-structured applications with meaningful modules, clean UI and a project flow you can demonstrate confidently.</p><button onClick={() => setPopup(true)}>Discuss final year project <ArrowRight /></button></article>
            <article><div className="iconbox"><Rocket /></div><h3>Mini Projects</h3><p>Focused builds for practical submissions, lab work and portfolio-ready demonstrations without unnecessary complexity.</p><button onClick={() => setPopup(true)}>Discuss a mini project <ArrowRight /></button></article>
            <article><div className="iconbox"><Zap /></div><h3>Web Applications</h3><p>MERN and PHP/Laravel applications with responsive UI, authentication, APIs, database workflows and admin panels.</p><button onClick={() => setPopup(true)}>Build a web project <ArrowRight /></button></article>
            <article><div className="iconbox"><MessageCircle /></div><h3>Mobile Applications</h3><p>React Native projects designed for Android and iOS with polished screens, practical navigation and backend integration.</p><button onClick={() => setPopup(true)}>Build a mobile project <ArrowRight /></button></article>
          </div>
        </section>

        <section className="dark-section reveal" id="stacks">
          <div className="section-head dark-head"><div><span className="kicker">TECH STACKS</span><h2>Choose a stack that <span>fits your project.</span></h2></div><p>LogicTech works across the technologies students most commonly need for modern web, mobile and backend project development.</p></div>
          <div className="stack-grid">{stacks.map((s, i) => <article className="stack-card" key={s.name} style={{ '--delay': `${i * 70}ms` }}><div className="stack-logo"><img src={s.icon} alt={s.name} /></div><div><h3>{s.name}</h3><p>{s.line}</p><small>{s.copy}</small></div><ArrowRight /></article>)}</div>
          <div className="supporting"><span>Supporting technologies</span><div>{supportingTech.map(t => <span key={t[0]}><img src={t[1]} alt="" />{t[0]}</span>)}</div></div>
        </section>

        <section className="section projects" id="projects">
          <div className="section-head"><div><span className="kicker">PROJECT IDEAS</span><h2>See what your <span>project could look like.</span></h2></div><p>These are examples to spark ideas. Your topic, features and scope can be discussed with LogicTech before development begins.</p></div>
          <div className="filters">{['All', 'MERN', 'PHP', 'React Native'].map(c => <button key={c} className={category === c ? 'active' : ''} onClick={() => setCategory(c)}>{c}</button>)}</div>
          <div className="project-grid">{filtered.map((p, i) => <article className="project-card reveal" key={p.title} style={{ '--delay': `${i * 60}ms` }}><div className="project-image"><img src={p.image} alt={p.title} loading="lazy" /><div className="image-overlay" /><span className="project-tag">{p.tag}</span><span className="project-stack">{p.cat}</span></div><div className="project-body"><div className="project-meta">PROJECT IDEA <span>•</span> {p.stack}</div><h3>{p.title}</h3><p>{p.desc}</p><button onClick={() => setPopup(true)}>Discuss this project <ArrowRight /></button></div></article>)}</div>
        </section>

        <section className="affordable reveal"><div className="affordable-glow" /><div><span className="kicker">STUDENT-FRIENDLY PRICING</span><h2>Serious project quality.<br/><span>Affordable pricing.</span></h2><p>We understand that student budgets are different. Tell us what you need and we can recommend a practical scope that keeps the project useful without adding unnecessary cost.</p></div><div className="price-card"><div><IndianRupee size={18} /><b>Affordable by design</b></div><strong>Built around<br/>your requirement.</strong><button className="primary" onClick={() => setPopup(true)}>Ask for a quote <ArrowRight /></button></div></section>

        <section className="included reveal"><div className="included-inner"><div><span className="kicker">THE DIFFERENCE</span><h2>More than a<br/><span>project file.</span></h2><p>The goal is to give you a usable project experience: clean source code, understandable architecture and enough guidance to explain what you built.</p><button className="primary" onClick={() => setPopup(true)}>Talk to LogicTech <ArrowRight /></button></div><div className="benefit-list">{['Working source code with clean structure','Database and API integration where required','Responsive, presentation-ready UI','Setup and run guidance','Project flow and feature explanation','Support for reasonable academic changes'].map((b, i) => <div key={b}><span>{String(i + 1).padStart(2, '0')}</span><CheckCircle2 /><p>{b}</p></div>)}</div></div></section>

        <section className="section process reveal" id="process"><div className="section-head"><div><span className="kicker">HOW IT WORKS</span><h2>Simple from the <span>first message.</span></h2></div><p>You don't need a technical document to start. Just tell us what you're studying and what you're trying to build.</p></div><div className="steps">{[['01','Tell us','Name, phone, college if you want, topic if you have one.'],['02','We call you','We discuss your idea, scope and the right technology.'],['03','Build','Once confirmed, the project is developed around the agreed scope.'],['04','Explain','We help you understand the flow and important parts of the project.'],['05','Present','You get a project experience designed to be easier to demonstrate.']].map(s => <article key={s[0]}><b>{s[0]}</b><h3>{s[1]}</h3><p>{s[2]}</p></article>)}</div></section>

        <section className="referral-section reveal" id="referral"><div className="referral-inner"><div className="referral-copy"><span className="kicker"><Gift size={14} /> REFER & EARN</span><h2>Help a friend.<br/><span>Earn ₹500.</span></h2><p>Know a classmate who needs a project? Refer them to LogicTech. When a new qualifying student project is confirmed and payment is completed, you can receive a <b>₹500 referral reward</b>.</p><div className="referral-points"><div><Users /><span><b>1 · Share</b><small>Send LogicTech to a friend.</small></span></div><div><CheckCircle2 /><span><b>2 · Mention your name</b><small>They enter your name in the enquiry.</small></span></div><div><Gift /><span><b>3 · Earn</b><small>Reward is processed after verification and payment confirmation.</small></span></div></div></div><div className="referral-card"><div className="reward-pill">₹500</div><Gift size={32} /><h3>Referral reward</h3><p>Copy a ready-to-send message or share it directly.</p><div className="share-box">{referralText}</div><div className="share-actions"><button className="secondary" onClick={() => navigator.clipboard?.writeText(referralText)}><Copy size={15} /> Copy</button><a className="primary" href={`https://wa.me/?text=${encodeURIComponent(referralText)}`} target="_blank" rel="noreferrer"><Send size={15} /> WhatsApp</a></div></div></div></section>

        <section className="cta reveal"><div><span className="kicker">NO COMPLICATED BRIEF</span><h2>Have a topic?<br/><span>Let's talk.</span></h2><p>Even if you only know the subject or topic, that's enough to start. We'll contact you and discuss the practical options.</p></div><button className="primary light" onClick={() => setPopup(true)}>Send Enquiry <ArrowRight /></button></section>

        <section className="section faq reveal" id="faq"><div className="section-head"><div><span className="kicker">FAQ</span><h2>Questions students <span>usually ask.</span></h2></div></div><div className="faq-list">{faqs.map(([q, a], i) => <div className="faq-item" key={q}><button onClick={() => setFaq(faq === i ? null : i)} aria-expanded={faq === i}><span>{q}</span><ChevronDown className={faq === i ? 'rot' : ''} /></button>{faq === i && <p>{a}</p>}</div>)}</div></section>
      </main>

      <footer><div className="footer-main"><div className="brand footer-brand"><img src={logo} alt="LogicTech Solutions" /><span><b>LOGICTECH</b><small>STUDENT SOLUTIONS</small></span><p>Professional, affordable student project solutions from LogicTech Solutions.</p></div><div><b>Explore</b><a onClick={() => go('solutions')}>Solutions</a><a onClick={() => go('stacks')}>Tech Stacks</a><a onClick={() => go('projects')}>Project Ideas</a><a onClick={() => go('referral')}>Refer & Earn</a></div><div><b>Contact</b><a href="mailto:logictech968@gmail.com">logictech968@gmail.com</a><a onClick={() => setPopup(true)}>Project Enquiry</a><a href="https://www.instagram.com/logic_techsolutions?stkn=MWg0M2w2YXllbXV2MQ==" target="_blank" rel="noreferrer" aria-label="Follow LogicTech Solutions on Instagram"><Instagram size={16} /> Instagram</a><a onClick={() => go('faq')}>FAQs</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} LogicTech Solutions. All rights reserved.</span><span>Build · Understand · Present</span></div></footer>

      <div className="fixed-enquiry"><div className="fixed-copy"><span className="fixed-dot" /><div><b>Have a project idea?</b><small>Tell us the basics. We'll call you.</small></div></div><button className="fixed-mobile-trigger" onClick={() => setPopup(true)}><MessageCircle size={18} /> Start an Enquiry</button><div className="fixed-form-wrap"><CompactForm onSent={() => setSent(true)} /></div></div>

      {sent && <div className="toast"><CheckCircle2 /> Enquiry sent. LogicTech will contact you.</div>}

      {popup && <div className="modal-backdrop" onMouseDown={e => e.target === e.currentTarget && closePopup()}><div className="popup" role="dialog" aria-modal="true" aria-labelledby="enquiry-title"><button className="close" onClick={closePopup} aria-label="Close enquiry form"><X /></button><div className="popup-art"><div className="popup-art-ring" /><img src={logo} alt="LogicTech" /></div><div className="popup-content"><span className="kicker">QUICK PROJECT ENQUIRY</span><h2 id="enquiry-title">Tell us the basics.<br/><span>We'll contact you.</span></h2><p>No long form. Just your name, phone and a little context if you have it.</p><CompactForm onSent={() => { setSent(true); closePopup(); }} /></div></div></div>}
    </>
  );
}

function CompactForm({ onSent }) {
  return <form className="compact-form" action="https://formsubmit.co/logictech968@gmail.com" method="POST" onSubmit={onSent}>
    <input type="hidden" name="_subject" value="New LogicTech Student Enquiry" />
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_template" value="table" />
    <input type="hidden" name="_next" value="https://logictech-students.vercel.app/student-project-success.html" />
    <input className="hp" type="text" name="_honey" tabIndex="-1" autoComplete="off" />
    <div className="compact-grid">
      <label>Name *<input required name="student_name" placeholder="Your name" /></label>
      <label>Phone / WhatsApp *<input required name="phone" placeholder="+91 XXXXX XXXXX" /></label>
      <label>College <span>(optional)</span><input name="college" placeholder="College name" /></label>
      <label>Topic <span>(optional)</span><input name="topic" placeholder="Project topic / idea" /></label>
      <label className="full">Referred by <span>(optional)</span><input name="referred_by" placeholder="Friend's name" /></label>
    </div>
    <button className="primary submit" type="submit">Send Enquiry <ArrowRight size={16} /></button>
    {/* <small className="form-note"><ShieldCheck size={13} /> Sent to logictech968@gmail.com</small> */}
  </form>;
}

createRoot(document.getElementById('root')).render(<><App /><Analytics /></>);
