// Copyright (c) 2023, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
//
// This software is the property of WSO2 Inc. and its suppliers, if any.
// Dissemination of any information or reproduction of any material contained
// herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
// You may not alter or remove any copyright or other notice from copies of this conten

import gramaCheck.types;
import ballerina/sql;
import ballerina/io;

isolated function addRequestQuery(types:Request request) returns sql:ParameterizedQuery|error {
    io:println("addRequestQuery");
    return `
    INSERT INTO 
        request (
            nic_number,
            house_no,
            street,
            city,
            district,
            province,
            email
         )
    VALUES (
           ${request.nic_number},
            ${request.house_no},
            ${request.street},
            ${request.city},
            ${request.district},
            ${request.province},
            ${request.email}
           
            )
    `;
}

isolated function getRequestQuery(string email) returns sql:ParameterizedQuery {
    io:println("getStatus");
    return `
    SELECT 
       *
    FROM 
        request
    WHERE 
        email = ${email}
        AND status!="completed"
       
    `;
}

isolated function getRequestByIdQuery(int requestId) returns sql:ParameterizedQuery {
    io:println("getRequestByIdQuery");
    return `
    SELECT 
       *
    FROM 
        request
    WHERE 
        request_id = ${requestId}
    `;
}

isolated function getAllRequestQuery()returns sql:ParameterizedQuery {

    io:println("getAllRequestQuery");
    return `
    SELECT 
       *
    FROM 
        request
        WHERE status!="completed"
    `;
}

isolated function getCitizenQuery(string nic_number)returns sql:ParameterizedQuery {

    io:println("getCitizenQuery");
    return `
    SELECT 
       *
    FROM 
        citizen
        WHERE 
        nic=${nic_number}    `;
}

isolated function updateRequestQuery(types:requestStatus request) returns sql:ParameterizedQuery {
    io:println("updateRequestQuery");

    return `
    UPDATE 
        request
    SET 
        status = ${request.status},reason = ${request.reason}
    WHERE 
        request_id = ${request.requestId}
    `;
}

isolated function getIdentityQuery(string nicNumber) returns sql:ParameterizedQuery {
    io:println("getIdentityQuery");
    return `
    SELECT 
       nic
    FROM 
        citizen
    WHERE 
        nic = ${nicNumber}
    `;
}

isolated function getAddressQuery(string nicNumber) returns sql:ParameterizedQuery {
    io:println("getAddressQuery");
    return `
    SELECT 
        house_no,
        street,
        city,
        district,
        province
    FROM 
        citizen
    WHERE 
        nic = ${nicNumber}
    `;
}

isolated function PoliceCheckQuery(string nicNumber) returns sql:ParameterizedQuery {
    io:println("getPoliceCheckQuery");
    return `
    SELECT 
       status
    FROM 
        criminal_history 
    WHERE 
        nic = ${nicNumber}
    `;
}

