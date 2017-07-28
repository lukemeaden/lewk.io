class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display: this.props.display,
            searchItem: this.props.searchItem,
            searchItemB: this.props.searchItemB
        };
    }

    render() {
        return(
           <form action="/search/" className={this.state.display ? `form-${this.state.display}` : ''}>
             {this.state.searchItemB ?
                 <div className="form-group">
                     <input
                         className="form-control"
                         type="text"
                         name="s"
                         value={this.state.searchItemB}
                         placeholder="Search..." />
                 </div>
                 :
                 <div className="form-group">
                     <input
                         className="form-control"
                         type="text"
                         name="s"
                         placeholder="Search..." />
                 </div>
             }
             <input
                 className="btn btn-default"
                 type="submit"
                 value="Search" />
           </form>
        )
    }
}

export default SearchForm;
