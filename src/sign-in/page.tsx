import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import app from '@/firebase/firebase';

const auth = getAuth(app);

const SignInPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Signed in successfully!');
    } catch (error: any) {
      alert('Error signing in: ' + error.message);
      setIsSignIn(false);
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Account created successfully!');
      setIsSignIn(true);
    } catch (error: any) {
      alert('Error creating account: ' + error.message);
    }
  };

  return (
    <div className="h-screen bg-white p-8 rounded shadow-md w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center text-earth-700">
        {isSignIn ? 'Sign In' : 'Sign Up'}
      </h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-4 mb-4 text-lg border rounded focus:outline-none focus:ring-2 focus:ring-earth-700"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-4 mb-4 text-lg border rounded focus:outline-none focus:ring-2 focus:ring-earth-700"
      />
      {isSignIn ? (
        <button
          onClick={handleSignIn}
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
        >
          Sign In
        </button>
      ) : (
        <button
          onClick={handleSignUp}
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
        >
          Sign Up
        </button>
      )}
      <p className="text-center mt-4 text-earth-700">
        {isSignIn ? (
          <span>
            Don't have an account?{' '}
            <button
              onClick={() => setIsSignIn(false)}
              className="text-blue-500 hover:underline"
            >
              Sign Up
            </button>
          </span>
        ) : (
          <span>
            Already have an account?{' '}
            <button
              onClick={() => setIsSignIn(true)}
              className="text-blue-500 hover:underline"
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