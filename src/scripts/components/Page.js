import DataStore from 'flux/stores/DataStore.js'

class Page extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug(this.props.match.path.split('/')[1]);
        document.title = `${pageData.title.rendered} - Lewk.io`;
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-9">
                            <div className="main">
                                <h1>{pageData.title.rendered}</h1>
                                <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} />
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

export default Page;
