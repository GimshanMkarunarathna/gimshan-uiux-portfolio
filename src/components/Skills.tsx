"use client";
import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { SiFigma, SiCanva, SiAdobeillustrator, SiBlender, SiFlutter, SiReact, SiNodedotjs, SiJavascript, SiPython, SiKotlin, SiPhp, SiCplusplus, SiNextdotjs, SiTypescript, SiFirebase, SiMysql, SiMongodb, SiVercel } from "react-icons/si";
type S = { n: string; I: IconType; c: string };
// Edit the skills here. rev = scroll direction.
const G: { t: string; rev?: boolean; items: S[] }[] = [
  { t: "Design", items: [{ n: "Figma", I: SiFigma, c: "#f24e1e" }, { n: "Canva", I: SiCanva, c: "#00c4cc" }, { n: "Illustrator", I: SiAdobeillustrator, c: "#ff9a00" }, { n: "Blender", I: SiBlender, c: "#f5792a" }] },
  { t: "Development", rev: true, items: [{ n: "Flutter", I: SiFlutter, c: "#3ab8f5" }, { n: "React", I: SiReact, c: "#61dafb" }, { n: "Next.js", I: SiNextdotjs, c: "#fff" }, { n: "Node.js", I: SiNodedotjs, c: "#6cc24a" }, { n: "JavaScript", I: SiJavascript, c: "#f7df1e" }, { n: "TypeScript", I: SiTypescript, c: "#3178c6" }, { n: "Python", I: SiPython, c: "#ffd43b" }, { n: "Kotlin", I: SiKotlin, c: "#a97bff" }, { n: "PHP", I: SiPhp, c: "#8892bf" }, { n: "C++", I: SiCplusplus, c: "#5c9de6" }] },
  { t: "Database & Cloud", items: [{ n: "Firebase", I: SiFirebase, c: "#ffa000" }, { n: "MySQL", I: SiMysql, c: "#4aa3df" }, { n: "MongoDB", I: SiMongodb, c: "#47a248" }, { n: "Vercel", I: SiVercel, c: "#fff" }, { n: "GitHub", I: FaGithub, c: "#fff" }] },
];
const row = (items: S[]) => { let a = items; while (a.length < 10) a = a.concat(items); return a.concat(a); };
export default function Skills() {
  return (
    <section id="skills" className="sec skills">
      <span className="eyebrow">EXPERTISE</span><h2>MY <span>SKILLS</span> &amp; TOOLS</h2>
      {G.map((g) => (
        <div key={g.t} className="mq"><h4>{g.t.toUpperCase()}</h4>
          <div className={`mt${g.rev ? " rev" : ""}`}>{row(g.items).map((s, i) => <span key={i} className="sk"><s.I style={{ color: s.c }} />{s.n}</span>)}</div></div>
      ))}
    </section>
  );
}
