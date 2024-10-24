import { NextRequest, NextResponse } from "next/server";
import crypto from 'crypto';

const userPoolId = String(process.env.PUBLIC_FELIN_USER_POOL_ID);
const userPoolClientId = String(process.env.PUBLIC_FELIN_USER_POOL_CLIENT_ID);
const cognitoDomain = String(process.env.PUBLIC_FELIN_COGNITO_DOMAIN);



export async function GET(request) {
  console.log('User Pool ID:', userPoolId);
  console.log('User Pool Client ID:', userPoolClientId);
  console.log('Cognito Domain:', cognitoDomain);
  let authorizeParams = new URLSearchParams();
  const origin = request.nextUrl.origin;

  const state = crypto.randomBytes(16).toString('hex');
 
  
  authorizeParams.append('response_type', 'code');
  authorizeParams.append('client_id', userPoolClientId);
  authorizeParams.append('redirect_uri', `${origin}/api/auth/callback`);
  authorizeParams.append('state', state);
  authorizeParams.append('identity_provider', 'Google');
  authorizeParams.append('scope', 'profile email openid');

  return NextResponse.redirect(`${cognitoDomain}/oauth2/authorize?${authorizeParams.toString()}`);
}
