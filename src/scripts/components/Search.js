import DataStore from 'flux/stores/DataStore.js';
import { api } from 'flux/actions/Api.js';
import SearchForm from 'components/partials/SearchForm.js';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchData: ['No result'],
            searchItem: null,
            searchItemB: null,
        };
    }

    componentWillMount(props) {
        if(this.props.location.search){
            this.setState({
                searchItem: this.props.location.search.split('=')[1],
                searchItemB: this.props.location.search.split('=')[1].replace(/([+])/g, ' ')
            })
            api('http://api.lewk.io/wp-json/wp/v2/posts?search='+this.state.searchItem).then((response)=>{
                this.setState({
                    searchData: response,
                })
            });
        }
    }

    render() {
        let pageData = DataStore.getPageBySlug(this.props.match.path.split('/')[1]);
        document.title = `${this.state.searchItemB} - Search - Lewk.io`;
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-9">
                            <div className="main">
                                <h1>Searching for: <em>{this.state.searchItemB}</em></h1>
                                <SearchForm searchItem={this.state.searchItem} searchItem={this.state.searchItemB} display="inline" />
                            </div>
                            <div className="main">
                                {this.state.searchData.map((post) => {
                                    console.log(post)
                                    if (post != 'No result'){
                                        return(
                                            <a key={post.id} href={post.type ? `/blog/${post.slug}` : `/${post.slug}`}>
                                                <h3 className="h4">{post.title.rendered}</h3>
                                            </a>
                                        )
                                    } else {
                                        return(
                                            <h1 key={post}>{post}</h1>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            Things
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Search;
