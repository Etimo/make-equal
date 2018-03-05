import React, {Component} from "react";
import axios from "axios";

class TestRequest extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      status: ""
    }
    this.getSomething();
  }


  getSomething() {
    // https://analytics.makeequal.se/api/words
    let filteredDataTitles = [];
    axios.get('https://analytics.makeequal.se/api/words/sv')
      .then(response => {
        let data = response.data.data;
        for (let i = 0; i < data.length; i++) {
          filteredDataTitles.push(data[i].title)
        }
        this.updateData(filteredDataTitles)
      })
      .catch(error => {
        this.updateData(['Error']);
      });
  }

  updateData(filteredDataTitles) {
    console.log("inside update funtion")
    if (filteredDataTitles.length > 1) {
      this.setState({
        data: filteredDataTitles,
        status: 'Success'
      })
    } else {
      this.setState({
        data: filteredDataTitles,
        status: 'Error'
      })
    }
  }

  showSomething() {
    const data = this.state.data;
    console.log(data)
    return (
      <div>
        <ul className="simple-list">
          {
            data.map((el) => {
              return (
                <li>{el}</li>
              );
            })
          }
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div>
        Ordlista:
        { this.state && this.state.data &&
        <div>
          <p>
            Heyya
          </p>
          { this.state.status === 'Success' ?
            this.showSomething() : this.state.status
          }
        </div>
        }
      </div>
    );
  }
}
export default TestRequest;
