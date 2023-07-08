d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/datavizclassroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data) {
  // Code for creating the chart will go here
});
function updateChart(selectedIndividual) {
  // Filter the data for the selected individual
  let individualData = data.samples.filter(obj => obj.id === selectedIndividual)[0];

  // Sort the data by sample values descending
  let sortedData = individualData.sample_values.slice(0, 10).sort((a, b) => b - a);

  // Create the bar chart
  let trace1 = {
    x: sortedData,
    y: individualData.otu_ids.slice(0, 10).map(otuId => `OTU ${otuId}`),
    text: individualData.otu_labels.slice(0, 10),
    type: "bar",
    orientation: "h"
  };

  let layout = {
    title: `Top 10 OTUs found in Individual ${selectedIndividual}`,
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };

  let chartData = [trace1];

  Plotly.newPlot("bar", chartData, layout);
}
let dropdown = d3.select("#selDataset");

// Populate dropdown options
data.names.forEach(name => {
  dropdown.append("option")
    .attr("value", name)
    .text(name);
});

// Initial chart rendering
updateChart(data.names[0]);

// Event listener for dropdown change
dropdown.on("change", function() {
  let selectedIndividual = d3.select(this).property("value");
  updateChart(selectedIndividual);
});
d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/datavizclassroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data) {
  function updateChart(selectedIndividual) {
    let individualData = data.samples.filter(obj => obj.id === selectedIndividual)[0];
  
    let sortedData = individualData.sample_values.slice(0, 10).sort((a, b) => b - a);
  
    let trace1 = {
      x: sortedData,
      y: individualData.otu_ids.slice(0, 10).map(otuId => `OTU ${otuId}`),
      text: individualData.otu_labels.slice(0, 10),
      type: "bar",
      orientation: "h"
    };
  
    let layout = {
      title: `Top 10 OTUs found in Individual ${selectedIndividual}`,
      margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
        function updateBubbleChart(selectedIndividual) {
          // Filter the data for the selected individual
          let individualData = data.samples.filter(obj => obj.id === selectedIndividual)[0];
        
          let trace1 = {
            x: individualData.otu_ids,
            y: individualData.sample_values,
            text: individualData.otu_labels,
            mode: "markers",
            marker: {
              size: individualData.sample_values,
              color: individualData.otu_ids,
              colorscale: "Earth"
            }
          };
        
          let layout = {
            title: `Samples for Individual ${selectedIndividual}`,
            xaxis: {
              title: "OTU ID"
            },
            yaxis: {
              title: "Sample Values"
            }
          };
        
          let chartData = [trace1];
        
          Plotly.newPlot("bubble", chartData, layout);
        }
        // Event listener for dropdown change
dropdown.on("change", function() {
  let selectedIndividual = d3.select(this).property("value");
  updateBubbleChart(selectedIndividual);
});
// Initial chart rendering
updateBubbleChart(data.names[0]);
function updateBubbleChart(selectedIndividual) {
  let individualData = data.samples.filter(obj => obj.id === selectedIndividual)[0];

  let trace1 = {
    x: individualData.otu_ids,
    y: individualData.sample_values,
    text: individualData.otu_labels,
    mode: "markers",
    marker: {
      size: individualData.sample_values,
      color: individualData.otu_ids,
      colorscale: "Earth"
    }
  };

  let layout = {
    title: `Samples for Individual ${selectedIndividual}`,
    xaxis: {
      title: "OTU ID"
    },
    yaxis: {
      title: "Sample Values"
    }
  };

  let chartData = [trace1];

  Plotly.newPlot("bubble", chartData, layout);
}

// Event listener for dropdown change
dropdown.on("change", function() {
  let selectedIndividual = d3.select(this).property("value");
  updateBubbleChart(selectedIndividual);
});

// Initial chart rendering
updateBubbleChart(data.names[0]);
function updateSampleMetadata(selectedIndividual) {
  // Filter the data for the selected individual
  let individualMetadata = data.metadata.filter(obj => obj.id === parseInt(selectedIndividual))[0];

  // Select the sample metadata element
  let sampleMetadata = d3.select("#sample-metadata");

  // Clear any existing metadata
  sampleMetadata.html("");

  // Iterate over each key-value pair in the metadata and display them
  Object.entries(individualMetadata).forEach(([key, value]) => {
    sampleMetadata.append("p").text(`${key}: ${value}`);
  });
}
// Event listener for dropdown change
dropdown.on("change", function() {
  let selectedIndividual = d3.select(this).property("value");
  updateSampleMetadata(selectedIndividual);
});
// Initial metadata rendering
updateSampleMetadata(data.names[0]);
function updateSampleMetadata(selectedIndividual) {
  let individualMetadata = data.metadata.filter(obj => obj.id === parseInt(selectedIndividual))[0];

  let sampleMetadata = d3.select("#sample-metadata");
  sampleMetadata.html("");

  Object.entries(individualMetadata).forEach(([key, value]) => {
    sampleMetadata.append("p").text(`${key}: ${value}`);
  });
}

// Event listener for dropdown change
dropdown.on("change", function() {
  let selectedIndividual = d3.select(this).property("value");
  updateSampleMetadata(selectedIndividual);
});

// Initial metadata rendering
updateSampleMetadata(data.names[0]);
function updateDashboard(selectedIndividual) {
  // Filter the data for the selected individual
  let individualData = data.samples.filter(obj => obj.id === selectedIndividual)[0];
  let individualMetadata = data.metadata.filter(obj => obj.id === parseInt(selectedIndividual))[0];

  // Update the bar chart
  let sortedData = individualData.sample_values.slice(0, 10).sort((a, b) => b - a);

  let trace1 = {
    x: sortedData,
    y: individualData.otu_ids.slice(0, 10).map(otuId => `OTU ${otuId}`),
    text: individualData.otu_labels.slice(0, 10),
    type: "bar",
    orientation: "h"
  };

  let layout = {
    title: `Top 10 OTUs found in Individual ${selectedIndividual}`,
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };

  let barChartData = [trace1];

  Plotly.newPlot("bar", barChartData, layout);

  // Update the bubble chart
  let trace2 = {
    x: individualData.otu_ids,
    y: individualData.sample_values,
    text: individualData.otu_labels,
    mode: "markers",
    marker: {
      size: individualData.sample_values,
      color: individualData.otu_ids,
      colorscale: "Earth"
    }
  };

  let bubbleLayout = {
    title: `Samples for Individual ${selectedIndividual}`,
    xaxis: {
      title: "OTU ID"
    },
    yaxis: {
      title: "Sample Values"
    }
  };

  let bubbleChartData = [trace2];

  Plotly.newPlot("bubble", bubbleChartData, bubbleLayout);

  // Update the sample metadata
  let sampleMetadata = d3.select("#sample-metadata");
  sampleMetadata.html("");

  Object.entries(individualMetadata).forEach(([key, value]) => {
    sampleMetadata.append("p").text(`${key}: ${value}`);
  });
}
// Event listener for dropdown change
dropdown.on("change", function() {
  let selectedIndividual = d3.select(this).property("value");
  updateDashboard(selectedIndividual);
});
// Initial dashboard rendering
updateDashboard(data.names[0]);
function updateDashboard(selectedIndividual) {
  let individualData = data.samples.filter(obj => obj.id === selectedIndividual)[0];
  let individualMetadata = data.metadata.filter(obj => obj.id === parseInt(selectedIndividual))[0];

  // Update the bar chart
  let sortedData = individualData.sample_values.slice(0, 10).sort((a, b) => b - a);

  let trace1 = {
    x: sortedData,
    y: individualData.otu_ids.slice(0, 10).map(otuId => `OTU ${otuId}`),
    text: individualData.otu_labels.slice(0, 




      function updateBubbleChart(selectedIndividual) {
        // Filter the data for the selected individual
        let individualData = data.samples.filter(obj => obj.id === selectedIndividual)[0];
      
        let trace1 = {
          x: individualData.otu_ids,
          y: individualData.sample_values,
          text: individualData.otu_labels,
          mode: "markers",
          marker: {
            size: individualData.sample_values,
            color: individualData.otu_ids,
            colorscale: "Earth"
          }
        };
      
        let layout = {
          title: `Samples for Individual ${selectedIndividual}`,
          xaxis: {
            title: "OTU ID"
          },
          yaxis: {
            title: "Sample Values"
          }
        };
      
        let chartData = [trace1];
      
        Plotly.newPlot("bubble", chartData, layout);
      }