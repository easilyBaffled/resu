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

import { School, Phone, Email, LocationCity } from 'emotion-icons/material';
import { MarkGithub } from 'emotion-icons/octicons';

import "./styles.css";
import "./rythm.css";

import sections from "./sections";

console.ident = (v, l = "") => (console.log(l, v), v);

const flags = {
  skillBar: true
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

const negateMargin = css({ margin: 0 });

const centered = css({
  display: "flex",
  alignItems: "center"
});

const blueText = css({
  color: "#138ade"
});

const Underlined = styled.span({
  paddingRight: "1.5rem",
  paddingTop: ".5rem",
  paddingBottom: ".5rem",
  borderBottom: "2px solid #090909"
});

const ImportantHeader = styled.h3(
  {
    display: "flex",
    alignItems: "center"
  },
  blueText
);

const ToolsBar = ({ size = 1 }) =>
  flags.skillBar && (
    <Box width={1} css={[headerDataBorders.top, css({padding: ".5rem 0"})]} >
      <Flex
        alignItems="center"
        css={css({
          "& *": {
            marginRight: 20,
            marginBottom: 0,
            height: `${Number(size) + 0.5}rem`,
            fontSize: `${size}rem`,
          }
        })}
      >
        <h4>Tools:</h4>
        <Flex alignItems="center">
          <GraphQL /> <p>GraphQL</p>
        </Flex>
        <Flex alignItems="center">
          <ReactLogo /> <p>React</p>
        </Flex>
        <Flex alignItems="center">
          <Redux /> <p>Redux</p>
        </Flex>
        <Flex alignItems="center">
          <JQuery /> <p>JQuery</p>
        </Flex>
        <Flex alignItems="center">
          <Sass /> <p>Sass</p>
        </Flex>
        <Flex alignItems="center">
          <Nodejs /> <p>Node.js</p>
        </Flex>
        <Flex alignItems="center">
          <Angular /> <p>Angular</p>
        </Flex>
      </Flex>
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
      paddingRight: "1rem"
    }
  },
  centered
);

const Header = () =>
    <Flex as="header" css={[centered, sectionBorders.bottom]}>
        <Box width={1 / 4} as="h1" css={[blueText, css({ padding: 0 })]}>
            Danny Michaelis
        </Box>
        <Box width={3 / 4} css={sectionBorders.left}>
            <Flex flexWrap="wrap" css={css({ '& *': { color: '#73AFD9' }  })}> {/*Experimental, making the colors lighter so it pulls less attention*/}
                <Box
                    width={1/2}
                    as="h5"
                    css={[splitPadding, headerDataBorders.bottom]}
                >
                    { useIcon ? <LocationCity/>  : '' }Washington, DC 20009
                </Box>
                <Box
                    width={1 / 2}
                    as="h5"
                    css={[
                        splitPadding,
                        headerDataBorders.bottom,
                        headerDataBorders.left
                    ]}
                >
                    { useIcon ? <Email/>  : 'Email:' } dmichaelis0@gmail.com
                </Box>
                <Box
                    width={1 / 2}
                    as="h5"
                    css={[splitPadding, headerDataBorders.bottom]}
                >
                    { useIcon ? <Phone/>  : 'Phone:' } 973-518-0044
                </Box>
                <Box
                    width={1 / 2}
                    as="h5"
                    css={[splitPadding, headerDataBorders.left, headerDataBorders.bottom]}
                >
                    { useIcon ? <MarkGithub/>  : '' } Github: <a href="https://goo.gl/rylpYp">https://goo.gl/rylpYp</a>
                </Box>
                <Box as="h5">
                    { useIcon ? <School/>  : 'School:' } University of Maryland College Park BS Computer Science - May 2014
                </Box>
                {/*<Box width={1 / 2} as="h5" css={[important, splitPadding]}>*/}
                    {/*LinkedIn:{" "}*/}
                    {/*<a href="https://goo.gl/FMhSPF">https://goo.gl/FMhSPF</a>*/}
                {/*</Box>*/}
            </Flex>
        </Box>
    </Flex>;


const ProfessionalExperience = ({ name, dateRange, title, points }) => (
  <Box width={1}>
    <Flex justifyContent="space-between">
      <ItemHeader>{title}</ItemHeader>
      <ItemHeader>{dateRange}</ItemHeader>
    </Flex>
    <ItemHeader>{name}</ItemHeader>
    <ul style={{ padding: "0 2rem 1rem" }}>
      {points.map(point => (
        <li key={point}>{point}</li>
      ))}
    </ul>
    <ToolsBar size={1} />
    <Box width={2 / 3} mb={3} css={name !== "AOL" && sectionBorders.bottom} />
  </Box>
);

const PersonalProject = ({ name, icon: Icon, content }) => (
  <div>
    <ItemHeader>
      <span>{name}</span>
      <Icon />
    </ItemHeader>
    {content()}
  </div>
);

const splitPadding = css({
  padding: ".5rem .5rem .5rem"
});
const useIcon = true;

function App() {
  return (
    <div className="page">
     <Header />
      <section className="body">
        <SectionHeader>Professional Experience</SectionHeader>
        {sections.professionalExperience.map( ( experiance, i ) => (
          <ProfessionalExperience key={i} {...experiance} />
        ))}
      </section>
      <footer css={sectionBorders.top}>
        <SectionHeader>Personal Projects</SectionHeader>
        <div className="grid">
          {sections.personalProjects.map( ( project, i ) => (
            <PersonalProject key={i} {...project} />
          ))}
        </div>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
