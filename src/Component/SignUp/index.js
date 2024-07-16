import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  makeStyles,
  Grid,
  Paper,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AnimateButton from "../../CommonComponent/AnimateButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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

const SignUp = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
                  Sign Up
                </Typography>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={validationSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      localStorage.setItem(
                        "signUpDetails",
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
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        helperText={<ErrorMessage name="name" />}
                      />
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
                        name="createPassword"
                        label="Create Password"
                        type="password"
                        id="createPassword"
                        autoComplete="current-password"
                        helperText={<ErrorMessage name="createPassword" />}
                        error={Boolean(<ErrorMessage name="createPassword" />)}
                      />
                      <Field
                        as={TextField}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        autoComplete="current-password"
                        helperText={<ErrorMessage name="confirmPassword" />}
                        error={Boolean(<ErrorMessage name="confirmPassword" />)}
                      />
                      {/* <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      /> */}
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
              </Container>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </Container>
  );
};

export default SignUp;
