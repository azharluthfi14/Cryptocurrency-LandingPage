import React from "react";
import { asked } from "../assets";
import Accordion from "../components/Accordion";

export default function Faq() {
  const faqs = [
    {
      question: "Why should I choose NEFA?",
      answered:
        "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
      show: true,
      indexQ: "question1",
      indexA: "answered1",
      expand: true,
    },
    {
      question: "How secure is NEFA?",
      answered:
        "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
      show: false,
      indexQ: "question2",
      indexA: "answered2",
      expand: false,
    },
    {
      question: "Do I have to buy a whole Bitcoin?",
      answered:
        "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
      show: false,
      indexQ: "question3",
      indexA: "answered3",
      expand: false,
    },
    {
      question: "How do I actually buy Bitcoin?",
      answered:
        "We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.",
      show: false,
      indexQ: "question4",
      indexA: "answered4",
      expand: false,
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex justify-center items-center mb-10">
          <img src={asked} alt="asked-image" />
        </div>
        <div>
          <h1 className="uppercase text-blue-500 mb-2">Support</h1>
          <h2 className="font-bold text-lg">Frequently asked questions</h2>
          <div className="accordion accordion-flush mt-10" id="accordionFAQ">
            {faqs.map((item, i) => (
              <Accordion
                key={i}
                question={item.question}
                answered={item.answered}
                isShow={item.show}
                indexAnswered={item.indexA}
                indexQuestion={item.indexQ}
                isExpand={item.expand}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
