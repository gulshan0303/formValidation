import React from 'react'
import "./style.css";
import { useFormik } from 'formik';
import { signUpSchema } from '../schema';
const initialValues ={
    name:"",
    email:"",
    pass:"",
    cpass:""
}

const Registration = () => {

  const {values,errors, touched ,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema:signUpSchema,
    onSubmit: (values)=>{
      console.log(values);
    },
  })
 console.log(errors);
  return (
    <>
         <div className="container">
             <center><h2>Welcome Pepole!!</h2></center>
             <hr />

              <form onSubmit={handleSubmit}>
                <div className="input-block">
                    <label htmlFor="name" className='input-label'>Name</label>
                    <input type="text"
                     autoComplete='off'
                     placeholder='name'
                     id='name'
                     name='name'
                     value={values.name}
                     onChange={handleChange}
                     onBlur={handleBlur}
                    />
                </div>
                {errors.name && touched.name? ( <p>{errors.name}</p>) : null}
                <div className="input-block">
                    <label htmlFor="email" className='input-label'>Email</label>
                    <input type="email"
                     autoComplete='off'
                     placeholder='Email'
                     id='email'
                     name='email'
                     value={values.email}
                     onChange={handleChange}
                     onBlur={handleBlur}
                    />
                </div>
                {errors.email && touched.email? ( <p>{errors.email}</p>) : null}
                <div className="input-block">
                    <label htmlFor="pass" className='input-label'>Password</label>
                    <input type="password"
                     autoComplete='off'
                     placeholder='Password'
                     id='pass'
                     name='pass'
                     value={values.pass}
                     onChange={handleChange}
                     onBlur={handleBlur}
                    />
                </div>
                {errors.pass && touched.pass? ( <p>{errors.pass}</p>) : null}
                <div className="input-block">
                    <label htmlFor="cpass" className='input-label'>Confirm Password</label>
                    <input type="password"
                     autoComplete='off'
                     placeholder='Confirm Password'
                     id='cpass'
                     name='cpass'
                     value={values.cpass}
                     onChange={handleChange}
                     onBlur={handleBlur}
                    />
                </div>
                {errors.cpass && touched.cpass? ( <p>{errors.cpass}</p>) : null}
                <div className="btn">
                  <button>Submit</button>
                </div>
              </form>
             
         </div>
    
    </>
  )
}

export default Registration