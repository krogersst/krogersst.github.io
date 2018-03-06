/*
 * This file is part of the Visulaizing Abolition project.
 *
 * This is the framework of the interactive database.
 *
 */
jQuery(document).ready(function($) {

    $("#tabs").tabs();

    $( "#slider-range" ).slider({
          range: true,
          min: 1816,
          max: 1900,
          values: [ 1816, 1900 ],
          slide: function( event, ui ) {
            $( "#sliderOne" ).val( ui.values[ 0 ] );
            $( "#sliderTwo" ).val( ui.values[ 1 ] );
          }
        });

        $( "#sliderOne" ).on( "change", function() {
          var oneVal = $("#sliderOne").val();
           $( "#slider-range" ).slider( "values", 0, oneVal );
        });

        $( "#sliderTwo" ).on( "change", function() {
          var twoVal = $("#sliderTwo").val();
          $( "#slider-range" ).slider( "values", 1, twoVal );
        });

    //start dropdown filters

    var idEditor = function(cell, value) {
        //cell - JQuery object for current cell
        //value - the current value for current cell
        //create and style editor
        var editor = $("<input id='idEditor' type='text'/>");
        editor.css({
                "padding": "3px",
                "width": "100%",
                "placeholder": "search ID...",
                "box-sizing": "border-box",
            })
            //Set value of editor to the value of the cell
            .val(value);
        //set focus on the select box when the editor is selected (timeout allows for editor to be added to DOM)
        if (cell.hasClass("tabulator-cell")) {
            setTimeout(function() {
                editor.focus();
            }, 100);
        }
        //when the value has been set, update the cell
        editor.on("change blur", function(e) {
            cell.trigger("editval", editor.val());
        });
        //return the editor element
        return editor;
    }

    var letterEditor = function(cell, value) {
        //cell - JQuery object for current cell
        //value - the current value for current cell
        //create and style editor
        var editor = $("<input id='letterEditor' type='text'/>");
        editor.css({
                "padding": "3px",
                "width": "100%",
                "placeholder": "search letter...",
                "box-sizing": "border-box",
            })
            //Set value of editor to the value of the cell
            .val(value);
        //set focus on the select box when the editor is selected (timeout allows for editor to be added to DOM)
        if (cell.hasClass("tabulator-cell")) {
            setTimeout(function() {
                editor.focus();
            }, 100);
        }
        //when the value has been set, update the cell
        editor.on("change blur", function(e) {
            cell.trigger("editval", editor.val());
        });
        //return the editor element
        return editor;
    }

    var originEditor = function(cell, value) {
        //cell - JQuery object for current cell
        //value - the current value for current cell
        //create and style editor
        var editor = $("<input id='originEditor' type='text' list='origindrop'/><datalist id='origindrop'><option value=''>Origin</option></datalist>");
        editor.css({
                "padding": "3px",
                "width": "100%",
                "placeholder": "search origin...",
                "box-sizing": "border-box",
            })
            //Set value of editor to the value of the cell
            .val(value);
        //set focus on the select box when the editor is selected (timeout allows for editor to be added to DOM)
        if (cell.hasClass("tabulator-cell")) {
            setTimeout(function() {
                editor.focus();
            }, 100);
        }
        //when the value has been set, update the cell
        editor.on("change blur", function(e) {
            cell.trigger("editval", editor.val());
        });
        //return the editor element
        return editor;
    }

    var imporiginEditor = function(cell, value) {
        //cell - JQuery object for current cell
        //value - the current value for current cell
        //create and style editor
        var editor = $("<input id='imporiginEditor' type='text' list='imporigindrop'/><datalist id='imporigindrop'><option value=''>Imputed Origin</option></datalist>");
        editor.css({
                "padding": "3px",
                "width": "100%",
                "placeholder": "search imputed origin...",
                "box-sizing": "border-box",
            })
            //Set value of editor to the value of the cell
            .val(value);
        //set focus on the select box when the editor is selected (timeout allows for editor to be added to DOM)
        if (cell.hasClass("tabulator-cell")) {
            setTimeout(function() {
                editor.focus();
            }, 100);
        }
        //when the value has been set, update the cell
        editor.on("change blur", function(e) {
            cell.trigger("editval", editor.val());
        });
        //return the editor element
        return editor;
    }

    var receiverEditor = function(cell, value) {
        //cell - JQuery object for current cell
        //value - the current value for current cell
        //create and style editor
        var editor = $("<input id='receiverEditor' type='text' list= 'receiverdrop'/><datalist id='receiverdrop'><option value=''>Receiver</option></datalist>");
        editor.css({
                "padding": "3px",
                "width": "100%",
                "placeholder": "search receiver...",
                "box-sizing": "border-box",
            })
            //Set value of editor to the value of the cell
            .val(value);
        //set focus on the select box when the editor is selected (timeout allows for editor to be added to DOM)
        if (cell.hasClass("tabulator-cell")) {
            setTimeout(function() {
                editor.focus();
            }, 100);
        }
        //when the value has been set, update the cell
        editor.on("change blur", function(e) {
            cell.trigger("editval", editor.val());
        });
        //return the editor element
        return editor;
    }

    //
    var senderEditor = function(cell, value) {
        //cell - JQuery object for current cell
        //value - the current value for current cell
        //create and style editor
        var editor = $("<input id='senderEditor' type='text' list='senderdrop'/><datalist id='senderdrop'><option value=''>Sender</option></datalist>");
        editor.css({
                "padding": "3px",
                "width": "100%",
                "box-sizing": "border-box",
                "placeholder": "search sender...",
            })
            //Set value of editor to the value of the cell
            .val(value);
        //set focus on the select box when the editor is selected (timeout allows for editor to be added to DOM)
        if (cell.hasClass("tabulator-cell")) {
            setTimeout(function() {
                editor.focus();
            }, 100);
        }
        //when the value has been set, update the cell
        editor.on("change blur", function(e) {
            cell.trigger("editval", editor.val());
        });
        //return the editor element
        return editor;
    }

    var dateEditor = function(cell, value) {
        //cell - JQuery object for current cell
        //value - the current value for current cell
        //create and style editor
        var editor = $("<input id='dateEditor' type='text'/>");
        editor.css({
                "padding": "3px",
                "width": "100%",
                "box-sizing": "border-box",
                "placeholder": "search date sent...",
            })
            //Set value of editor to the value of the cell
            .val(value);
        //set focus on the select box when the editor is selected (timeout allows for editor to be added to DOM)
        if (cell.hasClass("tabulator-cell")) {
            setTimeout(function() {
                editor.focus();
            }, 100);
        }
        //when the value has been set, update the cell
        editor.on("change blur", function(e) {
            cell.trigger("editval", editor.val());
        });

        $("#slider-date").on("slidechange", function(e) {
            cell.trigger("editval", editor.val());
        });


        $("#cleardate").click(function(e) {
          $("#dateEditor").val("");
          cell.trigger("editval", editor.val());
        });
        //return the editor element
        return editor;
    }

    var summaryEditor = function(cell, value) {
        //cell - JQuery object for current cell
        //value - the current value for current cell
        //create and style editor
        var editor = $("<input id='summaryEditor' type='text'/>");
        editor.css({
                "padding": "3px",
                "width": "100%",
                "box-sizing": "border-box",
                "placeholder": "search summary...",
            })
            //Set value of editor to the value of the cell
            .val(value);
        //set focus on the select box when the editor is selected (timeout allows for editor to be added to DOM)
        if (cell.hasClass("tabulator-cell")) {
            setTimeout(function() {
                editor.focus();
            }, 100);
        }
        //when the value has been set, update the cell
        editor.on("change blur", function(e) {
            cell.trigger("editval", editor.val());
        });

        $("#slider-date").on("slidechange", function(e) {
            cell.trigger("editval", editor.val());
        });


        $("#clearall").click(function(e) {
          $("#dateEditor").val("");
          cell.trigger("editval", editor.val());
        });
        //return the editor element
        return editor;
    }

    var receivedEditor = function(cell, value) {
        //cell - JQuery object for current cell
        //value - the current value for current cell
        //create and style editor
        var editor = $("<input id='receivedEditor' type='text' list= 'receiveddrop'/><datalist id='receiveddrop'><option value=''>Date Received</option></datalist>");
        editor.css({
                "padding": "3px",
                "width": "100%",
                "placeholder": "search date received...",
                "box-sizing": "border-box",
            })
            //Set value of editor to the value of the cell
            .val(value);
        //set focus on the select box when the editor is selected (timeout allows for editor to be added to DOM)
        if (cell.hasClass("tabulator-cell")) {
            setTimeout(function() {
                editor.focus();
            }, 100);
        }
        //when the value has been set, update the cell
        editor.on("change blur", function(e) {
            cell.trigger("editval", editor.val());
        });
        //return the editor element
        return editor;
    }

    var sourceEditor = function(cell, value) {
        //cell - JQuery object for current cell
        //value - the current value for current cell
        //create and style editor
        var editor = $("<input id='sourceEditor' type='text'/>");
        editor.css({
                "padding": "3px",
                "width": "100%",
                "placeholder": "search source...",
                "box-sizing": "border-box",
            })
            //Set value of editor to the value of the cell
            .val(value);
        //set focus on the select box when the editor is selected (timeout allows for editor to be added to DOM)
        if (cell.hasClass("tabulator-cell")) {
            setTimeout(function() {
                editor.focus();
            }, 100);
        }
        //when the value has been set, update the cell
        editor.on("change blur", function(e) {
            cell.trigger("editval", editor.val());
        });
        //return the editor element
        return editor;
    }

    //end dropdown filters

    //start create table
    $("#visab-table").tabulator({
        fitColumns: true, //fit columns to width of table (optional)
        pagination: "local", //enable local pagination.
        paginationSize: 20, // this option can take any positive integer value (default = 10)
        paginationElement: $("#pagination-element"),
        height: "500px",
        //selectable: true, //makes rows selectable
        sortable: true, // this option takes a boolean value (default = true)
        ajaxURL:"http://127.0.0.1:4000/assets/database17.json", //ajax URL
        columns: [
            {
                field: "id",
                title: "ID",
                width: "50px",
                headerFilter: idEditor,
                headerFilterPlaceholder: "filter ID...",
                visible: false
            },
            {
                field: "letter",
                title: "Letter",
                width: "80px",
                headerFilter: letterEditor,
                headerFilterPlaceholder: "filter letter...",
                visible: false
            },
            {
                field: "sender",
                title: "Sender",
                headerFilter: senderEditor,
                headerFilterPlaceholder: "filter sender...",
            },
            {
                field: "receiver",
                title: "Receiver",
                headerFilter: receiverEditor,
                headerFilterPlaceholder: "filter receiver...",
            },
            {
                field: "origin",
                title: "Origin",
                width: "107px",
                headerFilter: originEditor,
                headerFilterPlaceholder: "filter origin...",
                visible: false
            },
            {
                field: "impor",
                title: "Imputed Origin",
                headerFilter: imporiginEditor,
                headerFilterPlaceholder: "filter imputed origin...",
            },
            {
                field: "originsLat",
                title: "Latitude",
                visible: false
            },
            {
                field: "originsLong",
                title: "Longitude",
                visible: false
            },
            {
                field: "dateSent",
                title: "Sent",
                width: "90px",
                headerFilter: dateEditor,
                headerFilterPlaceholder: "filter date...",
            },
            {
                field: "dateReceived",
                title: "Received",
                headerFilter: receivedEditor,
                headerFilterPlaceholder: "filter date received...",
                visible: false
            },
            {
                field: "summary",
                title: "Summary",
                width: "300px",
                formatter: "textarea",
                headerFilter: summaryEditor,
                headerFilterPlaceholder: "filter summary...",
            },
            {
                field: "source",
                title: "Source",
                headerFilter: sourceEditor,
                headerFilterPlaceholder: "filter source...",
                visible: false,
            },
        ],

        rowSelectionChanged: function(data, rows) {
            //update selected row counter on selection change
            $("#select-stats span").text(data.length);
        },

        rowClick: function(e, id, data, row) {
            //e - the click event object
            //id - the id of the row
            //data - the data for the row
            //row - the DOM element of the row

            var dataid = row.attr("data-id");

            $(".dropinfo[data-id='" + dataid + "']").toggle();
        },

        rowFormatter: function(row, data) {
            //get current width of row
            var width = row.outerWidth();

            //define a table layout structure and set width of row
            var table = $("<table data-id='" + data.id + "' class='dropinfo' style='width:" + (width - 18) + "px;'><tr class='tr1'></tr><tr class='tr2'></tr></table>");

            //add row data at top
            $(".tr1", table).append("<td colspan='3'><div><strong>ID: </strong>" + data.id +
                "<strong> Letter: </strong>" + data.letter +
                "<strong> Source: </strong> " + data.source +
                "</div></td>");

                //add sent col
            $(".tr2", table).append(
              "<td><div><strong>Sent: </strong>" + data.dateSent +
                  "</div><div><strong> Imputed Origin: </strong> " + data.impor +
                  "</div><div><strong> Origin: </strong> " + data.origin +
                  "</div><div><strong> Sender: </strong>" + data.sender +
              "</div></td><td><div><strong>Received: </strong>" + data.dateReceived +
                  "</div><div><strong> Destination: </strong>" + data.destination +
                  "</div><div><strong> Receiver: </strong> " + data.receiver +
              "</div></td><td><div><strong>Summary: </strong></div><div class='summary'>" + data.summary +
              "</div></td>");


            //append newly formatted contents to the row
            row.append(table);
        },

        dataLoaded: function(data) {
            //data - all data loaded into the table

            //hold list of unique options
            var optionssend = [];
            var optionsrec = [];
            var optionsimporigin = [];

            var optionsorigin = [];

            //connect to drop
            var selectsend = $("#senderdrop");
            var selectrec = $("#receiverdrop");
            var selectimporigin = $("#imporigindrop");

            var selectorigin = $("#origindrop");

            //create list of unique options

            data.forEach(function(item) {
                var valuesend = item.sender;
                if (optionssend.indexOf(valuesend) == -1) {
                    optionssend.push(valuesend);
                }

                var valuerec = item.receiver;
                if (optionsrec.indexOf(valuerec) == -1) {
                    optionsrec.push(valuerec);
                }

                var valueimporigin = item.impor;
                if (optionsimporigin.indexOf(valueimporigin) == -1) {
                    optionsimporigin.push(valueimporigin);
                }

                //new options data

                var valueorigin = item.origin;
                if(optionsorigin.indexOf(valueorigin) == -1) {
                  optionsorigin.push(valueorigin);
                }

            });

            //load list of options into select box
            optionssend.forEach(function(option) {
                var newoption = $("<option></option>").attr("value", option).text(option);
                selectsend.append(newoption);
                //selectsend.append("<option value='" + option + "'>" + option + "</option>");
            });

            optionsrec.forEach(function(option) {
                var newoption = $("<option></option>").attr("value", option).text(option);
                selectrec.append(newoption);
                //selectrec.append("<option value='" + option + "'>" + option + "</option>");
            });

            optionsimporigin.forEach(function(option) {
                var newoption = $("<option></option>").attr("value", option).text(option);
                selectorigin.append(newoption);
                //selectorigin.append("<option value='" + option + "'>" + option + "</option>");
            });

            //new options values

            optionsorigin.forEach(function(option) {
                var newoption = $("<option></option>").attr("value", option).text(option);
                selectorigin.append(newoption);
                //selectorigin.append("<option value='" + option + "'>" + option + "</option>");
            });

        },
        dataFiltered: function(data, field, type, value) {
            //data - the subset of the total table data that has passed the filter and is now visible
            //field - the field being filtered
            //type - the type of filter being used
            //value - the value of the filter

            //start timeline code
            //Origins
            var orUnique = {};
            var distinct = [];
            for (var i in data) {
                if (typeof(orUnique[data[i].impor]) == "undefined") {
                    distinct.push(data[i].impor);
                }
                orUnique[data[i].impor] = 0;
            }

            function getTotal(data, origin) {
                var count = 0;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].impor == origin) {
                        count++;
                    }
                }
                return count;
            }

            function getItem(array, value) {
              for (var i = 0, len = array.length; i < len; i++)
              if (array[i] && array[i].impor === value)

              return array[i];
            }

            var originsData = [];
            distinct.forEach(function(neworigin) {
                var counts = getTotal(data, neworigin);
                var item = getItem(data, neworigin);
                var lat = item.originsLat;
                var lon = item.originsLong;
                originsData.push({
                    name: neworigin,
                    lat: lat,
                    lon: lon,
                    z: counts
                });
            });

            //Years
            var yearsRange = [];
            for (i = 1816; i <= 1900; i++) yearsRange.push(i);

            function getCount(data, date) {
                var count = 0;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].dateSent.slice(0, 4) == date) {
                        count++;
                    }
                }
                return count;
            }

            var yearCounts = [];
            yearsRange.forEach(function(year) {
                var counts = getCount(data, year);
                yearCounts.push({name: year, y: counts});
            });

            //Highcharts Timeline
            $(function() {
                var myChart = Highcharts.chart('time-container', {
                    chart: {
                        type: 'column',
                        borderRadius: 15,
                        spacingBottom: 50,
                    },
                    title: {
                      text: null
                    },
                    legend: {
                        enabled: false,
                    },
                    yAxis: {
                        title: {
                            text: null,
                        }
                    },
                    xAxis: {
                        type: "category"
                    },
                    series: [{
                        data: yearCounts,
                        turboThreshold: 1900,
                        color: "#00744E",
                        name: "Letters",
                    }]
                });
            });

            //Highcharts Map
            $(function() {
              var myMap = new  Highcharts.Map('map-container', {
                chart: {
                  map: 'custom/world-continents',
                  height: 500,
                },
                title: {
                  text: null
                },
                xAxis: {
                  minRange: 1
                },
                yAxis: {
                  minRange: 1
                },
                legend: {
                  enabled: false
                },
                mapNavigation: {
                  enabled: true,
                  buttonOptions: {
                    verticalAlign: 'bottom'
                  }
                },
                series: [{
                  name: 'Countries',
                  enableMouseTracking: false
                }, {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  type: 'mapbubble',
                  name: 'Total Letters',
                  color: '#78b5a1',
                  data: originsData,
                  minSize: 8,
                  maxSize: '20%',
                  tooltip: {
                    pointFormat: '{point.name}: {point.z} letters'
                  }
                }]
              });
            });
            //End Map

            //set text in info element to show the number of rows and filters currently applied
            $("#resultslive").text("Number of Results: " + data.length);

            //current filter
            var imporiginValue = $("#imporiginEditor").val();
            var receiverValue = $("#receiverEditor").val();
            var senderValue = $("#senderEditor").val();
            var summaryValue = $("#summaryEditor").val();

            var idValue = $("#idEditor").val();
            var letterValue = $("#letterEditor").val();
            var originValue = $("#originEditor").val();
            var sourceValue = $("#sourceEditor").val();

            $("#imporigin-val").text("Imputed Origin: " + imporiginValue);
            $("#sender-val").text("Sender: " + senderValue);
            $("#receiver-val").text("Receiver: " + receiverValue);
            $("#summary-val").text("Summary: " + summaryValue);

            $("#id-val").text("ID: " + idValue);
            $("#letter-val").text("Letter: " + letterValue);
            $("#origin-val").text("Origin: " + originValue);
            $("#source-val").text("Source: " + sourceValue);
        },

    });
    //end create table

    //load data
    $("#visab-table").tabulator("setData");
    //end load data

    //info code
    $(".tabulator-row").click(function() {
        $(".dropinfo").css("display", "block");
    });
    //end code

    //show columns

    $("#show-id").change(function() {
        if (this.checked) {
            $("#visab-table").tabulator("showCol", "id");
            $("#id-val").show();
        } else {
            $("#visab-table").tabulator("hideCol", "id");
            $("#id-val").hide();
        }
    });

    $("#show-letter").change(function() {
        if (this.checked) {
            $("#visab-table").tabulator("showCol", "letter");
            $("#letter-val").show();
        } else {
            $("#visab-table").tabulator("hideCol", "letter");
            $("#letter-val").hide();
        }
    });

    $("#show-sent").change(function() {
        if (this.checked) {
            $("#visab-table").tabulator("showCol", "dateSent")
        } else {
            $("#visab-table").tabulator("hideCol", "dateSent")
        }
    });

    $("#show-red").change(function() {
        if (this.checked) {
            $("#visab-table").tabulator("showCol", "dateReceived")
        } else {
            $("#visab-table").tabulator("hideCol", "dateReceived")
        }
    });

    $("#show-sum").change(function() {
        if (this.checked) {
            $("#visab-table").tabulator("showCol", "summary");
            $("#summary-val").show();
        } else {
            $("#visab-table").tabulator("hideCol", "summary");
            $("#summary-val").hide();
        }
    });

    $("#show-rer").change(function() {
        if (this.checked) {
            $("#visab-table").tabulator("showCol", "receiver");
            $("#receiver-val").show();
        } else {
            $("#visab-table").tabulator("hideCol", "receiver");
            $("#receiver-val").hide();
        }
    });

    $("#show-sender").change(function() {
        if (this.checked) {
            $("#visab-table").tabulator("showCol", "sender");
            $("#sender-val").show();
        } else {
            $("#visab-table").tabulator("hideCol", "sender");
            $("#sender-val").hide();
        }
    });

    $("#show-origin").change(function() {
        if (this.checked) {
            $("#visab-table").tabulator("showCol", "origin");
            $("#origin-val").show();
        } else {
            $("#visab-table").tabulator("hideCol", "origin");
            $("#origin-val").hide();
        }
    });

    $("#show-imp").change(function() {
        if (this.checked) {
            $("#visab-table").tabulator("showCol", "impor");
            $("#imporigin-val").show();
        } else {
            $("#visab-table").tabulator("hideCol", "impor");
            $("#imporigin-val").hide();
        }
    });

    $("#show-src").change(function() {
        if (this.checked) {
            $("#visab-table").tabulator("showCol", "source");
            $("source-val").show();
        } else {
            $("#visab-table").tabulator("hideCol", "source");
            $("#source-val").hide();
        }
    });

    //end show columns

    //download code
    //download table data as a CSV formatted file with a file name of data.csv
    $("#download-csv").click(function() {
        $("#visab-table").tabulator("download", "csv", "vadata.csv");
    });

    //trigger download of data.json file
    $("#download-json").click(function() {
        $("#visab-table").tabulator("download", "json", "vadata.json");
    });
    //end download code

    $("[href='#data-tab']").click(function(){
        $("#visab-table").tabulator("redraw");
    });

    function customFilter(data){
      var yearonly = data.dateSent.slice(0,4);
      var yearstart = $("#slider-range").slider("values", 0);
      var yearend = $("#slider-range").slider("values", 1);

      return yearonly >= yearstart && yearonly <= yearend;
    }

    //Trigger setFilter function with correct parameters
    function updateFilter(){
       $("#visab-table").tabulator("setFilter", customFilter );
    }
    //Update filters on value change
    $("#slider-range").on("slidechange", updateFilter);
    $("#sliderOne").on("change paste keyup", updateFilter);
    $("#sliderTwo").on("change paste keyup", updateFilter);

    $("#clearall").click(function(){

      $("#slider-range").slider("option","values",[1816,1900]);
      $("#sliderOne").val(1816);
      $("#sliderTwo").val(1900);

      $("#imporiginEditor").val('').change();
      $("#receiverEditor").val('').change();
      $("#senderEditor").val('').change();
      $("#dateEditor").val('').change();
      $("#summaryEditor").val('').change();

      $("#idEditor").val('').change();
      $("#letterEditor").val('').change();
      $("#originEditor").val('').change();
      $("#sourceEditor").val('').change();


      $("#visab-table").tabulator("clearFilter");

    });


    //end jquery frame
});
