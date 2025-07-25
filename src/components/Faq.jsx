import React, { useState } from "react";

const faqs = [
  {
    question: "1. What materials do you use? Is it real gold or just plated?",
    answer: "We use a mix of sterling silver and surgical-grade stainless steel, finished with a thick 18k gold tone plating. This gives you the look of gold without the high price, and it lasts longer than the thin coating you'd find on typical fashion jewellery. No brass, no mystery metals — just clean, quality materials made to be worn daily.",
  },
  {
    question: "2. Is your jewellery hallmarked or certified? ",
    answer: "Yes. Our sterling silver pieces are BIS-hallmarked, following Indian standards. You’ll also find the 925 stamp on most silver-based designs. For lab grown diamonds and stones, we provide sourcing or authenticity details. Everything is clearly listed on the product page — no surprises.",
  },
  {
    question: "3. Why is this more expensive than regular fashion jewellery?",
    answer: "Because it’s not made like regular fashion jewellery. We use better metals, thicker plating, more precise finishing, and ethical production. You’re paying for a product that actually holds up — not just something that looks good for a few weeks.",
  },
  {
    question: " 4. I’ve seen similar styles for less. What’s the difference?",
    answer: "You’re not wrong — similar designs exist. But look closer. Cheaper versions are usually gold-coated brass or low-grade alloys with thin plating and no aftercare. We use higher quality materials, offer actual support, and don’t disappear after the sale. That’s what you're really paying for.",
  },
  {
    question: "5. Will it tarnish or fade over time?",
    answer: "It’s made to resist both, but no jewellery is invincible. Our gold tone plated finish holds up well with regular wear, especially if you avoid harsh chemicals and store it properly. You’ll get a care guide with your order — follow it, and your pieces will stay in good shape.",
  },
  {
    question: "6. What if something goes wrong — do you offer warranty or returns?",
    answer: "Yes. We offer a one-year warranty that covers plating issues or manufacturing faults. You also get 2 days to return and 10 days to exchange if something doesn’t feel right. Repairs and resizing are available on select pieces — just reach out and we will help.",
  },
  {
    question: "7. Is this jewellery meant for daily wear or special occasions?",
    answer: "Both. It’s built tough enough for daily wear but polished enough to pass for occasion-ready. Think of it as low-maintenance luxury — no need to save it for “someday.” It also comes gift-ready, so it works for birthdays, anniversaries, or whatever milestone you’ve got coming up.",
  },{
    question: "8. Can I customise or resize a piece?",
    answer: "Some styles, yes. We can resize rings and bracelets. However, engraving is available on select pieces. If you are looking for something personal, we can talk through options. We’re happy to help customise when the design allows.",
  },{
    question: "9. How do I know I can trust the quality if I’m buying online?",
    answer: "We get this a lot. That’s why every item has clear specs — materials, size, finish — plus real photos and packaging previews. Orders ship with tracking and insurance, and if something’s off, our support team sorts it fast. No bots, no nonsense, and no time wasted.",
  },{
    question: "10. What’s included in the price? Are there any making charges?",
    answer: "Yes — we break it down clearly for lab grown diamonds. You’re paying for the base metal, the gold tone plated finish, the labour, and GST. We keep things fair and consistent across all pieces, without the weight-based pricing or surprise extras you’d find at traditional jewellers.",
  },

];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full px-0 md:px-0 py-6 md:py-10">
      <div className="w-full max-w-full mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6 md:mb-8">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col sm:gap-4 w-full">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-md bg-white shadow-sm w-full"
            >
              <button
                className="w-full flex justify-between items-center p-3 sm:p-4 focus:outline-none"
                onClick={() => handleToggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="text-left text-sm sm:text-base md:text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transform transition-transform duration-300 ${openIndex === idx ? "rotate-90" : "rotate-0"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`px-3 sm:px-4 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx
                    ? "max-h-96 opacity-100 py-2"
                    : "max-h-0 opacity-0 py-0"
                }`}
                style={{ transitionProperty: "max-height, opacity, padding" }}
              >
                <p className="text-gray-700 text-xs sm:text-sm md:text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
