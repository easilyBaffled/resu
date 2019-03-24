/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

import React from "react";
import ReactDOM from "react-dom";
import { Flex, Box } from "@rebass/grid/emotion";
import { GraphQL, JQuery, ReactLogo, Redux, Sass, Nodejs, Angular } from 'emotion-icons/simpleIcons';

import "./styles.css";
import "./rythm.css";

import sections from './sections';

const flags = {
    skillBar: true
};

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
    marginTop: "0",
    "& *": {
      marginRight: "1rem"
    }
  },
  centered
);

// match css rule (\w+)(?:-(\w+))?(?:-(\w+))?(?:-(\w+))?:\s*([^;]+)

const ProfessionalExperience = ({ name, dateRange, title, points }) => (
  <div>
    <Flex justifyContent="space-between">
      <Box width={1 / 2}>
        <ItemHeader>{title}</ItemHeader>
      </Box>
      <Box width={1 / 2}>
        <ItemHeader>{dateRange}</ItemHeader>
      </Box>
    </Flex>
    <ItemHeader>{name}</ItemHeader>
    <ul style={{ maxWidth: "80%", padding: '1rem 2rem'}}>
      {points.map(point => (
        <li key={point}>{point}</li>
      ))}
    </ul>
    <ToolsBar size={.8}/>
    <Box width={2/3} css={css({borderBottom: "1px solid black"})}/>
  </div>
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



function App() {
  return (
    <div className="page">
      <Flex as="header" css={centered}>
        <h1 css={important}>Danny Michaelis</h1>
        <Flex flexWrap="wrap">
          <Box width={1} as="h4" css={important}>
            2122 Massachusetts Ave NW Washington, DC 20008
          </Box>
          <Box width={1 / 2} as="h4" css={important}>
            Email: dmichaelis0@gmail.com
          </Box>
          <Box width={1 / 2} as="h4" css={important}>
            Cell Phone: 973-518-0044
          </Box>

          <Box width={1 / 2} as="h4" css={important}>
            Github: <a href="https://goo.gl/rylpYp">https://goo.gl/rylpYp</a>
          </Box>
          <Box width={1 / 2} as="h4" css={important}>
            LinkedIn: <a href="https://goo.gl/FMhSPF">https://goo.gl/FMhSPF</a>
          </Box>
        </Flex>
      </Flex>
        <h4><span css={important}>Education </span>

            University of Maryland{' '}
            College Park
            Bachelors of Science
            Computer Science
            - May 2014
        </h4>
            <section className="body">
        <SectionHeader>Professional Experience</SectionHeader>
        {sections.professionalExperience.map(experiance => (
          <ProfessionalExperience key={experiance.name} {...experiance} />
        ))}
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
