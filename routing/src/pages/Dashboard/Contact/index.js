import { useFormik } from 'formik';
import React from 'react'
import validationSchema from './validations'
function Contact() {

  const {handleSubmit, handleChange, handleBlur, values, isSubmitting, errors, touched} = useFormik({
    initialValues:{
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },

    onSubmit: async(values, bag) => {
      
      await new Promise((r)=>setTimeout(r, 1000))
      
      if(values.email === "test@test"){
        return bag.setErrors({email : "Bu e-mail adresi kullanılmaktadır", message: "Lütfen geçersiz karakter kullanmayınız."})
      }



      console.log(values);
      console.log(bag)

      bag.resetForm()
    },

    validationSchema: validationSchema,

  })

  // console.log(touched)


  return (
    <div>
      <h2>Contact</h2>
      
        <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input onBlur={handleBlur("firstName")} disabled={isSubmitting} value={values.firstName} id="firstName" name="firstName" placeholder="Jane" onChange={handleChange("firstName")} />

        {errors.firstName && touched.firstName && <div>{errors.firstName}</div>}

        <label htmlFor="lastName">Last Name</label>
        <input onBlur={handleBlur("lastName")} disabled={isSubmitting} value={values.lastName} id="lastName" name="lastName" placeholder="Doe" onChange={handleChange("lastName")} />
        {errors.lastName && touched.lastName && <div>{errors.lastName}</div>}

        <label htmlFor="email">Email</label>
        <input
          onBlur={handleBlur("email")}
          value={values.email}
          disabled={isSubmitting}
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          onChange={handleChange("email")}
        />

        {errors.email && touched.email && <div>{errors.email}</div>}


        <label htmlFor="email">Message</label>
        <textarea
          onBlur={handleBlur("message")}
          value={values.message}
          disabled={isSubmitting}
          id="message"
          name="message"
          placeholder="message"
          type="text"
          onChange={handleChange("message")}
        />

        {errors.message && touched.message && <div>{errors.message}</div>}


        <button type="submit" disabled={isSubmitting}>Submit</button>
      </form>
       

    </div>
  )
}

export default Contact