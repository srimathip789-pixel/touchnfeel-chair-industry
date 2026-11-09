import React from 'react';

type GEODataProps = {
  companySummary: string;
  keyFacts: Record<string, string>;
  certifications?: string[];
  industriesServed?: string[];
  productCategories?: string[];
};

export default function GEOData({
  companySummary,
  keyFacts,
  certifications,
  industriesServed,
  productCategories
}: GEODataProps) {
  return (
    <aside className="sr-only" aria-label="Machine Readable Company Data">
      {/* This component structures data semantically for Generative Engines (GEO) while keeping it hidden from standard view if placed inside sr-only, or can be styled visibly if needed. We'll provide it with sr-only for pure AI parsing without messing up existing UI, or remove sr-only to make it visible. */}
      
      <article itemScope itemType="https://schema.org/AboutPage">
        <section id="company-summary">
          <h2>Company Summary</h2>
          <p itemProp="description">{companySummary}</p>
        </section>

        <section id="key-facts">
          <h2>Key Facts</h2>
          <dl>
            {Object.entries(keyFacts).map(([key, value]) => (
              <React.Fragment key={key}>
                <dt>{key}</dt>
                <dd>{value}</dd>
              </React.Fragment>
            ))}
          </dl>
        </section>

        {certifications && (
          <section id="quality-certifications">
            <h2>Quality Certifications</h2>
            <ul>
              {certifications.map(cert => <li key={cert}>{cert}</li>)}
            </ul>
          </section>
        )}

        {industriesServed && (
          <section id="industries-served">
            <h2>Industries Served</h2>
            <ul>
              {industriesServed.map(ind => <li key={ind}>{ind}</li>)}
            </ul>
          </section>
        )}
        
        {productCategories && (
          <section id="product-categories">
            <h2>Product Categories</h2>
            <ul>
              {productCategories.map(cat => <li key={cat}>{cat}</li>)}
            </ul>
          </section>
        )}
      </article>
    </aside>
  );
}
