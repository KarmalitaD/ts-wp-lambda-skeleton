import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import { expect } from 'chai';

import {
  APIGatewayProxyHandler,
} from 'aws-lambda';

import createHandler from '../src/main';

/* eslint-disable
  no-unused-vars,
  @typescript-eslint/no-unused-vars,
  @typescript-eslint/no-unused-expressions,
  class-methods-use-this
 */

_chai.should();
_chai.expect;

@suite class LambdaTest {
  private handler: Promise<APIGatewayProxyHandler>;

  before() {
    this.handler = createHandler(/* DI should be made here */);
  }

  @test 'Lambda reeturns 200'(done) {
    const event = { name: 'TestEvent' };
    const context = {};

    this.handler(event, context).then((result) => {
      expect(result).to.deep.equal({ statusCode: 200, body: '{"message":"Success"}' });
      done();
    });
  }
}
