import React from "react";
import NPM from "./logos/npm-svg";
import { Flex } from "@rebass/grid/emotion";

export default {
  professionalExperience: [
    {
      title: "Software Engineer",
      dateRange: "December 2017 - Present",
      name: "Lab49",
      points: [
        "Contributes to a commercial web application with over 100,000 users in beta testing (built in react and redux)",
        "Collaborates directly with client stakeholders to ensure project integrity and stability",
        "Built experimental dashboard for service health reporting",
        "Built UI for financial web platform with modern Javascript"
      ]
    },
    {
      title: "Software Engineer",
      dateRange: "June 2016 - July 2017",
      name: "Planet3",
      points: [
        "Led a four person global team to build a server-side rendered web app using JQuery and handlebars. The MVP app was built in four months for 10,000 pilot users",
        "Initiated a process to review and updated development practices and standards by creating custom ESLint rules",
        "Utilized user (consumer) feedback on MVP to build a successful second iteration app, which was deployed with updates on a weekly basis ",
        "Interacted directly with teams across the company; product, sales, education, game development, systems architecture "
      ]
    },
    {
      title: "Junior Software Engineer",
      dateRange: "December 2015 - April 2016",
      name: "Persista Inc.",
      points: [
        "Member of a five person start-up and contributed to all aspects of the product including funding meetings",
        "Built a multi-platform application as a full stack java script developer",
        "Used React and Redux.js to create UI components that could be shared across a web app, mobile web app, and chrome extension "
      ]
    },
    {
      title: "Junior Software Engineer",
      dateRange: "June 2014 - November 2015",
      name: "AOL",
      points: [
        "Developed, planned, and led a team to create mobile prototypes for a sales customer",
        "Utilized Angular.js to develop UI and business logic for large scale web app",
        "Built internal metrics dashboard for the product team",
        "Designed original mobile specific interactive ad format"
      ]
    }
  ],
  personalProjects: [
    {
      name: "console.ident",
      content: () => (
        <div>
          <p>
            console.ident is the console function Modern Javascript has been
            missing. It returns the value that's being logged instead of{" "}
            <code>undefined</code> like <code>console.log</code>.
          </p>
          <p>
            Slides for DCJS talk:{" "}
            <a href="https://bit.ly/2Y4S43G">https://bit.ly/2Y4S43G</a>{" "}
          </p>
          <Flex as="p" alignItems="center">
            <NPM />:{" "}
            <a href="https://nodei.co/npm/console.ident">
              {" "}
              https://nodei.co/npm/console.ident
            </a>
          </Flex>
        </div>
      )
    },
    {
      name: "Match-By",

      content: () => (
        <div>
          <p>
            This module was made with affection for Pattern Matching. It turns
            an object into an easy to read and composable conditional, for when
            the native options become too cumbersome.
          </p>
          <p>
            Github Repo:{" "}
            <a href="https://github.com/easilyBaffled/match">
              https://github.com/easilyBaffled/match
            </a>
          </p>
          <Flex as="p" alignItems="center">
            <NPM />:{" "}
            <a href="https://www.npmjs.com/package/match-by">
              {" "}
              https://www.npmjs.com/package/match-by
            </a>
          </Flex>
        </div>
      )
    },
    {
      name: "AudibleWeb",

      content: () => (
        <div>
          <p>
            An accessibility focused chrome extension bringing advanced
            text-to-speech features including pause/resume and reading rate to
            every browser page. This extension also uses the
            <code>state-speech-synth</code> module I wrote to provide a succinct
            API and guarantee consistent data.
          </p>
          <p>
            Extention Github Repo{" "}
            <a href="https://github.com/easilyBaffled/AudibleWeb">
              https://github.com/easilyBaffled/AudibleWeb
            </a>
          </p>
          <Flex as="p" alignItems="center">
            <NPM /> - <code>state-speech-synth</code>:{" "}
            <a href="https://www.npmjs.com/package/state-speech-synth">
              {" "}
              https://www.npmjs.com/package/state-speech-synth
            </a>
          </Flex>
        </div>
      )
    }
    // {
    //   name: <code>pid-from-port</code>,
    //   icon: () => "",
    //   content: () => (
    //     <div>
    //       <p>
    //         A fork, with an open pull request, of an existing module to fix a
    //         bug, simplify the code, and improve CI features. A cross-platform
    //         node module that can find a pid from a port number.
    //       </p>
    //       <p>
    //         <a href="https://github.com/easilyBaffled/pid-from-port">
    //           https://github.com/easilyBaffled/pid-from-port
    //         </a>
    //       </p>
    //     </div>
    //   )
    // }
  ]
};
