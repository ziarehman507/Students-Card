import React from 'react'
import {  useFormik } from 'formik';
import *as yup from 'yup'
import { useNavigate } from 'react-router-dom';



const Auth = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },

    validationSchema:yup.object({
      email: yup.string()
      .email('Ghalat Dala He..pakhdoooon')
      .required('Abey Email to dal'),
      password: yup.string()
      .max(8,'Kam Az Kam 8 Ya Phr Kam')
      .required('Ye Pappa Dalenge'),
    }),

    onSubmit: (values, { setSubmitting }) => {
      // Do something with the form values
      setSubmitting(false);
      alert(JSON.stringify(values));
    
        navigate('/Home', {replace:true, email: values.email})

    },  
    
  })

  
  
  return (
    <>
    <div className='center'>
    <div className='main'>

    <h1>LOGIN</h1>

    <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Enter your email"
            value={formik.values.email}
            error={formik.errors.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}

          />
    {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

<label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formik.values.password}
            error={formik.errors.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
              {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}

          <button type='submit' value='submit' onClick={formik.handleSubmit}>Login</button>



      
    </div>
    </div>
    </>
  )
}

export default Auth;