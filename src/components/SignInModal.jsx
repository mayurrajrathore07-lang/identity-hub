import React, { useState } from 'react';
import './SignInModal.css';
import { FiX, FiMail, FiLock, FiGithub, FiArrowRight } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

const SignInModal = ({ isOpen, onClose, initialIsSignUp = false }) => {
  const [isSignUp, setIsSignUp] = useState(initialIsSignUp);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${isSignUp ? 'Account created' : 'Signed in'} successfully for ${formData.email}!`);
    onClose();
  };

  return (
    <div className="signin-overlay" onClick={onClose}>
      <div className="signin-modal" onClick={(e) => e.stopPropagation()}>
        <button className="signin-close-btn" onClick={onClose} aria-label="Close modal">
          <FiX />
        </button>

        <div className="signin-header">
          <div className="signin-brand">
            <span className="signin-logo-icon">❖</span>
            <span className="signin-logo-text">IdentityHub</span>
          </div>
          <h2>{isSignUp ? 'Create your account' : 'Welcome back'}</h2>
          <p>{isSignUp ? 'Start protecting your digital identity today.' : 'Sign in to manage your privacy & identities.'}</p>
        </div>

        <form onSubmit={handleSubmit} className="signin-form">
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-box">
              <FiMail className="input-icon" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-box">
              <FiLock className="input-icon" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {isSignUp && (
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-box">
                <FiLock className="input-icon" />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          {!isSignUp && (
            <div className="signin-forgot">
              <a href="#forgot" onClick={(e) => e.preventDefault()}>Forgot password?</a>
            </div>
          )}

          <button type="submit" className="signin-submit-btn">
            <span>{isSignUp ? 'Get Started' : 'Sign In'}</span>
            <FiArrowRight />
          </button>
        </form>

        <div className="signin-divider">
          <span>Or continue with</span>
        </div>

        <div className="social-signin-grid">
          <button type="button" className="social-btn">
            <FcGoogle className="social-icon" />
            <span>Google</span>
          </button>
          <button type="button" className="social-btn">
            <FiGithub className="social-icon" />
            <span>GitHub</span>
          </button>
        </div>

        <div className="signin-toggle-mode">
          {isSignUp ? (
            <p>
              Already have an account?{' '}
              <button type="button" onClick={() => setIsSignUp(false)}>
                Sign In
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?{' '}
              <button type="button" onClick={() => setIsSignUp(true)}>
                Get Started
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
