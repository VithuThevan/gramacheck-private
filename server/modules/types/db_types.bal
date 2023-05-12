
// Copyright (c) 2023, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
//
// This software is the property of WSO2 Inc. and its suppliers, if any.
// Dissemination of any information or reproduction of any material contained
// herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
// You may not alter or remove any copyright or other notice from copies of this content

public type Request record {
    int requestId?;
    string nic_number;
    string house_no;
    string gs_division;
    string street;
    string city;
    string district;
    string province;
    string status = "PENDING";
    string reason?;
    byte[] photo?;
};

public type Identity record{
    string nic_number;
};

public type PoliceCheck record{
    int status;
};

public type Address record {
    string house_no;
    string street;
    string city;
    string district;
    string province;
};