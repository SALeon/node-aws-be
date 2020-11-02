import productList from '../productList.json';
import { CORS_ALLOW_ALL }  from '../header-config';

export const getProductById = async (event) => {

  try {

    return {
      statusCode: 200,
      body: JSON.stringify(productList[0]),
      header: CORS_ALLOW_ALL
    };

  } catch (error) {
    error.message = `Some message in getProductById: ${error.message}`;
    console.log(error);
    throw (error);
  }
};
