import * as path from 'path';
import * as express from 'express';

const VIEW_ROUTES = [
    '/', '/comments'
];

const clientPath = (p: string) =>
    path.join(__dirname + '/../../client/', p);

const app = express();

app.use(express.static(clientPath('public')));
app.use(express.static(clientPath('build')));

app.use(VIEW_ROUTES, (req, res) => {
    res.sendFile(clientPath('public/index.html'));
});

app.listen(3000, () => console.log('Listening on 3000...'));
