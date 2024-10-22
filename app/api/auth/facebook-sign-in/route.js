import { NextRequest, NextResponse } from "next/server";
import crypto from 'crypto';

const userPoolClientId = String(process.env.NEXT_PUBLIC_FELIN_USER_POOL_CLIENT_ID);
const cognitoDomain = String(process.env.NEXT_PUBLIC_FELIN_COGNITO_DOMAIN);


export async function GET(request) {
  let authorizeParams = new URLSearchParams();
  const origin = request.nextUrl.origin;

  const state = crypto.randomBytes(16).toString('hex');

  authorizeParams.append('response_type', 'code');
  authorizeParams.append('client_id', userPoolClientId);
  authorizeParams.append('redirect_uri', `${origin}/api/auth/callback`);
  authorizeParams.append('state', state);
  authorizeParams.append('identity_provider', 'Facebook');
  authorizeParams.append('scope', 'profile email');

  return NextResponse.redirect(`${cognitoDomain}/oauth2/authorize?${authorizeParams.toString()}`);
}
