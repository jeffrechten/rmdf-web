import React from "react";
import PressReleaseBody from "./PressReleaseBody";

export default function PressReleaseArticle({ pr }) {
    return (
        <article id={pr.id} className="pressRelease">
            <header className="pressHeader">
                <div className="pressKicker">
                    <span className="pressDate">
                        <time dateTime={pr.dateISO}>{pr.dateLabel}</time>
                    </span>
                    <span className="pressDot" aria-hidden>
                        •
                    </span>
                    <span className="pressLocation">{pr.location}</span>
                </div>

                <h2 className="pressH2">{pr.title}</h2>
                <p className="pressSummary">{pr.summary}</p>
            </header>

            <div className="pressBody">
                <PressReleaseBody body={pr.body} />

                {pr.bullets && pr.bullets.length > 0 && (
                    <ul className="pressList">
                        {pr.bullets.map((b, i) => (
                            <li key={`bullets-${i}`}>{b}</li>
                        ))}
                    </ul>
                )}

                <div className="pressFooterRow">
                    <a className="btn btnGhost" href="#top">
                        Back to top
                    </a>
                </div>
            </div>
        </article>
    );
}
