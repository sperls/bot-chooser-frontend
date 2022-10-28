import { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import robot1 from './robot1.svg';
import './App.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [otp, setOtp] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    localStorage.removeItem('token');
  }, [])

  const generateOtp = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    };
    const response = await fetch('https://w40cmw1nyl.execute-api.us-east-1.amazonaws.com/otp/generate', requestOptions);
    const data = await response.json();
    setSessionId(data.sessionId);
  }
  
  const validateOtp = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId, otp })
    };
    const response = await fetch('https://w40cmw1nyl.execute-api.us-east-1.amazonaws.com/otp/validate', requestOptions);
    const data = await response.json();
    setToken(data.token);
    localStorage.setItem('token', data.token);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={robot1} className="App-logo" alt="logo" />
        <h1>
          Welcome to BotChooser
        </h1>
        
        {!sessionId && (
          <div>
            <p>
              Enter your email address to receive a login code
            </p>
            <input className="App-input" value={email} onChange={({target}) => setEmail(target.value)}/>
            <button className="App-button" onClick={() => generateOtp(email)}>submit</button>
          </div>
        )}
        {sessionId && (
          <div>
            <p>
              {`Enter login code for ${email}`}
            </p>
            <input className="App-input" value={otp} onChange={({target}) => setOtp(target.value)}/>
            <button className="App-button" onClick={() => validateOtp(otp)}>login</button>
          </div>
        )}
        {token && <Redirect to={{pathname: "/bots"}} replace={true} />}
      </header>
    </div>
  );
}

export default Home;
