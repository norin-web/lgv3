import { app } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";
import Reveal from "./Reveal";

/** Closing download card used at the bottom of Home, App and About. */
export default function Cta() {
  return (
    <div className="container">
      <Reveal className="cta">
        <img className="cta__icon" src={img("/images/app-icon.png")} alt="" width={88} height={88} loading="lazy" />
        <h2 className="h2">Leave the remote on the couch.</h2>
        <p className="lead">Get the app on your iPhone and control your LG TV from wherever you sit.</p>
        <Btn href={app.url}>Download on the App Store</Btn>
        <p className="hero__meta">For iPhone · iOS {app.minIOS.split(".")[0]} or later</p>
      </Reveal>
    </div>
  );
}
