// src/components/formikForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation Schema (REQUIRED)
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}   // ✅ Important
      onSubmit={(values) => {
        console.log("Form Data:", values);
      }}
    >
      <Form>
        <div>
          <label>Name:</label>
          <Field name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label>Email:</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label>Password:</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
