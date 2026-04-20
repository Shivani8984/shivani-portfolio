import { useState, useEffect, useRef } from "react";

const data = {
  profile: {
    name: "Shivaniben Patel",
    title: ".NET Developer",
    bio: "8+ years building secure, high-performance applications across banking, insurance, and e-commerce. Full-stack specialist in .NET, Angular, and Azure — turning complex enterprise requirements into elegant, scalable solutions.",
    location: "Harleysville, PA",
    links: {
      email: "shivaniben021@gmail.com",
      phone: "267-328-4601",
      linkedin: "https://www.linkedin.com/in/shivanibenpatel/",
    },
    education: {
      degree: "Bachelor of Engineering (BE)",
      field: "Information Technology",
      institution: "Gujarat University",
      year: 2011,
    },
  },
  experience: [
    {
      company: "WesBanco Bank",
      location: "Wheeling, WV",
      role: ".NET Developer",
      type: "Contract",
      startDate: "Jul 2024",
      endDate: null,
      current: true,
      bullets: [
        "Designed scalable backend services using ASP.NET Core 6/8, C#, and RESTful APIs for financial transaction reconciliation.",
        "Integrated GitHub Copilot and LLMs to accelerate code generation, refactoring, and documentation workflows.",
        "Architected microservices solutions using Entity Framework Core (Code-First) and SQL Server 2022.",
        "Built Angular 15–18 frontends with signal-based reactivity, deferred loading, and optimized SSR.",
        "Implemented PCI-DSS compliant authentication using ASP.NET Core Identity and JWT tokens.",
        "Migrated legacy IaaS to Azure PaaS (App Services, Worker Roles, Azure SQL) for improved scalability.",
        "Containerized apps with Docker and managed CI/CD via TFS, Jenkins, and Azure DevOps.",
      ],
      environment: ["ASP.NET Core 6/8", "Angular 15–18", "Azure", "Entity Framework Core", "SQL Server 2022", "Docker", "Jenkins", "GitHub Copilot"],
    },
    {
      company: "Penn National Insurance",
      location: "Harrisburg, PA",
      role: ".NET Developer",
      type: "Contract",
      startDate: "Jan 2023",
      endDate: "Jun 2024",
      current: false,
      bullets: [
        "Built SPAs using Angular 16, TypeScript, and Angular Material with RxJS state management.",
        "Developed ASP.NET Core MVC APIs secured with JWT tokens and global-level Web API authentication.",
        "Modernized legacy systems by converting IaaS to Azure PaaS, cutting infrastructure costs by 30%.",
        "Managed distributed version control using Git with rebasing, feature branching, and merging.",
      ],
      environment: ["Angular 16", "ASP.NET Core", "JWT", "Azure PaaS", "RxJS", "SQL Server 2017"],
    },
    {
      company: "Uncommon Goods",
      location: "Brooklyn, NY",
      role: ".NET Developer",
      type: "Contract",
      startDate: "Jul 2020",
      endDate: "Dec 2022",
      current: false,
      bullets: [
        "Developed CRUD components in Angular 9/10 and built ASP.NET Core MVC business logic in C#.",
        "Implemented RESTful Web APIs and integrated Entity Framework Code First for data access.",
        "Created Azure Queue-based applications running on Windows Azure and SQL Azure.",
        "Improved SSRS reports and implemented SSIS packages with robust error handling.",
      ],
      environment: ["Angular 9/10", ".NET Core", "Azure", "Entity Framework", "SSRS", "NUnit"],
    },
    {
      company: "Grange Insurance",
      location: "Columbus, OH",
      role: ".NET Developer",
      type: "Contract",
      startDate: "Jan 2019",
      endDate: "Jun 2020",
      current: false,
      bullets: [
        "Maintained .NET Framework 4.8 architecture with Entity Framework ORM and Angular 6/8.",
        "Implemented WCF services on Azure following SOA principles with throttling and concurrency.",
        "Built drill-down SSRS reports and optimized SQL Server databases with T-SQL best practices.",
      ],
      environment: [".NET Framework 4.8", "Angular 6/8", "WCF", "Azure", "SSRS", "ADO.NET"],
    },
    {
      company: "AmeriServ Financial Bank",
      location: "Johnstown, PA",
      role: ".NET Developer",
      type: "Contract",
      startDate: "Jun 2017",
      endDate: "Dec 2018",
      current: false,
      bullets: [
        "Built ASP.NET 4.8 Web Forms with C# business logic, reusable class libraries, and Angular 4 UI.",
        "Implemented JSON-based authentication using .NET Framework MVC and IIS security models.",
        "Managed project versioning, builds, and reporting using Team Foundation Server (TFS).",
      ],
      environment: ["ASP.NET 4.8", "Angular 2/4", "C#", "SQL Server", "TFS", "IIS"],
    },
  ],
  projects: [
    {
      name: "Banking Reconciliation System",
      company: "WesBanco Bank",
      description: "Microservices-based financial transaction matching and reconciliation platform with PCI-DSS compliance, AI-assisted development, and real-time data exchange across systems.",
      technologies: ["ASP.NET Core 6/8", "Angular 15–18", "Azure", "Entity Framework Core", "Docker", "BlackLine", "ReconNet"],
    },
    {
      name: "Insurance SPA Modernization",
      company: "Penn National Insurance",
      description: "Modernized legacy insurance infrastructure with Angular 16 SPAs and secure ASP.NET Core APIs. Migrated to Azure PaaS, reducing infrastructure costs by 30%.",
      technologies: ["Angular 16", "ASP.NET Core", "JWT", "Azure PaaS", "RxJS"],
    },
    {
      name: "E-Commerce Platform",
      company: "Uncommon Goods",
      description: "Full-stack e-commerce app with Azure infrastructure, SSRS reporting, REST APIs, WCF services, and Azure Queues for streamlined order processing.",
      technologies: ["ASP.NET Core", "Angular 9/10", "Azure Queues", "SQL Server 2019", "SSRS"],
    },
    {
      name: "Insurance Systems Platform",
      company: "Grange Insurance",
      description: "Insurance management built on .NET 4.8 with Azure-hosted WCF services (SOA), drill-down SSRS reporting, and optimized T-SQL database performance.",
      technologies: [".NET Framework 4.8", "Angular 6/8", "WCF", "Azure", "SSRS"],
    },
    {
      name: "Banking Web Application",
      company: "AmeriServ Financial Bank",
      description: "ASP.NET Web Forms and MVC app with reusable C# libraries, Angular 4 responsive UI, and JSON-based authentication managed through TFS.",
      technologies: ["ASP.NET 4.8", "Angular 4", "C#", "SQL Server", "TFS"],
    },
  ],
  skills: {
    "Languages": ["C#", "TypeScript", "JavaScript", "T-SQL"],
    ".NET": [".NET Core 6/8", "ASP.NET Core", "ASP.NET MVC", "Entity Framework", "LINQ", "WCF", "ADO.NET", "REST APIs"],
    "Frontend": ["Angular 2–18", "Angular Material", "RxJS", "HTML5", "CSS3", "Bootstrap"],
    "Cloud & DevOps": ["Microsoft Azure", "Azure PaaS/IaaS", "Azure DevOps", "Docker", "Jenkins", "CI/CD", "Git", "TFS"],
    "Databases": ["SQL Server 2017–2022", "Oracle", "Azure SQL", "Stored Procedures"],
    "Tools & Testing": ["GitHub Copilot", "Visual Studio", "Postman", "NUnit", "XUnit", "SSRS", "SSIS", "Jira"],
  },
};

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink: #0f0e0d;
    --ink-2: #3d3b38;
    --ink-3: #7a7671;
    --paper: #faf9f7;
    --paper-2: #f2f0ec;
    --paper-3: #e8e4de;
    --accent: #c84b2f;
    --accent-2: #e8d5cf;
    --line: rgba(15,14,13,0.1);
    --serif: 'DM Serif Display', Georgia, serif;
    --sans: 'DM Sans', system-ui, sans-serif;
    --radius: 3px;
  }

  body { background: var(--paper); color: var(--ink); font-family: var(--sans); }

  .sp-wrap { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }

  /* NAV */
  .sp-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: rgba(250,249,247,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--line);
    transition: border-color 0.3s;
  }
  .sp-nav-inner {
    max-width: 1100px; margin: 0 auto; padding: 0 2rem;
    height: 60px; display: flex; align-items: center; justify-content: space-between;
  }
  .sp-nav-logo {
    font-family: var(--serif); font-size: 1.15rem; color: var(--ink); text-decoration: none; letter-spacing: 0.01em;
  }
  .sp-nav-logo span { color: var(--accent); }
  .sp-nav-links { display: flex; gap: 2rem; list-style: none; }
  .sp-nav-links a {
    font-size: 0.82rem; font-weight: 400; letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--ink-3); text-decoration: none; transition: color 0.2s;
  }
  .sp-nav-links a:hover { color: var(--accent); }
  .sp-nav-cta {
    font-size: 0.82rem; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase;
    color: var(--accent); text-decoration: none; border: 1px solid var(--accent);
    padding: 0.45rem 1.1rem; border-radius: var(--radius); transition: all 0.2s;
  }
  .sp-nav-cta:hover { background: var(--accent); color: white; }

  /* HERO */
  .sp-hero {
    min-height: 100vh; display: flex; align-items: center; padding-top: 60px;
    position: relative; overflow: hidden;
  }
  .sp-hero::before {
    content: '';
    position: absolute; top: 0; right: -10%; width: 55%; height: 100%;
    background: var(--paper-2);
    clip-path: polygon(8% 0, 100% 0, 100% 100%, 0% 100%);
    z-index: 0;
  }
  .sp-hero-inner { position: relative; z-index: 1; padding: 5rem 0; }
  .sp-hero-tag {
    display: inline-flex; align-items: center; gap: 0.5rem;
    font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent);
    margin-bottom: 1.5rem;
  }
  .sp-hero-tag::before {
    content: ''; display: block; width: 28px; height: 1px; background: var(--accent);
  }
  .sp-hero-name {
    font-family: var(--serif); font-size: clamp(3rem, 6vw, 5.5rem); line-height: 1.05;
    color: var(--ink); margin-bottom: 0.3rem;
  }
  .sp-hero-title {
    font-family: var(--serif); font-size: clamp(1.5rem, 3vw, 2.5rem); line-height: 1.1;
    color: var(--ink-3); font-style: italic; margin-bottom: 2rem;
  }
  .sp-hero-bio {
    max-width: 520px; font-size: 1rem; line-height: 1.75; color: var(--ink-2);
    font-weight: 300; margin-bottom: 2.5rem;
  }
  .sp-hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
  .sp-btn-primary {
    font-size: 0.82rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase;
    background: var(--ink); color: var(--paper); padding: 0.75rem 1.8rem;
    border-radius: var(--radius); text-decoration: none; transition: background 0.2s;
  }
  .sp-btn-primary:hover { background: var(--accent); }
  .sp-btn-secondary {
    font-size: 0.82rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--ink); padding: 0.75rem 1.8rem;
    border: 1px solid var(--ink); border-radius: var(--radius); text-decoration: none; transition: all 0.2s;
  }
  .sp-btn-secondary:hover { border-color: var(--accent); color: var(--accent); }
  .sp-hero-stats {
    display: flex; gap: 3rem; margin-top: 4rem; padding-top: 2.5rem;
    border-top: 1px solid var(--line);
  }
  .sp-stat-num { font-family: var(--serif); font-size: 2.2rem; color: var(--ink); display: block; }
  .sp-stat-label { font-size: 0.78rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-3); margin-top: 0.2rem; }

  /* SECTION COMMON */
  .sp-section { padding: 6rem 0; }
  .sp-section-alt { background: var(--paper-2); }
  .sp-section-label {
    font-size: 0.75rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent);
    display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;
  }
  .sp-section-label::after { content: ''; flex: 0 0 40px; height: 1px; background: var(--accent); }
  .sp-section-heading {
    font-family: var(--serif); font-size: clamp(2rem, 4vw, 3rem); color: var(--ink); line-height: 1.1;
  }
  .sp-section-intro { font-size: 0.95rem; color: var(--ink-3); margin-top: 0.6rem; font-weight: 300; }
  .sp-section-header { margin-bottom: 3.5rem; }

  /* EXPERIENCE */
  .sp-timeline { position: relative; padding-left: 1.5rem; }
  .sp-timeline::before {
    content: ''; position: absolute; left: 0; top: 0; bottom: 0;
    width: 1px; background: var(--paper-3);
  }
  .sp-job { position: relative; padding-bottom: 3rem; padding-left: 2rem; }
  .sp-job:last-child { padding-bottom: 0; }
  .sp-job::before {
    content: ''; position: absolute; left: -1.5rem; top: 0.5rem;
    width: 9px; height: 9px; border-radius: 50%;
    background: var(--paper); border: 2px solid var(--paper-3);
    transition: border-color 0.3s;
  }
  .sp-job.active::before { border-color: var(--accent); background: var(--accent); }
  .sp-job-meta { display: flex; align-items: baseline; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 0.4rem; }
  .sp-job-company { font-family: var(--serif); font-size: 1.3rem; color: var(--ink); }
  .sp-job-type { font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-3); border: 1px solid var(--line); padding: 0.15rem 0.5rem; border-radius: var(--radius); }
  .sp-job-role { font-size: 0.88rem; font-weight: 500; color: var(--accent); margin-bottom: 0.25rem; }
  .sp-job-dates { font-size: 0.78rem; color: var(--ink-3); letter-spacing: 0.03em; margin-bottom: 1rem; }
  .sp-job-dates span { color: var(--ink); font-weight: 500; }
  .sp-job-bullets { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.25rem; }
  .sp-job-bullets li {
    font-size: 0.88rem; line-height: 1.65; color: var(--ink-2); font-weight: 300;
    padding-left: 1rem; position: relative;
  }
  .sp-job-bullets li::before { content: '—'; position: absolute; left: 0; color: var(--accent); font-size: 0.7rem; top: 0.3rem; }
  .sp-job-env { display: flex; flex-wrap: wrap; gap: 0.4rem; }

  /* PROJECTS */
  .sp-projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5px; background: var(--paper-3); border: 1px solid var(--paper-3); }
  .sp-project-card {
    background: var(--paper); padding: 2rem 1.75rem;
    transition: background 0.2s;
    cursor: default;
  }
  .sp-project-card:hover { background: var(--paper-2); }
  .sp-project-num { font-family: var(--serif); font-size: 0.8rem; color: var(--accent); font-style: italic; margin-bottom: 0.75rem; }
  .sp-project-name { font-family: var(--serif); font-size: 1.25rem; color: var(--ink); margin-bottom: 0.25rem; line-height: 1.2; }
  .sp-project-company { font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-3); margin-bottom: 1rem; }
  .sp-project-desc { font-size: 0.85rem; line-height: 1.7; color: var(--ink-2); font-weight: 300; margin-bottom: 1.25rem; }
  .sp-project-tech { display: flex; flex-wrap: wrap; gap: 0.35rem; }

  /* SKILLS */
  .sp-skills-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem; }
  .sp-skill-group-label {
    font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--ink-3); margin-bottom: 0.9rem; display: flex; align-items: center; gap: 0.5rem;
  }
  .sp-skill-group-label::after { content: ''; flex: 1; height: 1px; background: var(--line); }
  .sp-skill-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }

  /* BADGE */
  .sp-badge {
    font-size: 0.72rem; font-weight: 400; letter-spacing: 0.03em;
    padding: 0.3rem 0.7rem; border-radius: var(--radius);
    background: var(--paper-2); color: var(--ink-2); border: 1px solid var(--paper-3);
    white-space: nowrap;
  }
  .sp-badge-accent { background: var(--accent-2); color: #7a2e1c; border-color: #d4907e; }

  /* FOOTER */
  .sp-footer { background: var(--ink); color: var(--paper-2); padding: 4rem 0; }
  .sp-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 2rem; }
  .sp-footer-name { font-family: var(--serif); font-size: 1.5rem; color: var(--paper); }
  .sp-footer-role { font-size: 0.78rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-3); margin-top: 0.25rem; }
  .sp-footer-links { display: flex; gap: 1.5rem; flex-wrap: wrap; }
  .sp-footer-link { font-size: 0.82rem; color: var(--ink-3); text-decoration: none; letter-spacing: 0.05em; transition: color 0.2s; }
  .sp-footer-link:hover { color: var(--accent); }
  .sp-footer-credit { font-size: 0.72rem; color: var(--ink-3); letter-spacing: 0.05em; text-align: right; }

  /* SCROLL ANIMATIONS */
  .sp-reveal { opacity: 0; transform: translateY(22px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .sp-reveal.visible { opacity: 1; transform: translateY(0); }

  @media (max-width: 640px) {
    .sp-hero::before { display: none; }
    .sp-nav-links { display: none; }
    .sp-hero-stats { gap: 2rem; }
    .sp-footer-inner { flex-direction: column; }
    .sp-footer-credit { text-align: left; }
  }
`;

function Badge({ label, accent = false }) {
  return <span className={`sp-badge${accent ? " sp-badge-accent" : ""}`}>{label}</span>;
}

function SectionLabel({ children }) {
  return <p className="sp-section-label">{children}</p>;
}

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav className="sp-nav" style={{ borderBottomColor: scrolled ? "var(--line)" : "transparent" }}>
      <div className="sp-nav-inner">
        <a href="#hero" className="sp-nav-logo">S<span>.</span>Patel</a>
        <ul className="sp-nav-links">
          {["Experience", "Projects", "Skills"].map(s => (
            <li key={s}><a href={`#${s.toLowerCase()}`}>{s}</a></li>
          ))}
        </ul>
        <a href={`mailto:${data.profile.links.email}`} className="sp-nav-cta">Hire Me</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" className="sp-hero">
      <div className="sp-wrap sp-hero-inner">
        <p className="sp-hero-tag">Available for contract work</p>
        <h1 className="sp-hero-name">{data.profile.name.split(" ")[0]}<br />{data.profile.name.split(" ")[1]}</h1>
        <p className="sp-hero-title">{data.profile.title}</p>
        <p className="sp-hero-bio">{data.profile.bio}</p>
        <div className="sp-hero-actions">
          <a href={data.profile.links.linkedin} target="_blank" rel="noreferrer" className="sp-btn-primary">View LinkedIn</a>
          <a href="#experience" className="sp-btn-secondary">See My Work</a>
        </div>
        <div className="sp-hero-stats">
          <div>
            <span className="sp-stat-num">8+</span>
            <span className="sp-stat-label">Years Experience</span>
          </div>
          <div>
            <span className="sp-stat-num">5</span>
            <span className="sp-stat-label">Industries</span>
          </div>
          <div>
            <span className="sp-stat-num">15+</span>
            <span className="sp-stat-label">Technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function JobCard({ job, index }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`sp-job sp-reveal${job.current ? " active" : ""}`} style={{ transitionDelay: `${index * 0.08}s` }}>
      <div className="sp-job-meta">
        <span className="sp-job-company">{job.company}</span>
        <span className="sp-job-type">{job.type}</span>
      </div>
      <p className="sp-job-role">{job.role}</p>
      <p className="sp-job-dates">
        <span>{job.startDate}</span> — <span>{job.current ? "Present" : job.endDate}</span>
        &nbsp;&nbsp;·&nbsp;&nbsp;{job.location}
      </p>
      <ul className="sp-job-bullets">
        {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <div className="sp-job-env">
        {job.environment.map(t => <Badge key={t} label={t} />)}
      </div>
    </div>
  );
}

