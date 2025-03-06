
const { generateService } = require("@umijs/openapi");
generateService({
    requestLibPath: "import request from '../http/http'", // 整合axios导出的实例位置
    schemaPath: "https://tqwrjwmouzlf.usw.sealos.io/v3/api-docs",    // 后端swagger接口文档地址
    serversPath: "./src/api" // 代码生成目录
});