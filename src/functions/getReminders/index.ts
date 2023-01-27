import { formatJSONResponse } from "@libs/apiGateway";
import { APIGatewayProxyEvent } from "aws-lambda";
import { v4 as uuid } from "uuid";
import { dynamo } from "@libs/dynamo";

export const handler = async (event: APIGatewayProxyEvent) => {
  try {
    

    return formatJSONResponse({ data: {
     
    } });
  } catch (error) {
    console.log(error);
    return formatJSONResponse({
      statusCode: 502,
      data: {
        message: error.message,
      },
    });
  }
};