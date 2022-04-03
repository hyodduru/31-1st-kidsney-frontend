import React, { useState } from 'react';
import SignUpModal from './SignUpModal';
import './LoginModal.scss';
import '../../Styles/common.scss';

const LoginModal = ({ onClickModal }) => {
  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const onLoginClickModal = () => {
    setIsLoginClicked(!isLoginClicked);
  };

  const closeLoginModal = () => {
    setIsLoginClicked(false);
  };

  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputValue;

  const isValidEmail = email.includes('@') && email.includes('.');
  const specialLetter = password.search(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/
  );
  const isValidPassword = password.length >= 8;

  const getIsActive = isValidEmail && specialLetter === 0 && isValidPassword;

  const handleButtonValid = () => {
    if (!isValidEmail) {
      alert('이메일 형식이 맞지 않습니다.');
      return false;
    } else if (specialLetter === -1) {
      alert('비밀번호에 대문자, 소문자, 특수문자를 포함해주세요.');
      return false;
    } else if (!isValidPassword) {
      alert('비밀번호 8자 이상으로 적어주세요');
      return false;
    } else {
      return true;
    }
  };

  function handleInputValue(e) {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  }

  function goToMain() {
    handleButtonValid() &&
      fetch('http://10.58.2.64:8000/users/signin', {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.token) {
            localStorage.setItem('token', res.token);
          } else {
            alert('');
          }
        });
  }

  return (
    <div className="loginModal">
      {isLoginClicked && <SignUpModal onLoginClickModal={onLoginClickModal} />}
      <div className="login">
        <h1 className="logo">KIDSNEY account</h1>
        <button className="closeBtn" onClick={onClickModal}>
          X
        </button>
        <form className="loginContainer">
          <input
            className="loginId"
            type="email"
            placeholder="Username or Email Address"
            onChange={handleInputValue}
            name="email"
          />
          <input
            className="loginPw"
            type="password"
            placeholder="Password"
            onChange={handleInputValue}
            name="password"
          />
          <button
            className={getIsActive ? 'loginButtonActive' : 'loginButton'}
            type="button"
            onClick={goToMain}
          >
            Sign In
          </button>
        </form>
        <div className="loginHelp">Need help signing in?</div>
        <div className="createId">
          <button
            onClick={() => {
              onLoginClickModal();
              closeLoginModal();
            }}
          >
            Create an Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
