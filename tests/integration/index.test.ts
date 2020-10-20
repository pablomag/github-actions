import { Helper } from "../helpers/helpers";

const helper = new Helper();

beforeEach(() => {
    jest.resetModules();
});

describe("Sum endpoint", () => {
    const prefix = "/sum";
    it("Consuming API endpoint /sum/1/3", async () => {
        const response = await helper.apiServer.get(`${prefix}/1/3`);
        expect(response.body.result).toBe(4);
        expect(response.status).toBe(200);
    });
});

describe("Index endpoint", () => {
    it("Consuming API endpoint index", async () => {
        const response = await helper.apiServer.get("/");
        expect(response.text).toBe('Hello world!');
        expect(response.status).toBe(200);
    });
});
