import DataStore from 'flux/stores/DataStore.js';
import PostList from 'components/partials/PostList.js';

class Home extends React.Component {
    render() {
        let allData = DataStore.getAll();
        document.title = 'Lewk.io - Front End Development / Digital Design';
        return (
            <div className="home">
                <section className="home-intro banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1 className="text-center">Yo!</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home-blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h2>Blog posts <a href="/blog/" className="btn btn-link">View all</a></h2>
                            </div>
                            <PostList
                                listItemHeaderStyle="h6"
                                listItemImage="yes"
                                listItemLength="2"
                                listItemSize="col-xs-12 col-sm-3"
                                listItemStyle="card"
                            />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
