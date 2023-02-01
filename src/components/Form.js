import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { sendForm } from "../actions";
import "./forms.css";


const FormPage = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [referenceInterne, setreferenceInterne] = useState("");
  const [dateEntrevue, setdateEntrevue] = useState("");
  const [telechargementRefInterne, settelechargementRefInterne] = useState("");
  const [telechargementFicheEntrevue, settelechargementFicheEntrevue] = useState("");
  const [telechargementRefExterne, settelechargementRefExterne] = useState("");
  const [validationDepartement, setvalidationDepartement] = useState("");
  const [nonRetenuComment, setnonRetenuComment] = useState("");
  const [dateCandidatInforme, setdateCandidatInforme] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [commentaireSelection, setcommentaireSelection] = useState("");
  const [rencontreEntente, setrencontreEntente] = useState("");
  const [cedulerOrientationGen, setcedulerOrientationGen] = useState("");
  const [ficheEmpRemplis, setficheEmpRemplis] = useState("");
  const [documentsNecessaires, setdocumentsNecessaires] = useState("");
  const [documentFile, setdocumentFile] = useState("");
  const [preparationHoraireGen, setpreparationHoraireGen] = useState("");
  const [acceuilGen, setacceuilGen] = useState("");
  const [dateComplete, setdateComplete] = useState("");
  let { entryId } = useParams();
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (questionId, optionId) => {
    setSelectedOption({ ...selectedOption, [questionId]: optionId });
  };
  const handleSubmit = async () => {
    const data = {
      referenceInterne,
      dateEntrevue,
      telechargementRefInterne,
      telechargementFicheEntrevue,
      telechargementRefExterne,
      validationDepartement,
      dateCandidatInforme,
      nonRetenuComment,
      commentaireSelection,
      entryId,
      formDate: new Date().toISOString().substring(0, 10),
    };
    console.log(data)
    await sendForm(data);
  };

  const section1 = [ 
    { question: "Validation des réferences Interne si applicable?", value: referenceInterne, setValue: setreferenceInterne, type: "checkbox"},
    { question: "Date de l'entrevue", value: dateEntrevue, setValue: setdateEntrevue, type: "date"},
    { question: "Téléversé la fiche de réferences interne(non fonctionel)", value: telechargementRefInterne, setValue: settelechargementRefInterne, type: "file"},
    { question: "Téléversé la fiche de l'entrevue(non fonctionel)", value: telechargementFicheEntrevue, setValue: settelechargementFicheEntrevue, type: "file"},
    { question: "Téléversé la fiche de réferences externe(non fonctionel)", value: telechargementRefExterne, setValue: settelechargementRefExterne, type: "file"},
    { question: "Validation auprès des départements", value: validationDepartement, setValue: setvalidationDepartement, type: "checkbox"},
    { question: "Est-ce que le candidat a été retenu?", value: selectedOption, setValue: setSelectedOption, type: "radio", id:1 , options: [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }]},
    { question: "Si non-retenu, pourquoi?", value: nonRetenuComment, setValue: setnonRetenuComment, type:"textbox"},
    { question: "Informer le candidat de la décision", value: dateCandidatInforme, setValue: setdateCandidatInforme, type:"date"},
    { question: "Est-ce que le candidat a accepté l'offre?", value: selectedOption2, setValue: setSelectedOption2, type: "radio", id:2 ,  options: [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }] },
    { question: "Commentaire", value: commentaireSelection, setValue: setcommentaireSelection, type:"textbox"},
  ];
  const section2 = [             
    { question: "Cédulez une rencontre pour les signature de l'entente (si applicable)", value: rencontreEntente, setValue: setrencontreEntente, type: "checkbox" }, 
    { question: "Cédulez l'orientation général", value: cedulerOrientationGen, setValue: setcedulerOrientationGen, type: "checkbox" }, 
    { question: "Est-ce que la fiche de l'employé a été remplie", value: ficheEmpRemplis, setValue: setficheEmpRemplis, type: "checkbox" }, 
    { question: "Recueuillir les documents nécessaires (CheckVoid, Certificats, etc.)?", value: documentsNecessaires, setValue: setdocumentsNecessaires, type: "checkbox"},
    { question: "File upload (si nécessaire)", value: documentFile, setValue: setdocumentFile, type: "checkbox"},
    { question: "Préparation de l'horaire de l'orientation général", value: preparationHoraireGen, setValue: setpreparationHoraireGen, type: "checkbox"},      
    { question: "Ajouté l'acceuil de l'employé dans agenda & invité les gens concerné", value: acceuilGen, setValue: setacceuilGen, type: "checkbox"},      
    { question: "Date de la completion de l'embauche", value: dateComplete, setValue: setdateComplete, type: "date"},      
  ];

  const sections = [section1, section2];

  return (
    <div><center>  you are currently adding Entry ID : {entryId}</center> <div className="section-nav-bar">
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
              {sections[currentSection - 1].map((question, index) => (
      <div className="question-section" key={index}>
        <p className="question-text">{question.question}</p>
        {question.type === 'text' && (
          <input
            className="question-input"
            value={question.value}
            onChange={(event) => question.setValue(event.target.value)}
            type="text"
          />
        )}
        {question.type === 'textbox' && (
          <textarea
            className="question-input"
            value={question.value}
            onChange={(event) => question.setValue(event.target.value)}
            type="text"
          />
        )}
        {question.type === 'number' && (
          <input
            className="question-input"
            value={question.value}
            onChange={(event) => question.setValue(event.target.value)}
            type="number"
          />
        )}
        {question.type === 'tel' && (
          <input
            className="question-input"
            value={question.value}
            onChange={(event) => question.setValue(event.target.value)}
            type="tel"
          />
        )}
        {question.type === 'date' && (
          <input
            className="question-input"
            value={question.value}
            onChange={(event) => question.setValue(event.target.value)}
            type="date"
          />
        )}
        {question.type === 'checkbox' && (
          <input
            className="question-input"
            value={question.value}
            onChange={(event) => question.setValue(event.target.value)}
            type="checkbox"
          />
        )}
        {question.type === 'file' && (
          <input
            className="question-input"
            value={question.value}
            onChange={(event) => question.setValue(event.target.value)}
            type="file"
          />
        )}
        {question.type === 'email' && (
          <input
            className="question-input"
            value={question.value}
            onChange={(event) => question.setValue(event.target.value)}
            type="email"
          />
        )}
            {question.type === 'radio' && (
          question.options.map((option, index) => (
            <div key={index}>
              <input
                id={option.id}
                type="radio"
                value={option.value}
                checked={selectedOption[question.id] === option.value}
                onChange={() => handleOptionChange(question.id, option.value)}
              />
              <label>{option.label}</label>
            </div>
          ))
        )}
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