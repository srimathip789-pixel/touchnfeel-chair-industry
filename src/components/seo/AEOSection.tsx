import React from 'react';
import SchemaOrg from './SchemaOrg';

type FAQ = {
  question: string;
  answer: string;
  detailedAnswer?: string;
};

type AEOSectionProps = {
  faqs: FAQ[];
  title?: string;
};

export default function AEOSection({ faqs, title = "Frequently Asked Questions" }: AEOSectionProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 my-8 rounded-lg px-6" aria-labelledby="aeo-faq-title">
      <SchemaOrg schema={faqSchema} />
      <div className="max-w-4xl mx-auto">
        <h2 id="aeo-faq-title" className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-3 text-primary">{faq.question}</h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-3 leading-relaxed">
                {faq.answer}
              </p>
              {faq.detailedAnswer && (
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  {faq.detailedAnswer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
