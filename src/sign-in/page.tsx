import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '@/firebase/firebase';

const auth = getAuth(app);

const SignInPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Signed in successfully!');
    } catch (error: any) {
      alert('Error signing in: ' + error.message);
      setIsSignIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async () => {
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Account created successfully!');
      setIsSignIn(true);
    } catch (error: any) {
      alert('Error creating account: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen bg-white p-8 rounded shadow-md w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">
        {isSignIn ? 'Sign In' : 'Sign Up'}
      </h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
        className="w-full p-4 mb-4 text-lg border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
        className="w-full p-4 mb-4 text-lg border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      {isSignIn ? (
        <button
          onClick={handleSignIn}
          disabled={isLoading}
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Signing In...
            </>
          ) : (
            'Sign In'
          )}
        </button>
      ) : (
        <button
          onClick={handleSignUp}
          disabled={isLoading}
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Creating Account...
            </>
          ) : (
            'Sign Up'
          )}
        </button>
      )}
      <p className="text-center mt-4 text-gray-700">
        {isSignIn ? (
          <span>
            Don't have an account?{' '}
            <button
              onClick={() => setIsSignIn(false)}
              disabled={isLoading}
              className="text-blue-500 hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sign Up
            </button>
          </span>
        ) : (
          <span>
            Already have an account?{' '}
            <button
              onClick={() => setIsSignIn(true)}
              disabled={isLoading}
              className="text-blue-500 hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sign In
            </button>
          </span>
        )}
      </p>
    </div>
  );
};

export default SignInPage;