import SiteLayout from "../components/SiteLayout.jsx";
import { CONTACT_EMAIL } from "../siteConfig";
import { LEGAL_DOCUMENTS } from "./legalData";

export default function Legal() {
    return (
        <SiteLayout>
            <main id="top">
                <section className="section">
                    <h1 className="pressTitle">Legal Documents</h1>
                    <p className="lead">
                        Access official legal filings and documents related to our defense efforts.
                        <br />
                        For inquiries, please contact: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                    </p>

                    <div className="pressStack">
                        {LEGAL_DOCUMENTS.map((doc) => (
                            <div key={doc.id} className="pressRelease">
                                <h2 className="pressH2" style={{ marginTop: 0 }}>
                                    <a href={`/docs/${doc.fileName}`} target="_blank" rel="noreferrer">
                                        {doc.title}
                                    </a>
                                </h2>
                                <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.9em", fontWeight: "600", color: "var(--muted)" }}>
                                    <span>Document type: PDF</span>
                                    <span style={{ opacity: 0.4 }}>|</span>
                                    <a
                                        href={`/docs/${doc.fileName}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ textDecoration: "none", color: "var(--forest)" }}
                                    >
                                        View
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </SiteLayout>
    );
}
