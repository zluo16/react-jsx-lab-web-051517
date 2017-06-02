import React from 'react';
import ReactDOM from 'react-dom';

import RegistrationForm from './components/RegistrationForm';
import Webpage from './components/Webpage';

ReactDOM.render(
  (
    <div>
      <RegistrationForm />
      <Webpage />
    </div>
  ),
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
