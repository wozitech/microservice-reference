const myHello = require('../../lib/hello');

const hello = async () => {
    try {
        console.log("About to call hello handler");

        const returnVal = await myHello.handler(
            {
                param1: "hello"
            },
            { invokedFunctionArn : 'arn:aws:lambda:eu-west-2:924132851837:function:medopad-test-development-hello' },
            (err, data) => {
                if (err) console.error(err);
                console.log("LOCAL: My results: ", data);
            }
        );
        console.log("Hello.Handler returned: ", returnVal);
    } catch (err) {
        console.error("Caught local error: ", err);
    }
}

hello();