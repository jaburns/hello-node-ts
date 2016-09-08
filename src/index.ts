import * as express from 'express';
import {Request, Response} from 'express';

let app = express();

async function slowResponse(): Promise<string> {
    await delay(500);
    return 'Hello world!';
}

function delay(time: number): Promise<void> {
    return new Promise<void>(resolve => { setTimeout(resolve, time); });
}

app.get('/', function(req: Request, res: Response): void {
    slowResponse().then(msg => {
        res.send(msg);
    });
});

app.listen(3000, function(): void {
    console.log('Listening on 3000...');
});
