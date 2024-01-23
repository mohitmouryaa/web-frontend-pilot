import React, { useState } from 'react';
import Navbar from '../common/Navbar';
import MyFooter from '../common/Footer';
import { Image } from 'primereact/image';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import '../../styles/login.scss';
import { Link } from 'react-router-dom';

export default function Login() {
  const [value, setValue] = useState('');
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
              <div className="mb-5 loginLabel">Log Into Your Account</div>
              <div className="p-float-label username">
                <InputText
                  id="username"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full"
                />
                <label className="font-light" htmlFor="username">
                  Username
                </label>
              </div>
              <div className="p-float-label">
                <Password
                  inputId="password"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  feedback={false}
                  toggleMask
                  className="passwordInput"
                />
                <label className="font-light" htmlFor="password">
                  Password
                </label>
              </div>
              <Button
                label="SUBMIT"
                className="w-full bg-cyan-300 border-none text-sm mt-3"
              />

              <div className="orLine mt-3">OR</div>
              <div className="signUpLine mt-2">
                Don&apos;t have an account?{' '}
                <Link
                  to={'/Signup'}
                  className="no-underline"
                  style={{ color: 'black' }}
                >
                  <b>sign up here</b>
                </Link>
              </div>
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
