import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Navi from './navi';

const API_Url = 'https://611f50dd9771bf001785c846.mockapi.io/Products';


const validate = (values) => {
    const error = {};
    

    
    const re = /^[0-9\b]+$/;
    
    if(!values.ProductName)
    
    {
    
      error.ProductName = 'Product Name is Required '
    }
    
    
    if(!values.Quantity)
    {
    
      error.Quantity = 'Quantity is  Required'
    }
    

    
      if(!values.Barcode)
      {
      
        error.Barcode = 'Quantity is  Required'
      }
      


        if(!values.Amount)
        {
        
          error.Amount = 'Quantity is  Required'
        }


    
    return error;
    
    
    }
    
    function Products(){
    
    
      return(
 

        <Formik  
        
        initialValues={{
          
          ProductName: '',
          Quantity:'',
          Barcode:'',
          Amount:''
    
        }}
        validate= {validate}
    
        onSubmit={(values, { setSubmitting, resetForm }) => {
        
          axios.post(API_Url,{
    
            ProductName:values.ProductName,
            Quantity:values.Quantity,
            Barcode:values.Barcode,
            Amount:values.Amount
        })
          
        alert("Product Details Added Successfully")
        resetForm();
        }}
       
    
        >     
    
    
       {() => {
    
       return(
    
        <>
               <Navi />
        <div class="container">
          <h1 class="header">CRUD USING FORMIK</h1>
          <br />
    <Form  class="row g-3">
      <div class="col-md-6">
        <label class="form-label"> ProductName <span>*</span></label>
        <Field type="text" class="form-control"  name="ProductName" />
        <p> <ErrorMessage name="ProductName" /> </p>
      </div>
    
      <div class="col-md-6">
        <label  class="form-label"> Quantity <span>*</span></label>
        <Field type="number" class="form-control"  name="Quantity" />
     <p><ErrorMessage name="Quantity" /> </p> 
      </div>
    
      <div class="col-md-6">
        <label  class="form-label"> Barcode <span>*</span></label>
        <Field type="number" class="form-control"  name="Barcode" />
     <p>  <ErrorMessage name="Barcode" /> </p>
      </div>
      <div class="col-md-6">
        <label  class="form-label"> Amount <span>*</span></label>
        <Field type="number" class="form-control"  name="Amount" />
     <p>  <ErrorMessage name="Amount" /></p>
      </div>
    
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </Form>
    </div>
        </>
      )
    }
    
    
    }
    
        </Formik>
      );
    }

    export default Products;