import { Link } from "react-router";
import { principles, site } from "../content/site";
import Split from "../components/Split";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Split as="h1" className="h1" parts={[["An independent remote"], ["\n"], ["for LG TVs."]]} />
          <Reveal as="p" className="lead" delay={150}>
            {site.brand} is made by {site.operator}, an independent developer in Amsterdam, the Netherlands.
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container about__body">
          <Reveal>
            <h2 className="h2">Why it exists.</h2>
          </Reveal>
          <Reveal>
            <p className="lead">
              TV remotes get lost, run out of batteries and make typing a search feel like a puzzle. Your phone is
              usually already in your hand.
            </p>
            <p className="lead">
              The app puts a full remote on your iPhone and adds what a plastic remote can’t: a keyboard for search,
              voice input and screen mirroring. It talks to your LG Smart TV over your home Wi‑Fi.
            </p>
            <p className="about__fine">
              {site.disclaimer} Questions? Write to <a className="link" href={`mailto:${site.email}`}>{site.email}</a> or
              visit <Link className="link" to="/support">Support</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="head">
            <h2 className="h2">How we build it.</h2>
            <p className="lead">What our Privacy Policy says.</p>
          </Reveal>
          <dl className="sheet principles">
            {principles.map((p) => (
              <div key={p.title} className="principle">
                <dt className="h3">{p.title}</dt>
                <dd>{p.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

    </>
  );
}
