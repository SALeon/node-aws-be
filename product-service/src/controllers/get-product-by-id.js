import productList from '../../mocks/productList.json';
import { CORS_ALLOW_ALL }  from '../header-config';

const defaultRes = {
    statusCode: 404,
    body: 'Product not found!!!',
    headers: CORS_ALLOW_ALL
}

const findProductById = (id) => {
  return productList.find(product => product.id === id);
}

export const getProductById = async (event) => {

  try {
    const { productId } = event.pathParameters;
    const product = findProductById(productId);

    return product ? {
      ...defaultRes,
      body: JSON.stringify(product),
      statusCode: 200
    } : defaultRes;

  } catch (error) {
    error.message = `Some message in getProductById: ${error.message}`;
    console.log(error);

    return {
      statusCode: 500,
      body: 'Something wrong happen!!!'
    }
  }
};
