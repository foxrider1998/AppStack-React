import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import { Alert, Button, Form } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

import { PieChart, Settings, User } from "react-feather";
import useAuth from "../../hooks/useAuth";

function SignIn() {
  const navigate = useNavigate();
  const { signIn, signInWithGoogle } = useAuth();

  return (
    <Formik
      initialValues={{
        email: "demo@bootlab.io",
        password: "unsafepassword",
        submit: false,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Email is required"),
        password: Yup.string().max(255).required("Password is required"),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          await signIn(values.email, values.password);
          User.displayName =  values.email
          navigate("/private");
        } catch (error) {
          const message = error.message || "Something went wrong";

          setStatus({ success: false });
          setErrors({ submit: message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <>
          <div className="d-grid gap-2 mb-3">
          <button onClick={() => signInWithGoogle()} className="btn btn-google btn-lg">
              <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
            </button>
          </div>
          <div className="row">
            <div className="col">
              <hr />
            </div>
            <div className="col-auto text-uppercase d-flex align-items-center">
              Or
            </div>
            <div className="col">
              <hr />
            </div>
          </div>
          <Form onSubmit={handleSubmit}>
            <Alert className="my-3" variant="primary">
              <div className="alert-message">
                Use <strong>demo@bootlab.io</strong> and{" "}
                <strong>unsafepassword</strong> to sign in
              </div>
            </Alert>
            {errors.submit && (
              <Alert className="my-3" variant="danger">
                <div className="alert-message">{errors.submit}</div>
              </Alert>
            )}

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                size="lg"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                isInvalid={Boolean(touched.email && errors.email)}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {!!touched.email && (
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                size="lg"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={values.password}
                isInvalid={Boolean(touched.password && errors.password)}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {!!touched.password && (
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              )}
              <small>
                <Link to="/auth/reset-password">Forgot password?</Link>
              </small>
            </Form.Group>

            <div>
              <Form.Check
                type="checkbox"
                id="rememberMe"
                label="Remember me"
                defaultChecked
              />
            </div>

            <div className="text-center mt-3">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
              >
                Sign in
              </Button>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
}

export default SignIn;
