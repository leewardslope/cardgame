import { Box, CardContent, Grid, Button, Card, TextField } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

import signInValidationSchema from '../../validations/signInValidationSchema';
import { traditionalSignIn } from '../../../../context/authContext';

const SignInForm = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInValidationSchema,
    onSubmit: async (values) => {
      const loginUserData = {
        email: values.email,
        password: values.password,
      };

      try {
        await traditionalSignIn(loginUserData.email, loginUserData.password).then(() =>
          history.push('/'),
        );
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box width='50%' display='flex'>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id='email'
                  name='email'
                  label='Email'
                  variant='outlined'
                  fullWidth
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id='password'
                  name='password'
                  label='Password'
                  variant='outlined'
                  fullWidth
                  type='password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>

              <Grid item xs={12}>
                <Button color='primary' variant='contained' type='submit'>
                  Sign In
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </form>
  );
};

export default SignInForm;
