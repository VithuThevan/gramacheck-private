import ballerina/http;
import ballerinax/slack;

configurable string token = ?;

slack:ConnectionConfig slackConfig = {
    auth: {
        token: "SLACK_USER_OAUTH_TOKEN"
    }
};

service /SlackApp on new http:Listener(9092) {
    isolated resource function post help(string user_message) returns string|error {
        slack:ConnectionConfig slackConfig = {auth: {token: token}};
        slack:Client slackClient = check new (slackConfig);

        slack:Message messageParams = {
            channelName: "project",
            text: user_message
        };
        string postResponse = check slackClient->postMessage(messageParams);
        check slackClient->joinConversation("project");
        return postResponse;
    }
}