import React, { useState } from 'react';

const FAQ = () => {
  const questions = [
    {
      question: 'How we can help you?',
      answer: 'Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputate.',
    },
    {
      question: 'How to get started?',
      answer: 'Detailed instructions or content can go here.',
    },
    // add other questions as needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
 <section className='fre-sec'>
     <div className="container">
      <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {questions.map((item, index) => (
        <div key={index} className="question-item">
          <div className="question" onClick={() => toggleQuestion(index)}>
            <h3>
              {index + 1}. {item.question}
            </h3>
            <span className={activeIndex === index ? 'arrow down' : 'arrow'}>▼</span>
          </div>
          {activeIndex === index && <div className="answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  </div>
 </section>
  );
};

export default FAQ;
