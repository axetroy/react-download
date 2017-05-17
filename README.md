# react-download

react component for click and then download then specify content file.

[Online Demo](https://axetroy.github.io/react-download/)

### Installation

```bash
npm install @axetroy/react-download
```

### Usage

```javascript
import React from 'react';
import { render } from 'react-dom';
import Download from '@axetroy/react-download';

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
```

### Props

- file

download file name

- content

the file content you want to download

### Run the Demo

```bash
git clone https://github.com/axetroy/react-download.git
yarn
yarn start
```

### License

The [MIT License](https://github.com/axetroy/react-download/blob/master/LICENSE)