import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';
import EmailMe from 'components/partials/Misc.js'

class Footer extends React.Component {

    componentDidMount() {
      const height = document.getElementsByTagName('footer')[0].clientHeight;
      const body = document.getElementsByTagName('body')[0];
      body.style.paddingBottom=height+"px";
    }

    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order

        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-9">
                            <p className="h6">
                                <strong>Luke Meaden</strong><br />
                                <EmailMe />
                            </p>
                        </div>
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
