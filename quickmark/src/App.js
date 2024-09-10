import React, { useState } from 'react';
import marked from 'marked';
import './App.css';

const defaultMarkdown = `
# Welcome to my Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App">
      <h1 className="app-title">Markdown Previewer</h1>
      <div className="editor-container">
        <h2 className="section-title">Editor</h2>
        <Editor markdown={markdown} onChange={handleChange} />
      </div>
      <div className="preview-container">
        <h2 className="section-title">Preview</h2>
        <Preview markdown={markdown} />
      </div>
    </div>
  );
}

function Editor({ markdown, onChange }) {
  return (
    <textarea
      id="editor"
      value={markdown}
      onChange={onChange}
    />
  );
}

function Preview({ markdown }) {
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{ __html: marked(markdown) }}
    />
  );
}

export default App;
