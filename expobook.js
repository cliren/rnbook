// ./expobook.js
import React from 'react';
import createExpobook from 'expobook';
import MyButton from './components/button';

const expobook = createExpobook();

expobook.add('My Button', () => <MyButton></MyButton>);


export default expobook.build();
