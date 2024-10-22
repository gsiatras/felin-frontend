"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/auth/auth.module.css'; 
import '../../../styles/globals.css'; 
import { getErrorMessage } from "@/utils/get-error-message";

// Import the handleSignUp function from lib/cognitoActions
import { handleSignUp } from '@/lib/cognitoActions';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordMismatch, setPasswordMismatch] = useState('');

    

  const handleSignup = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordMismatch('Passwords do not match');
      return;
    }

    // Check if terms are accepted
    if (!termsAccepted) {
      setErrorMessage('You must agree to the terms.');
      return;
    }

    // Prepare form data
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      // Call the handleSignUp function from lib/cognitoActions
      const result = await handleSignUp(formData);
      if (result) {
        if (result.success === false) {
          console.log('error');
          setErrorMessage(result.error);
        } else if (result.success) {
          console.log('red');
          setErrorMessage('');
        }
      }
    } catch (error) {
      // Handle any error that occurs during sign-up
      setErrorMessage(getErrorMessage(error));
    }
  };

  return (
    <div className={styles["felin-content__authentication"]}>
      <div className={styles["felin-content__authentication__content"]}>
        <div className={styles["felin-content__authentication__content__wrapper"]}>
          <div className={styles["felin-content__authentication__content__logo"]}>
            <h1>FELiN</h1>
          </div>
          <form onSubmit={handleSignup} className={styles["felin-content__authentication__form"]} noValidate>
            <h2 className={styles["felin-content__authentication__title"]}>
              Συνδέσου ή δημιούργησε ένα λογαριασμό FELiN
            </h2>
            <div className={styles["felin-content__authentication__form-social"]}>
              <button type="button" className={styles["felin-content__authentication__form-social__single"]}>
                <img src="icons/google.svg" alt="Google" /> Google
              </button>
              <button type="button" className={styles["felin-content__authentication__form-social__single"]}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M19.253906 2 C15.311906 2 13 4.0821719 13 8.8261719 L13 13 L8 13 L8 18 L13 18 L13 30 L18 30 L18 18 L22 18 L23 13 L18 13 L18 9.671875 C18 7.884875 18.582766 7 20.259766 7 L23 7 L23 2.2050781 C22.526 2.1410781 21.144906 2 19.253906 2 z"/>
                </svg> Facebook
              </button>
              <button href="#" className={styles["felin-content__authentication__form-social__single"]}>
                <img src="icons/apple.svg" alt="Apple" /> Apple
              </button>
            </div>

            <span className={styles["felin-content__authentication__form-separator"]}>Or</span>

            <div className={styles["felin-content__authentication__form-group"]}>
              <label htmlFor="emailSignIn">Your Email</label>
              <input 
                type="email" 
                id="emailSignIn" 
                name="emailSignIn" 
                placeholder="Enter Your Email" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <div className={styles["error-message"]}>{errorMessage}</div>
            </div>

            <div className={styles["felin-content__authentication__form-group"]}>
              <label htmlFor="loginPassword">Password</label>
              <div className={styles["password-wrapper"]}>
                <input 
                  type="password" 
                  id="loginPassword" 
                  name="password" 
                  placeholder="Password" 
                  required 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
            </div>

            <div className={styles["felin-content__authentication__form-group"]}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className={styles["password-wrapper"]}>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  name="confirmPassword" 
                  placeholder="Confirm Password" 
                  required 
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)} 
                />
              </div>
              <div className={styles["error-message"]}>{passwordMismatch}</div>
            </div>

            <div className={styles["felin-content__authentication__form-group custom-checkbox"]}>
              <input 
                type="checkbox" 
                id="agreeTerms" 
                checked={termsAccepted} 
                onChange={(e) => setTermsAccepted(e.target.checked)} 
              />
              <label htmlFor="agreeTerms">
                By creating an account you agree to Our <a href="#">terms & conditions Privacy Policy</a>
              </label>
            </div>
            <button type="submit" className={styles["felin-content__authentication__form-submit"]}>
              Sign Up
            </button>

            <div className={styles["felin-content__authentication__form-footer"]}>
              Already have an account? <Link href="/signin">Sign In</Link>
            </div>
          </form>
        </div>
      </div>
      <div className={styles["felin-content__authentication__img"]}>
        <Image src="/img/gifs/felin-gif.gif" alt="FELiN" width={500} height={500} />
      </div>
    </div>
  );
};

export default Signup;
