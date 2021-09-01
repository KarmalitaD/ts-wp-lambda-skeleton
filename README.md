# AWS lambda skeleton


## Features

* TDD (mocha, chai)
* Webpack
* Webpack Bundle Analyzer
* SonarQube compatible code coverage calculation
* TypeScript linting (AirBnb code style based)
* DI


## npm scripts

`dev` - run TDD development (watch mode)

`test:coverage` - calculate test coverage (with lcov and html reports)

`build` - build the production bundle

`build:analyze` - build production bundle with the analyzing report

`tslint` - linting the code

`tsfix` - fixing the code style when possible


## Code example

The lambda code has two major parts:
* `main.ts` - exports lambda factory. It should take all of the dependencies necessary to inject. This factory can be imported directly from tests and used to inject any mocks we need.

* `index.ts` - the main entry point used by webpack for production bundle generation. It takes the lambda factory from the main file, injects all necessary dependencies, and exports the ready-to-deploy handler.


## References

* [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

