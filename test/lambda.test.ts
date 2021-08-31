import { handler } from '../src';
import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import { expect } from 'chai';

_chai.should();
_chai.expect;

const event = { name:'TestEvent' }
const context = {}

@suite class LambdaTest {
  // private SUT: Cat;
  // private name: string;
  // private color: string;

  before() {
    // this.name = 'Tom';
    // this.color = 'black';
    // this.SUT = new Cat(this.name, this.color);
  }

  @test 'Lambda reeturns 200' (done) {
    handler(event, context).then((result) => {
      expect(result).to.deep.equal({ statusCode: 200, body: '{"message":"Success"}' })
      done()
    });
  }
}
