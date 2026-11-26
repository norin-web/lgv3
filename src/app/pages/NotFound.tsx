import Btn from "../components/Btn";

export default function NotFound() {
  return (
    <section className="container nf">
      <h1 className="h1">Page not found</h1>
      <p className="lead">This page doesn’t exist. The remote is still where you left it.</p>
      <Btn to="/">Back to home</Btn>
    </section>
  );
}
