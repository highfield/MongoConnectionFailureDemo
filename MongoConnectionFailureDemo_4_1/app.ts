
import * as mongodb from "mongodb";


async function test(url: string): Promise<void> {
    console.log(`Connecting ${url}...`);
    const client = new mongodb.MongoClient(url, { serverSelectionTimeoutMS: 3000 });
    try {
        await client.connect();
        const db = client.db("au15db");
        const count = (await db.collections()).length;
        console.log("Collections count=" + count);
    }
    catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }
}


(async function (): Promise<void> {
    await test("mongodb://localhost:27017");
    await test("mongodb://10.2.0.18:27017");
    await test("mongodb://10.2.0.30:27017");

})();

