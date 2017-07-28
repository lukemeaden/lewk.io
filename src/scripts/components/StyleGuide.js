import DataStore from 'flux/stores/DataStore.js';
const __html = require('html/StyleGuide.html')

class s404 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            StyleGuide: {__html: __html}
        };
    }

    componentWillMount() {
        document.getElementsByTagName('head')[0].innerHTML += '<link rel="stylesheet" href="/docs.css">';
        document.title = `Style guide - Lewk.io`;
    }

    render() {
        let allData = DataStore.getAll();
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-9">
                        <div className="main">
                            <div dangerouslySetInnerHTML={this.state.StyleGuide} />
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-3">

                    </div>
                </div>
            </div>
        );
    }
}

export default s404;
