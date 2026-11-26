import { app, screens, specs } from "../content/site";
import Btn from "../components/Btn";
import Split from "../components/Split";
import Reveal from "../components/Reveal";
import Phone from "../components/Phone";

const gallery = [
  { s: screens.remote, t: "Remote", d: "D‑pad, volume and channels" },
  { s: screens.trackpad, t: "Touchpad", d: "Tap & drag to navigate" },
  { s: screens.numbers, t: "Numbers", d: "Type a channel number" },
  { s: screens.quick, t: "More keys", d: "Input, menu and color keys" },
  { s: screens.connect, t: "Connect device", d: "TVs found on your Wi‑Fi" },
  { s: screens.voice, t: "Voice search", d: "Tap and hold to speak" },
  { s: screens.keyboard, t: "Send text to TV", d: "Type with your iPhone keyboard" },
  { s: screens.mirror, t: "Mirror", d: "Show your iPhone on the TV" },
];

export default function OurApp() {
  return (
    <>
      <section className="page-hero">
        <div className="container apphero__grid">
          <div>
            <Split as="h1" className="h1" parts={[["Every key of"], ["\n"], ["your remote."]]} />
            <Reveal as="p" className="lead" delay={150}>
              Four tabs: Remote, Apps, Mirror and Settings. The Remote tab alone has the D‑pad, a touchpad, a number pad
              and a second page of keys.
            </Reveal>
            <Reveal className="apphero__actions" delay={250}>
              <Btn href={app.url}>Download on the App Store</Btn>
              <Btn to="/support" variant="dark">How to connect</Btn>
            </Reveal>
            <Reveal as="p" className="hero__meta" delay={300}>
              For iPhone · iOS {app.minIOS.split(".")[0]} or later
            </Reveal>
          </div>
          <Phone className="apphero__phone" screens={[screens.quick]} alt="App screen: second page of remote keys with color buttons" eager />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="head">
            <h2 className="h2">Inside the app.</h2>
            <p className="lead">Real screens from the app. Scroll sideways to see them all.</p>
          </Reveal>
        </div>
        <div className="gallery-wrap">
          <div className="gallery" tabIndex={0} aria-label="App screens">
            {gallery.map((g) => (
              <figure key={g.t} className="gallery__item" style={{ margin: 0 }}>
                <Phone screens={[g.s]} alt={`App screen: ${g.t}`} />
                <figcaption>
                  {g.t}
                  <span>{g.d}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="head">
            <h2 className="h2">Details.</h2>
            <p className="lead">From the App Store listing.</p>
          </Reveal>
          <Reveal as="dl" className="sheet specs">
            {specs.map(([k, v]) => (
              <div className="specs__row" key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

    </>
  );
}
