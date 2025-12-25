import heroImg from "../assets/farm2-min.png";
import SiteLayout from "../components/SiteLayout.jsx";
import {
  DONATE_URL,
  LEARN_MORE_URL,
  CONTACT_EMAIL,
  MAILING_ADDRESS,
  PHONE_NUMBER_DISPLAY,
  PHONE_NUMBER_TEL,
} from "../siteConfig";

export default function Home() {
  return (
    <SiteLayout>
      <main>
        <section className="hero">
          <div className="heroInner">
            <h1>Stand up for rural Michigan.</h1>
            <p className="lead">
              The Rural Michigan Defense Fund (RMDF) helps rural communities with limited resources fight back
              through lawful action when industrial-scale development threatens our way of life.
            </p>

            <div className="heroCallout">
              <div className="calloutTitle">Current focus</div>
              <div className="calloutBody">
                Funding active litigation to oppose the proposed <strong>Saline Township data center</strong>.
              </div>
            </div>

            <div className="ctaRow">
              <a className="btn btnPrimary btnLarge" href={DONATE_URL} target="_blank" rel="noreferrer">
                Donate Now
              </a>
              <a className="btn btnGhost btnLarge" href={LEARN_MORE_URL} target="_blank" rel="noreferrer">
                Learn more
              </a>
            </div>

            <p className="micro">RMDF is volunteer-run. No salaries are paid. Funds support case-related legal costs.</p>
          </div>

          <div className="heroArt" aria-hidden>
            <img className="heroImg" src={heroImg} alt="" />
          </div>
        </section>

        <section id="learn-more" className="section">
          <h2>What your donation supports</h2>
          <div className="grid3">
            <div className="card">
              <h3>Legal action</h3>
              <p>
                Litigation support, filings, records, expert analysis, and other directly related legal work needed
                to challenge development approvals and protect residents’ rights.
              </p>
            </div>
            <div className="card">
              <h3>Accountability</h3>
              <p>
                We challenge decisions that put corporate interests ahead of the will of citizens using the tools
                available in the courts and public process.
              </p>
            </div>
            <div className="card">
              <h3>Future rural defense</h3>
              <p>
                As funding allows, RMDF can support efforts in other Michigan communities facing similar pressures.
              </p>
            </div>
          </div>
        </section>

        <section className="section accent">
          <div className="split">
            <div>
              <h2>Saline Township: the test case</h2>
              <p>
                The Saline Township data center fight is a test case for how rural communities can defend
                themselves when corporate resources feel overwhelming.
              </p>
              <p>
                RMDF is currently funding the Saline Township data center resistance litigation, with an objective to
                broaden this work as funding allows.
              </p>
              <div className="ctaRow">
                <a className="btn btnPrimary" href={DONATE_URL} target="_blank" rel="noreferrer">
                  Donate to the legal fund
                </a>
              </div>
            </div>
            <div className="quoteCard">
              <div className="quoteMark">“</div>
              <p className="quote">
                Rural communities deserve a real chance to be heard and the resources to enforce the rules that
                protect them.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Governance & financial transparency</h2>
          <div className="grid2">
            <div className="card">
              <h3>Board oversight</h3>
              <p>
                RMDF is a volunteer-run organization governed by a small board of Michigan residents. The board
                provides oversight of RMDF’s mission and ensures funds are used for case-related legal work.
              </p>
              <p className="small">No salaries, benefits, or compensation are paid. RMDF is operated by volunteers.</p>
            </div>
            <div className="card">
              <h3>Transparency</h3>
              <p>
                RMDF maintains a dedicated account for donated funds. Expenditures are tracked and reviewed, and
                RMDF will publish periodic high-level summaries of funds raised and spent (e.g., attorney fees, court
                costs, filings, records).
              </p>
              <p className="small">
                We aim to inform contributors while protecting litigation strategy and sensitive case details.
              </p>
            </div>
          </div>
        </section>

        <section className="section subtle">
          <h2>FAQ</h2>
          <div className="faq">
            <details>
              <summary>Is my donation tax-deductible?</summary>
              <p>
                RMDF has applied for recognition as a 501(c)(4) social welfare organization. Once tax exempt status
                is approved, contributions will be tax-deductible as charitable contributions. Please consult your
                tax advisor.
              </p>
            </details>

            <details>
              <summary>Does RMDF do lobbying?</summary>
              <p>Not at this time. RMDF is focused on supporting the Saline Township litigation and related legal work.</p>
            </details>

            <details>
              <summary>Where do the funds go?</summary>
              <p>
                Funds directly support case-related legal costs such as attorney fees, court filings, records
                requests, and other directly related litigation expenses.
              </p>
            </details>

            <details>
              <summary>How can I donate (and avoid platform service charges)?</summary>
              <p>
                You can donate online through Anedot. The Anedot donation page includes a service charge. For larger
                donations, we encourage donating by check or ACH transfer.
              </p>
              <p>
                <strong>Check:</strong> Make checks payable to <strong>Rural Michigan Defense Fund</strong> and mail to{" "}
                <strong>{MAILING_ADDRESS}</strong>.
              </p>
              <p>
                <strong>ACH:</strong> For questions about making an ACH contribution, call{" "}
                <a href={`tel:${PHONE_NUMBER_TEL}`}>{PHONE_NUMBER_DISPLAY}</a>.
              </p>
            </details>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
