"use client";

import { Amplify } from "aws-amplify";

const authConfig = {
    Cognito: {
        userPoolId: String(process.env.NEXT_PUBLIC_FELIN_USER_POOL_ID),
        userPoolClientId: String(process.env.NEXT_PUBLIC_FELIN_USER_POOL_CLIENT_ID),
    }
};

Amplify.configure(
    {
        Auth: authConfig,
    },
    { srr: true }
);

export default function ConfigureAmplifyClientSide() {
    return null;
}
