import { Link } from "react-router";
import { faq, site } from "../content/site";
import Split from "../components/Split";
import Reveal from "../components/Reveal";
import Accordion from "../components/Accordion";

export default function Support() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Split as="h1" className="h1" parts={[["How can we help?"]]} />
          <Reveal as="p" className="lead" delay={150}>
            Short answers about connecting, the remote, mirroring and privacy. Tap a question to open it.
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container help">
          {faq.map((g) => (
            <div key={g.group} className="help__group">
              <div>
                <h2 className="h3">{g.group}</h2>
                <p>{g.note}</p>
              </div>
              <Accordion items={g.items} variant="list" />
            </div>
          ))}

          <div className="help__group">
            <div>
              <h2 className="h3">Still stuck?</h2>
              <p>Write to us and include your TV model if you can.</p>
            </div>
            <div className="sheet sheet--pad">
              <a className="mail-big link" href={`mailto:${site.email}`}>{site.email}</a>
              <p className="muted" style={{ marginTop: 10 }}>
                Or use the <Link className="link" to="/contact">contact form</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
