import { Formik, Form, Field, ErrorMessage } from "formik";

export default function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  // Manual validation function (Formik built-in)
  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Username is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const onSubmit = (values) => {
    alert("Formik form submitted!");
    console.log(values);
  };

  return (
    <div className="p-4 border rounded max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold mb-2">Formik Registration Form</h2>

      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        <Form className="space-y-2">
          {/* Username */}
          <Field
            name="username"
            placeholder="Username"
            className="border p-2 w-full"
          />
          <ErrorMessage name="username" component="div" className="text-red-500" />

          {/* Email */}
          <Field
            name="email"
            type="email"
            placeholder="Email"
            className="border p-2 w-full"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />

          {/* Password */}
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
