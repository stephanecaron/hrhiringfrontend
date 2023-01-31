import React, { useState } from "react";
import { useParams } from 'react-router-dom';

const FormPage = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");
  const [question6, setQuestion6] = useState("");
  const [question7, setQuestion7] = useState("");
  const [question8, setQuestion8] = useState("");
  const [question9, setQuestion9] = useState("");
  let { entryId } = useParams();

  const handleSubmit = async () => {
    const data = {
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      question8,
      question9,
      entryId,
      date: new Date().toISOString(),
    };
  
    try {
      const response = await fetch("<YOUR_BACKEND_URL>", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
  
      alert("Form submitted!");
    } catch (error) {
      console.error(error);
      console.log(data)
      alert("Failed to submit form");
    }
  };

  const section1 = [ 
                    { question: "What is your name?", value: question1, setValue: setQuestion1, type: "number"},
                    { question: "Date", value: question2, setValue: setQuestion2, type: "date"},
                    { question: "what is your telephone #?", value: question3, setValue: setQuestion3, type: "tel"},
                   ];

  const section2 = [ 
                    { question: "What is your occupation?", value: question4, setValue: setQuestion4, },
                    { question: "What is your phone number?", value: question5, setValue: setQuestion5, },
                    { question: "What is your email?", value: question6, setValue: setQuestion6, },  
                  ];

  const section3 = [ 
                    { question: "Additional test", value: question7, setValue: setQuestion7, },
                    { question: "Comments", value: question8, setValue: setQuestion8, },
                    { question: "Commentaire", value: question9, setValue: setQuestion9, },
  
                  ];

  const sections = [section1, section2, section3];

  return (
 <div> <div className="section-nav-bar">
   <button
          className="section-nav-button"
          onClick={() => setCurrentSection(1)}
          disabled={currentSection === 1}
        >
          Section 1
        </button>
        <button
          className="section-nav-button"
          onClick={() => setCurrentSection(2)}
          disabled={currentSection === 2}
        >
          Section 2
        </button>
    <button
          className="section-nav-button"
          onClick={() => setCurrentSection(3)}
          disabled={currentSection === 3}
        >
          Section 3
        </button>
      </div>
      <div className="question-container">
    <b>  you are currently adding Entry ID : {entryId}</b>
        {sections[currentSection - 1].map((question, index) => (
          <div className="question-section" key={index}>
            <p className="question-text">{question.question}</p>
              <input
                className="question-input"
                value={question.value}
                onChange={(event) => question.setValue(event.target.value)}
                type={question.type === 'text' ? 'text' :
                      question.type === 'number' ? 'number' :
                      question.type === 'tel' ? 'tel' :
                      question.type === 'date' ? 'date' :
                      question.type === 'email' ? 'email' : 'text'}
            />
          </div>
        ))}
      </div>
          <button className="submit-button" onClick={() => handleSubmit()}>
          Submit
          </button>
    </div>
  );
};

export default FormPage;