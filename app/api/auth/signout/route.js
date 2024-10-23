import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const userPoolId = String(process.env.PUBLIC_FELIN_USER_POOL_ID);
const userPoolClientId = String(process.env.PUBLIC_FELIN_USER_POOL_CLIENT_ID);
const cognitoDomain = String(process.env.PUBLIC_FELIN_COGNITO_DOMAIN);
export async function GET(request) {
    const cookieStore = cookies(); // Access the cookies

    // Check if tokens exist in cookies
    const idTokenExists = cookieStore.has('id_token');
    const accessTokenExists = cookieStore.has('access_token');
    const refreshTokenExists = cookieStore.has('refresh_token');

    // If refresh token is missing, redirect to login page
    if (!refreshTokenExists) {
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }

    // Get the refresh token from cookies
    const token = cookieStore.get('refresh_token');

    // Since we're not using a client secret, we include client_id in the request body
    const requestBody = new URLSearchParams({
        token: token?.value, // Pass the refresh token in the request body
        client_id: userPoolClientId // Include client_id
    });

    // Make a POST request to revoke the token at Cognito's /revoke endpoint
    const response = await fetch(`${cognitoDomain}/oauth2/revoke`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            // No Authorization header since there's no client secret
        },
        body: requestBody
    });

    // If the token revocation failed, return the error and description
    if (!response.ok) {
        const data = await response.json();
        return NextResponse.json({
            error: data.error, 
            error_description: data.error_description,
        });
    }

    // If token revocation succeeded, remove tokens from cookies
    if (response.ok) {
        if (idTokenExists) {
            cookieStore.delete('id_token');
        }
        if (accessTokenExists) {
            cookieStore.delete('access_token');
        }
        if (refreshTokenExists) {
            cookieStore.delete('refresh_token');
        }

        // Redirect the user back to the login page after logout
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }
}
