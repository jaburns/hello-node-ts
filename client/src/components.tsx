import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {CommentItem} from './shared/api_types';

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

interface CommentListProps { url: string; }
interface CommentListState { data: CommentItem[]; }

export class CommentList extends React.Component<CommentListProps, CommentListState> {
    constructor(props : CommentListProps) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: data => {
                this.setState({data: data});
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }

    render() {
        let commentNodes = this.state.data.map(comment => {
            return (
                <Comment comment={comment} />
            );
        });

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
}
