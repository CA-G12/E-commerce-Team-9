import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('/hello').then(() => console.log('gdfgfd'));
  }, []);

  return (
    <div className="App">
      app
    </div>
  );
}

export default App;
