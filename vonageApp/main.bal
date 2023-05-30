import ballerina/http;
import ballerinax/vonage.sms as vs;

configurable string API_KEY = ?;
configurable string API_SECRET = ?;

service /VonageApp on new http:Listener(9094) {
    isolated resource function post help(string contact_number) returns string|error {
        
        vs:Client baseClient = check new ({},serviceUrl="https://rest.nexmo.com/sms");
        vs:NewMessage message = {
        api_key: API_KEY,
        'from: "Vonage APIs",
        to: "+94"+contact_number,
        api_secret: API_SECRET,
        text: "Your request has been successfully accepted by the grama niladhari. Get your document in the App. Thank you!"
    };

    vs:InlineResponse200|error response = baseClient->sendAnSms(message);

    return (check response).toString();
    }
}
