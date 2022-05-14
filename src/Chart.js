import React, { Component } from 'react'
import * as d3 from "d3";

class Chart extends Component {
    constructor(props) {
        super(props);
        this.randomRef = React.createRef();
    }
    componentDidMount() {
        this.drawChart();
        //APICALLS or AJAX
    }

     drawChart() {
  
        const data = this.props.data;
          
        const gettingRef = d3.select(this.randomRef.current)
                             .append("svg")
                            .attr("width", this.props.width)
                            .attr("height", this.props.height);
        const h = this.props.height;
        gettingRef.selectAll("rect")
                  .data(data)
                  .enter()
                  .append("rect")
                  .attr("x", (d, i) => i * 70)
                  .attr("y", (d, i) => h - 10 * d)
                  .attr("width", 65)
                  .attr("height", (d, i) => d * 10)
                  .attr("fill", "green")
            
        gettingRef.selectAll("text")
                  .data(data)
                  .enter()
                  .append("text")
                  .text((d) => d)
                  .attr("x", (d, i) => i * 70)
                  .attr("y", (d, i) => h - (10 * d) - 3)

        
    }

  render() {
    return (
      <div ref={this.randomRef}></div>
    )
  }
}
export default Chart;


