/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

import React from "react";
import ReactDOM from "react-dom";
import { Flex, Box } from "@rebass/grid/emotion";
import { GraphQL, JQuery, ReactLogo, Redux, Sass, Nodejs, Angular } from 'emotion-icons/simpleIcons';

import "./styles.css";
import "./rythm.css";

import sections from "./sections";

console.ident = ( v, l = '' ) => ( console.log( l, v ), v );

const flags = {
    skillBar: true
};

/*
* ==================
* Styles
* ==================
* */
const sectionBorders = {
    top: css({ borderTop: '2px solid black'}),
    right: css({ borderRight: '2px solid black'}),
    bottom: css({ borderBottom: '2px solid black'}),
    left: css({ borderLeft: '2px solid black'}),
}

const headerDataBorders = {
    top: css({ borderTop: '1px solid lightgrey'}),
    right: css({ borderRight: '1px solid lightgrey'}),
    bottom: css({ borderBottom: '1px solid lightgrey'}),
    left: css({ borderLeft: '1px solid lightgrey'}),
}



const negateMargin = css({ margin: 0 } );

const centered = css({
  display: "flex",
  alignItems: "center"
});

const important = css({
  color: "#138ade"
});

const Underlined = styled.span({
  paddingRight: "1.5rem",
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
    borderBottom: "2px solid #090909"
});

const ImportantHeader = styled.h3(
  {
    display: "flex",
    alignItems: "center"
  },
  important
);

const ToolsBar = ( { size = 1 } ) =>
    flags.skillBar &&
    <Box width={1}>
        <Flex alignItems="center" css={css({ '& *': { marginRight: 20, marginBottom: '.5rem', height: `${Number(size)+.5}rem`, fontSize: `${size}rem` } })}>
            <h4>Tools:</h4>
            <Flex alignItems="center">
                <GraphQL /> <p>GraphQL</p>
            </Flex>
            <Flex alignItems="center">
                <ReactLogo /> <p>React</p>
            </Flex>
            <Flex alignItems="center">
                <Redux  /> <p>Redux</p>
            </Flex>
            <Flex alignItems="center">
                <JQuery  /> <p>JQuery</p>
            </Flex>
            <Flex alignItems="center">
                <Sass  /> <p>Sass</p>
            </Flex>
            <Flex alignItems="center">
                <Nodejs  /> <p>Node.js</p>
            </Flex>
            <Flex alignItems="center">
                <Angular  /> <p>Angular</p>
            </Flex>
        </Flex>
    </Box>;

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

// match css rule (\w+)(?:-(\w+))?(?:-(\w+))?(?:-(\w+))?:\s*([^;]+)

const ProfessionalExperience = ({ name, dateRange, title, points }) => (
    <Box width={1} >
        <Flex justifyContent="space-between">
            <ItemHeader>{title}</ItemHeader>
            <ItemHeader>{dateRange}</ItemHeader>
        </Flex>
        <ItemHeader>{name}</ItemHeader>
        <ul style={{ padding: "0 2rem"}}>
          {points.map(point => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <ToolsBar size={.8}/>
        <Box width={2/3} mb={3} css={ name !== 'AOL' && sectionBorders.bottom } />
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
    padding: '.5rem .5rem .5rem'
});

function App() {
  return (
    <div className="page">
      <Flex as="header" css={[centered, sectionBorders.bottom]}>
        <Box width={1 / 4} as="h1" css={[important]}>
          Danny Michaelis
        </Box>
        <Box width={3 / 4} css={sectionBorders.left}>
          <Flex flexWrap="wrap">
            <Box width={1} as="h4" css={[important, splitPadding,  headerDataBorders.bottom]}>
              2122 Massachusetts Ave NW Washington, DC 20008
            </Box>
            <Box width={1 / 2} as="h4" css={[important, splitPadding, headerDataBorders.bottom, headerDataBorders.right]}>
              Email: dmichaelis0@gmail.com
            </Box>
            <Box width={1 / 2} as="h4" css={[important, splitPadding, headerDataBorders.bottom]}>
              Cell Phone: 973-518-0044
            </Box>

            <Box width={1 / 2} as="h4" css={[important, splitPadding, headerDataBorders.right]}>
              Github: <a href="https://goo.gl/rylpYp">https://goo.gl/rylpYp</a>
            </Box>
            <Box width={1 / 2} as="h4" css={[important, splitPadding]}>
              LinkedIn:{" "}
              <a href="https://goo.gl/FMhSPF">https://goo.gl/FMhSPF</a>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <section className="body">
        <SectionHeader>Professional Experience</SectionHeader>
        {sections.professionalExperience.map(experiance => (
          <ProfessionalExperience key={experiance.name} {...experiance} />
        ))}
      </section>
      <footer css={sectionBorders.top}>
        <SectionHeader>Personal Projects</SectionHeader>
        <div className="grid">
          {sections.personalProjects.map(project => (
            <PersonalProject key={project.name} {...project} />
          ))}
        </div>
      </footer>
        <h4>
            <span css={important}>Education </span>
            University of Maryland College Park Bachelors of Science Computer
            Science - May 2014
        </h4>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
