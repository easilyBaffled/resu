/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

import React from "react";
import ReactDOM from "react-dom";
import { Flex, Box } from "@rebass/grid/emotion";

import "./styles.css";
import "./rythm.css";

import sections from "./sections";

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
    <ul
      style={{
        borderBottom: "1px solid black",
        maxWidth: "80%",
        padding: "1rem 2rem"
      }}
    >
      {points.map(point => (
        <li key={point}>{point}</li>
      ))}
    </ul>
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
          <Box width={1/4} as="h1" css={important}>
              Danny Michaelis
          </Box>
          <Box width={3/4}>
              <Flex flexWrap="wrap">
                  <Box width={1 / 2} as="h4" css={important}>
                      Washington, DC 20009
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
                  <Box width={1} css={important}>
                      <h5>University of Maryland College Park
                          Bachelors of Science Computer Science - May 2014</h5>
                  </Box>
                  {/*<Box width={1 / 2} as="h4" css={important}>*/}
                  {/*LinkedIn: <a href="https://goo.gl/FMhSPF">https://goo.gl/FMhSPF</a>*/}
                  {/*</Box>*/}
              </Flex>
          </Box>
      </Flex>
      <h4>
        <span css={important}>Education </span>
        University of Maryland College Park Bachelors of Science Computer
        Science - May 2014
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
