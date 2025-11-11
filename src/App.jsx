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

    {formData.nome} {formData.sobrenome} {formData.cidade} {formData.rua} {formData.bairro} {formData.numero}

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

    </>
  )
}
