import './App.css';
import { lazy, Suspense } from 'react';

// const List = lazy(() => import('./components/RenderProps/List'));
// const ListCounter = lazy(() => import('./components/RenderProps/ListCounter'));
// const ChildCounter = lazy(() => import('./components/RenderProps/ChildCounter'));
// const HoverOpacity = lazy(() => import('./components/WrappedComponent/HoverOpacity'));
// const HoverOpacity = lazy(() => import('./components/HOC/HoverOpacity'));
const Memoization = lazy(() => import('./components/Memoization'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <header className="App-header">
          <Memoization />
        </header>
      </Suspense>
    </div>
  );
}

export default App;
