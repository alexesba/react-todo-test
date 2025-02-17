import { React } from 'react';
import { createRoot  } from 'react-dom/client';

const TodoManager = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Todo Manager</h1>
         <span> Content goes here </span>
      </div>
    </div>
  );
}

container = document.getElementById('app');

const root = createRoot(container);

root.render(<TodoManager />);

if(module.hot) {
  module.hot.accept();
}
