import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CommentItem } from '../../shared/api_types';
import { Link } from 'react-router'

export class Hello extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h1>Hello world!</h1>
                <Link to="/comments">View comments</Link>
            </div>
        );
    }
}

interface CommentProps { comment: CommentItem }

class Comment extends React.Component<CommentProps, {}> {
    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.comment.author}
                </h2>
                {this.props.comment.text}
            </div>
        );
    }
}

interface CommentListState { data: CommentItem[]; }

export class CommentList extends React.Component<{}, CommentListState> {
    constructor(props: {}) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
        $.ajax({
            url: '/api/comments',
            dataType: 'json',
            cache: false,
            success: data => {
                this.setState({data: data});
            },
            error: (xhr, status, err) => {
                console.error(status, err.toString());
            }
        });
    }

    render() {
        let i = 0;
        let commentNodes = this.state.data.map(
            comment => React.createElement(Comment, {key: i++, comment: comment})
        );

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
}
