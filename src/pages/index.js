import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { Row, Header } from '../components/Layout';
import { About, Education, Experience } from '../components/Sections';

import workTypes from '../types/work';
import educationTypes from '../types/education';

const Resume = ({ data: { allDataJson } }) => {
  const {
    basics, education, work,
  } = allDataJson.edges[0].node;
  const {
    name, label, email, phone, summary,
  } = basics;

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
        title="Matt Shirley - Resume"

      >
        <meta name="description" content="Resume for Matt Shirley" />
        <style type="text/css">
          {`
          @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
          @import url('https://fonts.googleapis.com/css?family=Open+Sans:700&display=swap');
        `}
        </style>
      </Helmet>
      <Header
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
    </>
  );
};

Resume.propTypes = {
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

export default Resume;
