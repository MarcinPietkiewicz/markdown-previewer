import React from "react";
import "./InputOutput.css";
// import Markdown from "marked-react";
import { marked } from "marked";
import Prism from "prismjs";

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
    // inline code, a code block, a list item, a blockquote, an image, and bolded text

    this.getMarkdownText(placeholder);
  }

  handleChange(e){
this.getMarkdownText(e.target.value);
  }

  getMarkdownText(input) {
    let rawMarkup = marked.parse(input, { breaks: true });
    console.log(rawMarkup);
    this.setState({ text: rawMarkup });
    // return { __html: rawMarkup };
    // return rawMarkup;
  }

  render() {
    return (
      <React.Fragment>
        <textarea id="editor" onChange={this.handleChange}></textarea>
        <div id="preview" dangerouslySetInnerHTML={{ __html: this.state.text }} />
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

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;


export default InputOutput;
