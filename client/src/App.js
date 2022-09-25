import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('/hello').then((res) => console.log('gdfgfd'));
  }, []);

  return (
    <div className="App">
      app
    </div>
  );
}

export default App;
