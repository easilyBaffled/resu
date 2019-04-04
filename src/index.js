/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

import React from "react";
import ReactDOM from "react-dom";
import { Flex, Box } from "@rebass/grid/emotion";
import {
  GraphQL,
  JQuery,
  ReactLogo,
  Redux,
  Sass,
  Nodejs,
  Angular
} from "emotion-icons/simpleIcons";

import { School, Phone, Email, LocationCity } from "emotion-icons/material";
import { MarkGithub } from "emotion-icons/octicons";

import "./styles.css";
import "./rythm.css";

import sections from "./sections";

console.ident = (v, l = "") => (console.log(l, v), v);

const flags = {
  skillBar: true,
  useIcon: true
};

/*
 * ==================
 * Styles
 * ==================
 * */
const sectionBorders = {
  top: css({ borderTop: "2px solid black" }),
  right: css({ borderRight: "2px solid black" }),
  bottom: css({ borderBottom: "2px solid black" }),
  left: css({ borderLeft: "2px solid black" })
};

const headerDataBorders = {
  top: css({ borderTop: "1px solid lightgrey" }),
  right: css({ borderRight: "1px solid lightgrey" }),
  bottom: css({ borderBottom: "1px solid lightgrey" }),
  left: css({ borderLeft: "1px solid lightgrey" })
};

const centered = css({
  display: "flex",
  alignItems: "center"
});

const blueText = css({
  color: "#138ade"
});

const Underlined = styled.span({
  paddingRight: "1.5em",
  paddingTop: ".4em",
  paddingBottom: ".4em",
  borderBottom: "2px solid #090909",
  marginBottom: "0.4em"
});

const ImportantHeader = styled.h4(
  {
    display: "flex",
    alignItems: "center"
  },
  blueText
);

const ToolsBar = ({ size = 1 }) =>
  flags.skillBar && (
    <Box width={1}>
      <h4>Tools:</h4>
      <Box
        flexDirection="column"
        css={css({
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          /* grid-template-rows: 1fr 1fr 1fr 1fr 1fr; */
          /* grid-column-gap: 8px; */
          gridRowGap: ".5em",
          "& *": {
            lineHeight: 0,
            alignSelf: "center"
          }
        })}
      >
        <GraphQL /> <p>GraphQL</p>
        <ReactLogo /> <p>React</p>
        <Redux /> <p>Redux</p>
        <JQuery /> <p>JQuery</p>
        <Sass /> <p>Sass</p>
        <Nodejs /> <p>Node.js</p>
      </Box>
    </Box>
  );

const SectionHeader = ({ children }) => (
  <ImportantHeader>
    <Underlined>{children}</Underlined>
  </ImportantHeader>
);

const ItemHeader = styled.h5(
  {
    paddingTop: "0",
    "& *": {
      paddingRight: "1em"
    }
  },
  centered
);

const Header = ({ as = "p" }) => (
  <Box width={1 / 4} mb="2em" css={sectionBorders.right}>
    <Flex as="header" flexDirection="column" pr="2em" css={[centered]}>
      <Box
        width={1}
        as="h2"
        css={[blueText, css({ padding: ".5em 0" }), sectionBorders.bottom]}
      >
        Danny Michaelis
      </Box>
      <Box width={1} pb="1em">
        <Flex flexWrap="wrap" css={css({ "& *": { color: "#73AFD9" } })}>
          {" "}
          {/*Experimental, making the colors lighter so it pulls less attention*/}
          <Box width={1} as={as} css={[splitPadding, headerDataBorders.bottom]}>
            {flags.useIcon ? <LocationCity /> : ""} <br /> Washington, DC 20009
          </Box>
          <Box width={1} as={as} css={[splitPadding, headerDataBorders.bottom]}>
            {flags.useIcon ? <Email /> : "Email:"} <br /> dmichaelis0@gmail.com
          </Box>
          <Box width={1} as={as} css={[splitPadding, headerDataBorders.bottom]}>
            {flags.useIcon ? <Phone /> : "Phone:"} <br /> 973-518-0044
          </Box>
          <Box width={1} as={as} css={[splitPadding, headerDataBorders.bottom]}>
            {flags.useIcon ? <MarkGithub /> : ""} Github: <br />
            <a href="https://goo.gl/rylpYp">https://goo.gl/rylpYp</a>
          </Box>
          <Box as={as}>
            {flags.useIcon ? <School /> : "School:"} <br />
            University of Maryland <br />
            College Park BS Computer Science <br />
            May 2014
          </Box>
          {/*<Box width={1 / 2} as="h5" css={[important, splitPadding]}>*/}
          {/*LinkedIn:{" "}*/}
          {/*<a href="https://goo.gl/FMhSPF">https://goo.gl/FMhSPF</a>*/}
          {/*</Box>*/}
        </Flex>
      </Box>
      <Box width={1} mb={3} css={sectionBorders.top} />
      <ToolsBar size={1} />
    </Flex>
  </Box>
);

const ProfessionalExperience = ({ name, dateRange, title, points }) => (
  <Box width={1}>
    <Flex justifyContent="space-between">
      <ItemHeader>{title}</ItemHeader>
      <ItemHeader>{dateRange}</ItemHeader>
    </Flex>
    <ItemHeader>{name}</ItemHeader>
    <ul style={{ padding: "0 2em 1em" }}>
      {points.map(point => (
        <li key={point}>
          <p>{point}</p>
        </li>
      ))}
    </ul>
    <Box
      width={"232px"}
      mb="1.5em"
      css={name !== "AOL" && sectionBorders.bottom}
    />
  </Box>
);

const classMap = ["left-content", "right-content", "footer"];

const PersonalProject = ({ name, icon: Icon, content, i }) => (
  <div className={classMap[i]}>
    <ItemHeader>
      <span>{name}</span>
      {/*<Icon />*/}
    </ItemHeader>
    {content()}
  </div>
);

const splitPadding = css({
  padding: ".5em .5em .5em"
});

function App() {
  return (
    <div className="page">
      <Flex>
        <Header />
        <section className="body">
          <SectionHeader>Professional Experience</SectionHeader>
          {sections.professionalExperience.map((experiance, i) => (
            <ProfessionalExperience key={i} {...experiance} />
          ))}
        </section>
      </Flex>
      <footer css={sectionBorders.top}>
        <SectionHeader>Personal Projects</SectionHeader>
        <div className="grid">
          {sections.personalProjects.map((project, i) => (
            <PersonalProject key={i} {...project} i={i} />
          ))}
        </div>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
