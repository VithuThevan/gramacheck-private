import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';

function Form() {
    return (
      <Formik
        initialValues={{ nic: '', gsdivision: '', housenumber: '', street: '', city: '', province: '' }}
        validate={values => {
          const errors = {};
          if (!/^(\d{9}[VvXx])|(\d{12})$/.test(values.nic)) {
            errors.nic = 'Invalid NIC number';
          }
          if (!values.gsdivision) {
            errors.gsdivision = 'Required';
          }
          if (!values.street) {
            errors.street = 'Required';
          }
          if (!values.city) {
            errors.city = 'Required';
          }
          if (!values.province) {
            errors.province = 'Required';
          }
          return errors;
        }}
        onSubmit={values => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nic">NIC:</label>
              <Field type="text" name="nic" onChange={handleChange} onBlur={handleBlur} value={values.nic} />
              <ErrorMessage name="nic" component="div" />
            </div>
            <div>
              <label htmlFor="GsDivision">GS Division:</label>
              <Field type="text" name="gsdivision" onChange={handleChange} onBlur={handleBlur} value={values.gsdivision} />
              <ErrorMessage name="gsdivision" component="div" />
            </div>
            <div>
              <label htmlFor="housenumber">House No:</label>
              <Field type="text" name="housenumber" onChange={handleChange} onBlur={handleBlur} value={values.housenumber} />
              <ErrorMessage name="housenumber" component="div" />
            </div>
            <div>
              <label htmlFor="street">Street:</label>
              <Field type="text" name="street" onChange={handleChange} onBlur={handleBlur} value={values.street} />
              <ErrorMessage name="street" component="div" />
            </div>
            <div>
              <label htmlFor="city">City:</label>
              <Field type="text" name="city" onChange={handleChange} onBlur={handleBlur} value={values.city} />
              <ErrorMessage name="city" component="div" />
            </div>
            <div>
              <label htmlFor="province">Province:</label>
              <Field type="text" name="province" onChange={handleChange} onBlur={handleBlur} value={values.province} />
              <ErrorMessage name="province" component="div" />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    );
  }
  

export default Form;
