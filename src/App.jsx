import { useEffect } from 'react';
import { useStoreContext } from './context/useStoreContext';

function App() {
  const { getPopularGames } = useStoreContext();

  useEffect(() => {
    getPopularGames();
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">testing tailwind</h1>
    </div>
  );
}

export default App;
