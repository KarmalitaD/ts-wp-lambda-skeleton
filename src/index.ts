import {
  APIGatewayProxyHandler,
} from 'aws-lambda';

import AWS from 'aws-sdk';

import createLambda from './main';

/* eslint-disable-next-line import/prefer-default-export */
export const handler: APIGatewayProxyHandler = createLambda(AWS);
