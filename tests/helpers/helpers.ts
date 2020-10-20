import supertest from "supertest";
import { app } from "../../src/index";

export class Helper {
    apiServer: supertest.SuperTest<supertest.Test>;
    constructor() {
        this.apiServer = supertest(app);
    }
}
