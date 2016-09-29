import * as path from 'path';
import * as express from 'express';
import { Request, Response } from 'express';

let VIEW_ROUTES: string[] = [
    '/',
    '/comments'
];

function clientPath(p: string): string {
    return path.join(__dirname + '/../../client/', p);
}

let app = express();

app.use(express['static'](clientPath('public')));
app.use(express['static'](clientPath('build')));

app.use(VIEW_ROUTES, function(req: Request, res: Response): void {
    res.sendFile(clientPath('public/index.html'));
});

app.listen(3000, function(): void {
    console.log('Listening on 3000...');
});
