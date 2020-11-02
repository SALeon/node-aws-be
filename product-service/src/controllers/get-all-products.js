import productList from '../../mocks/productList';
import { CORS_ALLOW_ALL }  from '../header-config';

export const getAllProducts = async () => {

  try {
    return {
      statusCode: 200,
      body: JSON.stringify(productList),
      header: CORS_ALLOW_ALL
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
