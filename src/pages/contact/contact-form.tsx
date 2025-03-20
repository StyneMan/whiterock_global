import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { motion } from "framer-motion";

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Full name is required"),
    emailAddress: Yup.string()
      .email("Enter a valid email address")
      .required("Email address is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      emailAddress: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      try {
        console.log(values);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const { getFieldProps, touched, errors, handleSubmit } = formik;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.5 },
      }}
      viewport={{ once: false, amount: 0.5 }}
      style={{ padding: 6 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography style={{ fontSize: 14, fontWeight: 500 }}>
            Full Name
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Enter full name"
            {...getFieldProps("fullname")}
            error={Boolean(touched.fullname && errors.fullname)}
            helperText={touched.fullname && errors.fullname}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography style={{ fontSize: 14, fontWeight: 500 }}>
            Email Address
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            type="email"
            fullWidth
            placeholder="Enter email address"
            {...getFieldProps("emailAddress")}
            error={Boolean(touched.emailAddress && errors.emailAddress)}
            helperText={touched.emailAddress && errors.emailAddress}
          />
        </Grid>
      </Grid>

      <Box py={1}>
        <Typography style={{ fontSize: 14, fontWeight: 500 }}>
          Subject
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          placeholder="Enter subject"
          {...getFieldProps("subject")}
          error={Boolean(touched.subject && errors.subject)}
          helperText={touched.subject && errors.subject}
        />
      </Box>

      <Box py={1}>
        <Typography style={{ fontSize: 14, fontWeight: 500 }}>
          Message
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          minRows={3}
          multiline
          maxRows={7}
          placeholder="Enter message here"
          {...getFieldProps("message")}
          error={Boolean(touched.message && errors.message)}
          helperText={touched.message && errors.message}
        />
      </Box>

      <Box p={2} />
      <Button
        variant="contained"
        fullWidth
        sx={{ textTransform: "capitalize", borderRadius: 2 }}
        onClick={() => handleSubmit()}
      >
        Submit
      </Button>
    </motion.div>
  );
};

export default ContactForm;
