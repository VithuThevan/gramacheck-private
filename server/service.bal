// Copyright (c) 2023, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
//
// This software is the property of WSO2 Inc. and its suppliers, if any.
// Dissemination of any information or reproduction of any material contained
// herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
// You may not alter or remove any copyright or other notice from copies of this content

import ballerina/http;
import gramaCheck.types;
import gramaCheck.database;
import gramaCheck.constants;

service /requestService on new http:Listener(9091) {

    isolated resource function post request(@http:Payload types:Request request)
    returns types:AppSuccess|types:AppServerError {
        types:ExecutionSuccessResult|error result = database:addRequest(request);
        if result is error {
            return <types:AppServerError>{
                body: {
                    message: constants:CANNOT_ADD_ENTRY
                }
            };
        }
        return <types:AppSuccess>{
            body: result
        };
    }

    isolated resource function get request/[string email]()
    returns types:Request|types:AppServerError|types:AppNotFoundError {
        types:Request|error? result = database:getRequest(email);
        if result is () {
            return <types:AppNotFoundError>{
                body: {
                    message: constants:ID_NOT_FOUND
                }
            };
        }
        if result is error {
            return <types:AppServerError>{
                body: {
                    message: constants:CANNOT_RETRIEVE_FROM_DB
                }
            };
        }
        return result;
    }

    isolated resource function get allRequests()
    returns types:Request[]|types:AppServerError {
        types:Request[]|error result = database:getAllRequests();
        if result is error {
            return <types:AppServerError>{
                body: {
                    message: constants:CANNOT_RETRIEVE_FROM_DB
                }
            };
        }
        return result;
    }

    isolated resource function patch request/[int requestId](@http:Payload types:requestStatus request)
    returns boolean|types:AppServerError {
        types:ExecutionSuccessResult|error result = database:updateRequest(request);
        if result is error {
            return <types:AppServerError>{
                body: {
                    message: constants:CANNOT_UPDATE_ENTRY
                }
            };
        }
        return true;
    }

    isolated resource function get policestatus/[string nicNumber]()
        returns types:PoliceCheck|types:AppServerError|types:AppNotFoundError|int {
        types:PoliceCheck|error?|int result = database:getPoliceStatus(nicNumber);
        if result is () {
            return <types:AppNotFoundError>{
                body: {
                    message: constants:ID_NOT_FOUND
                }
            };
        }
        if result is error {
            return <types:AppServerError>{
                body: {
                    message: constants:CANNOT_RETRIEVE_FROM_DB
                }
            };
        }
        return result;
    }
    isolated resource function get identity/[string nicNumber]()
        returns boolean|types:AppServerError {
        boolean|error result = database:getIdentity(nicNumber);
        if result is error {
            return <types:AppServerError>{
                body: {
                    message: constants:IDENTYTIY_CHECK_FAILED
                }
            };
        }
        return result;
    }

    isolated resource function get address/[int requestId]()
        returns boolean|types:AppServerError {
        boolean|error result = database:getAddress(requestId);
        if result is error {
            return <types:AppServerError>{
                body: {
                    message: constants:ADDRESS_CHECK_FAILED
                }
            };
        }
        return result;
    }



    isolated resource function get citizen/[string nic_number]()
    returns types:Citizen|types:AppServerError|types:AppNotFoundError {
        types:Citizen|error? result = database:getCitizen(nic_number);
        if result is () {
            return <types:AppNotFoundError>{
                body: {
                    message: constants:ID_NOT_FOUND
                }
            };
        }
        if result is error {
            return <types:AppServerError>{
                body: {
                    message: constants:CANNOT_RETRIEVE_FROM_DB
                }
            };
        }
        return result;
    }

}
