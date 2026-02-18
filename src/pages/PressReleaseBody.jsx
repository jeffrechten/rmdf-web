import React from "react";

export default function PressReleaseBody({ body }) {
    if (!body || !Array.isArray(body)) return null;

    const renderRichText = (content) => {
        // Handle both strict legacy string (if any remain) and new children array
        if (typeof content === "string") return content;
        if (!Array.isArray(content)) return null;

        return content.map((child, i) => {
            if (typeof child === "string") {
                return <React.Fragment key={i}>{child}</React.Fragment>;
            }
            if (child.type === "a") {
                return (
                    <a
                        key={i}
                        href={child.href}
                        target={child.href.startsWith("http") ? "_blank" : undefined}
                        rel={child.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                        {child.text}
                    </a>
                );
            }
            if (child.type === "br") {
                return <br key={i} />;
            }
            if (child.type === "strong" || child.type === "b") {
                return <strong key={i}>{child.text}</strong>;
            }
            return null;
        });
    };

    return (
        <>
            {body.map((block, idx) => {
                switch (block.type) {
                    case "p":
                        return (
                            <p key={idx} className="pressP">
                                {block.children ? renderRichText(block.children) : block.text}
                            </p>
                        );
                    case "h3":
                        return (
                            <h3 key={idx} className="pressH3">
                                {block.text}
                            </h3>
                        );
                    case "h4":
                        return (
                            <h4 key={idx} className="pressH4">
                                {block.text}
                            </h4>
                        );
                    case "ul":
                        return (
                            <ul key={idx} className="pressList">
                                {block.items.map((item, i) => {
                                    // If list items ever become rich text, we can handle it here too.
                                    // For now assuming strings as per spec, but could use renderRichText if items became objects.
                                    return <li key={`${idx}-${i}`}>{item}</li>;
                                })}
                            </ul>
                        );
                    case "quote":
                        return (
                            <figure key={idx} className="pressQuote">
                                <blockquote className="pressQuoteText">{block.text}</blockquote>
                                {(block.by || block.byOrg || block.byTitle) && (
                                    <figcaption className="pressQuoteBy">
                                        {block.by && <span className="pressQuoteName">{block.by}</span>}
                                        {(block.byOrg || block.byTitle) && (
                                            <span className="pressQuoteMeta">
                                                {block.by && ", "}
                                                {block.byTitle}
                                                {block.byTitle && block.byOrg && " — "}
                                                {block.byOrg}
                                            </span>
                                        )}
                                    </figcaption>
                                )}
                            </figure>
                        );
                    case "contact":
                        return (
                            <p key={idx} className="pressContact">
                                {block.children ? renderRichText(block.children) : block.text}
                            </p>
                        );
                    default:
                        console.warn(`Unknown block type: ${block.type}`);
                        return null;
                }
            })}
        </>
    );
}
