import { gql } from "@apollo/client";
import { client } from "./client";

export const fetchAllProducts = () => {
  try {
    const result = client.query({
      query: gql`
        query {
          categories {
            name
            products {
              id
              name
              inStock
              description
              category
              brand
              gallery
              prices {
                currency
                amount
              }
            }
          }
        }
      `,
    });

    return result;
  } catch (e) {
    console.log(e);
  }
};

export const fetchCategories = () => {
  return client.query({
    query: gql`
      query {
        categories {
          name
        }
      }
    `,
  });
};
