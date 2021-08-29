"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb = require("mongodb");
function test(url) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`Connecting ${url}...`);
        const client = new mongodb.MongoClient(url, { serverSelectionTimeoutMS: 3000 });
        try {
            yield client.connect();
            const db = client.db("au15db");
            const count = (yield db.collections()).length;
            console.log("Collections count=" + count);
        }
        catch (e) {
            console.error(e);
        }
        finally {
            yield client.close();
        }
    });
}
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield test("mongodb://localhost:27017");
        yield test("mongodb://10.2.0.18:27017");
        yield test("mongodb://10.2.0.30:27017");
        yield test("mongodb://192.168.4.71:27017");
        yield test("mongodb://40.67.xxx.xxx:27017");
    });
})();
//# sourceMappingURL=app.js.map