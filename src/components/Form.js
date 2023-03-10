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

  const handleSubmit = async () => {
    const candidatRetenue = selectedOption[1];
    const candidatAccepte = selectedOption[2];
    const data = {
      referenceInterne,
      dateEntrevue,
      telechargementRefInterne,
      telechargementFicheEntrevue,
      telechargementRefExterne,
      validationDepartement,
      nonRetenuComment,
      dateCandidatInforme,
      commentaireSelection,
      rencontreEntente,
      cedulerOrientationGen,
      ficheEmpRemplis,
      documentsNecessaires,
      documentFile,
      preparationHoraireGen,
      acceuilGen,
      dateComplete,
      candidatAccepte,
      candidatRetenue,
      entryId,
      formDate: new Date().toISOString().substring(0, 10),
    };
    console.log(data)
    await sendForm(data);
  };
  const handleOptionChange = (questionId, optionId) => {
    setSelectedOption({ ...selectedOption, [questionId]: optionId });
  };
  
  const section1 = [ 
    { question: "Validation des r??ferences Interne si applicable?", value: referenceInterne, setValue: setreferenceInterne, type: "checkbox"},
    { question: "Date de l'entrevue", value: dateEntrevue, setValue: setdateEntrevue, type: "date"},
    { question: "T??l??vers?? la fiche de r??ferences interne(non fonctionel)", value: telechargementRefInterne, setValue: settelechargementRefInterne, type: "file"},
    { question: "T??l??vers?? la fiche de l'entrevue(non fonctionel)", value: telechargementFicheEntrevue, setValue: settelechargementFicheEntrevue, type: "file"},
    { question: "T??l??vers?? la fiche de r??ferences externe(non fonctionel)", value: telechargementRefExterne, setValue: settelechargementRefExterne, type: "file"},
    { question: "Validation aupr??s des d??partements", value: validationDepartement, setValue: setvalidationDepartement, type: "checkbox"},
    { question: "Est-ce que le candidat a ??t?? retenu?", value: selectedOption, setValue: setSelectedOption, type: "radio", id:1 , options: [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }]},
    { question: "Si non-retenu, pourquoi?", value: nonRetenuComment, setValue: setnonRetenuComment, type:"textbox"},
    { question: "Informer le candidat de la d??cision", value: dateCandidatInforme, setValue: setdateCandidatInforme, type:"date"},
    { question: "Est-ce que le candidat a accept?? l'offre?", value: selectedOption, setValue: setSelectedOption, type: "radio", id:2 ,  options: [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }] },
    { question: "Commentaire", value: commentaireSelection, setValue: setcommentaireSelection, type:"textbox"},
  ];
  const section2 = [             
    { question: "C??dulez une rencontre pour les signature de l'entente (si applicable)", value: rencontreEntente, setValue: setrencontreEntente, type: "checkbox" }, 
    { question: "C??dulez l'orientation g??n??ral", value: cedulerOrientationGen, setValue: setcedulerOrientationGen, type: "checkbox" }, 
    { question: "Est-ce que la fiche de l'employ?? a ??t?? remplie", value: ficheEmpRemplis, setValue: setficheEmpRemplis, type: "checkbox" }, 
    { question: "Recueuillir les documents n??cessaires (CheckVoid, Certificats, etc.)?", value: documentsNecessaires, setValue: setdocumentsNecessaires, type: "checkbox"},
    { question: "File upload (si n??cessaire)", value: documentFile, setValue: setdocumentFile, type: "file"},
    { question: "Pr??paration de l'horaire de l'orientation g??n??ral", value: preparationHoraireGen, setValue: setpreparationHoraireGen, type: "checkbox"},      
    { question: "Ajout?? l'acceuil de l'employ?? dans agenda & invit?? les gens concern??", value: acceuilGen, setValue: setacceuilGen, type: "checkbox"},      
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