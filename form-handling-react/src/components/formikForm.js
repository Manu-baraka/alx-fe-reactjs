import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

 function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = (values) => {
    alert("Formik form submitted!");
    console.log(values);
  };

  return (
    <div className="p-4 border rounded max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold mb-2">Formik Registration Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="space-y-2">
          <Field
            name="username"
            placeholder="Username"
            className="border p-2 w-full"
          />
          <ErrorMessage name="username" component="div" className="text-red-500" />

          <Field
            name="email"
            type="email"
            placeholder="Email"
            className="border p-2 w-full"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />

          <Field
            name="password"
            type="password"
            placeholder="Password"
            className="border p-2 w-full"
          />
          <ErrorMessage name="password" component="div" className="text-red-500" />

          <button type="submit" className="bg-green-600 text-white p-2 w-full">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
