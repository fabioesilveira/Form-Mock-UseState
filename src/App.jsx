import { useState } from "react"

export default function App() {

  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    cidade: "",
    rua: "",
    bairro: "",
    numero: ""
  })

  function handleChange({ target }) {
    const { name, value } = target
    setFormData({
      ...formData, [name]: value
    })
  }

  function handleClick() {
    console.log(formData)
  }

  return (
    <>
      <h2 className="h2-home">Preview:</h2>

      <div className="input-values-results">



        {formData.nome} {formData.sobrenome} {formData.cidade} {formData.rua} {formData.bairro} {formData.numero}

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
          placeholder="sobrenome"
          value={formData.sobrenome}
        />
        <input
          onChange={handleChange}
          name="cidade"
          type="text"
          placeholder="cidade"
          value={formData.cidade}
        />
        <input
          onChange={handleChange}
          name="rua"
          type="text"
          placeholder="rua"
          value={formData.rua}
        />
        <input
          onChange={handleChange}
          name="bairro"
          type="text"
          placeholder="bairro"
          value={formData.bairro}
        />
        <input
          onChange={handleChange}
          name="numero"
          type="text"
          placeholder="numero"
          value={formData.numero}
        />

        <button onClick={handleClick}>Enviar</button>



      </div>

      <p className="paragraph">Oi! Eu sou _______ _______ e moro em _______. Minha casa fica na rua _______,
        número _______, no bairro _______.</p>

    </>
  )
}
