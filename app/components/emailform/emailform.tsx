import { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      setSuccess('');
    } else {
      setError('');
      setSuccess('Success! Your email has been submitted.');
    }

    // Clear the messages after 3 seconds
    setTimeout(() => {
      setError('');
      setSuccess('');
    }, 3000);
  };

  return (
    <div className="relative flex flex-col gap-5 lg:flex lg:flex-row m-auto">
      <input
        name="email"
        id="email"
        placeholder="email@example.com"
        className={`w-60 rounded-full p-2 placeholder-custom-gray placeholder-sm placeholder-margin lg:w-[450px] text-black ${
          error ? 'border-red-500 border' : ''
        }`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="bg-cyan-500 w-60 py-3 rounded-3xl text-xs   hover:text-cyan-500 hover:hover:bg-white hover:font-bold"
        onClick={handleSubmit}
      >
        Get Started For Free
      </button>

      {/* Toast for error message */}
      {error && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 p-3 bg-red-500 text-white rounded-md shadow-lg">
          {error}
        </div>
      )}

      {/* Toast for success message */}
      {success && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 p-3 bg-green-500 text-white rounded-md shadow-lg">
          {success}
        </div>
      )}
    </div>
  );
};

export default EmailForm;
