
import {
  signUp,
  confirmSignUp,
  signIn,
  signOut,
  resendSignUpCode
} from "aws-amplify/auth";

import { getErrorMessage } from "@/utils/get-error-message";


export async function handleSignUp(formData) {
  try {
    const {isSignIpComplete, userId, nextStep } = await signUp({
      username: String(formData.get("email")),
      password: String(formData.get("password")),
      options: {
        userAttributes: {
          email: String(formData.get("email")),
        },
        autoSignIn: true,
      },
    });
    return { success: true, error: undefined };
  } catch (error) {
    return { success: false, error: getErrorMessage(error)};
  }
}

export async function handleSendEmailVerificationCode(prevState, formData) {
  let currentState;
  try {
    await resendSignUpCode({
      username: String(formData.get("email")),
    });
    currentState = {
      ...prevState,
      message: "Code sent successfully",
    };
  } catch (error) {
    currentState = {
      ...prevState,
      errorMessage: getErrorMessage(error),
    };
  }

  return currentState;
}
  
export async function confirmSignup(prevState, formData) {
  try {
    const { isSignUpComplete, nextStep } =  await confirmSignUp({
      username: String(formData.get("email")),
      confirmationCode: String(formData.get("code")),
    });
  } catch (error) {
    return getErrorMessage(error);
  }
  return { success: true };
}

export async function handleSignIn(formData) {
  let redirectLink = "/dashboard";
  try {
    const { isSignedIn, nextStep } = await signIn({
      username: String(formData.get("email")),
      password: String(formData.get("password")),
    });
    if (nextStep.signInStep === "CONFIRM_SIGN_UP") {
      await resendSignUpCode({
        username: String(formData.get("email")),
      });
      redirectLink = "/confirm-signup";
    }
  } catch (error) {
    return { success: false, error: getErrorMessage(error), redirectLink: redirectLink };
  }

  return { success: true, error: undefined, redirectLink: redirectLink };
}

export async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    console.log(getErrorMessage(error));
  }
}


