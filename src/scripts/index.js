import {render}             from 'react-dom';
import DataActions          from 'flux/actions/DataActions.js';

import Home                 from 'components/Home.js';
import Blog                 from 'components/Blog.js';
import Page                 from 'components/Page.js';
import Post                 from 'components/Post.js';
import Search               from 'components/Search.js';
import StyleGuide           from 'components/StyleGuide.js';
import s404                 from 'components/s404.js';
import Header               from 'components/partials/Header.js';
import Footer               from 'components/partials/Footer.js';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

require('../scss/font-awesome.scss');


class AppInitializer {

    templates = {
        'blog': Blog,
        'home': Home,
        'page': Page,
        'post': Post,
        'search': Search,
        'style-guide': StyleGuide
    }

    buildRoutes(data){
        return data.pages.map((page, i) => {
            return(
                <Route
                    key={i}
                    component={this.templates[page.acf.template]}
                    path={`/${page.slug}`}
                    exact
                />
            )
        })
    }

    buildBlogRoutes(data){
        return data.posts.map((page, i) => {
            return(
                <Route
                    key={i}
                    component={Post}
                    path={`/blog/${page.slug}`}
                    exact
                />
            )
        })
    }

    buildSearchRoutes(data){
        return(
            <Route
                key="search"
                component={Search}
                path="/search/*"
                exact
            />
        )
    }

    run() {
        DataActions.getPages((response)=>{
            render(
                <Router>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" component={Home} exact />
                            {this.buildRoutes(response)}
                            {this.buildBlogRoutes(response)}
                            {this.buildSearchRoutes(response)}
                            <Route path='/style-guide' component={StyleGuide} />
                            <Route path='*' component={s404} />
                            <Route render={() => { return <Redirect to="/" /> }} />
                        </Switch>
                        <Footer />
                    </div>
                </Router>
                , document.getElementById('app')
            );
        });
    }
}

new AppInitializer().run();
