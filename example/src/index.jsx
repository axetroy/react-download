import React from 'react';
import { render } from 'react-dom';
import Download from '../../lib/react-download';

const element = document.createElement('div');
document.body.appendChild(element);

class App extends React.Component {
  render() {
    return (
      <div>
        <Download file="test.md" content="# hello world">
          <button type="button">Click and Download file</button>
        </Download>
      </div>
    );
  }
}

render(<App />, element);
