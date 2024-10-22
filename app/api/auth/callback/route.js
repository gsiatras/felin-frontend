import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const userPoolId = String(process.env.NEXT_PUBLIC_FELIN_USER_POOL_ID);
const userPoolClientId = String(process.env.NEXT_PUBLIC_FELIN_USER_POOL_CLIENT_ID);
const cognitoDomain = String(process.env.NEXT_PUBLIC_FELIN_COGNITO_DOMAIN);

export async function GET(request) {
    try {
        const origin = request.nextUrl.origin;
        const searchParams = request.nextUrl.searchParams;
        const code = searchParams.get('code');

        if (!code) {
            const error = searchParams.get('error');
            return NextResponse.json({ error: error || 'Unknown error' });
        }

        const requestBody = new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: userPoolClientId,
            code: code,
            redirect_uri: `${origin}/api/auth/callback`
        });

        // Get tokens without client secret
        const res = await fetch(`${cognitoDomain}/oauth2/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: requestBody
        });

        const data = await res.json();

        if (!res.ok) {
            return NextResponse.json({
                error: data.error,
                error_description: data.error_description || 'No description provided'
            });
        }

        // Store tokens in cookies
        const cookieStore = cookies();
        cookieStore.set('id_token', data.id_token);
        cookieStore.set('access_token', data.access_token);
        cookieStore.set('refresh_token', data.refresh_token);

        return NextResponse.redirect(new URL('/', request.nextUrl));
    } catch (error) {
        return NextResponse.json({
            error: 'Server Error',
            error_description: error.message || 'An unknown error occurred'
        });
    }
}
