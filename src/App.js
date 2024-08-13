import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((interest) => interest !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label="name"
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="email"
            />
          </label>
          <br />
          <fieldset>
            <legend>Interests</legend>
            <label>
              <input
                type="checkbox"
                value="Tech"
                onChange={handleInterestChange}
                aria-label="tech"
              />
              Tech
            </label>
            <label>
              <input
                type="checkbox"
                value="Sports"
                onChange={handleInterestChange}
                aria-label="sports"
              />
              Sports
            </label>
            <label>
              <input
                type="checkbox"
                value="Music"
                onChange={handleInterestChange}
                aria-label="music"
              />
              Music
            </label>
          </fieldset>
          <br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h2>Thank you, {name}!</h2>
          <p>You have selected the following interests:</p>
          <ul>
            {interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
