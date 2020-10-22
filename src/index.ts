import express from "express";

import { sum } from "./util/sum";

export const app = express();

app.get('/', (_: express.Request, res: express.Response) => {
    res.send('Hello world!');
});

app.get('/sum/:val1/:val2', (req: express.Request, res: express.Response) => {
    const { val1, val2 } = req.params;
    const result = sum(parseInt(val1), parseInt(val2));
    res.status(200).send({ result });
})
