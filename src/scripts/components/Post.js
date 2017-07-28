import DataStore from 'flux/stores/DataStore.js';
import PostList from 'components/partials/PostList.js';
import SearchForm from 'components/partials/SearchForm.js';

class Post extends React.Component {
    render() {
        let pageData = DataStore.getPostBySlug(this.props.match.path.split('/')[2]);
        document.title = `${pageData.title.rendered} - Lewk.io`;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-9">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="main">
                                        <h1>{pageData.title.rendered}</h1>
                                        <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PostList
                                    listItemHeaderStyle="h6"
                                    listItemImage="yes"
                                    listItemLength="2"
                                    listItemSize="col-xs-12 col-sm-6"
                                    listItemStyle="card"
                                />
                            </div>
                        </div>
                        <div className="sidebar col-xs-12 col-sm-3">
                            <SearchForm />
                            <h2 className="h5">More posts from yours truely</h2>
                            <PostList listItemHeaderStyle="h6" listItemStyle="h6" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;
