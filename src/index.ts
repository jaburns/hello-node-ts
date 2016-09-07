import * as express from 'express';

let app = express();

app.get('/', function(req: express.Request, res: express.Response): void {
    res.send('Hello world!\n');
});

app.listen(3000, function(): void {
    console.log('Listening on 3000...');
});
