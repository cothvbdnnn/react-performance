import './App.css';
import { lazy, Suspense } from 'react';

const List = lazy(() => import('./components/RenderProps/List'));
const ListCounter = lazy(() => import('./components/RenderProps/ListCounter'));
const ChildCounter = lazy(() => import('./components/RenderProps/ChildCounter'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <header className="App-header">
          <ChildCounter />
        </header>
      </Suspense>
    </div>
  );
}

export default App;
