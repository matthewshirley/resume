import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

// Layout
import Row from '../components/Layout/Row';
import Root from '../components/Layout/Root';
import PageHeader from '../components/Layout/Header';

// Sections
import About from '../components/Sections/About';
import Education from '../components/Sections/Education';
import Experience from '../components/Sections/Experience';

// Types
import workTypes from '../types/work';
import educationTypes from '../types/education';

import './page.css';

const CVPage = ({ data: { allDataJson } }) => {
  const {
    basics, education, work,
  } = allDataJson.edges[0].node;
  const {
    name, label, email, phone, summary,
  } = basics;

  return (
    <Root>
      <PageHeader
        name={name}
        label={label}
        email={email}
        phone={phone}
      />

      {summary && (
        <Row title="About">
          <About summary={basics.summary} />
        </Row>
      )}

      {work
        && (
        <Row title="Experience">
          <Experience work={work} />
        </Row>
        )}

      {education
        && (
        <Row title="Education">
          <Education education={education} />
        </Row>
        )}
    </Root>
  );
};

CVPage.propTypes = {
  data: PropTypes.shape({
    allDataJson: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            basics: PropTypes.shape({
              name: PropTypes.string.isRequired,
              label: PropTypes.string,
              email: PropTypes.string,
              phone: PropTypes.string,
              summary: PropTypes.string,
            }),
            education: PropTypes.arrayOf(
              PropTypes.shape({ ...educationTypes }),
            ),
            work: PropTypes.arrayOf(
              PropTypes.shape({ ...workTypes }),
            ),
          }),
        }),
      ),
    }),
  }).isRequired,
};

/**
 * Query gathers all information that will be used in the CV. 💥
 */
export const pageQuery = graphql`
{
  allDataJson {
    edges {
      node {
        basics {
          name
          label
          picture
          email
          phone
          website
          summary
        }
        work {
          position
          company
          website
          location
          startDate(formatString: "MMM YYYY")
          endDate(formatString: "MMM YYYY")
          summary
          highlights
        }
        education {
          startDate(formatString: "MMM YYYY")
          endDate(formatString: "MMM YYYY")
          institution
          website
          studyType
          area
          courses
        }
      }
    }
  }
}`;

export default CVPage;
