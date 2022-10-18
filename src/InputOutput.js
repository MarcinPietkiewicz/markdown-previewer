import React from "react";
import "./InputOutput.css";
// import Markdown from "marked-react";
import { marked } from "marked";
import Prism from "prismjs";
import styles from "./prism.css";

class InputOutput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.getMarkdownText = this.getMarkdownText.bind(this);
    this.handleChange = this.handleChange.bind(this);
    marked.setOptions({
      breaks: true,
      highlight: function (code) {
        return Prism.highlight(code, Prism.languages.javascript, "javascript");
      },
    });
  }

  componentDidMount() {
    this.setState({ text: placeholder });
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  getMarkdownText(input) {
    let rawMarkup = marked.parse(input, { breaks: true });
    return rawMarkup;
  }

  render() {
    return (
      <React.Fragment>
        <textarea id="editor" value={this.state.text} onChange={this.handleChange}></textarea>
        <div id="output-title">Markdown text:</div>
        <div id="preview" dangerouslySetInnerHTML={{ __html: this.getMarkdownText(this.state.text) }} />
      </React.Fragment>
    );
  }
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

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
1. And last but not least, let's not forget embedded images:

![Random image](https://picsum.photos/600/300)
`;

export default InputOutput;
