import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "./rythm.css";

import NPM from "./logos/npm-svg";

const SectionHeader = ({ children }) => <h3 className="section-header">{children}</h3>;
const ItemHeader = ({ children }) => <h4 className="item-header">{children}</h4>;

const PersonalProject = ({ name, icon: Icon, content }) => (
  <div>
    <ItemHeader>
        <span>{name}</span>
      <Icon/>
    </ItemHeader>
    {content()}
  </div>
);

const sections = {
  personalProjects: [
      {
          name: "N/A",
          icon: () => "-",
          content: () => (
              <div>
                  N/A
              </div>
          )
      },
      {
          name: "N/A",
          icon: () => "",
          content: () => (
              <div>
                  N/A
              </div>
          )
      },
      {
          name: "N/A",
          icon: () => "N/A",
          content: () => (
              <div>
                  N/A
              </div>
          )
      },
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
        <header>
            <span>
                <h1>
                    Danny Michaelis
                </h1>
            </span>
            <span></span>
        </header>
        <section></section>
        <footer>
        <SectionHeader>Personal Projects</SectionHeader>
        <div className="grid">
          {sections.personalProjects.map(project => (
            <PersonalProject key={project.name} {...project} />
          ))}
        </div>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
