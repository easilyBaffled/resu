import React from "react";
import ReactDOM from "react-dom";
import { Flex, Box } from '@rebass/grid';


import "./styles.css";
import "./rythm.css";

import NPM from "./logos/npm-svg";

const SectionHeader = ({ children }) => <h2 className="section-header important"><span className="underline">{children}</span></h2>;
const ItemHeader = ({ children }) => <h4 className="item-header">{children}</h4>;
const IH = ({ children }) => <Box as='h4' className="item-header" width={1/2}>{children}</Box>;
const ProfessionalExperience = ( { name, dateRange, title, points } ) =>
    <div>
        <Flex><IH>{title}</IH><IH>{dateRange}</IH></Flex>
        <div><h4>{name}</h4></div>
        <ul>
            {
                points.map( point => <li key={point}>{point}</li> )
            }
        </ul>
    </div>;

const PersonalProject = ({ name, icon: Icon, content }) => (
  <div>
    <IH>
        <span>{name}</span>
      <Icon/>
    </IH>
    {content()}
  </div>
);

const sections = {
    professionalExperience: [
        {
            title: 'Software Engineer',
            dateRange: 'December \'17 - Current',
            name: 'Lab49',
            points: [
            'Built UI for financial web platform with modern Javascript',
            'Built experimental dashboard for service health reporting',
            'Iterated on existing company best practices',
            'Developed and demoed new possible practices and tools such as Git Hooks, GraphQL, and Property-Based Testing'
            ]



        }
    ],
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
        <header>
            <span>
                <h1 className="important">
                    Danny Michaelis
                </h1>
            </span>
            <span></span>
        </header>
        <section className="body">
            <SectionHeader>Professional Experience</SectionHeader>
            {
                sections.professionalExperience.map(
                    experiance => <ProfessionalExperience key={experiance.name} {...experiance}/>
                )

            }
        </section>
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
