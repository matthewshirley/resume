import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Box from '../components/common/Box';
import History from '../components/History';
import Summary from '../components/Summary';

import workTypes from '../types/work';
import educationTypes from '../types/education';

const Resume = ({ data: { allDataJson } }) => {
  const {
    basics, education, work,
  } = allDataJson.edges[0].node;
  const {
    name, email, phone, summary, github,
  } = basics;

  return (
    <Layout>
      <Header name={name} email={email} phone={phone} github={github} />

      <Box as="main" gridArea="content">
        <Summary summary={summary} />
        <History title="Experience" history={work} />
        <History title="Education" history={education} skipBorder />
      </Box>
    </Layout>
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
              email: PropTypes.string,
              phone: PropTypes.string,
              summary: PropTypes.string,
              github: PropTypes.string,
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
          github
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
          summary
        }
      }
    }
  }
}`;

export default Resume;
