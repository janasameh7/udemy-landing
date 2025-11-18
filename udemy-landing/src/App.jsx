

import React from 'react';

// -------------------- Dummy data (placeholders) --------------------
const navLinks = ['Categories', 'Udemy Business', 'Teach on Udemy', 'Log in', 'Sign up'];

const hero = {
  title: 'Learn the skills you need to get ahead',
  subtitle: 'Online courses taught by real-world experts',
  cta: 'Get started',
  image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=60'
};

const featuredCourses = [
  { id: 1, title: 'React - The Complete Guide', author: 'Jane Doe', rating: 4.7, students: '120k', price: '$12.99', image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=60' },
  { id: 2, title: 'JavaScript: The Advanced Concepts', author: 'John Smith', rating: 4.6, students: '85k', price: '$9.99', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=60' },
  { id: 3, title: 'Python for Data Science', author: 'A. Researcher', rating: 4.8, students: '200k', price: '$14.99', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60' },
  { id: 4, title: 'UI/UX Design Fundamentals', author: 'Design Guru', rating: 4.5, students: '60k', price: '$11.99', image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=60' }
];

const trustedCompanies = [
  {
    id: 1,
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
  },
  {
    id: 2,
    name: 'Airbnb',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg'
  },
  {
    id: 3,
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
  },
  
  {
    id: 4,
    name: 'Netflix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
  },
  {
    id: 5,
    name: 'IBM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg'
  },
];



// -------------------- Components --------------------
function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="logo">UdemyClone</div>
        <nav className="links">
          {navLinks.slice(0, 3).map((l) => (
            <a key={l} href="#">{l}</a>
          ))}
        </nav>
        <div className="auth">
          <a href="#" className="login">Log in</a>
          <button className="signup">Sign up</button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero container">
      <div className="hero-left">
        <h1>{hero.title}</h1>
        <p className="subtitle">{hero.subtitle}</p>
        <div className="cta-row">
          <button className="cta">{hero.cta}</button>
          <a href="#featured" className="secondary">Browse popular</a>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero.image} alt="hero" />
      </div>
    </section>
  );
}

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} />
      <div className="course-info">
        <h3 className="course-title">{course.title}</h3>
        <p className="meta">{course.author} • {course.rating} ★ • {course.students} students</p>
        <div className="price-row">
          <span className="price">{course.price}</span>
          <button className="buy">Enroll</button>
        </div>
      </div>
    </div>
  );
}

function FeaturedCourses() {
  return (
    <section id="featured" className="featured container">
      <h2>Popular on Udemy</h2>
      <div className="courses-grid">
        {featuredCourses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </section>
  );
}

function TrustedCompanies() {
  return (
    <section className="trusted container">
      <p className="trusted-title">Trusted by companies worldwide</p>
      <div className="logos">
        {trustedCompanies.map((t) => (
          <div key={t.id} className="logo-item">
            <img src={t.logo} alt={t.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function UdemyLanding() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <FeaturedCourses />
        <TrustedCompanies />
      </main>

      {/* Minimal CSS so this runs without a build system for styles */}
    <style>{`
    
:root{--container:1100px;--muted:#6b7280;}
*{box-sizing:border-box}
body{font-family:Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;margin:0;color:#111;background:#f5f7ff}
.container{width:100%;margin:0 auto;padding:28px}
.nav{background:white;border-bottom:1px solid #e6e6e6}
.nav-inner{display:flex;align-items:center;justify-content:space-between}
.logo{font-weight:700}
.links a{margin-right:16px;color:var(--muted);text-decoration:none}
.auth{display:flex;gap:12px;align-items:center}
.signup{background:#ec5252;border:none;padding:8px 12px;color:white;border-radius:6px}
.login{color:var(--muted);text-decoration:none}


.hero{display:flex;gap:24px;align-items:center;padding:48px 0}
.hero-left{flex:1;padding-left: 40px;max-width: 100%;}
.hero-right{flex:1;display:flex;justify-content:center;overflow:hidden}
.hero-right img{padding-right:40px;max-width:100%;height:auto;border-radius:12px !important;object-fit: cover;}
.hero h1{font-size:36px;margin:0 0 12px}
.subtitle{color:var(--muted);margin:0 0 18px}
.cta{background:#111;color:white;padding:12px 18px;border-radius:8px;border:none;font-weight:600}
.secondary{margin-left:12px;color:var(--muted);text-decoration:none}


.featured h2{font-size:22px;margin-bottom:18px}
.courses-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px}
.course-card{border:1px solid #eaeaea;border-radius:8px;overflow:hidden;background:white}
.course-card img{width:100%;height:130px;object-fit:cover}
.course-info{padding:12px}
.course-title{font-size:16px;margin:0 0 6px}
.meta{color:var(--muted);font-size:13px;margin:0 0 8px}
.price-row{display:flex;justify-content:space-between;align-items:center}
.price{font-weight:700}
.buy{background:#0f766e;color:white;border:none;padding:6px 10px;border-radius:6px}


.trusted{padding:40px 0;text-align:center}
.trusted-title{color:var(--muted);margin-bottom:20px;font-size:18px;font-weight:500}
.logos{display:flex;gap:28px;flex-wrap:wrap;align-items:center;justify-content:center}
.logo-item{padding:12px 20px;background:#f3f0ff;border-radius:10px;box-shadow:0 1px 4px rgba(0,0,0,0.06);transition:transform .2s ease, box-shadow .2s ease}
.logo-item:hover{transform:translateY(-4px);box-shadow:0 4px 12px rgba(0,0,0,0.1)}
.logo-item img{max-height:55px;width:auto;object-fit:contain;filter:grayscale(1);opacity:.85;transition:filter .2s ease, opacity .2s ease}
.logo-item:hover img{filter:grayscale(0);opacity:1}
.trusted-title{color:var(--muted);margin-bottom:12px}
.logos{display:flex;gap:18px;flex-wrap:wrap;align-items:center}
.logo-item{width:140px;height:48px;display:flex;align-items:center;justify-content:center;border-radius:6px}
.logo-item img{max-width:100%;max-height:40px;object-fit:contain;filter:grayscale(0.0)}


/* Responsive tweaks */
@media (max-width:800px){
.hero{flex-direction:column}
.hero-right img{max-width:100%}
.nav-inner{gap:12px}
}
`}</style>
    </div>
  );
}
