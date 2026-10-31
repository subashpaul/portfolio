import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ThemeToggle";
import ExtLink from "@/components/ExtLink";
import { Download, GitBranch, Mail, Network } from "lucide-react";
import {
  profile,
  experience,
  projects,
  education,
  skills,
  certifications,
  links,
  certLinks,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <div className="shell">
        <header className="masthead">
          <div className="masthead-copy">
            <h1 className="name">{profile.name}</h1>
            <p className="role">{profile.role}</p>
            <p className="place">{profile.place}</p>
            <p className="bio">{profile.bio}</p>
          </div>
          <aside className="masthead-actions" aria-label="Resume and contact">
            <a className="btn" href={profile.resume} download>
              Download resume
              <Download
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
                focusable={false}
              />
            </a>
            <ul className="links">
              <li>
                <a href={`mailto:${profile.email}`}>
                  <Mail size={15} aria-hidden="true" focusable={false} />
                  Email
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Network size={15} aria-hidden="true" focusable={false} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <GitBranch size={15} aria-hidden="true" focusable={false} />
                  GitHub
                </a>
              </li>
            </ul>
          </aside>
        </header>

        <div className="folio-layout">
          <aside className="index" aria-label="Portfolio index">
            <p className="index-label">Index</p>
            <Nav />
          </aside>

          <main className="main">
            <section id="experience" aria-labelledby="h-exp">
              <header className="section-heading">
                <h2 id="h-exp">Experience</h2>
              </header>
              <ol className="rows">
                {experience.map((e) => (
                  <li key={e.title + e.dates} className="row">
                    <span className="meta">{e.dates}</span>
                    <div className="entry-copy">
                      <h3>
                        {e.title}
                        <span className="at">
                          {" "}
                          · {e.org}
                          {e.place ? `, ${e.place}` : ""}
                        </span>
                      </h3>
                      <ul className="points">
                        {e.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                      {links[e.title] && (
                        <ExtLink href={links[e.title].href}>
                          {links[e.title].label}
                        </ExtLink>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section id="projects" aria-labelledby="h-proj">
              <header className="section-heading">
                <h2 id="h-proj">Projects</h2>
              </header>
              <ul className="rows">
                {projects.map((p) => (
                  <li key={p.name} className="row">
                    <span className="meta">{p.stack}</span>
                    <div className="entry-copy">
                      <h3>{p.name}</h3>
                      <p className="text">{p.text}</p>
                      {links[p.name] && (
                        <ExtLink href={links[p.name].href}>
                          {links[p.name].label}
                        </ExtLink>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section id="education" aria-labelledby="h-edu">
              <header className="section-heading">
                <h2 id="h-edu">Education</h2>
              </header>
              <ul className="rows">
                {education.map((e) => (
                  <li key={e.name} className="row">
                    <span className="meta">{e.dates}</span>
                    <div className="entry-copy">
                      <h3>{e.name}</h3>
                      <p className="text">{e.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section id="skills" aria-labelledby="h-skills">
              <header className="section-heading">
                <h2 id="h-skills">Skills &amp; certifications</h2>
              </header>
              <dl className="skills">
                {skills.map((s) => (
                  <div key={s.label} className="skill">
                    <dt>{s.label}</dt>
                    <dd>{s.items}</dd>
                  </div>
                ))}
              </dl>
              <ul className="certs">
                {certifications.map((c, i) => (
                  <li key={c}>
                    <ExtLink href={certLinks[i]}>{c}</ExtLink>
                  </li>
                ))}
              </ul>
            </section>

            <footer className="foot">
              <a className="btn" href={profile.resume} download>
                Download resume{" "}
                <Download
                  size={16}
                  strokeWidth={1.8}
                  aria-hidden="true"
                  focusable={false}
                />
              </a>
              <a className="foot-mail" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
