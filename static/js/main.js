const etf_url = "http://127.0.0.1:5000/api/v1.0/weighted_SP" 
const mort_url = "http://127.0.0.1:5000/api/v1.0/mortgage"
const urls = [etf_url, mort_url]

const dataPromise_etf = d3.json(etf_url).then(function(data) {

  let etf_data = data.etf_weighted
  let etf_keys = Object.keys(data.etf_weighted)


  //// define function to build ETF chart on command along with chart characteristics
  // ETF
  function build_etf(etf_data, key) {
    let etf_sector_weight = etf_data[key]
    var xval = Object.keys(etf_sector_weight);
    var yval = Object.values(etf_sector_weight);
  
    let barData = [
      {
        y: yval,
        x: xval,
        text: xval,
        type: "bar",
        orientation: "v"
      }
    ];
  
    let barLayout = {
      title: "ETF Weight by sector",
      margin: { t: 30, l: 150 }
    };
    Plotly.newPlot("etf-weighted-chart", barData, barLayout)
  };

  // Build the initial dashboard and run the sequence to obtain starting visualizations
  function init() {
    let etf_selector = d3.select("#sel-Dataset_etf");
    // let state_selector = d3.select("#sel-Dataset_mort");
  
    for (let i=0; i < etf_keys.length; i++) {
      etf_selector
        .append("option")
        .text(etf_keys[i])
        .property("value", etf_keys[i])
    }
    let sample_init = etf_keys[0];
    build_etf(etf_data, sample_init);
  };

  // Run commands to retrieve dashboard
  init()

  // Build listener to execute response for selection keys
  d3.select("#sel-Dataset_etf").on("change", () => {
    let new_key = d3.select("#sel-Dataset_etf").property("value")
    build_etf(etf_data, new_key)
  });

});


///////MORTGAGE
const dataPromise_mort = d3.json(mort_url).then(function(data) {
  //local variables for loan repayment trend
  let usa_data = data.national
  let state_data = data.state
  var state_keys = []

  for (i in state_data) {
    state_keys.push(i)
  }

  // Mortgage
  function build_mort(usa_data, state_data, state_key) {
    // let usa_data = data.national
    let us_x = usa_data["United States"]["year"]
    let us_y = usa_data["United States"]["percent"]
    
    var layout = {
      title: "Line Plots of Mortgage payments 30-90 days late"
    };

    var trace_us = {
      x: us_x,
      y: us_y,
      mode: 'lines',
      name: 'US',
      line: {
        color: 'blue'
      }
    };

    var dataset = [trace_us]

    for (i in state_data[state_key]) {
      var trace = {
        x: us_x,
        y: state_data[state_key][i],
        mode: 'lines',
        name: i,
        line: {
          color: 'red'
        }
      }
      dataset.push(trace)
    }
    
    var layout = {
      title:'Mortgage 30-90 Days late of all counties in selected states',
      margin: { t: 30, l: 150 }
    }

    Plotly.newPlot('days-late-chart', dataset, layout);
  };

  // Build the initial dashboard and run the sequence to obtain starting visualizations
  function init() {
    let mort_selector = d3.select("#sel-Dataset_mort");
    // let state_selector = d3.select("#sel-Dataset_mort");
  
    for (let i=0; i < state_keys.length; i++) {
      mort_selector
        .append("option")
        .text(state_keys[i])
        .property("value", state_keys[i])
    }
    let sample_init = "CA";
    build_mort(usa_data, state_data, sample_init);
  };

  // Run command to retrieve dashboard
  init()

  // Build listener to execute response for selection keys
  d3.select("#sel-Dataset_mort").on("change", () => {
    let new_key = d3.select("#sel-Dataset_mort").property("value")
    build_mort(usa_data, state_data, new_key)
  });

});