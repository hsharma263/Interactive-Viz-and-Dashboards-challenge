const path = "../../data/samples.json";

// d3.json(path).then(function(data){
//     console.log(data);
// });

// const dataPromise = d3.json(path);
// console.log("Data Promise: ", dataPromise);





d3.json(path).then(function(data) {
    console.log(data);
    // console.log(data.names);
    // console.log(data.samples);
    // console.log(data.samples[0].id);

    console.log(data.samples[0].otu_ids);
    // console.log(data.samples[0].otu_labels);
    console.log(data.samples[0].sample_values.sort());


    
    // for (var i = 0; i < 153; i++) {
    //     console.log(data.samples[i].id);
    // }
    
    var sortedSamples = data.samples[0].sample_values.sort(function(a, b) {
        return b-a
    });

    console.log(sortedSamples);
    
    top_ten_data = sortedSamples.slice(0, 10);
    console.log(top_ten_data);
    // reversed_data = top_ten_data.reverse();
    var text_label = data.samples[0].otu_labels;

    xVal = top_ten_data;
    yVal = data.samples[0].otu_ids;

    var trace1 = {
        x: xVal,
        y: yVal,
        text: text_label,
        type: "bar",
        orientation: "h",
    }

    var plot_data = [trace1];

    Plotly.newPlot("bar", plot_data)



    // var xVal = data.samples[0].sample_values;
    // var yVal = data.samples[0].otu_ids;
    // var text_label = data.samples[0].otu_labels;
    // var markerSize = data.samples[0].sample_values;
    // var markerColor = data.samples[0].otu_ids;

    // // console.log(ids);
    // var trace = {
    //     x: xVal,
    //     y: yVal,
    //     text: text_label,
    //     // mode: "markers",
    //     type: "bar",
    //     orientation: "h",
    //     // marker: {
    //     //     color: markerColor,
    //     //     size: markerSize},
    //     transforms: {
    //         order: "descending"
    //     }
    // };
    // var bar_plot = [trace];

    // var layout = {
    //     yaxis: {
    //         title: "OTU IDs",
    //         ticktext: text_label
    //     }
    // };

    // Plotly.newPlot("bar", bar_plot, layout);





// BUBBLE PLOT

    
    var bubble_trace =[{
        x: data.samples[0].otu_ids,
        y: data.samples[0].sample_values,
        mode: "markers",
        marker: {
            size: data.samples[0].sample_values,
            color: data.samples[0].otu_ids
        }
    }];

    var bubble_layout = {
        title: "Bellybutton Bacteria Bubble Chart",
        xaxis:{
            title: "OTU ID"
        }

    }

    Plotly.newPlot("bubble", bubble_trace, bubble_layout);









});

