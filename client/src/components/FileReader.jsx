import React, { Component } from 'react';
import Papa from "papaparse"
import API from "../utils/API";

class FileReader extends Component {
    constructor() {
        super();
        this.state = {
            csvfile: undefined
        };
        this.updateData = this.updateData.bind(this);
    }

    handleChange = event => {
        this.setState({
            csvfile: event.target.files[0]
        });
    };

    importCSV = () => {
        const { csvfile } = this.state;
        Papa.parse(csvfile, {
            complete: this.updateData,
            delimiter: ',',
            skipEmptyLines: true,
            header: true
        });
    };

    updateData(result) {
        var data = result.data;
        console.log(data);
        API.saveCSV({
            data
        }).then(() => {
            this.props.history.push('/');
        });

        // API.savePopulate({
        //     data
        // }).then(() => {
        //     this.props.history.push('/');
        // });
    }

    render() {

        return (
            <div className="App">
                <h2>Import CSV File!</h2>
                <input
                    className="csv-input"
                    type="file"
                    ref={input => {
                        this.filesInput = input;
                    }}
                    name="file"
                    placeholder={null}
                    onChange={this.handleChange}
                />
                <p />
                <button onClick={this.importCSV}> Upload now!</button>
            </div>
        );
    }
}

export default FileReader;