import productList from '../productList.json';

export const getProductById = async (event) => {
  console.log('Lambda invocation with event: ', event);


  return {
    statusCode: 200,
    body: JSON.stringify(productList[0])
  };
};
