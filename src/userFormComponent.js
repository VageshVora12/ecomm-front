import React from 'react';
 import { Formik } from 'formik';
 
 const userstyle={
  height:"100vh"
 }
 const ubw={
  width:"20%",
  borderRadius:"25px",
  backgroundColor:"red"
}
 const UserFormComponent = () => (
   <div className = "App"  style={userstyle}>
     <h1 className="mt-5" >ADD USER FORM</h1>
     <Formik style={userstyle}
       initialValues={{ name:'', email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.name) {
            errors.name = 'Required';
          }
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         if (!values.password) {
            errors.password = 'Required';
          }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
        //    alert(JSON.stringify(values, null, 2));
        // console.log(values);
        fetch("http://localhost:9000/user/user-main",{
            method: 'POST',
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(values)
        }).then(function(response){
            return response.json();
        }).then((data)=>{
            console.log(data); 
        });      
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
            NAME : <input className="mt-5"
             type="text"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
           />
           {errors.name && touched.name && errors.name}<br></br>
          EMAIL : <input className="mt-3"
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}<br></br>
          PASSWORD : <input className="mt-3"
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}<br></br>
           <button type="submit" style={ubw} className="mt-5" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
 );

 export default UserFormComponent;