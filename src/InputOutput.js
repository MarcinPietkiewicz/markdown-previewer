import React from "react";
import "./InputOutput.css";
import Markdown from "marked-react";
import { marked } from "marked";

class InputOutput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  getMarkdownText() {
    var rawMarkup = marked.parse("# header This is Markdown.\n longer text  ");
    return { __html: rawMarkup };
  }

  render() {
    return (
      <React.Fragment>
        <textarea id="editor"></textarea>
        <div id="preview">
           <div dangerouslySetInnerHTML={this.getMarkdownText()} />
   <Markdown value={`# header This is Markdown. \n longer text`} />
        </div>
      </React.Fragment>
    );
  }
}

export default InputOutput;

   <Markdown value={`- header This is Markdown. \n longer text`}/>