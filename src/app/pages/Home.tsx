import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { app, extras, homeFaq, modes, screens, steps } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Split from "../components/Split";
import Reveal from "../components/Reveal";
import Phone from "../components/Phone";
import Accordion from "../components/Accordion";
import Cta from "../components/Cta";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <Split as="h1" className="h1" parts={[["Your LG TV,"], ["\n"], ["one tap away."]]} />
          <Reveal as="p" className="lead" delay={150}>
            Turn your iPhone into a remote for your LG Smart TV. D‑pad, volume and channels, a touchpad, voice search and
            screen mirroring, all over your home Wi‑Fi.
          </Reveal>
          <Reveal className="hero__actions" delay={250}>
            <Btn href={app.url}>Download on the App Store</Btn>
          </Reveal>
          <Reveal as="p" className="hero__meta" delay={300}>
            For iPhone with iOS {app.minIOS.split(".")[0]} or later. Rated {app.rating} on the App Store.
          </Reveal>
        </div>
        <Phone className="hero__phone" screens={[screens.remote]} alt="LG TV Remote app: the remote screen with D‑pad, volume and channel keys" eager />
      </div>
    </section>
  );
}

function How() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  // the step whose middle is closest to the viewport middle drives the phone
  useEffect(() => {
    const onScroll = () => {
      let best = 0;
      let dist = Infinity;
      refs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - innerHeight / 2);
        if (d < dist) {
          dist = d;
          best = i;
        }
      });
      setActive(best);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <Reveal className="head">
          <h2 className="h2">From the couch to connected in three steps.</h2>
          <p className="lead">No cables. Your iPhone and TV only need to share one Wi‑Fi network.</p>
        </Reveal>
        <div className="how__grid">
          <div>
            {steps.map((s, i) => (
              <div key={s.title} ref={(el) => { refs.current[i] = el; }} className={`how__step${active === i ? " is-active" : ""}`}>
                <h3 className="h3 how__title">
                  <span className="how__num" aria-hidden="true">{i + 1}</span>
                  {s.title}
                </h3>
                <p className="lead">{s.text}</p>
                <div className="how__shot">
                  <Phone screens={[s.screen]} alt={`App screen: ${s.title}`} />
                </div>
              </div>
            ))}
          </div>
          <div className="how__sticky" aria-hidden="true">
            <Phone screens={steps.map((s) => s.screen)} active={active} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Modes() {
  const [i, setI] = useState(0);
  const m = modes[i];
  return (
    <section className="section" id="remote">
      <div className="container">
        <Reveal className="modes__center">
          <div className="head head--center">
            <h2 className="h2">One remote, four ways to use it.</h2>
          </div>
          <div className="tabs" role="tablist" aria-label="Remote modes">
            {modes.map((x, k) => (
              <button
                key={x.id}
                role="tab"
                id={`tab-${x.id}`}
                aria-selected={k === i}
                aria-controls="mode-panel"
                className={`tab${k === i ? " is-active" : ""}`}
                onClick={() => setI(k)}
              >
                {x.label}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="modes__card" id="mode-panel" role="tabpanel" aria-labelledby={`tab-${m.id}`}>
          <div className="modes__copy modes__fade" key={m.id}>
            <h3 className="h3">{m.title}</h3>
            <p className="lead">{m.text}</p>
            <ul className="checks">
              {m.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
          <Phone className="modes__phone" screens={modes.map((x) => x.screen)} active={i} alt={`App screen: ${m.label} mode`} />
        </div>
      </div>
    </section>
  );
}

function Extras() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="head head--center">
          <h2 className="h2">Things a plastic remote can’t do.</h2>
          <p className="lead">Your iPhone has a keyboard, a microphone and a screen. The app puts all three to work.</p>
        </Reveal>
        <div className="extras">
          {extras.map((x, k) => (
            <Reveal key={x.title} className="extra" delay={k * 80}>
              <div className="extra__ui">
                <img src={img(x.ui)} alt={`App screen: ${x.title}`} width={760} height={457} loading="lazy" />
              </div>
              <div className="extra__body">
                <h3 className="h3">{x.title}</h3>
                <p>{x.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="section">
      <div className="container faq">
        <Reveal className="head">
          <h2 className="h2">Questions, answered.</h2>
          <p className="lead">The short version. More answers are on the Support page.</p>
          <div className="faq__more">
            <Link className="link" to="/support">All support topics</Link>
          </div>
        </Reveal>
        <Accordion items={homeFaq} first />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <How />
      <Modes />
      <Extras />
      <Faq />
      <Cta />
    </>
  );
}
