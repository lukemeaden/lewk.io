import DataStore from 'flux/stores/DataStore.js'

class s404 extends React.Component {
    render() {
        let allData = DataStore.getAll();
        return (
            <div>
                <h1>404</h1>
            </div>
        );
    }
}

export default s404;
