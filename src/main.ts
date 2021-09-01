import {
  APIGatewayProxyHandler,
} from 'aws-lambda';

/* eslint-disable import/prefer-default-export, no-unused-vars, @typescript-eslint/no-unused-vars */

export const handler: APIGatewayProxyHandler = async (event, context) => ({
  statusCode: 200,
  body: JSON.stringify({ message: 'Success' }),
});

const createHandler = (AWS: any /* DI should be made here */): APIGatewayProxyHandler => handler;

export default createHandler;
