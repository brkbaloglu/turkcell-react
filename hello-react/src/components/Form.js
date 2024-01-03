import React, {useState} from 'react'

function Form() {
    const [form, setForm] = useState({name: "", surname: "", gender: "Erkek"})

    const handleChange = (event) => {
        setForm((prev) => ( {...prev, [event.target.name]: event.target.value}))
    }

    // const [name, setName] = useState("")
    // const [surname, setSurname] = useState("")
    // const [gender, setGender] = useState("Erkek")
  return (
    <div>
        <div>
            İsim
            <input type="text" name='name' onChange={handleChange} value={form.name} placeholder='İsim' />
            <input type="text" name='surname' onChange={handleChange} value={form.surname} placeholder='Soyisim' />


        </div>

        <div>
            <div>Cinsiyet</div>
            <select name="gender" id="" value={form.gender} onChange={handleChange}>
                <option value="Erkek">Erkek</option>
                <option value="Kadin">Kadın</option>
            </select>
        </div>

        <div>
        <strong>İsim: {form.name} {form.surname}</strong>
        <br />
        <strong>Cinsiyet: {form.gender}</strong>

        </div>
    </div>
  )
}

export default Form