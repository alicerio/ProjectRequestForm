$(function configure_transit_Analysis_Form() {
    $("#transit_Analysis_Form").dxForm({
        formData: /*taf_values*/CMAQAnalysis,
        labelLocation: "left",
        items: [ 
            {
            itemType: "group",
            cssClass: "first-group",
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
                        text: "Apportionment Year",
                        labelLocation: "right",
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
        },
    ]
    });
});
$(function configure_transit_Analysis_Form_Radio() {
    $("#transit_Analysis_Form_Radio").dxForm({
        formData: /*taf_r_values*/CMAQAnalysis,
        labelLocation: "right",
        items: [ 
            {
            itemType: "group",
            formData: CMAQAnalysis,
            labelLocation: "right",
            readOnly: false,
            colCount: 1,
            text:"Brian",
            items:[
                {
                    dataField:"Capital",
                    editorType: "dxCheckBox",
                  },
                  {
                    dataField:"Operating",
                    editorType: "dxCheckBox",
                  },
                  {
                    dataField:"Planning",
                    editorType: "dxCheckBox",
                  },
                  {
                    dataField:"Administration",
                    editorType: "dxCheckBox",
                  }
            ]
        }]
    });
});
    var CMAQAnalysis = {
        "ID": 1,
        "VOC": "",
        "CO":"",
        "NOX": "",
        "PM10":"",
        "Prepared_By": "",

        "Capital":"",
        "Operating":"",
        "Planning":"",
        "Administration":""
    };

