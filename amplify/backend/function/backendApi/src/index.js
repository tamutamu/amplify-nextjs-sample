/* Amplify Params - DO NOT EDIT
	API_AMPLIFYNEXTJSSAMPLE_COMMENTTABLE_ARN
	API_AMPLIFYNEXTJSSAMPLE_COMMENTTABLE_NAME
	API_AMPLIFYNEXTJSSAMPLE_GRAPHQLAPIENDPOINTOUTPUT
	API_AMPLIFYNEXTJSSAMPLE_GRAPHQLAPIIDOUTPUT
	API_AMPLIFYNEXTJSSAMPLE_GRAPHQLAPIKEYOUTPUT
	API_AMPLIFYNEXTJSSAMPLE_POSTTABLE_ARN
	API_AMPLIFYNEXTJSSAMPLE_POSTTABLE_NAME
	API_AMPLIFYNEXTJSSAMPLE_PROCESSLOCKTABLE_ARN
	API_AMPLIFYNEXTJSSAMPLE_PROCESSLOCKTABLE_NAME
	AUTH_AMPLIFYNEXTJSSAMPLE88EF554D_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
};
