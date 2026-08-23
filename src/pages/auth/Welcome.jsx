import React, { useState , useEffect  } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

// NORM Logo
const NormLogo = () => (
  <svg className="norm-logo-svg" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 52 L12 14" stroke="#1B4F72" strokeWidth="7" strokeLinecap="round" fill="none"/>
    <path d="M12 14 L26 28" stroke="#1B4F72" strokeWidth="7" strokeLinecap="round" fill="none"/>
    <path d="M30 32 L46 48" stroke="#1B4F72" strokeWidth="7" strokeLinecap="round" fill="none"/>
    <path d="M46 14 L46 52" stroke="#1B4F72" strokeWidth="7" strokeLinecap="round" fill="none"/>
    <circle cx="12" cy="14" r="4" fill="#1B4F72" />
    <circle cx="46" cy="14" r="4" fill="#1B4F72" />
    <circle cx="46" cy="52" r="4" fill="#1B4F72" />
    <circle cx="26" cy="28" r="3.5" fill="#1B4F72" />
    <circle cx="30" cy="32" r="3.5" fill="#1B4F72" />
  </svg>
);

// Hamburger Icon
const HamburgerIcon = ({ isOpen }) => (
  <svg className={`hamburger-icon ${isOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {isOpen ? (
      <>
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </>
    ) : (
      <>
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
      </>
    )}
  </svg>
);

// SVG Icons
const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12v-2a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v2"/>
    <circle cx="12" cy="16" r="2"/>
    <path d="M3 12h2.5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5H3"/>
    <path d="M21 12h-2.5a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5H21"/>
  </svg>
);

const PillIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <line x1="9" y1="8" x2="9" y2="16"/>
    <line x1="15" y1="8" x2="15" y2="16"/>
    <line x1="4" y1="12" x2="20" y2="12"/>
  </svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16"/>
    <path d="M4 12h16"/>
    <path d="M4 18h10"/>
    <circle cx="18" cy="18" r="2"/>
    <circle cx="18" cy="12" r="2"/>
    <circle cx="18" cy="6" r="2"/>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const Welcome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  // Smooth scroll function
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80;
      const sectionTop = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="home-page">

      {/* ===== NAVBAR - GLASSMORPHISM ===== */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <NormLogo />
            <span>NORM</span>
          </div>
          <div className="navbar-links">
            <a href="#how-it-helps" onClick={(e) => scrollToSection(e, 'how-it-helps')}>How it helps</a>
            <a href="#features" onClick={(e) => scrollToSection(e, 'features')}>Features</a>
            <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')}>How it works</a>
            <a href="#trust" onClick={(e) => scrollToSection(e, 'trust')}>Trust</a>
            <Link to="/learn-more">Learn more</Link>
          </div>
          <div className="navbar-right">
            <Link to="/signup" className="btn btn-primary btn-nav">Get Started</Link>
            <button className="hamburger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <HamburgerIcon isOpen={isMenuOpen} />
            </button>
          </div>
        </div>
      </nav>

      {/* ===== MOBILE MENU ===== */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-container">
          <a href="#how-it-helps" onClick={(e) => scrollToSection(e, 'how-it-helps')}>How it helps</a>
          <a href="#features" onClick={(e) => scrollToSection(e, 'features')}>Features</a>
          <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')}>How it works</a>
          <a href="#trust" onClick={(e) => scrollToSection(e, 'trust')}>Trust</a>
          <Link to="/learn-more" onClick={() => setIsMenuOpen(false)}>Learn more</Link>
          <Link to="/signup" className="btn btn-primary btn-mobile" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
        </div>
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section" id="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Understand. Monitor. Manage.
            </div>
            <h1 className="hero-title">
              Living with hypertension<br />
              <span className="hero-highlight">doesn't have to feel complicated.</span>
            </h1>
            <p className="hero-description">
              NORM is your everyday companion for hypertension — a calm, simple app that helps 
              you understand your condition, monitor your blood pressure, and stay on track 
              with the care your doctor recommends.
            </p>
            <div className="hero-actions">
              <Link to="/signup" className="btn btn-primary btn-hero">
                Get Started
                <ArrowRightIcon />
              </Link>
              <a href="#how-it-works" className="btn btn-outline btn-hero" onClick={(e) => scrollToSection(e, 'how-it-works')}>
                See how it works
              </a>
            </div>
            <div className="hero-disclaimer">
              <ShieldIcon />
              <span>Supports your care — never replaces it</span>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-image-glass">
              <img 
                src="https://media.istockphoto.com/id/2181504623/photo/stethoscope-and-pen-in-doctor-robe-pocket.jpg?b=1&s=612x612&w=0&k=20&c=qWyyy5OnkOtsFWT8OZTcLj5BT2ssElEJcHqhg2lVfeU="
                alt="Person checking blood pressure"
                className="hero-img"
                loading="lazy"
              />
              <div className="hero-image-overlay">
                <div className="hero-bp-card">
                  <div className="hero-bp-header">
                    <span>Latest reading</span>
                    <span className="hero-bp-status">Normal</span>
                  </div>
                  <div className="hero-bp-value">118/78 <span>mmHg</span></div>
                  <div className="hero-bp-sub">Within your target range.</div>
                </div>
              </div>
              <div className="hero-glass-decoration"></div>
              <div className="hero-glass-dot d1"></div>
              <div className="hero-glass-dot d2"></div>
              <div className="hero-glass-dot d3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE SPACE BETWEEN VISITS ===== */}
      <section className="space-section" id="how-it-helps">
        <div className="section-container">
          <div className="space-grid">
            <div className="space-image">
              <div className="space-image-glass">
                <img 
                  src="https://images.pexels.com/photos/32236830/pexels-photo-32236830.jpeg"
                  alt="Calm morning light on wooden table"
                  className="space-img"
                  loading="lazy"
                />
                <div className="space-image-text">
                  <span>Medical instrument</span>
                </div>
              </div>
            </div>
            <div className="space-content">
              <h2>The space between visits</h2>
              <p className="space-description">
                Managing hypertension is mostly a quiet, everyday thing.<br />
                The clinic visit is only a small part of the picture. Most of living with high 
                blood pressure happens at home — and that's exactly where it gets hard to stay consistent.
              </p>
              <div className="space-challenges">
                <div className="space-challenge">
                  <div className="challenge-icon"><ShieldIcon /></div>
                  <div>
                    <h4>Inconsistent monitoring</h4>
                    <p>Readings happen between clinic visits — and life gets in the way of writing them down.</p>
                  </div>
                </div>
                <div className="space-challenge">
                  <div className="challenge-icon"><ChartIcon /></div>
                  <div>
                    <h4>Confusion about the numbers</h4>
                    <p>Two numbers, a moving target, and no one to ask at 9pm what they actually mean.</p>
                  </div>
                </div>
                <div className="space-challenge">
                  <div className="challenge-icon"><PillIcon /></div>
                  <div>
                    <h4>Forgotten medications</h4>
                    <p>A missed dose here and there quietly chips away at the progress you've made.</p>
                  </div>
                </div>
                <div className="space-challenge">
                  <div className="challenge-icon"><BookIcon /></div>
                  <div>
                    <h4>Scattered records</h4>
                    <p>Notes in a notebook, a photo in your gallery, a paper from last month — nowhere together.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW NORM HELPS ===== */}
      <section className="helps-section" id="features">
        <div className="section-container">
          <div className="section-header">
            <h2>How NORM helps</h2>
            <p className="section-subtitle">
              Four calm ways to stay on top of your blood pressure.<br />
              NORM doesn't diagnose or prescribe. It gives you a clear, steady rhythm for the 
              parts of care that happen every day, at home.
            </p>
          </div>

          <div className="helps-grid">
            <div className="help-card">
              <div className="help-card-icon">
                <HeartIcon />
              </div>
              <h3>Understand your condition</h3>
              <p>Plain-language explanations of what your numbers mean — no jargon, no panic, just clarity.</p>
              <div className="help-card-preview">
                <div className="preview-normal">Normal</div>
                <div className="preview-bp">118/78</div>
                <div className="preview-label">Preview only</div>
              </div>
            </div>

            <div className="help-card">
              <div className="help-card-icon">
                <ChartIcon />
              </div>
              <h3>Monitor blood pressure simply</h3>
              <p>Log a reading in seconds. NORM keeps the history so you can see how things are really trending.</p>
              <div className="help-card-preview">
                <div className="preview-trend">7-day trend</div>
                <div className="preview-label">Preview only</div>
              </div>
            </div>

            <div className="help-card">
              <div className="help-card-icon">
                <PillIcon />
              </div>
              <h3>Manage your medications</h3>
              <p>Gentle reminders for the care your doctor prescribed, so the routine quietly becomes a habit.</p>
              <div className="help-card-preview">
                <div className="preview-on-track">On track</div>
                <div className="preview-count">2 of 3 today</div>
                <div className="preview-label">Preview only</div>
              </div>
            </div>

            <div className="help-card">
              <div className="help-card-icon">
                <BookIcon />
              </div>
              <h3>Stay organized and informed</h3>
              <p>Your readings, medications, and notes in one calm place — ready to share when it matters.</p>
              <div className="help-card-preview">
                <div className="preview-organized">All in one place</div>
                <div className="preview-label">Preview only</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== READING SAVED SECTION ===== */}
      <section className="reading-section">
        <div className="section-container">
          <div className="reading-grid">
            <div className="reading-content">
              <h2>Reading saved.</h2>
              <div className="reading-bp-display">
                <span className="reading-bp-value">121/79</span>
                <span className="reading-bp-label">mmHg</span>
              </div>
              <p className="reading-description">
                Everything you need, nothing that overwhelms.<br />
                NORM keeps the experience deliberately small and quiet — the few tools that actually 
                help, designed to feel like relief rather than another task.
              </p>
            </div>
            <div className="reading-image">
              <div className="reading-image-glass">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=500&fit=crop&crop=center"
                  alt="Smartphone on sunlit kitchen counter"
                  className="reading-img"
                  loading="lazy"
                />
                <div className="reading-image-text">
                  <span>Your readings can be saved on your devics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT'S INSIDE ===== */}
      <section className="inside-section" id="features">
        <div className="section-container">
          <div className="section-header">
            <h2>What's inside</h2>
            <p className="section-subtitle">
              Everything you need, nothing that overwhelms.
            </p>
          </div>

          <div className="inside-grid">
            <div className="inside-item">
              <div className="inside-icon"><ClockIcon /></div>
              <h3>Log BP in seconds</h3>
              <p>Two taps and it's saved. No forms, no friction — just your reading, recorded.</p>
            </div>
            <div className="inside-item">
              <div className="inside-icon"><ChartIcon /></div>
              <h3>Clear trends, no jargon</h3>
              <p>See how your readings move over time, in language that makes sense to you.</p>
            </div>
            <div className="inside-item">
              <div className="inside-icon"><PillIcon /></div>
              <h3>Medication reminders</h3>
              <p>A gentle nudge when it's time for a dose — calm, never insistent.</p>
            </div>
            <div className="inside-item">
              <div className="inside-icon"><ShieldIcon /></div>
              <h3>Guidance that doesn't panic</h3>
              <p>When a reading is elevated, NORM offers steady, non-alarmist next steps.</p>
            </div>
            <div className="inside-item">
              <div className="inside-icon"><BookIcon /></div>
              <h3>Short educational content</h3>
              <p>Bite-sized lessons that help you understand hypertension, one idea at a time.</p>
            </div>
            <div className="inside-item">
              <div className="inside-icon"><HeartIcon /></div>
              <h3>Health records in one place</h3>
              <p>Readings, medications, and notes — together, and ready when you need them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BUILT TO BE TRUSTED ===== */}
      <section className="trust-section" id="trust">
        <div className="section-container">
          <div className="trust-grid">
            <div className="trust-content">
              <div className="trust-badge">Built to be trusted</div>
              <h2>A companion that knows its place — beside you, not above your doctor.</h2>
              <p className="trust-description">
                Designed with clinical safety in mind. NORM is built to support the relationship 
                you have with your doctor — not to stand in for it.
              </p>
              <div className="trust-items">
                <div className="trust-item">
                  <CheckIcon />
                  <div>
                    <h4>Supports, never replaces, professional care</h4>
                    <p>We don't diagnose, prescribe, or override your clinician. We help you follow the plan they set.</p>
                  </div>
                </div>
                <div className="trust-item">
                  <CheckIcon />
                  <div>
                    <h4>Your records stay yours</h4>
                    <p>Your health data is private, secure, and yours to keep or share on your terms.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="trust-image">
              <div className="trust-image-glass">
                <ShieldIcon />
                {/* <h3>Early users are shaping NORM</h3>
                <p>We're building in the open with the people who'll rely on it — join them and help us get it right.</p> */}
                <Link to="/signup" className="btn btn-primary btn-small">Sign up today</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="how-works-section" id="how-it-works">
        <div className="section-container">
          <div className="section-header">
            <h2>How it works</h2>
            <p className="section-subtitle">Three simple steps to a calmer routine.</p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-icon"><UserIcon /></div>
              <h3>Create your profile</h3>
              <p>Tell NORM a little about you and your care. It takes a minute, and it stays private.</p>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-icon"><HeartIcon /></div>
              <h3>Log your first reading</h3>
              <p>Enter your blood pressure in seconds. NORM saves it and puts it in context — calmly.</p>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-icon"><ChartIcon /></div>
              <h3>Build your history</h3>
              <p>Over time, your readings become a clear picture — and a steady rhythm you can keep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WAITLIST CTA ===== */}
      <section className="waitlist-section">
        <div className="section-container">
          <div className="waitlist-glass">
            <div className="waitlist-content">
              <div className="waitlist-brand">NORM</div>
              <h2>Understand. Monitor. Manage.</h2>
              <p>Your everyday companion for living with hypertension.</p>
              <p className="waitlist-sub">
                NORM is coming soon. Join the waitlist and be among the first to bring a calmer 
                rhythm to your blood pressure care.
              </p>
              <form className="waitlist-form">
                <input 
                  type="email" 
                  placeholder="you@example.com" 
                  className="form-control"
                />
                <button type="submit" className="btn btn-primary">
                  Join the waitlist
                </button>
              </form>
              <p className="waitlist-note">No spam. Just a note when NORM is ready for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <NormLogo />
                <span>NORM</span>
              </div>
              <p className="footer-tagline">Understand. Monitor. Manage.</p>
              <p className="footer-description">
                Your everyday companion for living with hypertension. Calm, simple, and built to 
                support the care your doctor recommends.
              </p>
            </div>

            <div className="footer-links">
              <h4>Product</h4>
              <a href="#how-it-helps" onClick={(e) => scrollToSection(e, 'how-it-helps')}>How it helps</a>
              <a href="#features" onClick={(e) => scrollToSection(e, 'features')}>Features</a>
              <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')}>How it works</a>
            </div>

            <div className="footer-links">
              <h4>Company</h4>
              <a href="#trust" onClick={(e) => scrollToSection(e, 'trust')}>Trust & safety</a>
              <Link to="/contact">Contact</Link>
              <Link to="/waitlist">Join the waitlist</Link>
            </div>

            <div className="footer-links">
              <h4>Legal</h4>
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-disclaimer">
              <ShieldIcon />
              <span>
                NORM provides educational information and does not diagnose medical conditions, 
                prescribe medication, or replace professional medical advice. Always consult a 
                qualified healthcare provider about your blood pressure and treatment.
              </span>
            </div>
            <p className="footer-copyright">&copy; 2026 NORM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;