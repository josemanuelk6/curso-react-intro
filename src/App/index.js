import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUi } from './AppUI';





function App() {

 
    
  return (
    <TodoProvider>
     <AppUi/>
    </TodoProvider>
  );
}






export default App;
