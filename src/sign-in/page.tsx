import { useState } from 'react';
import app from '../../firebase/firebase';
import { httpsCallable } from 'firebase/functions';
import { getFunctions } from 'firebase/functions';

const functions = getFunctions(app);

const SignInPage = () => {
  const [isSignIn, setIsSignIn] = useState(true); // Toggle between sign-in and sign-up
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [user, setUser] = useState(null); // State to store user data

  const handleSignIn = async () => {
    try {
      const signIn = httpsCallable(functions, 'signIn');
      const result = await signIn({ email, password });
      console.log('User Info:', result.data); // Log user info and full credential to the console
      //setUser({ email: result.data.email, uid: result.data.uid }); // Store user data
      alert('Signed in successfully!');
    } catch (error) {
      alert('Account does not exist. Please sign up.');
      setIsSignIn(false);
    }
  };

  const handleSignUp = async () => {
    try {
      const signUp = httpsCallable(functions, 'signUp');
      const result = await signUp({ email, password });
      //setUser({ email: result.data.email, uid: result.data.uid }); // Store user data
      alert('Account created successfully!');
      setIsSignIn(true);
    } catch (error: any) {
      alert('Error creating account: ' + error?.message);
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
              Don’t have an account?{' '}
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