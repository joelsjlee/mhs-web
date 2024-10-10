import * as d3 from "d3";
import { timelineAxisLeft, timelineAxisRight } from "./timelineaxis";
import tooltip from "./tooltip";
import { durationFormat, f, pipe } from "./utils";
import { selectAll } from 'd3-selection';

const google_colors = [
  "#4285f4",
  "#db4437",
  "#f4b400",
  "#0f9d58",
  "#ab47bc",
  "#5e97f5",
  "#e06055",
  "#f5bf26",
  "#33ab71",
  "#b762c6",
  "#00acc1",
  "#ff855f",
  "#9e9d24",
  "#26b8ca",
  "#ff7043",
];

function getFontSize(element) {
  const style = window.getComputedStyle(element, null).getPropertyValue("font-size");
  return parseFloat(style);
}

function luma_BT709(c) {
  return c.r * 0.299 + c.g * 0.587 + c.b * 0.114;
}

function isBright(color) {
  return luma_BT709(color) > 165; // original is 186, but I prefer that value
}

function textColor(value) {
  return isBright(d3.color(value)) ? "black" : "white";
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}${month}${day}`;
}

function translate(x, y) {
  return "translate(" + x + "," + y + ")";
}

function hideHeaderTasks(headerClassName,apply) {
  // Remove bullets from the header name
  //const headerName = headerClassName.replace(/ • /g, "").trim();


  selectAll(`g.task.${headerClassName}`).each(function(d) {

      d3.select(this).style('display', apply);
    

    
});
  
  


}


function hideTasksWithDashClass() {
  const elementsToHide = document.querySelectorAll('g.task[class*=" --"]');
  
  elementsToHide.forEach(function(element) {
    element.style.display = 'none';  // Hide the elements
  });
}

function adjustTranslate(rowElement, adjustmentValue) {
  // Get the current transform attribute
  let transform = rowElement.getAttribute('transform');

  // Extract the translate(x, y) values using a regular expression
  let translateValues = transform.match(/translate\(([\d.-]+),([\d.-]+)\)/);

  if (translateValues) {
    let x = parseFloat(translateValues[1]);  // Extract the x value
    let y = parseFloat(translateValues[2]);  // Extract the y value

    // Adjust the y value by reducing or increasing based on adjustmentValue
    y += adjustmentValue;  // Adjust y as needed

    // Set the new transform value with the updated y
    rowElement.setAttribute('transform', `translate(${x},${y})`);
  }
}

function shiftcolumns(headerRowElement,yGroupSelection,adjvalue){
              // Find the parent <g> element of the clicked + (which is the header row itself)
const headerRow = d3.select(headerRowElement,);


// Get the class name of the clicked header row (e.g., --African-American--)
// const headerClass = headerRow.attr("class").split(" ")[1]; this is how to get only the name 

const headerClass = headerRow.attr("class")

// Initialize an array to store the class names of rows after the header
const rows = [];

let foundFirstHeader = false;



// Iterate through all g.row elements after the clicked header
yGroupSelection.selectAll("g.row").each(function(rowData) {
  

  const currentRow = d3.select(this);
  // This is all the classes 
  const currentRowClass = currentRow.attr("class");
  



  // If we encounter the next header, stop collecting rows
  if (currentRowClass == headerClass) {
    foundFirstHeader = true;

  }

  else if (foundFirstHeader){
    adjustTranslate(this, adjvalue);

    adjustYForRectAndTextByClass(currentRowClass.split(" ")[1],adjvalue);



  }

});

    // Log the list of row classes under the clicked header
    
}

function adjustYForRectAndTextByClass(className, adjustmentY) {
  // Adjust the y attribute for all <rect> elements inside g.task elements with the specific class name
  const rectElements = document.querySelectorAll(`g.task.${className} rect`);
  
  rectElements.forEach(function(rectElement) {
    // Get the current y attribute of the rect
    let currentY = parseFloat(rectElement.getAttribute('y'));

    // Adjust the y value
    let newY = currentY + adjustmentY;

    // Set the new y value
    rectElement.setAttribute('y', newY);
  });

  // Adjust the y attribute for all <text> elements inside g.task elements with the specific class name
  const textElements = document.querySelectorAll(`g.task.${className} text`);

  textElements.forEach(function(textElement) {
    // Get the current y attribute of the text
    let currentY = parseFloat(textElement.getAttribute('y'));

    // Adjust the y value
    let newY = currentY + adjustmentY;

    // Set the new y value
    textElement.setAttribute('y', newY);
  });
}

function getaffectedcolumns(headerRowElement,yGroupSelection,toapply){

            // Find the parent <g> element of the clicked + (which is the header row itself)
const headerRow = d3.select(headerRowElement,);

// Get the class name of the clicked header row (e.g., --African-American--)
// const headerClass = headerRow.attr("class").split(" ")[1]; this is how to get only the name 

const headerClass = headerRow.attr("class")

// Initialize an array to store the class names of rows after the header
const rows = [];

let foundFirstHeader = false;
let foundNextHeader = false;


// Iterate through all g.row elements after the clicked header
yGroupSelection.selectAll("g.row").each(function(rowData) {
  

  const currentRow = d3.select(this);
  // This is all the classes 
  const currentRowClass = currentRow.attr("class");
  



  // If we encounter the next header, stop collecting rows
  if (currentRowClass == headerClass) {
    foundFirstHeader = true;

  }

  else if (foundFirstHeader && currentRowClass.split(" ")[2] == "timelineheader"){
    foundNextHeader = true


  }

  else if (foundFirstHeader && !foundNextHeader){
    rows.push(currentRowClass.split(" ")[1]);

  }

});

    // Log the list of row classes under the clicked header

    console.log(headerClass.split(" ")[1]);
    if (toapply == "block"){
      
      hideHeaderTasks(headerClass.split(" ")[1],"none");
      console.log("You pressed plus");
    }

    else {
      console.log("You pressed minus");
      hideHeaderTasks(headerClass.split(" ")[1],"block");

    }



    //const tasks = document.querySelectorAll(`.${headerClass.split(" ")[1]}.task`);
    //headerClass.split(" ")[1]


    //tasks.forEach(function(task) {
    //  task.style.display = otherapply;  // Set display to none to hide the elements
   // });
    


    rows.forEach(function(rowClass) {
      // Select all elements with the class and hide them
      const elements = document.querySelectorAll(`.${rowClass}`);
      
      elements.forEach(function(element) {
        element.style.display = toapply;  // Set display to none to hide the elements
      });
    });

    return rows.length*38; 
}

function adjustPathHeight(adjustmentHeight) {
  // Select the <path> element with stroke-width="1.75"
  const pathElement = document.querySelector('path[stroke-width="1.75"]');

  if (pathElement) {
    // Get the current 'd' attribute of the path (e.g., "M333,0.5V6270")
    let pathD = pathElement.getAttribute('d');
    
    // Extract the vertical endpoint from the path (e.g., "V6270") using a regex
    let pathValues = pathD.match(/M([\d.-]+),([\d.-]+)V([\d.-]+)/);

    if (pathValues) {
      let startX = parseFloat(pathValues[1]);  // Starting x-coordinate (e.g., 333)
      let startY = parseFloat(pathValues[2]);  // Starting y-coordinate (e.g., 0.5)
      let endY = parseFloat(pathValues[3]);    // Current vertical endpoint (e.g., 6270)

      // Adjust the vertical endpoint by reducing it
      let newEndY = endY + adjustmentHeight;

      // Update the 'd' attribute with the new vertical endpoint
      pathElement.setAttribute('d', `M${startX},${startY}V${newEndY}`);
    }
  } else {
    console.error('Path with stroke-width="1.75" not found.');
  }
}

function adjustXAxisTranslate(adjustmentY) {
  // Select the <g> element with class 'x axis bottom-axis'
  const xAxisElement = document.querySelector('g.x.axis.bottom-axis');

  if (xAxisElement) {
    // Get the current 'transform' attribute
    let transform = xAxisElement.getAttribute('transform');

    // Extract the translate(x, y) values using a regex
    let translateValues = transform.match(/translate\(([\d.-]+),([\d.-]+)\)/);

    if (translateValues) {
      let x = parseFloat(translateValues[1]);  // x value (e.g., 0)
      let y = parseFloat(translateValues[2]);  // Current y value (e.g., 6290)

      // Adjust the y value by the adjustmentY value
      let newY = y + adjustmentY;

      // Set the new transform value with the updated y
      xAxisElement.setAttribute('transform', `translate(${x},${newY})`);
    }
  } else {
    console.error('x axis bottom-axis not found.');
  }
}


export default function () {
  let colors = google_colors,
    padding = 5,
    milestone_width = 2,
    reversed = false,
    today = false,
    dates,
    const_width,
    duration = 0,
    labels = f(0),
    names = f(1),
    starts = f(2),
    ends = f(3);

  function trim_text_to_rect(task, d) {
    const text = task.select("text"),
      rect = task.select("rect"),
      rect_width = rect.attr("width") - 2 * padding,
      string = names(d);

    text.text(string);
    let text_width = text.node().getComputedTextLength();

    if (text_width > rect_width) {
      const ratio = rect_width < 0 ? 0 : rect_width / text_width,
        length = Math.floor(string.length * ratio);

      text.text(length > 2 ? string.slice(0, length - 2) + "…" : "");
    }
  }

  function add_text_background(task, d, yAxis) {
    const text_node = task.select("text").node(),
      bbox = text_node.getBBox(),
      index = yAxis.scale().domain().indexOf(labels(d)),
      color = yAxis.colorscale()(index);

    const bckg = task.selectAll("rect.bckg").data([d]).join('rect').attr('class', 'bckg')
      .attr('fill', color).attr('x', bbox.x - padding + milestone_width).attr('y', bbox.y - 2).attr('width', bbox.width + padding - milestone_width).attr('height', bbox.height);
    task.node().insertBefore(bckg.node(), text_node)
  }

  function trim_text(selection, yAxis) {
    selection.each(function (d, i) {
      const task = d3.select(this.parentNode);
      ends(d) - starts(d) ? trim_text_to_rect(task, d) : add_text_background(task, d, yAxis);
    });
  }

  function tween_text(yAxis) {
    return function (d, i) {
      // this is overkill if duration is 0
      d3.active(this).tween("text", function () {
        return function (t) {
          trim_text(d3.select(this), yAxis);
        };
      });
    }
  }
  

  function chart(selection) {
    const data = selection.datum(),
      rows = new Set(d3.map(data, labels)),
      tip = new tooltip(tooltip_html),
      cScale = d3.scaleOrdinal(colors);
      dates = dates || [d3.min(data, starts), d3.max(data, ends)];

    if (today) dates = d3.extent(dates.concat(new Date()));

    selection.each(function (data) {
      const width = const_width || this.getBoundingClientRect().width,
        height = rows.size * (getFontSize(this) + 4 * padding),
        yScale = d3.scaleBand().domain(rows).range([0, height]), //.padding(0.1),
        xScale = d3.scaleTime().domain(dates),
        yAxis = (reversed ? timelineAxisRight : timelineAxisLeft)(yScale).width(width),
        svg = d3.select(this).selectAll("svg").data([1]).join("svg");
       
      svg
        .attr("class", "timeline")
        .attr("width", width)
        .attr("height", height + 40); // margin.bottom
       
      const g = svg.append("g").attr("transform", "translate(" + 0 + "," + 20 + ")");;
      const yGroup = g.append("g").attr("class", "y axis").call(yAxis);

      yGroup.selectAll("text")
        .attr("text-anchor", function(d) {
          // Center justify the text if it starts with "--", otherwise right justify
          return d.startsWith(" •") ? "middle" : "end";
          })
        .attr("x", function(d) {
          // If the text starts with "--", set x to 167, otherwise set x to 332.5
          return d.startsWith(" •") ? 167 : 332.5;
          })
        .style("cursor", "pointer")  // Show pointer to indicate it's clickable
        .style("font-weight", function(d) {
          // Make the text bold if it starts with "--"
          return d.startsWith(" •") ? "bold" : "normal";
          })     
        .style("background", "none") 
        .on("click", function(event, d) {
          // Remove all dashes from the link text but keep displayed text as is
          const cleanedText = d.replace(/ • /g, "");  // Remove dashes for the link
          const searchSubject = cleanedText.replace(" ", "%20");  // Replace spaces with %20 for the URL
  
          const url = `https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22${searchSubject}%22`;
  
          // Open the URL in a new tab
          window.open(url, "_blank");
          });
    
      yGroup.selectAll("g.row")
        .each(function(d) {
          // Find the <text> element within the group

          const textContent = d3.select(this).datum();

          d3.select(this).classed((d3.select(this).datum()).replace(/•/g,"").replace(/ /g,"-").replace(/[^a-zA-Z0-9-]/g, ""), true);

          //console.log((d3.select(this).select("text").text()).replace(/•/g,"").replace(/ /g,"-").replace(/[^a-zA-Z0-9-]/g, ""));
          // Check if the text starts with " •"
          if (textContent.startsWith(" •")) {
              // Add the icon only for rows where the text starts with " •"
              d3.select(this)  // Select the current <g> group
                .classed("timelineheader", true)
                .append("text")  // Append a new <text> element for the icon
                .attr("x", 320.5)  // Set the position of the icon
                .attr("y", 25)  // Align the icon vertically with the text
                .text("-")  // Set the icon content
                .style("text-anchor","end")
                .style("cursor", "pointer")  // Make the icon clickable
                .style("font-size", "30px")  // Set icon size
                .attr("fill", "black")
                .style("-ms-user-select", "none")
                .style("-webkit-user-select", "none")
                .style("user-select", "none")
          }  
   });


  yGroup.selectAll("g.row.timelineheader text")
    .on("click", function(event, d) {
      const text = d3.select(this).text();

      if (text === "+") {
        let adjustment = getaffectedcolumns(this.parentNode,yGroup,"block");

        shiftcolumns(this.parentNode,yGroup,adjustment);
        adjustPathHeight(adjustment);
        adjustXAxisTranslate(adjustment);
        


          // Toggle the + to - and vice versa
        const currentText = d3.select(this).text();
        if (currentText === "+") {
          d3.select(this).text("-").style("font-size","30px");
        } else {
          d3.select(this).text("+");
        }
      // Add any additional code for expanding here
        } else if (text === "-") {

        let adjustment = getaffectedcolumns(this.parentNode,yGroup,"none");

        shiftcolumns(this.parentNode,yGroup,-adjustment);
        adjustPathHeight(-adjustment);
        adjustXAxisTranslate(-adjustment);

          // Toggle the + to - and vice versa
        const currentText = d3.select(this).text();
        if (currentText === "-") {
          d3.select(this).text("+").style("font-size","20px");
        } else {
          d3.select(this).text("-");
        }
      }

  });
    
      let range = yAxis.range();

      xScale.range([range[0] + padding, range[1] - padding]).clamp(true);

      const xAxis = d3.axisBottom(xScale);
      const xGroup = g
        .append("g")
        .attr("class", "x axis")
        .attr("transform", translate(0, 0))
        .call(xAxis);

        xGroup.selectAll(".tick text")
        .attr("dy", "-1.5em");  // Move text up by 1em

        xGroup.selectAll(".tick line")
        .attr("y2", "-5");

        const xAxisBottom = d3.axisBottom(xScale);  // Standard bottom axis
const xGroupBottom = svg
  .append("g")
  .attr("class", "x axis bottom-axis")
  .attr("transform", translate(0, height+20))  // Position at the bottom of the chart
  .call(xAxisBottom);

  xGroupBottom.selectAll(".tick line").attr("y2", "5");

      yGroup.on("offset", () => {
        range = yAxis.range();
        xScale.range([range[0] + padding, range[1] - padding]).clamp(true);
        xAxis.ticks(Math.min((range[1] - range[0]) / 70, 10));
        xGroup.call(xAxis);
        tasks
          .attr("transform", (d) => translate(xScale(starts(d)), yScale(labels(d))))
          .selectAll("rect")
          .attr("width", (d) => xScale(ends(d)) - xScale(starts(d)) || milestone_width)
          .call(d => trim_text(d, yAxis));

        yGroup.call(yAxis.draw_ticks, xScale.ticks().map(xScale));
      });

      xGroup.select(".domain").remove();
      xGroup.selectAll(".tick line").attr("stroke", "#AAA");

      const ticks = xScale.ticks().map(xScale);
      yGroup.call(yAxis.draw_ticks, ticks);

      let tasks = g.selectAll("g.task").data(data);

      tasks.exit().remove();

      
      const tasks_enter = tasks.enter().append("g").classed("task", true);


      tasks_enter
      .each(function(d) {
        const rowClass = labels(d).replace(/•/g,"").replace(/ /g,"-").replace(/[^a-zA-Z0-9-]/g, "");
        d3.select(this).classed(rowClass, true);  // Apply the dynamic row class
      })
        .append("rect")
        .style("opacity", 1.0)
        .attr("y", padding)
        .style("cursor", "pointer")
        .attr("height", yScale.bandwidth() - 2 * padding)
        .on("mouseover", tip.show)
        .on("mouseout", tip.hide)
        .on("click", function(event, d) {
          // Takes you to primary source co-op realted data 

          // Extracts subject and formats space 
          var subjecttitle = String(d[1]);
	        var SearchSubject = subjecttitle.replace(" ","%20");
          
          
          // Extracts start date and formats it 
          var Ystart = d[2];
          var StartDateStr = formatDate(Ystart);

          // Extracts end date and formats it 
          var Yend = d[3];
          var EndDateStr = formatDate(Yend);

          var url = ("https://www.primarysourcecoop.org/publications/jqa/search#q%3D%2Bsubject%3A%22"+SearchSubject+"%22%20%2Bdate_when%3A%5B"+StartDateStr+"%20TO%20"+EndDateStr+"%5D%7Crows=20%7Cstart=0%7Chl=true%7Chl.fl=text_merge%7Csort=date_when%20asc%7Cff=person_keyword;subject%7Cfl=id%20index%20title%20filename%20resource_group_name%20date_when%20date_to%20author%20recipient%20person_keyword%20subject%20doc_beginning")

          window.open(url, "_blank")

      })
        .style("fill", pipe(names, cScale));
        

      tasks_enter
        .append("text")
        .attr("text-anchor", "start")
        // .attr('fill', d => textColor(cScale(names(d))))
        // .attr('fill', compose(textColor, cScale, names))
        .attr("fill", d => ends(d) - starts(d) ? pipe(names, cScale, textColor)(d) : 'black')
        .attr("pointer-events", "none")
        .attr("dx", padding)
        .attr("y", yScale.bandwidth() / 2)
        .attr("dy", "0.32em")
        .text(names);


        

      tasks = tasks.merge(tasks_enter);

      tasks
        .attr("transform", (d) => translate(range[0], yScale(labels(d))))
        .selectAll("rect")
        .attr("width", 0);

      tasks
        .transition()
        .duration(duration)
        .attr("transform", (d) => translate(xScale(starts(d)), yScale(labels(d))))
        .selectAll("rect")
        .attr("width", (d) => xScale(ends(d)) - xScale(starts(d)) || milestone_width)
        .on("start", tween_text(yAxis));

      if (today)
        g.append("path")
          .attr("stroke", "red")
          .attr("d", "M" + xScale(new Date()) + ",0.5V" + height);
    });
  
    hideTasksWithDashClass();
   
  }

  //chart.axis     = function(_) { return arguments.length? (axis  = _, chart): axis ; };
  chart.dates = function (_) {
    return arguments.length ? ((dates = _), chart) : dates;
  };
  chart.width = function (_) {
    return arguments.length ? ((const_width = _), chart) : const_width;
  };
  chart.today = function (_) {
    return arguments.length ? ((today = _), chart) : today;
  };
  chart.colors = function (_) {
    return arguments.length ? ((colors = _), chart) : colors;
  };
  chart.padding = function (_) {
    return arguments.length ? ((padding = _), chart) : padding;
  };
  chart.milestone_width = function (_) {
    return arguments.length ? ((milestone_width = _), chart) : milestone_width;
  };
  chart.reversed = function (_) {
    return arguments.length ? ((reversed = _), chart) : reversed;
  };
  chart.duration = function (_) {
    return arguments.length ? ((duration = _), chart) : duration;
  };



  return chart;

  function tooltip_html(event, d) {
    const format = pipe(d3.isoParse, d3.timeFormat("%Y-%m-%d")),
      header = `<b>${names(d)}</b><hr style="margin: 2px 0 2px 0">${format(starts(d))}`,
      body = ends(d) - starts(d) ? ` - ${format(ends(d))}<br>${durationFormat(starts(d), ends(d))}` : "";

    return header + body;
  }
}
