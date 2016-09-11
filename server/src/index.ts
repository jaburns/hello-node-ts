import * as express from 'express';
import {Request, Response} from 'express';
import {CommentItem} from './shared/api_types';

let app = express();

app.use(express['static']('../client/public'));
app.use(express['static']('../client/build'));

async function getComments(): Promise<CommentItem[]> {
    await delay(500);
    return [
        {id: 1, author: "Person One", text: "This is one comment"},
        {id: 2, author: "Second Person", text: "This is another comment"}
    ];
}

function delay(time: number): Promise<void> {
    return new Promise<void>(resolve => { setTimeout(resolve, time); });
}

app.get('/', function(req: Request, res: Response): void {
    res.redirect('/index.html');
});

app.get('/comments', function(req: Request, res: Response): void {
    getComments().then(comments => {
        res.json(comments);
    });
});

app.listen(3000, function(): void {
    console.log('Listening on 3000...');
});
