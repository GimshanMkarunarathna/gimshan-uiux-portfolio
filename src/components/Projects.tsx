"use client";
import { useEffect, useState } from "react";
import { Bolt, Phone } from "./ui";
import { devProjects, designProjects, Project } from "@/data";
import type { Mode } from "./Hero";
export default function Projects({ mode }: { mode: Mode }) {
  const [open, setOpen] = useState<Project | null>(null);
  const [pTab, setPTab] = useState<"dev" | "design">("dev");
  useEffect(() => { if (mode !== "home") setPTab(mode); }, [mode]);
  return (
    <section id="projects" className="sec proj">
      <Bolt cls="b1" src="/images/bolt-full.png" />
      <div className="tabs">{(["dev", "design"] as const).map((t) => <button key={t} className={pTab === t ? "on" : ""} onClick={() => setPTab(t)}>{t === "dev" ? "Development" : "UI/UX Design"}</button>)}</div>
      {pTab === "dev" ? <div className="glass grid2">{devProjects.map((p) => <div key={p.id} className="card" onClick={() => setOpen(p)}><Phone title={p.title} img={p.images[0] || ""} /><div className="snip glass">{p.code ? <pre>{p.code.slice(0, 140)}</pre> : "Code Snippet"}</div><h3>{p.title}</h3><p>{p.tags.map((t) => <em key={t}>#{t}</em>)}</p></div>)}</div>
        : <div className="glass grid3">{designProjects.map((p) => <div key={p.id} className="card" onClick={() => setOpen(p)}><Phone title={p.title} img={p.images[0] || ""} /><h3>{p.title}</h3><p>{p.tags.map((t) => <em key={t}>{t}</em>)}</p></div>)}</div>}
      <div className="cap">{pTab === "dev" ? "CODE WITH PURPOSE" : "LET’S DESIGN THE FUTURE"}</div>
      {open && <div className="modal" onClick={() => setOpen(null)}><div className="mbox glass" onClick={(e) => e.stopPropagation()}>
        <button className="x" onClick={() => setOpen(null)}>✕</button><h3>{open.title}</h3>
        {open.video && <video src={open.video} controls playsInline />}
        <div className="mimgs">{open.images.map((u) => /* eslint-disable-next-line @next/next/no-img-element */ <img key={u} src={u} alt={open.title} />)}</div>
        {open.code && <pre className="code">{open.code}</pre>}
        <p>{open.tags.map((t) => <em key={t}>{t}</em>)}</p></div></div>}
    </section>
  );
}
