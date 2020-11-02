import { getProductById } from '../src/controllers/get-product-by-id';
import { CORS_ALLOW_ALL } from '../src/header-config';
import mockProductList from '../mocks/productList';

const MOCK_PRODUCT = 1;

describe('getProductByID', () => {

    test('should return 200 status of response with product', async () => {
        const mockedProduct = mockProductList[MOCK_PRODUCT];
        const mockedRes = {
            statusCode: 200,
            body: JSON.stringify(mockedProduct),
            header: CORS_ALLOW_ALL
        };
        const response = await getProductById({ pathParameters: { productId: mockedProduct.id } });
    expect(response).toEqual(mockedRes);
    });

  test('should return status 404 if no product by id found', async () => {
      const mockedRes = {
          statusCode: 404,
          body: 'Product not found!!!',
          header: CORS_ALLOW_ALL
      };
      const response = await getProductById({ pathParameters: { productId: 'not existed id' } });
    expect(response).toEqual(mockedRes);
  });
});
