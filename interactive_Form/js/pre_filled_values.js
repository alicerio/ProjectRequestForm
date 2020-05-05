project_readiness_elements_values = [{"Element":"Agreement (LPFA)","EstStartDate":"2020-05-04T06:00:00.000Z","EstEndDate":"2020-05-05T06:00:00.000Z","Progress":"30%","RespAgency":"TxDOT","Comments":"Coms"},{"Element":"Construction Performance End Date","EstStartDate":"2020-05-05T06:00:00.000Z","EstEndDate":"2020-05-07T06:00:00.000Z"},{"Element":"District Review","EstStartDate":"2020-05-04T06:00:00.000Z","EstEndDate":"2020-05-05T06:00:00.000Z","Progress":"90%","RespAgency":"Local","Comments":"Comments"},{"Element":"Env. Doc. Type","EstStartDate":"2020-05-04T06:00:00.000Z","EstEndDate":"2020-05-05T06:00:00.000Z","Progress":"90%","RespAgency":"Local","Comments":"Cooms"},{"Element":"Environmental Doc","EstStartDate":"2020-05-04T06:00:00.000Z","EstEndDate":"2020-05-21T06:00:00.000Z","Progress":"0%","RespAgency":"Other","Comments":"Comments"},{"Element":"Let Date","EstStartDate":"2020-05-04T06:00:00.000Z","EstEndDate":"2020-05-12T06:00:00.000Z"},{"Element":"PE Performance End Date","EstStartDate":"2020-05-18T06:00:00.000Z","EstEndDate":"2020-05-29T06:00:00.000Z"},{"Element":"Procurement Process","EstStartDate":"2020-05-19T06:00:00.000Z","EstEndDate":"2020-05-21T06:00:00.000Z","Progress":"60%","RespAgency":"TxDOT","Comments":"Commss"},{"Element":"PS&E","EstStartDate":"2020-05-28T06:00:00.000Z","EstEndDate":"2020-05-30T06:00:00.000Z","Progress":"60%","RespAgency":"Other","Comments":"1 time only"},{"Element":"Public Involvement","EstStartDate":"2020-05-04T06:00:00.000Z","EstEndDate":"2020-05-12T06:00:00.000Z","Progress":"100%","RespAgency":"Other","Comments":"Not considered"},{"Element":"ROW Acquired","EstStartDate":"2020-05-04T06:00:00.000Z","EstEndDate":"2020-05-05T06:00:00.000Z","Progress":"N/A","RespAgency":"Other","Comments":"Yes"},{"Element":"ROW Map(s)","EstStartDate":"2020-05-03T06:00:00.000Z","EstEndDate":"2020-05-20T06:00:00.000Z","Progress":"90%","RespAgency":"Local","Comments":"Not necessary"},{"Element":"Schematic","EstStartDate":"2020-05-25T06:00:00.000Z","EstEndDate":"2020-05-21T06:00:00.000Z","Progress":"0%","RespAgency":"Local","Comments":"It is not a probl;em"},{"Element":"Utilities","EstStartDate":"2020-05-18T06:00:00.000Z","EstEndDate":"2020-05-12T06:00:00.000Z","Progress":"60%","RespAgency":"TxDOT","Comments":"yes"}]
transit_only_values = [{"Element":"FTA Transfer process (if applicable)","EstStartDate":"2020-05-04T06:00:00.000Z","EstEndDate":"2020-05-13T06:00:00.000Z","Progress":"30%","ResponsibleAgency":"Local","Comments":"Trans"},{"Element":"Active in FTA System","EstStartDate":"2020-05-25T06:00:00.000Z","EstEndDate":"2020-05-31T06:00:00.000Z","Progress":"60%","ResponsibleAgency":"Local","Comments":"Trans"},{"Element":"Contract Executed for Bus Purchase","EstStartDate":"2020-05-03T06:00:00.000Z","EstEndDate":"2020-05-05T06:00:00.000Z","Progress":"100%","ResponsibleAgency":"TxDOT","Comments":"Trandfer"},{"Element":"Bus Delivery Date","EstStartDate":"2020-05-19T06:00:00.000Z","EstEndDate":"2020-05-31T06:00:00.000Z","Progress":"30%","ResponsibleAgency":"TxDOT","Comments":"Transfger"},{"Element":"Other","EstStartDate":"2020-05-02T06:00:00.000Z","EstEndDate":"2020-05-07T06:00:00.000Z","Progress":"0%","ResponsibleAgency":"TxDOT","Comments":"This is proper"}]
project_readiness_elements_footer_values = [{"Have the above dates been reviewed by TXDOT or NMDOT":"","Yes":"","No":"","N/A":"","DateReviewed":"05/20/2020","ReviewedBy":"Victor","Agency":"MPO"}]
project_phases_values  = [{"PE":"","E:Env":"","E:Eng":"","R":"","R:Acq":"","R:Utl":""}]
type_project_values = [{"fundingCategory":"Non-Construction Project","amount":1230,"ID":1},{"fundingCategory":"Construction","amount":100,"ID":2},{"fundingCategory":"Construction Engineering (CE)","amount":200,"ID":3},{"fundingCategory":"Contingencies","amount":300,"ID":4},{"fundingCategory":"Potential Change Order","amount":400,"ID":5},{"fundingCategory":"Preliminary Engineering","amount":520,"ID":6},{"fundingCategory":"Indirects","amount":650,"ID":7},{"fundingCategory":"Right-Of-Way","amount":120,"ID":8},{"fundingCategory":"FTA Transfer","amount":300,"ID":9}]
contact_info_values = [{"Role":"Local PM","name":"Victor","phone":656,"email":"victor@mpo.com","agency":"MPO","title":"CEO"},{"Role":"State PM","name":"Enrique","phone":915,"email":"Enrique@mpo.com","agency":"MPA","title":"CTO"},{"Role":"Sponsor","name":"No Sponsor","phone":915,"email":"no@mpo.com","agency":"MPO","title":"NO"}]
project_funding_values = [{"fundingCategories":"","fedShare":0,"stateShare":0,"locShare":0,"locCont":0,"totalShare":0},{"__KEY__":"ec4ad8f1-457b-8918-29ab-438190209d0c","fundingCategories":"Category 1","fedShare":12,"stateShare":20,"locShare":50,"locCont":60,"totalShare":780}]
cmaq_values = {"VOC":"0","CO":"1","NOX":"2","PM10":"3","Prepared_By":"4"}
taf_values = {"ID":1,"VOC":"0","CO":"1900","NOX":"2","PM10":"2020","Prepared_By":"4","Capital":true,"Operating":"","Planning":"","Administration":""}
taf_r_values = {"ID":1,"VOC":"0","CO":"1900","NOX":"2","PM10":"2020","Prepared_By":"4","Capital":true,"Operating":"","Planning":"","Administration":""}
project_cost_footer_values = {"is_sponsor_paying_PE": "Yes", "is_sponsor_paying_row": "Yes", "is_decision_commited": "No", "percentages": "≥1% <10%"}
pre_project_funding_values = {"requesting-mpo-funds": true, "YOE-Cost": "12000"}
project_phases_radios_values = {"inlineRadioFTA": false, "inlineRadioC": true, "inlineRadioNon-C": false, "undefined": "false"}


//Function that loads values with the other method
function loadAllValues(){
    loadValues("#project-cost-footer",project_cost_footer_values);
    loadValues("#pre-project-funding",pre_project_funding_values);
    loadValues("#project_phases_radios",project_phases_radios_values)
}

/**
 * Function that receives an id and data and populates that div with the data given
 * @param {*} divId 
 * @param {*} data 
 */
function loadValues(divId,data) {
    if ((type == "checkbox" || type == "radio")) { 
        $(this).prop("checked", data[$(this).attr("id")]);;
    }
    $(divId + " :input").map(function() {
        $(this).val(data[$(this).attr("id")]);
    })
}