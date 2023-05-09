// Copyright (c) 2023, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
//
// This software is the property of WSO2 Inc. and its suppliers, if any.
// Dissemination of any information or reproduction of any material contained
// herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
// You may not alter or remove any copyright or other notice from copies of this content.

import ballerinax/mysql;
import ballerina/sql;
import ballerinax/mysql.driver as _;

configurable readonly & DatabaseConfig databaseConfig = ?;

final sql:ConnectionPool connPool = {
    maxOpenConnections: 10,
    maxConnectionLifeTime: 180,
    minIdleConnections: 5
};

final mysql:Options mysqlOptions = {
    ssl: {
        mode: mysql:SSL_PREFERRED
    },
    connectTimeout: 10
};

final mysql:Client databaseClient = check new (host = databaseConfig.dbHost, user = databaseConfig.dbUser, password = databaseConfig.dbPassword,
connectionPool = connPool, port = databaseConfig.dbPort, database = databaseConfig.dbName, options = mysqlOptions);
