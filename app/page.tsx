import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ThemeToggle";
import ExtLink from "@/components/ExtLink";
import { existsSync } from "node:fs";
import { join } from "node:path";
import {
  Award, BadgeCheck, Cloud, Cpu, Database, Download, GitBranch, GitPullRequest, Globe,
  GraduationCap, Layers, Mail, MapPin, Medal, Network, Rocket, Satellite, Sparkles, Terminal, Briefcase, BriefcaseBusiness, FolderKanban, Wrench,
  type LucideIcon,
} from "lucide-react";
import ProjectArt from "@/components/ProjectArt";
import HeroArt from "@/components/HeroArt";
import Reveal from "@/components/Reveal";
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

const roleIcons: Record<string, LucideIcon> = {
  "System Engineer": Briefcase, SDE: Rocket, "SDE Intern": Terminal, Intern: Cloud,
  "Research Intern": Satellite, "Open-Source Contributor": GitPullRequest,
};
const linkIcons: Record<string, LucideIcon> = { Certificate: Award, Badge: BadgeCheck, "Live demo": Globe };
const skillIcons: Record<string, LucideIcon> = {
  Languages: Terminal, Frontend: Layers, "Backend & data": Database, Delivery: Cloud, Interests: Sparkles, Foundations: Network,
};
const Glyph = ({ icon: I, size = 16 }: { icon: LucideIcon; size?: number }) => (
  <I className="h-icon" size={size} strokeWidth={1.7} aria-hidden="true" focusable={false} />
);

const SectionBadge = ({ icon: I }: { icon: LucideIcon }) => (
  <span className="h-badge" aria-hidden="true">
    <I size={16} strokeWidth={1.7} aria-hidden="true" focusable={false} />
  </span>
);

export default function Home() {
  const hasPhoto = existsSync(join(process.cwd(), "public", "profile.jpg"));
  return (
    <>
      <ThemeToggle />
      <Reveal />
      <div className="shell">
        <header className="masthead">
          <div className="masthead-copy">
            {hasPhoto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="avatar" src="/profile.jpg" alt={`Portrait of ${profile.name}`} width={96} height={96} />
            ) : null}
            <h1 className="name">{profile.name}</h1>
            <p className="role">{profile.role}</p>
            <p className="place"><MapPin size={14} strokeWidth={1.7} aria-hidden="true" focusable={false} />{profile.place}</p>
            <p className="bio">{profile.bio}</p>
            <dl className="hero-facts">
              <dt>Works with</dt>
              <dd>Next.js, React, Node.js, TypeScript, MongoDB, PostgreSQL, Azure DevOps</dd>
              <dt>Background</dt>
              <dd>B.Tech in Computer Science at NERIST (9.70 CGPA, Gold Medalist). Research internship at ISRO&rsquo;s Space Applications Centre.</dd>
            </dl>
          </div>
          <aside className="masthead-actions" aria-label="Resume and contact">
            <HeroArt />
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
                <h2 id="h-exp"><SectionBadge icon={BriefcaseBusiness} />Experience</h2>
              </header>
              <ol className="rows">
                {experience.map((e) => (
                  <li key={e.title + e.dates} className="row">
                    <span className="meta">{e.dates}</span>
                    <div className="entry-copy">
                      <h3>
                        <Glyph icon={roleIcons[e.title] ?? Briefcase} />
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
                        <ExtLink href={links[e.title].href} icon={linkIcons[links[e.title].label]}>
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
                <h2 id="h-proj"><SectionBadge icon={FolderKanban} />Projects</h2>
              </header>
              <ul className="rows">
                {projects.map((p) => (
                  <li key={p.name} className="row has-art">
                    <span className="meta">{p.stack}</span>
                    <ProjectArt name={p.name} />
                    <div className="entry-copy">
                      <h3>{p.name}</h3>
                      <p className="text">{p.text}</p>
                      {links[p.name] && (
                        <ExtLink href={links[p.name].href} icon={linkIcons[links[p.name].label]}>
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
                <h2 id="h-edu"><SectionBadge icon={GraduationCap} />Education</h2>
              </header>
              <ul className="rows">
                {education.map((e) => (
                  <li key={e.name} className="row">
                    <span className="meta">{e.dates}</span>
                    <div className="entry-copy">
                      <h3><Glyph icon={e.dates.startsWith("2020") ? GraduationCap : Cpu} />{e.name}</h3>
                      <p className="text note"><Medal size={14} strokeWidth={1.7} aria-hidden="true" focusable={false} />{e.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section id="skills" aria-labelledby="h-skills">
              <header className="section-heading">
                <h2 id="h-skills"><SectionBadge icon={Wrench} />Skills &amp; certifications</h2>
              </header>
              <dl className="skills">
                {skills.map((s) => (
                  <div key={s.label} className="skill">
                    <dt><Glyph icon={skillIcons[s.label] ?? Layers} size={15} />{s.label}</dt>
                    <dd>{s.items}</dd>
                  </div>
                ))}
              </dl>
              <ul className="certs">
                {certifications.map((c, i) => (
                  <li key={c}>
                    <ExtLink href={certLinks[i]} icon={Award}>{c}</ExtLink>
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
