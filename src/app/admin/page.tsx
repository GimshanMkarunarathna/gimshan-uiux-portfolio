"use client";
import { useState } from "react";
import { all, Project } from "@/data";
export default function Admin() {
  const [list, setList] = useState<Project[]>(all), [pw, setPw] = useState(""), [imgs, setImgs] = useState<Record<string, File[]>>({}), [vids, setVids] = useState<Record<string, File>>({}), [msg, setMsg] = useState("");
  const upd = (i: number, p: Partial<Project>) => setList((l) => l.map((x, j) => (j === i ? { ...x, ...p } : x)));
  const save = async () => {
    const f = new FormData(); f.set("password", pw); f.set("projects", JSON.stringify(list));
    Object.entries(imgs).forEach(([id, fs]) => fs.forEach((x) => f.append("img:" + id, x)));
    Object.entries(vids).forEach(([id, v]) => f.set("video:" + id, v));
    const r = await fetch("/api/admin", { method: "POST", body: f }), j = await r.json();
    setMsg(r.ok ? "Saved ✔ now refresh the site" : j.error); if (r.ok) { setList(j.projects); setImgs({}); setVids({}); }
  };
  return (
    <main className="adm"><h1>Admin: Projects</h1>
      <input type="password" placeholder="Admin password" value={pw} onChange={(e) => setPw(e.target.value)} />
      {list.map((p, i) => (
        <div key={p.id} className="glass arow">
          <input value={p.title} onChange={(e) => upd(i, { title: e.target.value })} placeholder="Title" />
          <select value={p.type} onChange={(e) => upd(i, { type: e.target.value as Project["type"] })}><option value="dev">Development</option><option value="design">UI/UX Design</option></select>
          <input value={p.tags.join(", ")} onChange={(e) => upd(i, { tags: e.target.value.split(",").map((t) => t.trim()).filter(Boolean) })} placeholder="Tags, comma separated" />
          <textarea className="wide" rows={5} value={p.code || ""} onChange={(e) => upd(i, { code: e.target.value })} placeholder="Code snippet (shown on the card + popup)" />
          <div className="wide thumbs">{p.images.map((u) => (
            // eslint-disable-next-line @next/next/no-img-element
            <span key={u}><img src={u} alt="" /><button onClick={() => upd(i, { images: p.images.filter((x) => x !== u) })}>✕</button></span>))}</div>
          <label className="wide">Images (first = cover, pick several): <input type="file" accept="image/*" multiple onChange={(e) => setImgs((o) => ({ ...o, [p.id]: [...(o[p.id] || []), ...Array.from(e.target.files || [])] }))} /> {imgs[p.id]?.length ? `${imgs[p.id].length} new` : ""}</label>
          <label className="wide">Video: <input type="file" accept="video/*" onChange={(e) => e.target.files?.[0] && setVids((o) => ({ ...o, [p.id]: e.target.files![0] }))} /> {p.video && <>{p.video} <button onClick={() => upd(i, { video: "" })}>remove</button></>}</label>
          <button onClick={() => setList((l) => l.filter((_, j) => j !== i))}>Delete project</button>
        </div>))}
      <div className="abtn"><button onClick={() => setList((l) => [...l, { id: "p" + Date.now(), type: "dev", title: "New project", images: [], tags: [], code: "" }])}>+ Add project</button><button className="on" onClick={save}>Save</button><span>{msg}</span></div>
    </main>
  );
}
