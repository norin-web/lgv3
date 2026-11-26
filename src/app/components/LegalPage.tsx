import { Fragment, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router";
import Split from "./Split";
import Reveal from "./Reveal";

type Doc = { title: string; current: string; body: string; other: { to: string; label: string } };
type Section = { id: string; title: string; blocks: string[] };

// turn plain email addresses into mailto links, text otherwise untouched
const linkify = (text: string) =>
  text.split(/(\S+@\S+\.[a-z]{2,})/i).map((part, i) =>
    /@/.test(part) ? <a key={i} href={`mailto:${part}`}>{part}</a> : part,
  );

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/** Split the verbatim text into "## " sections; wording is never changed. */
function parse(body: string) {
  const sections: Section[] = [];
  for (const block of body.split(/\n{2,}/)) {
    if (block.startsWith("## ")) {
      const title = block.slice(3);
      sections.push({ id: slug(title), title, blocks: [] });
    } else if (sections.length) sections[sections.length - 1].blocks.push(block);
  }
  return sections;
}

function Block({ text }: { text: string }): ReactNode {
  if (text.startsWith("- "))
    return (
      <ul>
        {text.split("\n").map((li, j) => <li key={j}>{linkify(li.replace(/^- /, ""))}</li>)}
      </ul>
    );
  return (
    <p>
      {text.split("\n").map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {linkify(line)}
        </Fragment>
      ))}
    </p>
  );
}

const DOCS = [
  { to: "/privacy", key: "privacy", label: "Privacy Policy" },
  { to: "/terms", key: "terms", label: "Terms of Use" },
];

/**
 * Document page: a Privacy / Terms switch styled like the app's mode switcher,
 * a sticky list of section titles and a reading-progress line under the header.
 */
export default function LegalPage({ doc }: { doc: Doc }) {
  const sections = useMemo(() => parse(doc.body), [doc.body]);
  const [active, setActive] = useState(sections[0]?.id);
  const bar = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      let cur = sections[0]?.id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < innerHeight * 0.35) cur = s.id;
      }
      setActive(cur);
      const b = body.current?.getBoundingClientRect();
      if (b && bar.current) {
        const read = Math.min(1, Math.max(0, (innerHeight * 0.5 - b.top) / b.height));
        bar.current.style.setProperty("--read", read.toFixed(3));
      }
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, [sections]);

  return (
    <>
      <div className="legal-progress" ref={bar} aria-hidden="true"><span /></div>
      <section className="page-hero">
        <div className="container">
          <Split as="h1" className="h1" parts={[[doc.title]]} />
          <Reveal as="p" className="lead" delay={150}>
            {doc.current === "privacy"
              ? "How personal data is processed when you use the app, and the choices and rights you have."
              : "The rules for using the app, what it does and what it needs to work."}
          </Reveal>
          <nav className="switch" aria-label="Legal documents">
            {DOCS.map((d) => (
              <Link key={d.key} to={d.to} className={d.key === doc.current ? "is-active" : undefined} aria-current={d.key === doc.current ? "page" : undefined}>
                {d.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <div className="container legal">
        <nav className="legal__toc" aria-label="On this page">
          <h2>On this page</h2>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? "is-active" : undefined}>
              {s.title.replace(/^\d+\.\s*/, "")}
            </a>
          ))}
        </nav>
        <div className="legal__body" ref={body}>
          {sections.map((s) => (
            <section key={s.id}>
              <h2 id={s.id}>{s.title}</h2>
              {s.blocks.map((b, i) => <Block key={i} text={b} />)}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
