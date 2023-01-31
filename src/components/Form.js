import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { sendForm } from "../actions";

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
      formDate: new Date().toISOString().substring(0, 10),
    };
    console.log(data)
    await sendForm(data);
  };

  const section1 = [ 
                    { question: "Validation des réferences Interne si applicable?", value: question1, setValue: setQuestion1, type: "checkbox"},
                    { question: "Date de l'entrevue", value: question2, setValue: setQuestion2, type: "date"},
                    { question: "Televersé la fiche de réferences interne", value: question5, setValue: setQuestion5, type: "text"},
                    { question: "Televersé la fiche de l'entrevue", value: question3, setValue: setQuestion3, type: "text"},
                    { question: "Televersé la fiche de réferences externe", value: question5, setValue: setQuestion5, type: "text"},
                    { question: "Validation auprès des départements", value: question5, setValue: setQuestion5, type: "checkbox"},
                    { question: "Informer le candidat de la décision", value: question4, setValue: setQuestion4, type:"date"},
                    { question: "Est-ce que le candidat a été retenu (Yes or No)", value: question4, setValue: setQuestion4, type:"checkbox"},
                    { question: "Date ou le candidat a été informé de la décision", value: question4, setValue: setQuestion4, type:"date"},
                    { question: "Si non-retenu, pourquoi?", value: question4, setValue: setQuestion4, type:"text"},
                    { question: "Est-ce que l'employé a accepté l'offre (Yes or No)", value: question4, setValue: setQuestion4, type:"checkbox"},
                    { question: "Commentaire", value: question4, setValue: setQuestion4, type:"text"},
                  ];

  const section2 = [ 
                   
    { question: "Cédulez une rencontre pour les signature de l'entente (si applicable)", value: question6, setValue: setQuestion6, type: "checkbox" }, 
    { question: "Cédulez l'orientation général", value: question6, setValue: setQuestion6, type: "checkbox" }, 
    { question: "Est-ce que la fiche de l'employé a été remplie", value: question6, setValue: setQuestion6, type: "checkbox" }, 
    { question: "Recueuillir les documents nécessaires (CheckVoid, Certificats, etc.)?", value: question5, setValue: setQuestion5, type: "checkbox"},
    { question: "File upload (si nécessaire)", value: question5, setValue: setQuestion5, type: "checkbox"},
    { question: "Est-ce que j'ai recueuilli tout les documents nécessaires afin de finalisé le dossier physique de l'employé?", value: question5, setValue: setQuestion5, type: "checkbox"},
    { question: "Préparation de l'horaire de l'orientation général", value: question5, setValue: setQuestion5, type: "checkbox"},      
    { question: "Ajouté l'acceuil de l'employé dans agenda & invité les gens concerné", value: question5, setValue: setQuestion5, type: "checkbox"},      
    { question: "Date de la completion de l'embauche", value: question5, setValue: setQuestion5, type: "date"},      
                  ];



  const sections = [section1, section2];

  return (
 <div> <div className="section-nav-bar">
   <button
          className="section-nav-button"
          onClick={() => setCurrentSection(1)}
          disabled={currentSection === 1}
        >
          Selection
        </button>
        <button
          className="section-nav-button"
          onClick={() => setCurrentSection(2)}
          disabled={currentSection === 2}
        >
          Embauche
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
                      question.type === 'checkbox' ? 'checkbox' :
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