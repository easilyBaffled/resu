import React from "react";
import NPM from "./logos/npm-svg";

export default {
    professionalExperience: [
        {
            title: "Software Engineer",
            dateRange: "December '17 - Current",
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
            dateRange: "June '16 - July '17",
            name: "Planet3",
            points: [
                "Led a four person global team to build a server-side rendered web app using JQuery and handlebars. The MVP app was built in four months for 10,000 pilot users",
                "Initiated a process to review and updated development practices and standards by creating custom ESLint rules",
                "Utilized user (consumer) feedback on MVP to build a successful second iteration app, which was deployed with updates on a weekly basis ",
                "Interacted directly with teams across the company; product, sales, education, game development, systems architecture ",
            ]
        },
        {
            title: "Junior Software Engineer",
            dateRange: "December '15 - April '16",
            name: "Persista Inc.",
            points: [
                "Member of a five person start-up and contributed to all aspects of the product including funding meetings",
                "Built a multi-platform application as a full stack java script developer",
                "Used React and Redux.js to create UI components that could be shared across a web app, mobile web app, and chrome extension ",
            ]
        },
        {
            title: "Junior Software Engineer",
            dateRange: "June '14 - November '15",
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
            icon: NPM,
            content: () => (
                <div>
                    <p>
                        console.ident is the console function Modern Javascript has been missing. It returns
                        the value that's being logged instead of <code>undefined</code> like{" "}
                        <code>console.log</code>.
                    </p>
                    <div>
                        Slides for DCJS talk:{" "}
                        <a href="https://bit.ly/2Y4S43G">https://bit.ly/2Y4S43G</a>{" "}
                    </div>
                    <p>
                        Available on NPM:{" "}
                        <a href="https://nodei.co/npm/console.ident">
                            https://nodei.co/npm/console.ident
                        </a>
                    </p>
                </div>
            )
        },
        {
            name: "Responsive Custom Layout",
            icon: () => "-",
            content: () => (
                <div>
                    <p>
                        A layout tool for user created pages. Users can place the boxes
                        anywhere in the container and set their size. The boxes will
                        maintain order and aspect ratio when on smaller screens. Built with
                        just native Javascript.
                    </p>
                    <div>
                        Demo:{" "}
                        <a href="https://codepen.io/easilyBaffled/full/KvKrev/">
                            https://codepen.io/easilyBaffled/full/KvKrev/
                        </a>
                    </div>
                    <p>
                        Code:{" "}
                        <a href="https://codepen.io/easilyBaffled/pen/KvKrev">
                            https://codepen.io/easilyBaffled/pen/KvKrev
                        </a>
                    </p>
                </div>
            )
        },
        {
            name: (
                <span>
          FIDO - <code>Fetch-util</code>
        </span>
            ),
            icon: () => "N/A",
            content: () => (
                <div>
                    <p>
                        A collection of small modules to simplify making fetch requests.
                        Includes a chainable api for building requests, a data generator to
                        emulate an API, a data transfomer for request results.
                    </p>
                    <p>
                        <a href="https://github.com/easilyBaffled/fido">
                            https://github.com/easilyBaffled/fido
                        </a>
                    </p>
                </div>
            )
        },
        {
            name: <code>pid-from-port</code>,
            icon: () => "",
            content: () => (
                <div>
                    <p>
                        A fork, with an open pull request, of an existing module to fix a
                        bug, simplify the code, and improve CI features. A cross-platform
                        node module that can find a pid from a port number.
                    </p>
                    <p>
                        <a href="https://github.com/easilyBaffled/pid-from-port">
                            https://github.com/easilyBaffled/pid-from-port
                        </a>
                    </p>
                </div>
            )
        },

    ]
};
