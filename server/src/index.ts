import * as express from 'express';
import {Request, Response} from 'express';

let app = express();

app.use(express['static']('client/public'));
app.use(express['static']('client/build'));

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

app.get('/comments', function(req: Request, res: Response): void {
    res.json([
        {id: 1, author: "Person One", text: "This is one comment"},
        {id: 2, author: "Second Person", text: "This is another comment"}
    ]);
});

app.listen(3000, function(): void {
    console.log('Listening on 3000...');
});
