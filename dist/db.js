"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "ec2-44-196-223-128.compute-1.amazonaws.com",
    username: "ggdqhsqtysvbaa",
    password: "d0179dc048fef192c45e73d29cf15b43641b067e1ff6dad8a8f97dedc34b2c7f",
    port: 5432,
    database: "d8eju2bjrcaob",
    ssl: { rejectUnauthorized: false },
    entities: [],
    logging: true
});
