import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  makeStyles,
  Grid,
  Paper,
  Box,
} from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AnimateButton from "../../CommonComponent/AnimateButton";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <Container maxWidth="x-lg" sx={{ marginTop: 5 }}>
      <Container maxWidth="xs">
        <Grid container direction="column" justifyContent="center" spacing={2}>
          <Paper className={classes.paper}>
            <Grid item xs={12}>
              <Container component="main" maxWidth="xs">
                <Typography
                  component="h1"
                  variant="h5"
                  align="center"
                  gutterBottom
                >
                  Sign in
                </Typography>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={validationSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      localStorage.setItem(
                        "loginDetails",
                        JSON.stringify(values)
                      );
                      console.log(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form className={classes.form}>
                      <Field
                        as={TextField}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        helperText={<ErrorMessage name="email" />}
                        error={Boolean(<ErrorMessage name="email" />)}
                      />
                      <Field
                        as={TextField}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        helperText={<ErrorMessage name="password" />}
                        error={Boolean(<ErrorMessage name="password" />)}
                      />
                      <AnimateButton>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                          disabled={isSubmitting}
                        >
                          Sign In
                        </Button>
                      </AnimateButton>
                    </Form>
                  )}
                </Formik>
                <Typography
                  component="h2"
                  variant="h6"
                  align="center"
                  gutterBottom
                >
                  OR click to SignUp{" "}
                  <span className="" onClick={() => navigate("/signUp")}>
                    here
                  </span>
                </Typography>
              </Container>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </Container>
  );
};

export default Login;
