import ballerina/http;
import ballerinax/slack;

slack:ConnectionConfig slackConfig = {
    auth: {
        token: "SLACK_USER_OAUTH_TOKEN"
    }
};
service /SlackApp on new http:Listener(9092) {
    isolated resource function post help(string user_message) returns string|error {
slack:ConnectionConfig slackConfig = {auth: {token: "xoxp-5256072341092-5266218610033-5239233348167-1989138e707a1122a2a9a2fde4d243e2"}};
slack:Client slackClient = check new (slackConfig);

        slack:Message messageParams = {
            channelName: "gramacheck-app",
            text: user_message
        };
        string postResponse = check slackClient->postMessage(messageParams);
        check slackClient->joinConversation("gramacheck-app");
        return postResponse;
}
}

