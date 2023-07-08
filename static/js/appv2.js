// Get the Roadster endpoint
const roadster = "https://2u-data-curriculum-team.s3.amazonaws.com/datavizclassroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data) {
    console.log(data);
    // Get the list of names
    let names = data.names;
    console.log(names);
    // Get the list of metadata
    let metadata = data.metadata;
    console.log(metadata);
    function init() {
    let dropdown = d3.select("#selDataset");

    // Populate dropdown options
    data.names.forEach(name => {
    dropdown.append("option")
        .attr("value", name)
        .text(name);
    });
    updateSampleMetadata(data.names[0]);
    updateChart(data.names[0]);
    updateBubbleChart(data.names[0]);}
    init();


    
    
});
function optionChanged(id){
    updateSampleMetadata(id);
    updateChart(id);
    updateBubbleChart(id);}

function updateBubbleChart(selectedIndividual) {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data) {
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
    });
    }
function updateSampleMetadata(selectedIndividual) {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data) {
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
    }); 
    }   
function updateChart(selectedIndividual) {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data) {
    // Filter the data for the selected individual
    let individualData = data.samples.filter(obj => obj.id === selectedIndividual)[0];
    
    // Sort the data by sample values descending
    let sortedData = individualData.sample_values.slice(0, 10).sort((a, b) => b - a);
    
    // Create the bar chart
    let trace1 = {
        x: sortedData.reverse(),
        y: individualData.otu_ids.slice(0, 10).map(otuId => `OTU ${otuId}`).reverse(),
        text: individualData.otu_labels.slice(0, 10).reverse,
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
    )};
    
    