import DataStore from 'flux/stores/DataStore.js'

class Page extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug(this.props.match.path.split('/')[1]);
        return (
            <div>
                <h1>{pageData.title.rendered}</h1>
                <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} />
            </div>
        );
    }
}

export default Page;
