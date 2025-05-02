# 📘 Capturing Multiple Inputs with a Single State in React

## 🧠 Goal

Learn how to:

* Create a form with multiple fields.
* Use `useState` to store all form data in a single state.
* Dynamically update this state as the user types.
* Display the data and send it (in this example, to the console).

---

## 🧹 General Code Structure

```js
import { useState } from "react"

export default function App() {
  ...
}
```

* We're using **React with a function component** (`function App`) and the **`useState` hook** to manage form data.
* We import `useState` from React to use it inside our `App` component.

---

## 💃 Creating State with Multiple Fields

```js
const [formData, setFormData] = useState({
  nome: "",
  sobrenome: "",
  cidade: "",
  rua: "",
  bairro: "",
  numero: ""
})
```

* `formData` stores all the input data.
* Each form field is represented as a **key in an object**.
* The initial value of each field is an **empty string**.

---

## 🎯 `handleChange` Function: Updating the State

```js
function handleChange({ target }) {
  const { name, value } = target
  setFormData({
    ...formData, [name]: value
  })
}
```

### Explanation:

* `{ target }`: is the `<input>` element that was modified.
* `name` is the name of the field (e.g., "nome", "cidade", etc.).
* `value` is what the user typed.
* We use the spread operator `...formData` to **keep the previous data**, and update **only the field that changed**.
* This is called **"dynamic property update"**.

🔔 **Warning:** If you forget `...formData`, the other data will be lost!

---

## 🔁 `handleClick` Function: Sending the Data

```js
function handleClick() {
  console.log(formData)
}
```

* When the button is clicked, the typed data is displayed in the console.

---

## 📟 Form Fields

```jsx
<input
  onChange={handleChange}
  name="nome"
  type="text"
  placeholder="Nome"
  value={formData.nome}
/>
```

This is an example of a form field. Here's what it contains:

| Property                | What it does                                                 |
| ----------------------- | ------------------------------------------------------------ |
| `onChange`              | Calls the `handleChange` function every time the user types. |
| `name="nome"`           | Used to identify which field was changed.                    |
| `value={formData.nome}` | Controls the input using React state.                        |
| `placeholder`           | Shows a hint text when the field is empty.                   |

🔀 This pattern is repeated for **all other fields**: `sobrenome`, `cidade`, `rua`, `bairro`, `numero`.

---

## ✅ Displaying Data on the Screen

```jsx
{formData.nome} {formData.sobrenome} {formData.cidade} ...
```

* This shows in real-time what the user is typing, using the values from `formData`.

---

## 🎉 Final Result

* The user fills in the data.
* The values are dynamically updated in the state.
* React displays the data as the user types.
* When **Send** is clicked, all data is shown in the console.

---

## 📌 Tips for Beginners

* Always use `value={...}` in inputs to keep control over the state.
* Use `name="..."` with the same key names as in the state.
* Use the spread operator `...formData` to avoid losing previous data.

---