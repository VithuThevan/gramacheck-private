// Copyright (c) 2023, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
//
// This software is the property of WSO2 Inc. and its suppliers, if any.
// Dissemination of any information or reproduction of any material contained
// herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
// You may not alter or remove any copyright or other notice from copies of this conten

import ballerina/http;

# type to define errors with a message
# + message - error message
public type AppError record {|
    string message;
|};

# 404 Not Found response type
# + body - error message
public type AppNotFoundError record {|
    *http:NotFound;
    AppError body;
|};

# Execution Success Result
#
# + affectedRowCount - Affected Row Count  
# + lastInsertId - Last Insert ID
public type ExecutionSuccessResult record {|
    int? affectedRowCount;
    string|int? lastInsertId?;
|};

# App Server Error
#
# + body - Body
public type AppServerError record {|
    *http:InternalServerError;
    AppError body;
|};

# 200 ok response
#
# + body - Body
public type AppSuccess record {|
    *http:Ok;
    ExecutionSuccessResult body;

|};

# 400 Bad Request Error response
#
# + body - error message
public type AppBadRequestError record {|
    *http:BadRequest;
    AppError body;
|};

# 401 Unauthorized response
#
# + body - error message
public type AppUnauthorizedError record {|
    *http:Unauthorized;
    AppError body;
|};

# 403 Forbidden response
#
# + body - error message
public type AppForbiddenError record {|
    *http:Forbidden;
    AppError body;
|};
