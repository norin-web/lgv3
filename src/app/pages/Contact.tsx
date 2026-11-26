import { Link } from "react-router";
import { contactTopics, site } from "../content/site";
import Split from "../components/Split";
import Reveal from "../components/Reveal";
import MailForm from "../components/MailForm";

export default function Contact() {
  return (
    <section className="page-hero">
      <div className="container contact__grid">
        <div>
          <Split as="h1" className="h1" parts={[["Write to us."]]} />
          <Reveal as="p" className="lead" delay={150}>
            Questions, feedback or a privacy request. Use the form or write directly.
          </Reveal>
          <a className="contact__mail link" href={`mailto:${site.email}`}>{site.email}</a>
          <p className="contact__note">
            Many answers are already on the <Link className="link" to="/support">Support</Link> page. The app is operated
            by {site.operator}, {site.address}.
          </p>
        </div>
        {/* styled like the app's "Send text to TV" sheet */}
        <div className="sendsheet">
          <h2 className="sendsheet__title">Send a message</h2>
          <MailForm
            subject={`${site.brand}: message`}
            submit="Send"
            topics={contactTopics}
            fields={[
              { name: "email", label: "Your email", type: "email", required: true, auto: "email", placeholder: "you@example.com" },
              { name: "message", label: "Message", textarea: true, required: true, placeholder: "Enter your text" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
