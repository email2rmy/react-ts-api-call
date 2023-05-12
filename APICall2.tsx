import * as React from 'react';
import './style.css';

function callApi() {
  fetch('https://api.publicapis.org/entries')
    .then((response) => response.json())
    .then(data => alert(data.count) ) // Displays the firstName from the API response
    .catch((err) => {
          console.log(err.message);
      });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={callApi}>Call APICall2</button>
      </header>
    </div>
  );
}

export default App;
