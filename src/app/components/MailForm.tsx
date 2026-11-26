import { useState, type FormEvent } from "react";
import { site } from "../content/site";

type Field = { name: string; label: string; type?: string; textarea?: boolean; required?: boolean; auto?: string; placeholder?: string };

/**
 * No backend on a static site: the form validates on blur and then opens
 * the visitor's mail app with everything pre-filled. Topic chips sit above
 * the fields; the white fields and the pink Send repeat the app's text sheet.
 */
export default function MailForm({ subject, fields, submit, topics = [] }: { subject: string; fields: Field[]; submit: string; topics?: string[] }) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [topic, setTopic] = useState("");
  const [sent, setSent] = useState(false);

  const check = (f: Field, v = values[f.name] ?? "") => {
    if (f.required && !v.trim()) return `Please enter ${f.label.toLowerCase()}.`;
    if (f.type === "email" && v && !/^\S+@\S+\.\S+$/.test(v)) return "That email doesn’t look right. Check for typos.";
    return "";
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    fields.forEach((f) => {
      const m = check(f);
      if (m) next[f.name] = m;
    });
    setErrors(next);
    const first = fields.find((f) => next[f.name]);
    if (first) {
      document.getElementById(`f-${first.name}`)?.focus();
      return;
    }
    const body = [topic && `Topic: ${topic}`, ...fields.map((f) => `${f.label}: ${values[f.name] ?? ""}`)].filter(Boolean).join("\n\n");
    location.href = `mailto:${site.email}?subject=${encodeURIComponent(topic ? `${subject} (${topic})` : subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      {topics.length > 0 && (
        <fieldset className="chips">
          <legend>Topic</legend>
          {topics.map((t) => (
            <button key={t} type="button" className={`chip${topic === t ? " is-on" : ""}`} aria-pressed={topic === t} onClick={() => setTopic(topic === t ? "" : t)}>
              {t}
            </button>
          ))}
        </fieldset>
      )}
      {fields.map((f) => {
        const id = `f-${f.name}`;
        const common = {
          id,
          name: f.name,
          value: values[f.name] ?? "",
          placeholder: f.placeholder,
          "aria-invalid": !!errors[f.name],
          "aria-describedby": errors[f.name] ? `${id}-err` : undefined,
          onChange: (e: { target: { value: string } }) => setValues({ ...values, [f.name]: e.target.value }),
          onBlur: () => setErrors({ ...errors, [f.name]: check(f) }),
        };
        return (
          <div className="field" key={f.name}>
            <label htmlFor={id}>
              {f.label}
              {f.required && <span aria-hidden="true"> *</span>}
            </label>
            {f.textarea ? <textarea {...common} /> : <input {...common} type={f.type ?? "text"} autoComplete={f.auto} />}
            {errors[f.name] && <span className="err" id={`${id}-err`} role="alert">{errors[f.name]}</span>}
          </div>
        );
      })}
      <button type="submit" className="sendbtn">{submit}</button>
      <p className="note">Opens your mail app with the message ready.</p>
      {sent && <p className="ok" role="status">If your mail app didn’t open, write to {site.email}.</p>}
    </form>
  );
}
