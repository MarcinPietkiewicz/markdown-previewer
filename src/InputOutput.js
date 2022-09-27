import React from "react";
import "./InputOutput.css";
import Markdown from "marked-react";
import { marked } from "marked";

class InputOutput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.getMarkdownText = this.getMarkdownText.bind(this);
  }

  getMarkdownText(e) {
    let rawMarkup = marked.parse(e.target.value,  { breaks: true});
    this.setState({ text: rawMarkup });
    // return { __html: rawMarkup };
    // return rawMarkup;
  }

  render() {
    return (
      <React.Fragment>
        <textarea id="editor" onChange={this.getMarkdownText}></textarea>
        <div id="preview">
          <div dangerouslySetInnerHTML={{ __html: this.state.text}} />
          {/* <Markdown value={`# header This is Markdown. \n longer text`} /> */}
        </div>
      </React.Fragment>
    );
  }
}

export default InputOutput;

<Markdown value={`- header This is Markdown. \n longer text`} />;
