$(function() {
    $("#transit_Analysis_Form").dxForm({
        formData: CMAQAnalysis,
        items: [ {
            itemType: "group",
            cssClass: "second-group",
            colCount: 1,
            items: [{
                itemType: "group",
                items: [
                  {
                    dataField: "VOC",
                      label: {
                        text: "Section 5309 ID"
                    }
                    
                  }, 
                  {
                    dataField: "CO",
                    label: {
                        text: "Apportionment Year"
                    }
                  }, 
                  {
                    dataField: "NOX",
                      label: {
                        text: "TDC Award Amount"
                    }
                    
                  },
                  {
                    dataField: "PM10",
                      label: {
                        text: "TDC Award Date"
                    }
                  },
                  {
                    dataField: "Prepared_By",
                      label: {
                        text: "TDC Amount Requested"
                    }
                  }
                ]
            
            }]
        }]
    });
});

    var CMAQAnalysis = {
        "ID": 1,
        "VOC": "",
        "CO":"",
        "NOX": "",
        "PM10":"",
        "Prepared_By": ""
        
    };

