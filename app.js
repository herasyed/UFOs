// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    var element = d3.select(this);
    // 4b. Save the value that was changed as a variable.
    var elementValue = element.property("value");
    // 4c. Save the id of the filter that was changed as a variable.
    var elementId = element.property("id");
    console.log(elementValue)
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue) {
      console.log("if")
     // filters = filteredData.filter(row => row.datetime === date);
      filters[elementId] = elementValue;
    } else{
      console.log("if")
      delete filters[elementId]
    }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable(elementId);
    console.log("filterTable triggered")
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable(id) {
    tbody.html ("");
    // 8. Set the filtered data to the tableData.
    var filterData = JSON.parse(JSON.stringify(tableData));
  console.log(filterData)
  console.log(id)
    // 9. Loop through all of the filters and keep any data that
    filterData = filterData.filter(obj => 
      obj[id] == filters[id]);
    console.log(filterData)

  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filterData);    
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  console.log("this is working")
  console.log(d3.selectAll("input"))
  // Build the table when the page loads
  buildTable(tableData);
