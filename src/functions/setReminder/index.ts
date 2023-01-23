import { formatJSONResponse } from "@libs/apiGateway";
import { APIGatewayProxyEvent } from "aws-lambda";
import { v4 as uuid } from "uuid";
import { dynamo } from "@libs/dynamo";

export const handler = async (event: APIGatewayProxyEvent) => {
  try {
    const body = JSON.parse(event.body);
    const tableName = process.env.reminderTable;
    const { email, phoneNumber, reminder, reminderDate } = body;

    if (!email && !phoneNumber) {
      return formatJSONResponse({
        statusCode: 400,
        data: {
          message: "Email or phone number is required to create a reminder",
        },
      });
    }

    if (!reminder) {
      return formatJSONResponse({
        statusCode: 400,
        data: {
          message: "Reminder is required to create a reminder",
        },
      });
    }

    if (!reminderDate) {
      return formatJSONResponse({
        statusCode: 400,
        data: {
          message: "Reminder date is required to create a reminder",
        },
      });
    }
  
    

    const data = {
      
    };

    await dynamo.write(data, tableName);

    return formatJSONResponse({ data: {  } });
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
