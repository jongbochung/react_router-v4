import React from 'react';

const Post = ({location, match}) => {
    return (
        <div>
            Post {match.params.id}
            <h3>location.pathname : {location.pathname}</h3>
            <h3>match.path : {match.path}</h3>
            <h3>match.path : {match.url}</h3>
        </div>
    );
};

export default Post;
