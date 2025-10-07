// Google OAuth Configuration
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

/**
 * Generate Google OAuth URL
 */
export const getGoogleAuthUrl = () => {
  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'token',
    scope: 'openid email profile',
    prompt: 'select_account'
  });
  
  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
};

/**
 * Parse hash parameters from OAuth redirect
 */
export const parseHashParams = (hash) => {
  const params = new URLSearchParams(hash.substring(1));
  return {
    access_token: params.get('access_token'),
    token_type: params.get('token_type'),
    expires_in: params.get('expires_in')
  };
};

/**
 * Fetch user info from Google
 */
export const fetchGoogleUserInfo = async (accessToken) => {
  try {
    const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    
    if (!response.ok) throw new Error('Failed to fetch user info');
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching user info:', error);
    throw error;
  }
};

/**
 * Check if Google Client ID is configured
 */
export const isGoogleConfigured = () => {
  return !!GOOGLE_CLIENT_ID;
};