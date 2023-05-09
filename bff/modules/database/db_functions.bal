// Copyright (c) 2023, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
//
// This software is the property of WSO2 Inc. and its suppliers, if any.
// Dissemination of any information or reproduction of any material contained
// herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
// You may not alter or remove any copyright or other notice from copies of this content

import ballerinax/mysql.driver as _;
import ballerina/sql;
import gramaCheck.types;

public isolated function addRequest(types:Request request) returns types:ExecutionSuccessResult|error {
    sql:ExecutionResult result = check databaseClient->execute(check addRequestQuery(request));
    return result.cloneWithType(types:ExecutionSuccessResult);
}

public isolated function getRequest(int requestId) returns types:Request|error {
    stream<types:Request, sql:Error?> rideResultStream = databaseClient->query(getRequestQuery(requestId));
    types:Request[] Result = check from var result in rideResultStream
        select result;

    if Result.length() == 0 {
        return error("Ride-ID not found");
    }
    return Result[0];
}
