(function($){  
 configure_CMAQ_Analysis_Form();
})(jQuery);

function configure_CMAQ_Analysis_Form (){
    $("#CMAQ_Analysis_Form").dxForm({
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
                        text: "VOC (Kgs/day)"
                    }
                    
                  }, 
                  {
                    dataField: "CO",
                    label: {
                        text: "CO (Kgs/day)"
                    }
                  }, 
                  {
                    dataField: "NOX",
                      label: {
                        text: "NOX (Kgs/day)"
                    }
                    
                  },
                  {
                    dataField: "PM10",
                      label: {
                        text: "PM10 (Kgs/day)"
                    }
                  },
                  {
                    dataField: "Prepared_By",
                      label: {
                        text: "Prepared By"
                    }
                  }
                ]
            
            }]
        }]
    });
  }


    var CMAQAnalysis = {
        "ID": 1,
        "VOC": "",
        "CO":"",
        "NOX": "",
        "PM10":"",
        "Prepared_By": ""
        
    };

