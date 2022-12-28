import * as Yup from "yup";
import { useState } from "react";
import { useFormik, Form, FormikProvider } from "formik";
import { useNavigate } from "react-router-dom";
import {
  Stack,
  Box,
  TextField,
  IconButton,
  InputAdornment,
  FormLabel,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
 import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
 import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
/////////////////////////////////////////////////////////////
let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};
const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
  ({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
      color: theme.palette.primary.main,
    },
  }),
);
function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}
const StudentSignupForm = ({ setAuth }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState(dayjs('2022-04-07'));
  const [showPassword, setShowPassword] = useState(false);

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First name required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Last name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: () => {
      setTimeout(() => {
        setAuth(true);
        navigate("/", { replace: true });
      }, 2000);
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            <TextField
              fullWidth
              size="small"
              label="First name"
              {...getFieldProps("firstName")}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              size="small"
              label="Last name"
              {...getFieldProps("lastName")}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            <TextField
              fullWidth
              size="small"
              label="Username"
              {...getFieldProps("firstName")}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />
            <TextField
              fullWidth
              size="small"
              label="School code"
              {...getFieldProps("lastName")}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
         
          </Stack>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
   
      <RadioGroup  row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group" defaultValue="first">
 
      <MyFormControlLabel value="first" label="Male"   labelPlacement="end" control={<Radio />} />
      <MyFormControlLabel value="second" label="Female"   labelPlacement="end" control={<Radio />} />
    </RadioGroup>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
          disableFuture
          label="Date of birth"
       
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField    size="small"   fullWidth {...params} />}
        />
    </LocalizationProvider>
          </Stack>
          <FormLabel id="demo-row-radio-buttons-group-label">Marital Status</FormLabel>
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
   
      <RadioGroup  row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group" defaultValue="first">

      <MyFormControlLabel value="first" label="Unmarried"   labelPlacement="end" control={<Radio />} />
      <MyFormControlLabel value="second" label="Married"   labelPlacement="end" control={<Radio />} />
      <MyFormControlLabel value="third" label="Other"   labelPlacement="end" control={<Radio />} />
    </RadioGroup>
          </Stack>
          <Stack
           component={motion.div}
           initial={{ opacity: 0, y: 60 }}
           animate={animate}
           direction={{ xs: "column", sm: "row" }}
           spacing={2}
          >
 <TextField
              fullWidth
              size="small"
              autoComplete="username"
              type="email"
              label="Student Reg number"
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />
                <TextField
              fullWidth
              size="small"
              autoComplete="username"
              type="email"
              label="Student iD"
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />
          </Stack>
          <Stack
            spacing={3}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            
             <TextField
              fullWidth
              size="small"
              autoComplete="username"
              type="email"
              label="Parent name"
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />
             <TextField
              fullWidth
              size="small"
              autoComplete="username"
              type="email"
              label="Parent ID"
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />
       
                <TextField
              fullWidth
              size="small"
              autoComplete="username"
              type="email"
              label="Phone number: 078..."
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />
            <TextField
              fullWidth
              size="small"
              autoComplete="username"
              type="email"
              label="Email address"
              {...getFieldProps("email")}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              fullWidth
              size="small"
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              {...getFieldProps("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      <Icon
                        icon={
                          showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                        }
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />
          </Stack>
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            <TextField
              fullWidth
              size="small"
              label="Province"
              {...getFieldProps("firstName")}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              size="small"
              label="District"
              {...getFieldProps("lastName")}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>
          <Stack
            component={motion.div}
            initial={{ opacity: 0, y: 60 }}
            animate={animate}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            <TextField
              fullWidth
              size="small"
              label="Sector"
              {...getFieldProps("firstName")}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />
            <TextField
              fullWidth
              size="small"
              label="City"
              {...getFieldProps("lastName")}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
         
          </Stack>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            <LoadingButton
              fullWidth
              size="large"
              style={{ borderRadius: 8 }}
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Sign up
            </LoadingButton>
          </Box>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default StudentSignupForm;
