import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js'

class Footer extends React.Component {

    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order

        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-9"></div>
                        <div className="col-xs-12 col-sm-3">
                            <ul className="nav">
                                {allPages.map((page) => {
                                    if(page.slug != 'home'){
                                       return(
                                           <li key={page.id}>
                                                <Link
                                                    to={`/${page.slug}`}
                                                    style={{marginRight: '10px'}}
                                                >
                                                    {page.title.rendered}
                                                </Link>
                                            </li>
                                        )
                                   }
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
