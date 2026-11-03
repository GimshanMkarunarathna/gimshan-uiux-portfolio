"use client";

import { QRCodeSVG } from "qrcode.react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTiktok,
  FaWhatsapp,
  FaLink,
  FaMobileAlt,
} from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { Bolt } from "./ui";
import { me } from "@/data";

export default function Contact() {
  const figmaLink =
    "https://www.figma.com/design/Igb1weSQTUSBkN7CqZJRGV/Go-Lanka-App-UI---H-Gimshan-Menaka-Karunarathna?node-id=3185-7271&t=ENZc4oZUy4FaTPt3-1";

  const links = [
    [FaEnvelope, "Email", me.email, `mailto:${me.email}`],
    [FaLinkedin, "LinkedIn", me.linkedin, me.linkedin],
    [FaGithub, "GitHub", me.github, me.github],
    [FaTiktok, "TikTok", me.tiktok, me.tiktok],
    [FaWhatsapp, "WhatsApp", me.phone, me.whatsapp],
    [SiFigma, "Figma", "Go Lanka – UI/UX Design", figmaLink],
  ] as const;

  return (
    <section id="contact" className="sec contact">
      <Bolt cls="b3" src="/images/bolt-crop.png" />

      <div>
        <small>
          Hey, let's <span>connect!</span>
        </small>

        <h2 className="glow">Get in Touch</h2>

        <ul className="rows">
          <li><FaEnvelope /> {me.email}</li>
          <li><FaLink /> {me.linkedin.replace("https://", "")}</li>
          <li><FaMobileAlt /> {me.phone}</li>
        </ul>

        <div className="glass cur">
          <span>
            Currently ; <b>Designer @ Hackathon Hub</b>
          </span>
          <span>
            I apply my design thinking to drive technology innovation
          </span>

          <a className="hire" href={`mailto:${me.email}`}>
            Hire me <FaEnvelope />
          </a>
        </div>

        <small className="av">
          Available for freelance & collaborations
          Based in Colombo, Sri Lanka
        </small>
      </div>

      <div className="glass soc">
        <span className="at">@</span>

        <ul>
          {links.map(([I, n, t, h]) => (
            <li key={n}>
              <a
                href={h}
                target="_blank"
                rel="noreferrer"
              >
                <I />
                <span>
                  <b>{n}</b>
                  <small>{t}</small>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="qr">
          <QRCodeSVG
            value={me.site}
            size={64}
            bgColor="#fff"
          />
        </div>
      </div>
    </section>
  );
}
