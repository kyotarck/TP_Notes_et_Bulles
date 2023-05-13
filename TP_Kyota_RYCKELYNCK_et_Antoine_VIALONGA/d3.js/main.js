let dataFromJson = [];

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    dataFromJson = data;
    drawCircles();
  })
  .catch(error => console.log(error));

function drawCircles() {
  const svg = d3.select("#dataviz_area");
  const width = parseInt(svg.style("width"));
  const height = parseInt(svg.style("height"));
  const x = d3.extent(dataFromJson, d => d.x);
  const y = d3.extent(dataFromJson, d => d.y);
  const xScale = d3.scaleLinear().domain(x).range([0, width]);
  const yScale = d3.scaleLinear().domain(y).range([height, 0]);

  svg.selectAll("circle")
    .data(dataFromJson)
    .enter()
    .append("circle")
    .attr("cx", d => xScale(d.x))
    .attr("cy", d => yScale(d.y))
    .attr("r", d => d.value)
    .style("fill", d => {
      if (d.value >= 10 && d.value < 20) {
        return "blue";
      } else if (d.value >= 20 && d.value < 30) {
        return "pink";
      } else {
        return "green";
      }
    });
}
