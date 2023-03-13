import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const ContributorTemplate = (props) => {
  const { nodeContributor: contributor } = props.data;


  return (
    <Layout >
      <div>Person name: {contributor.field_first_name.value}</div>
      {/*<Helmet*/}
      {/*  title={`Umami - ${recipe.title}`}*/}
      {/*  meta={[*/}
      {/*    {name: 'description', content: recipe.title},*/}
      {/*  ]}*/}
      {/*/>*/}
      {/*<Paper className={classes.root}>*/}
      {/*  <Recipe*/}
      {/*    {...recipe}*/}
      {/*    category={recipe.relationships.category[0].name}*/}
      {/*    tags={recipe.relationships.tags}*/}
      {/*    instructions={recipe.instructions.processed}*/}
      {/*    summary={recipe.summary.processed}*/}
      {/*  />*/}
      {/*</Paper>*/}
    </Layout>
  )
};

export default ContributorTemplate;

// The $drupal_id variable here is obtained from the "context" object passed into
// the createPage() API in gatsby-node.js.
//
// Also note the use of field name aliasing in the query. This is done to
// help normalize the shape of the recipe data.
export const query = graphql`
  query ContributorQuery($drupal_id: String!) {
    nodeContributor(drupal_id: {eq: $drupal_id}) {
      field_first_name {
        value
      }
    }
  }
`;
