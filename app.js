// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody")

// function to build a table
function buildTable(data) {
    // clear the data
    tbody.html ("");
    
    // chain a for loop to the data
    data.forEach((dataRow) => {
        // append a row to the table body
        let row = tbody.append("tr");
        
        // loop through each field in dataRow argument
        Object.values(dataRow).forEach ((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

// create function to handle input regarding data
function handleClick() {
    let date = d3.select("#datetime").property("#value");
    let filteredData = tableData;

    // use date as filter, if no date return default data
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    // rebuild table using filtered data
    // if no date entered, then filtedData will be og tableData
    buildTable(filteredData);
}

// listen for click event
d3.selectAll("#filter-btn").on("click", handleClick);

// import og data
buildTable(tableData);
