import React from 'react'
const Accordion = ({ question, answered, isShow, indexQuestion, indexAnswered, isExpand }) => {
    return (
        <div className="accordion" id='accordionFAQ'>
            <div className="accordion-item border-b">
                <h2 className="accordion-header" id={indexQuestion}>
                    <button
                        className="accordion-button relative collapsed flex items-center
                     w-full
                     py-4
                     text-base text-gray-800 text-left
                     bg-white
                     border-0
                     rounded-none
                     transition
                     focus:outline-none
                    "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${indexAnswered}`}
                        aria-expanded={isExpand}
                    >
                        {question}
                    </button>
                </h2>
                <div
                    id={indexAnswered}
                    className={`accordion-collapse collapse ${isShow ? 'show' : ''}`}
                    data-bs-parrent="#accordionFAQ"
                    aria-labelledby={indexQuestion}
                >
                    <div className="accordion-body leading-relaxed py-4 text-sm">{answered}</div>
                </div>
            </div>
        </div>
    );
}

export default Accordion