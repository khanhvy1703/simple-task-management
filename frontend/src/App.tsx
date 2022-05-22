import React from 'react';
import './App.css';
import MainScreen from './screens/MainScreen';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className='App'>
        <MainScreen></MainScreen>
      </div>
    </ChakraProvider>
  );
}

export default App;
