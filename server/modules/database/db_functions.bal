// Copyright (c) 2023, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
//
// This software is the property of WSO2 Inc. and its suppliers, if any.
// Dissemination of any information or reproduction of any material contained
// herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
// You may not alter or remove any copyright or other notice from copies of this content

import ballerinax/mysql.driver as _;
import ballerina/sql;
import gramaCheck.types;
import ballerina/io;

public isolated function addRequest(types:Request request) returns types:ExecutionSuccessResult|error {
    sql:ExecutionResult result = check databaseClient->execute(check addRequestQuery(request));
    return result.cloneWithType(types:ExecutionSuccessResult);
}

public isolated function getRequestById(int requestId) returns types:Request|error {
    stream<types:Request, sql:Error?> requestResultStream = databaseClient->query(getRequestByIdQuery(requestId));
    types:Request[] Result = check from var result in requestResultStream
        select result;

    if Result.length() == 0 {
        return error("Request not found");
    }
    return Result[0];
}

public isolated function getRequest(string email) returns types:Request|error {
    stream<types:Request, sql:Error?> requestResultStream = databaseClient->query(getRequestQuery(email));
    types:Request[] Result = check from var result in requestResultStream
        select result;

    if Result.length() == 0 {
        return error("Request not found");
    }
    return Result[0];
}


public isolated function getCitizen(string nic_number) returns types:Citizen|error {
    stream<types:Citizen, sql:Error?> requestResultStream = databaseClient->query(getCitizenQuery(nic_number));
    types:Citizen[] Result = check from var result in requestResultStream
        select result;

    if Result.length() == 0 {
        return error("Request not found");
    }
    return Result[0];
}


public isolated function getAllRequests() returns types:Request[]|error {
    stream<types:Request, sql:Error?> requestResultStream = databaseClient->query(getAllRequestQuery());
    types:Request[] Result = check from var result in requestResultStream
        select result;

    if Result.length() == 0 {
        return error("Request not found");
    }

    check requestResultStream.close();
    return Result;
}


public isolated function updateRequest(types:requestStatus request) returns types:ExecutionSuccessResult|error {
    sql:ExecutionResult result = check databaseClient->execute(updateRequestQuery(request));
    return result.cloneWithType(types:ExecutionSuccessResult);
}

public isolated function getIdentity(string nicNumber) returns boolean|error {
    stream<types:Identity, sql:Error?> idResultStream = databaseClient->query(getIdentityQuery(nicNumber));
    types:Identity[] Result = check from var result in idResultStream
        select result;

    if Result.length() == 0 {
        return error("NIC is not found");
    }
    return true;
}

public isolated function getAddress(int requestId) returns boolean|error {
    stream<types:Request, sql:Error?> requestResultStream = databaseClient->query(getRequestByIdQuery(requestId));
    types:Request[] RequestResult = check from var result in requestResultStream
        select result;

    if (RequestResult.length() > 0) {
        stream<types:Address, sql:Error?> addressResultStream = databaseClient->query(getAddressQuery(RequestResult[0].nic_number.toLowerAscii()));
        types:Address[] AddressResult = check from var result in addressResultStream
            select result;

        if (AddressResult.length() > 0) {
            if (RequestResult[0].province.equalsIgnoreCaseAscii(AddressResult[0].province)) {
                if (RequestResult[0].district.equalsIgnoreCaseAscii(AddressResult[0].district)) {
                    if (RequestResult[0].city.equalsIgnoreCaseAscii(AddressResult[0].city)) {
                        if (RequestResult[0].street.equalsIgnoreCaseAscii(AddressResult[0].street)) {
                            io:println("Address is equal");

                        } else {
                            return error("Address does not match");
                        }
                    } else {
                        return error("Address does not match");
                    }
                } else {
                    return error("Address does not match");
                }
            } else {
                return error("Address does not match");
            }

        } else {
            return error("NIC is not found");
        }
    } else {
        return error("Request is not found");
    }
    return true;
}

public isolated function getPoliceStatus(string nicNumber) returns types:PoliceCheck|error|int {
    stream<types:PoliceCheck, sql:Error?> idResultStream = databaseClient->query(PoliceCheckQuery(nicNumber));
    types:PoliceCheck[] Result = check from var result in idResultStream
        select result;

    if Result.length() == 0 {
        return error("NIC is not found");
    }
    if Result[0] == {"status": 0} {
        return 0;
    }
    return 1;
}

