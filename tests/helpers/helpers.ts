import { app } from "../../src/index";
import supertest from "supertest";

export class Helper {
    apiServer: supertest.SuperTest<supertest.Test>;
    constructor() {
        this.apiServer = supertest(app);
    }
}
