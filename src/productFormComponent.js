import React,{useState,useEffect,useRef} from 'react';
 import { Formik } from 'formik';

 const productstyle = {
  // backgroundColor:"grey",
  height:"100vh"
 }

 const pbw={
    width:"17%",
    borderRadius:"25px",
    backgroundColor:"red"
 }
 const ProductFormComponent = () => {
   
  const[category,setCategory] = useState([]);
    const imageRef = useRef();

    useEffect(()=>{
        fetch('http://localhost:9000/category/category-list',{
          method:'POST',
          headers:{
              "Accept":"application/json",
              "Content-Type":"application/json",
          }  
        }).then(function(response){
            return response.json();
        }).then(function(data){
            console.log(data);
            setCategory(data.data);
        })
    },[]);
 return(
     <React.Fragment>
   <div className = "App" style={productstyle}>
     <h1>ADD PRODUCT FORM</h1>
     <Formik
       initialValues={{ name:'', detail: '',price:"",quantity:"",category:"", image:""}}
       validate={values => {
         const errors = {};
         if (!values.name) {
            errors.name = 'Required';
          }
        
         if (!values.detail) {
            errors.detail = 'Required';
          }
          if (!values.price) {
            errors.price = 'Required';
          }
          if (!values.quantity) {
            errors.quantity = 'Required';
          }
          if (!values.category) {
            errors.category = 'Required';
          }
          if (!values.image) {
            errors.image = 'Required';
          }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           console.log(values);
           console.log(imageRef.current.files[0]);
             var formData = new FormData()
             formData.append('name', values.name)
             formData.append('detail',values.detail)
             formData.append('price',values.price)
             formData.append('quantity',values.quantity)
             formData.append('category',values.category)
             formData.append('image',imageRef.current.files[0])
          console.log(formData);
        fetch("http://localhost:9000/product/product-main",{
            method: 'POST',
            // headers:{
            //     "Accept":"application/json",
            //     "Content-Type":"application/json"
            // },
            body:formData,
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
         <form onSubmit={handleSubmit} className="mt-2">
            Name : <input
             type="text"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
           />
           {errors.name && touched.name && errors.name}<br></br>
         
          Detail : <input className="mt-2"
             type="text"
             name="detail"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.detail}
           />
           {errors.detail && touched.detail && errors.detail}<br></br>

           Price : <input className="mt-2"
             type="number"
             name="price"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}
           />
           {errors.price && touched.price && errors.price}<br></br>

           Quantity : <input className="mt-2"
             type="number"
             name="quantity"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.quantity}
           />
           {errors.quantity && touched.quantity && errors.quantity}<br></br>

           Category : <select className="mt-2"
             type="text"
             name="category"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.category}
           >
            <option defaultValue>SELECT CATEGORY</option>

        {category.map((category , index)=>{
            return(
                <option key={index} value={category._id}>{category.name}</option>
            );
        })}
           </select>
           {errors.category && touched.category && errors.category}<br></br>

           Image : <input className="mt-4"
           ref={imageRef}
             type="file"
             name="image"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.image}
           />
           {errors.image && touched.image && errors.image}<br></br>

           <button type="submit" style={pbw} className="mt-4" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
   </React.Fragment>
 );
 }
 export default ProductFormComponent;


