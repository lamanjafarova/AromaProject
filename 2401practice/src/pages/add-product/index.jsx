import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import "./index.scss"
import { useNavigate } from 'react-router-dom';

const AddProductSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
const AddProduct = () => {
  const navigate = useNavigate()
  return (
    <div className='container'>
     <div className="add">
     <h1>Add New Product</h1>
       <Formik
       initialValues={{
         title: '',
         name: '',
         price: '',
         imgUrl: ''
       }}
       validationSchema={AddProductSchema}
       onSubmit={values => {
         axios.post("http://localhost:8000/product", values)
         navigate("/")
       }}
     >
       {({ errors, touched }) => (
         <Form className='form'>
         <div className="input"><Field name="title" placeholder="Title"/></div>
           {errors.title && touched.title ? (
             <div>{errors.title}</div>
           ) : null}
         <div className="input"><Field name="name" placeholder="Name"/></div>
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
          <div className="input"><Field name="price" type="price" placeholder="Price" /></div>
       <div className="input"><Field name="imgUrl" type="imgUrl" placeholder="Image Url" /></div>
           <button className='addBtn' type="submit">Submit</button>
         </Form>
       )}
     </Formik>
     </div>
    </div>
  )
}

export default AddProduct
