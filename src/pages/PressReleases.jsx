import SiteLayout from "../components/SiteLayout.jsx";
import { CONTACT_EMAIL } from "../siteConfig";
import { PRESS_RELEASES } from "./pressReleasesData";
import PressReleaseArticle from "./PressReleaseArticle";

export default function PressReleases() {
  return (
    <SiteLayout>
      <main id="top">
        <section className="section pressHero">
          <h1 className="pressTitle">Press releases</h1>
          <p className="lead">
            Official statements and updates from the Rural Michigan Defense Fund. Media inquiries:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>

          <div className="tocCard" aria-label="Press releases table of contents">
            <div className="tocHeader">
              <div className="tocTitle">In this page</div>
              <a className="tocTopLink" href="#press-releases">
                Jump to releases ↓
              </a>
            </div>

            <ol className="tocList">
              {PRESS_RELEASES.map((pr) => (
                <li key={pr.id} className="tocItem">
                  <a href={`#${pr.id}`} className="tocLink">
                    <span className="tocLinkTitle">{pr.title}</span>
                    <span className="tocLinkMeta">{pr.dateLabel}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="press-releases" className="section">
          <div className="pressStack">
            {PRESS_RELEASES.map((pr) => (
              <PressReleaseArticle key={pr.id} pr={pr} />
            ))}
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
