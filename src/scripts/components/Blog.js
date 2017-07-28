import DataStore from 'flux/stores/DataStore.js';
import PostList from 'components/partials/PostList.js';

class Blog extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug(this.props.match.path.split('/')[1]);
        document.title = `${pageData.title.rendered} - Lewk.io`;
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h2>Blog</h2>
                        </div>
                          <PostList
                              listItemHeaderStyle="h6"
                              listItemImage="yes"
                              listItemLength="2"
                              listItemSize="col-xs-12 col-sm-6"
                              listItemStyle="card"
                          />
                    </div>
                </div>
            </section>
        );
    }
}

export default Blog;
