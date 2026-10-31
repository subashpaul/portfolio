import Nav from "@/components/Nav";
import Background from "@/components/Background";
import ThemeToggle from "@/components/ThemeToggle";
import ExtLink from "@/components/ExtLink";
import { profile, experience, projects, education, skills, certifications, links, certLinks } from "@/lib/data";

export default function Home() {
  return (
    <>
    <Background />
    <ThemeToggle />
    <div className="shell">
      <header className="side">
        <div className="side-top">
          <h1 className="name">{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="place">{profile.place}</p>
          <p className="bio">{profile.bio}</p>
          <Nav />
        </div>
        <div className="side-bottom">
          <a className="btn" href={profile.resume} download>
            Download resume
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 2.5v8m0 0L4.75 7.25M8 10.5l3.25-3.25M3 13.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <ul className="links">
            <li><a href={`mailto:${profile.email}`}>Email</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </div>
      </header>

      <main className="main">
        <section id="experience" aria-labelledby="h-exp">
          <h2 id="h-exp">Experience</h2>
          <ol className="rows">
            {experience.map((e) => (
              <li key={e.title + e.dates} className="row">
                <span className="meta">{e.dates}</span>
                <div>
                  <h3>{e.title}<span className="at"> · {e.org}{e.place ? `, ${e.place}` : ""}</span></h3>
                  <ul className="points">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                  {links[e.title] && <ExtLink href={links[e.title].href}>{links[e.title].label}</ExtLink>}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="projects" aria-labelledby="h-proj">
          <h2 id="h-proj">Projects</h2>
          <ul className="rows">
            {projects.map((p) => (
              <li key={p.name} className="row">
                <span className="meta">{p.stack}</span>
                <div>
                  <h3>{p.name}</h3>
                  <p className="text">{p.text}</p>
                  {links[p.name] && <ExtLink href={links[p.name].href}>{links[p.name].label}</ExtLink>}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="education" aria-labelledby="h-edu">
          <h2 id="h-edu">Education</h2>
          <ul className="rows">
            {education.map((e) => (
              <li key={e.name} className="row">
                <span className="meta">{e.dates}</span>
                <div>
                  <h3>{e.name}</h3>
                  <p className="text">{e.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" aria-labelledby="h-skills">
          <h2 id="h-skills">Skills &amp; certifications</h2>
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.label} className="skill">
                <dt>{s.label}</dt>
                <dd>{s.items}</dd>
              </div>
            ))}
          </dl>
          <ul className="certs">{certifications.map((c, i) => <li key={c}><ExtLink href={certLinks[i]}>{c}</ExtLink></li>)}</ul>
        </section>

        <footer className="foot">
          <a className="btn" href={profile.resume} download>Download resume</a>
          <a className="foot-mail" href={`mailto:${profile.email}`}>{profile.email}</a>
        </footer>
      </main>
    </div>
    </>
  );
}
