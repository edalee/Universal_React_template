import React, { Component } from 'react';
import orderBy from 'lodash.orderby';
import timeAgo from 'node-time-ago';


class NewsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sortOrder: 'upvotes'
        };
    }

    setOrder(order, event) {
        event.preventDefault();
        this.setState({ sortOrder: order });
    }

    render() {
        const news = orderBy(this.props.news, this.state.sortOrder, 'desc');
        return (
            <div>
                <div>
                    <div>
                        <strong>Wizard News</strong>
                    </div>
                    <div>
                        Sort By:{' '}
                        <a
                            href="#"
                            onClick={this.setOrder.bind(this, 'upvotes')}>
                            Upvotes
                        </a>|
                        <a
                            href="#"
                            onClick={this.setOrder.bind(this, 'date')}>
                            Date
                        </a>
                    </div>
                </div>
                {/*  <NewsListItem key={post.id} {...post} /> */}
                { news.map( post => (
                    <div key={post.id}>
                        <p>
                            <span>{post.id}. ▲</span> {post.title}{' '}
                            <small>(by {post.author})</small>
                        </p>
                        <small>
                            {post.upvotes} upvotes | {timeAgo(post.date)}
                        </small>
                    </div>
                ))}

            </div>
        );
    }
}

export default NewsList;
