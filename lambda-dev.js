const { handler } = require('./dist/lambda');

const event = { name:'TestEvent' }
const context = {}
// https://docs.aws.amazon.com/lambda/latest/dg/lambda-nodejs.html
// https://docs.aws.amazon.com/lambda/latest/dg/nodejs-context.html

const run = async () => {
  console.log('result:', await handler(event, context))
}

run()
