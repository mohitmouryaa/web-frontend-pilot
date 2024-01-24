import React, { useRef } from 'react';
import Navbar from '../common/Navbar';
import { Image } from 'primereact/image';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import '../../styles/login.scss';
import { phnCodes } from '../../utils/constants';
import { useFormik } from 'formik';
import MyFooter from '../common/Footer';
import { Toast } from 'primereact/toast';
import {
  isValidEmail,
  isValidFirstName,
  isValidPhoneNumber,
} from '../../utils/validation';

export default function SignUp() {
  const toast = useRef(null);
  const show = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Form Submitted',
    });
  };
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
      selectedCountry: '+1',
      phoneNumber: '',
      location: '',
      insurance: '',
    },
    validate: (data) => {
      let errors = {};

      if (!data.firstName) {
        errors.firstName = 'First name is required!';
      } else if (!isValidFirstName(data.firstName)) {
        errors.firstName = 'Enter a valid first name!';
      }

      if (!data.lastName) {
        errors.lastName = 'Last name is required!';
      } else if (!isValidFirstName(data.lastName)) {
        errors.lastName = 'Enter a valid last name!';
      }

      if (!data.email) {
        errors.email = 'Email is required!';
      } else if (!isValidEmail(data.email)) {
        errors.email = 'Enter a valid email!';
      }

      if (!data.password) {
        errors.password = 'Password is required!';
      }

      if (!data.repeatPassword) {
        errors.repeatPassword = 'Repeat Password is required!';
      }

      if (!data.phoneNumber) {
        errors.phoneNumber = 'Phone Number is required!';
      } else if (!isValidPhoneNumber(data.phoneNumber)) {
        errors.phoneNumber = 'Enter a valid phone number!';
      }

      if (!data.location) {
        errors.location = 'Location is Required!';
      }

      if (!data.insurance) {
        errors.insurance = 'Insurance is Required!';
      }
      return errors;
    },
    onSubmit: (data) => {
      data && show(data);
      formik.resetForm();
    },
  });
  const isFormFieldInvalid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name]}</small>
    ) : null;
  };
  return (
    <React.Fragment>
      <Navbar />
      <div style={{ background: '#F6F6F6' }}>
        <div
          className="overflow-hidden flex justify-content-center"
          id="LoginMainDiv"
        >
          <div className="flex gap-4 py-5 my-5">
            <div className="flex flex-column loginBox mx-5">
              <div className="mb-5 loginLabel font-light">Create Account</div>
              <form onSubmit={formik.handleSubmit}>
                <Toast ref={toast} />
                <div className="p-float-label username firstName">
                  <InputText
                    id="firstName"
                    value={formik.values.firstName}
                    onChange={(e) =>
                      formik.setFieldValue('firstName', e.target.value)
                    }
                    className="w-full"
                  />
                  <label className="font-light" htmlFor="firstName">
                    First Name
                  </label>
                </div>
                <div>{getFormErrorMessage('firstName')}</div>
                <div className="p-float-label username">
                  <InputText
                    id="lastName"
                    value={formik.values.lastName}
                    onChange={(e) =>
                      formik.setFieldValue('lastName', e.target.value)
                    }
                    className="w-full"
                  />
                  <label className="font-light" htmlFor="lastName">
                    Last Name
                  </label>
                </div>
                <div>{getFormErrorMessage('lastName')}</div>

                <div className="p-float-label username">
                  <InputText
                    id="email"
                    value={formik.values.email}
                    onChange={(e) =>
                      formik.setFieldValue('email', e.target.value)
                    }
                    className="w-full"
                  />
                  <label className="font-light" htmlFor="email">
                    Email
                  </label>
                </div>
                <div>{getFormErrorMessage('email')}</div>

                <div className="p-float-label username">
                  <Password
                    inputId="password"
                    value={formik.values.password}
                    onChange={(e) =>
                      formik.setFieldValue('password', e.target.value)
                    }
                    feedback={false}
                    toggleMask
                    className="passwordInput"
                  />
                  <label className="font-light" htmlFor="password">
                    Password
                  </label>
                </div>
                <div>{getFormErrorMessage('password')}</div>

                <div className="p-float-label username">
                  <Password
                    inputId="repeatPassword"
                    value={formik.values.repeatPassword}
                    onChange={(e) =>
                      formik.setFieldValue('repeatPassword', e.target.value)
                    }
                    feedback={false}
                    toggleMask
                    className="passwordInput"
                  />
                  <label className="font-light" htmlFor="repeatPassword">
                    Repeat Password
                  </label>
                </div>
                <div>{getFormErrorMessage('repeatPassword')}</div>

                <div className="p-float-label username">
                  <div className="flex">
                    <Dropdown
                      value={formik.values.selectedCountry}
                      onChange={(e) =>
                        formik.setFieldValue('selectedCountry', e.value)
                      }
                      options={phnCodes}
                      optionLabel="phnCode"
                      optionValue="phnCode"
                      id="phn-dropdown"
                    />
                    <InputNumber
                      id="number-input"
                      value={formik.values.phoneNumber}
                      onValueChange={(e) =>
                        formik.setFieldValue('phoneNumber', e.value)
                      }
                      useGrouping={false}
                      className="flex-1"
                    />
                  </div>
                </div>
                <div>{getFormErrorMessage('phoneNumber')}</div>

                <div className="p-float-label username">
                  <InputText
                    id="location"
                    value={formik.values.location}
                    onChange={(e) =>
                      formik.setFieldValue('location', e.target.value)
                    }
                    className="w-full"
                  />
                  <label className="font-light" htmlFor="location">
                    Location, City, State & Country
                  </label>
                </div>
                <div>{getFormErrorMessage('location')}</div>
                <div className="p-float-label username">
                  <div className="flex">
                    <Dropdown
                      value={formik.values.insurance}
                      onChange={(e) =>
                        formik.setFieldValue('insurance', e.value)
                      }
                      options={[{ name: 'Yes' }, { name: 'No' }]}
                      optionLabel="name"
                      optionValue="name"
                      id="insurance"
                      className="flex-1"
                    />
                    <label
                      className="font-light insuranceLabel"
                      htmlFor="insurance"
                    >
                      Insurance Yes/No?
                    </label>
                  </div>
                </div>
                <div>{getFormErrorMessage('insurance')}</div>
                <Button
                  label="Create Account"
                  className="w-full  border-none text-sm mt-3"
                  style={{ backgroundColor: '#B3ECF2', color: '#3C868E' }}
                />
              </form>
            </div>

            <div className="flex-1 md:flex-none flex align-items-center justify-content-center font-bold border-round mx-5">
              <Image
                src="/img/lady-doctor.svg"
                className="ladyImage"
                alt="lady doctor"
              />
            </div>
          </div>
        </div>

        <div
          className="overflow-hidden flex flex-column justify-content-center"
          id="loginSecondDiv"
        >
          <div className="text-center">
            <p className="whatTo">What To Expect?</p>
            <p className="communityText">community joining</p>
          </div>
          <div className="text-center mt-4 flex flex-row justify-content-center buttons">
            <div>Hand</div>
            <div>Elbow</div>
            <div>Shoulder</div>
            <div>Knee</div>
            <div>Ankle</div>
          </div>

          <div className="text-center">
            <p className="earlyText">early care stops disability</p>
          </div>
        </div>
      </div>
      <MyFooter />
    </React.Fragment>
  );
}
