import productList from '../../mocks/productList.json';
import { CORS_ALLOW_ALL }  from '../header-config';

export const getAllProducts = async (event) => {

  try {
    return {
      statusCode: 200,
      body: JSON.stringify(productList),
      headers: JSON.stringify(CORS_ALLOW_ALL)
    };

  } catch (error) {
    error.message = `Some message in getAllProducts: ${error.message}`;
    console.log(error);

    return {
      statusCode: 500,
      body: 'Something wrong happen!!!'
    }
  }
};
