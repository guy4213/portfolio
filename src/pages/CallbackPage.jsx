import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { parseHashParams, fetchGoogleUserInfo } from '../utils/googleAuth';
import LoadingSpinner from '../components/LoadingSpinner';
import { useAuth } from '../contexts/AuthContext';

const CallbackPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const hash = window.location.hash;
        
        if (!hash) {
          setError('No authentication data received');
          return;
        }

        const { access_token } = parseHashParams(hash);
        
        if (!access_token) {
          setError('No access token received');
          return;
        }

        // Fetch user info from Google
        const userInfo = await fetchGoogleUserInfo(access_token);
        
        // Save user data
        const userData = {
          id: userInfo.id,
          name: userInfo.name,
          email: userInfo.email,
          picture: userInfo.picture
        };
        
        login(userData);
        
        // Clean URL and redirect
        window.history.replaceState({}, document.title, '/callback');
        navigate('/dashboard', { replace: true });
        
      } catch (err) {
        console.error('Authentication error:', err);
        setError('Authentication failed. Please try again.');
      }
    };

    handleCallback();
  }, [login, navigate]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Authentication Failed</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return <LoadingSpinner message="Authenticating..." />;
};

export default CallbackPage;