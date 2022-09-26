import React from "react";
import "./InputOutput.css";
// import Markdown from "marked-react";
import { marked } from "marked";

class InputOutput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  getMarkdownText() {
    var rawMarkup = marked.parse("# header This is _Markdown_.");
    return { __html: rawMarkup };
  }

  render() {
    return (
      <React.Fragment>
        <textarea id="editor"></textarea>
        <div id="preview">
          <div dangerouslySetInnerHTML={this.getMarkdownText()} />
        </div>
      </React.Fragment>
    );
  }
}

//marked.parse('# Marked in the browser\n\nRendered by **marked**.');

export default InputOutput;
