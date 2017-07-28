import DataStore from 'flux/stores/DataStore.js'

class PostList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listItemHeaderStyle: null,
            listItemLength: 999999,
            listItemImage: null,
            listItemSize: 12,
            listItemStyle: null
        };
    }

    render() {
        let allPosts = DataStore.getAllPosts();
        return (
            <ul className="post-list list-unstyled">
                {allPosts.slice(0, this.props.listItemLength).map((page) => {
                    if (this.props.listItemImage == 'yes' && page.featured_media != '0'){
                        var media_url = DataStore.getMediaById(page.featured_media).source_url
                    }
                    return(
                       <li className={this.props.listItemSize} key={page.id}>
                            <a className={this.props.listItemStyle} href={`/blog/${page.slug}`}>
                                {this.props.listItemImage == 'yes' && page.featured_media != '0' ? (
                                    <span className="card-image" style={{backgroundImage: `url(${media_url})`}}></span>
                                ) : this.props.listItemImage == 'yes' && page.featured_media == '0' && (
                                    <span className="card-image card-image-placeholder fa fa-question-circle-o"></span>
                                )}
                                <span>
                                      <h3 className={this.props.listItemHeaderStyle}>
                                            {page.title.rendered}
                                            <small className="date">{page.date.split('T')[0].replace(/-/g,'/')}</small>
                                      </h3>
                                </span>
                            </a>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default PostList;
