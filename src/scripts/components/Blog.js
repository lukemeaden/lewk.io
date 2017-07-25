import DataStore from 'flux/stores/DataStore.js'

class Blog extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug(this.props.match.path.split('/')[1]);
        let allPosts = DataStore.getAllPosts();
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h2>Hello world!</h2>
                            <ul className="list-unstyled">
                                {allPosts.map((page) => {
                                    if(page.slug != 'home'){
                                        console.log(page)
                                       return(
                                           <li key={page.id}>
                                                <a href={`/blog/${page.slug}`}>
                                                    <h3>{page.title.rendered} <small>{page.date.split('T')[0].replace(/-/g,'/')}</small></h3>
                                                </a>
                                            </li>
                                        )
                                   }
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blog;
