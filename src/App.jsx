import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    cidade: "",
    rua: "",
    bairro: "",
    numero: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange({ target }) {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleClick() {
    setSubmitted(true);
    console.log("Dados enviados:", formData);
  }

  // Check if all fields are filled
  const allFilled = Object.values(formData).every((val) => val.trim() !== "");

  return (
    <>
      <h2 className="h2-home">Preview:</h2>

      <div className="input-values-results">
        {formData.nome} {formData.sobrenome} {formData.cidade} {formData.rua}{" "}
        {formData.bairro} {formData.numero}
      </div>

      <div className="paragraph-confirmation">

      {/* ✅ Show the message only if all fields are filled */}
      {allFilled ? (
        <p className="confirm-text">
          A informação está correta? Se sim, clique em <strong>Enviar</strong>.
        </p>
      ) : (
        <p className="fill-text">
          Preencha todos os campos para revisar suas informações.
        </p>
      )}

      </div>

      <div className="div-body">
        <input
          onChange={handleChange}
          name="nome"
          type="text"
          placeholder="Nome"
          value={formData.nome}
        />
        <input
          onChange={handleChange}
          name="sobrenome"
          type="text"
          placeholder="Sobrenome"
          value={formData.sobrenome}
        />
        <input
          onChange={handleChange}
          name="cidade"
          type="text"
          placeholder="Cidade"
          value={formData.cidade}
        />
        <input
          onChange={handleChange}
          name="rua"
          type="text"
          placeholder="Rua"
          value={formData.rua}
        />
        <input
          onChange={handleChange}
          name="bairro"
          type="text"
          placeholder="Bairro"
          value={formData.bairro}
        />
        <input
          onChange={handleChange}
          name="numero"
          type="text"
          placeholder="Número"
          value={formData.numero}
        />



        <button onClick={handleClick}>Enviar</button>
      </div>

      <p className="paragraph">
        Oi! Eu sou{" "}
        <span className="highlight">
          {submitted ? formData.nome || "_______" : "_______"}
        </span>{" "}
        <span className="highlight">
          {submitted ? formData.sobrenome || "_______" : "_______"}
        </span>{" "}
        e moro em{" "}
        <span className="highlight">
          {submitted ? formData.cidade || "_______" : "_______"}
        </span>
        . Minha casa fica na rua{" "}
        <span className="highlight">
          {submitted ? formData.rua || "_______" : "_______"}
        </span>
        , número{" "}
        <span className="highlight">
          {submitted ? formData.numero || "_______" : "_______"}
        </span>
        , no bairro{" "}
        <span className="highlight">
          {submitted ? formData.bairro || "_______" : "_______"}
        </span>
        .
      </p>

      <style jsx>{`
        .highlight { 
         color: rgb(92, 92, 222); 
         font-family: "Stack Sans Notch", 
         sans-serif; 
         }

        .paragraph {
         margin-top: 20px; 
         font-size: 1.1rem; 
         ine-height: 1.6; 
         font-size: 25px;
        text-align: center; 
        margin-top: 80px; 
         }

        .confirm-text {
          color: green;
          font-weight: 500;
          margin-top: 10px;
          font-size: 1.05rem;
         }

        .fill-text {
          color: gray;
          font-size: 1.05rem;
          margin-top: 10px;
         }
      `}</style>
    </>
  );
}