# WOZ*itech* Microservice Reference AWS Repo

# To install/Use
## Install
Run `npm install`.

## Configure Serverless Framework
 Setup the serverless AWS configuration with given AWS IAM user (programmable) with key/secret - `./node_modules/.bin/serverless config credentials --provider aws --key <your key> --secret '<your secret>' --profile serverless-admin`.

## Continuous Build/Monitor
Build and monitor the project by running `npm run dev`; note, this is best done is a separate "split" terminal.

## Local Run of Handler
With the project having been built successfully (`lib` folder created), run the lambda hanlder locally:
```
cd src/local
node hello
```

Expect to see:
> `About to call hello handler`

> `Inside hello.handler`

> `Hello.Handler returned:  { statusCode: 200,`
> `  body: '{"message":"Go Serverless v1.0! Your function executed successfully!","input":{"param1":"hello"}}' }`

## Unit Tests
Run `npm test`.

## Package/Deploy
Run `npm run deploy:development`, and check in AWS lambda Console for `microservice-reference-development-hello` and the AWS API Gateway (GW) Console for `development-microservice-reference`.

Go ahead, nagivate through the AWS API GW Console through the development stage to /hello to get the randomised URL and then invoke that URL.

Note, variants exist to simply package (ready for alternative deployment - e.g. Jenkins/terraform/cloudformation). Check out `package.json`.

# Project
Basic node.js project, includes:
* serverless framework - with example hello node.js function
* jest - unit test, with basic test on hello.handler
* babel - for compiling ES6 code for node.js < V10x (V6.x and V8.x) - allows for using import
* webpack - for compiling down ES6, actually used handler code, in `lib` folder along with `serverless.yml`; note, CI/CD style deployment would pick up from the `lib` folder
* package.json - custom scripts for linting, dev (including monitoring for changes), building and various serverless helpers for packaging and deploying
* local call script to run code without deploying (lambda functions are nothing more than local function calls in the cloud)
* this readme and new public git repo on https://github.com/wozitech/microservice-reference; initialised and committed initial framework

# serverless
* Set AWS region and the profile name (matching the `serverless config` profile name - from above)
* Customised the packaging - individually ZIP packages and excluding all dev dependencies (no node_modules!) to ensure the smallest package files to upload to AWS
* Customised handler, adding event::http for APIGW access

# Assumptions/Limitations
* Using `serverless deploy` for deployment (rather than custom 'automated' CloudFormation processor)
* Using `serverless` auto generated IAM roles (rather than custom CloudFormation templates - separating dev and ops)
* Not using AWS APIGW "custom domain"; so resolvable only by AWS GW random name