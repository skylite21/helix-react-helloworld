import React from 'react';
// import {render} from 'react-dom';
import { createRoot } from 'react-dom/client';
import Dog from './Dog';

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Dog name='Rex' color='brown' breed='Bulldog' />
    </div>
  );
};

// render(<App />, document.getElementById('root'));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
