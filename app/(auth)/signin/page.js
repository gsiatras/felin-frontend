"use client";

import { useState } from 'react';
import styles from '../../../styles/auth/auth.module.css'; 
import '../../../styles/globals.css'; 
import { getErrorMessage } from '@/utils/get-error-message';
import { handleSignIn } from '@/lib/cognitoActions';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const signIn = async (e) => {
    e.preventDefault();
    // Prepare form data
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      // Call the handleSignUp function from lib/cognitoActions
      const result = await handleSignIn(formData);
      if (result) {
        if (result.success === false) {
          console.log(result.error);
          setErrorMessage(result.error);
        } else if (result.success) {
            console.log(result.redirectLink);          
            setErrorMessage('');
        }
      }
    } catch (error) {
      // Handle any error that occurs during sign-up
      setErrorMessage(getErrorMessage(error));
    }
  };

  return (
    <div className={styles['felin-content__authentication']}>
      <div className={styles['felin-content__authentication__content']}>
        <div className={styles['felin-content__authentication__content__wrapper']}>
          <div className={styles['felin-content__authentication__content__logo']}>
            <h1>FELiN</h1>
          </div>
          <form onSubmit={signIn} className={styles['felin-content__authentication__form']} noValidate>
            <h2 className={styles['felin-content__authentication__title']}>
              Συνδέσου ή δημιούργησε ένα λογαριασμό FELiN
            </h2>

            <div className={styles['felin-content__authentication__form-social']}>
              <button 
                type="button" 
                className={styles['felin-content__authentication__form-social__single']} 
                id="googleSignInButton"
                onClick={() => window.location.href = '/api/auth/google-sign-in'}
              >
                <img src="/icons/google.svg" alt="Google" /> Google
              </button>
              <button 
                type="button" 
                className={styles['felin-content__authentication__form-social__single']} 
                id="facebookSignInButton"
                onClick={() => window.location.href = '/api/auth/facebook-sign-in'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M19.253906 2 C15.311906 2 13 4.0821719 13 8.8261719 L13 13 L8 13 L8 18 L13 18 L13 30 L18 30 L18 18 L22 18 L23 13 L18 13 L18 9.671875 C18 7.884875 18.582766 7 20.259766 7 L23 7 L23 2.2050781 C22.526 2.1410781 21.144906 2 19.253906 2 z" />
                </svg> Facebook
              </button>
              <a href="#" className={styles['felin-content__authentication__form-social__single']}>
                <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.9133 0H11.0427C11.1465 1.2826 10.6569 2.24096 10.062 2.93497C9.47815 3.62419 8.67872 4.29264 7.38574 4.19122C7.29949 2.92698 7.78985 2.0397 8.38403 1.34729C8.93508 0.701997 9.94535 0.127781 10.9133 0ZM14.8274 13.3499V13.3859C14.464 14.4864 13.9457 15.4296 13.3132 16.3048C12.7358 17.0995 12.0282 18.1689 10.7647 18.1689C9.67302 18.1689 8.94786 17.4669 7.82898 17.4477C6.64541 17.4285 5.99452 18.0347 4.91238 18.1872H4.54341C3.74877 18.0722 3.10747 17.4429 2.64027 16.8759C1.26264 15.2003 0.19806 13.0361 0 10.2664V9.4526C0.0838563 7.47039 1.04701 5.85876 2.32721 5.0777C3.00285 4.66241 3.93166 4.30861 4.96589 4.46674C5.40913 4.53543 5.86195 4.68717 6.25887 4.83731C6.63503 4.98186 7.10542 5.23822 7.55106 5.22464C7.85294 5.21586 8.15322 5.05853 8.4575 4.94752C9.34877 4.62567 10.2225 4.2567 11.3741 4.43001C12.7581 4.63925 13.7404 5.25419 14.3474 6.20297C13.1766 6.94809 12.251 8.07096 12.4091 9.98848C12.5497 11.7303 13.5624 12.7493 14.8274 13.3499Z" fill="black" />
                </svg> Apple
              </a>
            </div>

            <span className={styles['felin-content__authentication__form-separator']}>Or</span>

            <div className={styles['felin-content__authentication__form-group']}>
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
              <div className={styles['error-message']}>{errorMessage}</div>
            </div>

            <div className={styles['felin-content__authentication__form-group']}>
              <label htmlFor="loginPassword">Your Password</label>
              <input
                type="password"
                id="loginPassword"
                name="loginPassword"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className={styles['felin-content__authentication__form-group custom-checkbox']}>
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="rememberMe">Remember Me</label>
              <a href="/forgot-password" className={styles['felin-content__authentication__forgot-password']}>
                Forgot Password?
              </a>
            </div>

            <button type="submit" className={styles['felin-content__authentication__form-submit']}>
              Sign In
            </button>

            <div className={styles['felin-content__authentication__form-footer']}>
              Doesn&apos;t have an account? <a href="/signup">Sign Up</a>
            </div>
          </form>
        </div>
      </div>
      <div className={styles['felin-content__authentication__img']}>
        <img src="/img/gifs/felin-gif.gif" alt="FELiN" width={500} height={500} />
      </div>
    </div>
  );
};

export default SignIn;