function Experience() {
  const headerRef = useReveal();
  return (
    <section id="experience" className="sp-section">
      <div className="sp-wrap">
        <div ref={headerRef} className="sp-section-header sp-reveal">
          <SectionLabel>Career</SectionLabel>
          <h2 className="sp-section-heading">Experience</h2>
          <p className="sp-section-intro">A decade of contract roles across banking, insurance, and e-commerce.</p>
        </div>
        <div className="sp-timeline">
          {data.experience.map((job, i) => <JobCard key={job.company} job={job} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="sp-project-card sp-reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
      <p className="sp-project-num">0{index + 1}</p>
      <h3 className="sp-project-name">{project.name}</h3>
      <p className="sp-project-company">{project.company}</p>
      <p className="sp-project-desc">{project.description}</p>
      <div className="sp-project-tech">
        {project.technologies.map(t => <Badge key={t} label={t} accent />)}
      </div>
    </div>
  );
}

function Projects() {
  const headerRef = useReveal();
  return (
    <section id="projects" className="sp-section sp-section-alt">
      <div className="sp-wrap">
        <div ref={headerRef} className="sp-section-header sp-reveal">
          <SectionLabel>Work</SectionLabel>
          <h2 className="sp-section-heading">Projects</h2>
          <p className="sp-section-intro">Enterprise solutions built across five companies.</p>
        </div>
        <div className="sp-projects-grid">
          {data.projects.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const headerRef = useReveal();
  return (
    <section id="skills" className="sp-section">
      <div className="sp-wrap">
        <div ref={headerRef} className="sp-section-header sp-reveal">
          <SectionLabel>Expertise</SectionLabel>
          <h2 className="sp-section-heading">Skills</h2>
          <p className="sp-section-intro">A broad, battle-tested stack from frontend to cloud.</p>
        </div>
        <div className="sp-skills-grid">
          {Object.entries(data.skills).map(([group, tags], gi) => {
            const ref = useReveal();
            return (
              <div key={group} ref={ref} className="sp-reveal" style={{ transitionDelay: `${gi * 0.07}s` }}>
                <p className="sp-skill-group-label">{group}</p>
                <div className="sp-skill-tags">
                  {tags.map(t => <Badge key={t} label={t} />)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="sp-footer">
      <div className="sp-wrap">
        <div className="sp-footer-inner">
          <div>
            <p className="sp-footer-name">{data.profile.name}</p>
            <p className="sp-footer-role">{data.profile.title} · {data.profile.location}</p>
          </div>
          <div className="sp-footer-links">
            <a href={`mailto:${data.profile.links.email}`} className="sp-footer-link">{data.profile.links.email}</a>
            <a href={data.profile.links.linkedin} target="_blank" rel="noreferrer" className="sp-footer-link">LinkedIn</a>
            <a href={`tel:${data.profile.links.phone}`} className="sp-footer-link">{data.profile.links.phone}</a>
          </div>
          <p className="sp-footer-credit">
            {data.profile.education.degree}<br />
            {data.profile.education.institution}, {data.profile.education.year}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <style>{styles}</style>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
