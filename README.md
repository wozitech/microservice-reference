# medopad tech test

# Project
Basic node.js project, includes:
* `npm init`/`npm install --save-dev serverless`
* serverless framework - with example hello function and API; `/node_modules/.bin/serverless create --template aws-nodejs --path medopad-test`
* AWS IAM user (programmable) with key/secret - `./node_modules/.bin/serverless config credentials --provider aws --key <your key> --secret '<your secret>' --profile medopad-serverless-admin`
* jest - unit test, with basic test on hello.handler
* babel - for compiling ES6 code for node.js < V10x (V6.x and V8.x) - allows for using import
* webpack - for compiling down ES6, actually used handler code, in `lib` folder along with `serverless.yml`; note, CI/CD style deployment would pick up from the `lib` folder
* package.json - custom scripts for linting, dev (including monitoring for changes), building and various serverless helpers for packaging and deploying
* local call script to run code without deploying (lambda functions are nothing more than local function calls in the cloud)
* this readme and new public git repo on https://github.com/wozitech/medopad; initialised and committed initial framework

# serverless
* Set AWS region and the profile name (matching the `serverless config` profile name - from above)
* Customised the packaging - individually ZIP packages and excluding all dev dependencies (no node_modules!) to ensure the smallest package files to upload to AWS
* Customised handler, adding event::http for APIGW access

# Assumptions/Limitations
* Using `serverless deploy` for deployment (rather than custom 'automated' CloudFormation processor)
* Using `serverless` auto generated IAM roles (rather than custom CloudFormation templates - separating dev and ops)
* Not using AWS APIGW "custom domain"; so resolvable only by AWS GW random name: in this stage=development being: https://rhrjtbchbg.execute-api.eu-west-2.amazonaws.com/development/hello