
// Copyright (c) 2023, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
//
// This software is the property of WSO2 Inc. and its suppliers, if any.
// Dissemination of any information or reproduction of any material contained
// herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
// You may not alter or remove any copyright or other notice from copies of this content

public type Request record {
    int request_id?;
    string nic_number;
    string house_no?;
    string street;
    string city;
    string district;
    string province;
    string status="pending";
    string reason?;
};

public type Identity record{
    string nic_number;
};

public type requestStatus record{
    int requestId;
    string status;
    string reason?;
};