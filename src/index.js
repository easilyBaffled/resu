import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "./rythm.css";

import NPM from "./logos/npm-svg";

const SectionHeader = ({ children }) => <div>{children}</div>;
const ItemHeader = ({ children }) => <h4>{children}</h4>;

const PersonalProject = ({ name, icon, content }) => (
  <div>
    <ItemHeader>
      {name}
      {icon}
    </ItemHeader>
    {content()}
  </div>
);

const sections = {
  personalProjects: [
    {
      name: "console.ident",
      icon: NPM,
      content: () => (
        <div>
          <p>
            The console function Modern Javascript has been missing. It returns
            the value that's being logged instead of <code>undefined</code> like{" "}
            <code>console.log</code>.
          </p>
          <p>
            Slides for DCJS talk:{" "}
            <a href="https://bit.ly/2Y4S43G">https://bit.ly/2Y4S43G</a>{" "}
          </p>
          <p>
            Available on NPM:{" "}
            <a href="https://nodei.co/npm/console.ident">
              https://nodei.co/npm/console.ident
            </a>
          </p>
        </div>
      )
    }
  ]
};

function App() {
  return (
    <div className="page">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <PersonalProject {...sections.personalProjects[0]} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
