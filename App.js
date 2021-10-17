import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Screen from './app/components/Screen';
import TermsAndCondition from './app/components/TermsAndCondition';
import Login from './app/components/Login';
import SignUp from './app/components/SignUp';


export default function App() {
  return (
    <Screen>
      <SignUp/>
    </Screen>
    
  );
}
