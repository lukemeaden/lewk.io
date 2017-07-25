import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';

class Header extends React.Component {

    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order

        return (
            <header className="header header-fixed">
              <div className="container">
                <div className="row">
                  <div className="col-xs-3">
                    <a href="/" className="brand">Lewk.io</a>
                  </div>
                  <div className="col-xs-9">
                    <nav>
                      <ul className="nav nav-horizontal nav-right">
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
                    </nav>
                  </div>
                </div>
              </div>
            </header>
        );
    }
}

export default Header;
