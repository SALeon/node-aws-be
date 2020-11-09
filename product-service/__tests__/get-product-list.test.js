// import {jest} from '@jest/globals';
import { getAllProducts } from '../src/controllers/get-all-products';
import { CORS_ALLOW_ALL } from '../src/header-config';
import mockProductList from '../mocks/productList.json';

describe("getProductList", () => {
  test("should return status 200 with correct response", async () => {
    const mockListResponse = {
      statusCode: 200,
      body: JSON.stringify(mockProductList),
      headers: CORS_ALLOW_ALL
    };
    const response = await getAllProducts();
  expect(response).toEqual(mockListResponse);
  });
});
