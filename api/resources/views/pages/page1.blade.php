@extends('layout.pages')
@section('content')

  <div class = "container">

    <div class = "row">
      <div class="form-group col-md-4">
          <img src="../img/logos.png" class="img-fluid" alt="Responsive image">
      </div>

      <div class="form-group col-md-6">
        <h3 class="text-center">ePRF <br>Electornic Project Request Form</h3>
      </div>
    </div>
    
    <div class = "row float-right">
      <p>
        <i>
            <strong>
              <p>Date:&nbsp; </p>
                <p id="datetime" style="text-decoration: underline;"></p>
                <script>
                    var dt = new Date();
                    document.getElementById("datetime").innerHTML =  (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));
                </script>
            </strong>
      </i>
        </p>
    </div>
    
    
    <div class = "row">
      <div class=" form-group col-md-12 form-check form-check-inline">
        <input class="form-check-input" type="radio" name="project_Status" id="inlineRadio1" value="option1">
        <label class="form-check-label" for="inlineRadio1">New Project</label>
      </div>
      <div class="form-group col-md-12 form-check form-check-inline">
        <input class="form-check-input" type="radio" name="project_Status" id="inlineRadio2" value="option2">
        <label class="form-check-label" for="inlineRadio2">Revision to an approved project</label>
      </div>
    </div>

    <div class= "row form-group">
      <label class="form-check-label col-md-7" for="inlineRadio3">Is the decision making/governing body of your agency committed to this project?</label>
      <div class="form-check col-md-2">
          <label class=""><input type="radio" name="decision">Yes</label>
          <label class=""><input type="radio" name="decision"> No</label>
      </div>
    </div>
    
    <div class = "row">
      <div class = "col-md-6">
        <label>MPO ID</label>
        <input class="col-md-8">
      </div>
      <div class = "col-md-6">
        <label>CSJ or CN</label>
        <input  class="col-md-8">
      </div>
    </div>

    <div>
      <div class = "row form-group">
        <label class="col-md-2">Project Name</label>
        <input class="col-md-10">
      </div>
      <div class = "row form-group">
        <label class="col-md-2">Project Description</label>
        <input class="col-md-10">
      </div>
      <div class = "row form-group">
        <label class="col-md-2">Limit From</label>
        <input class="col-md-10">
      </div>
      <div class = "row form-group">
        <label class="col-md-2">Limit To</label>
        <input class="col-md-10">
      </div>
    </div>

    <div>
      <h5>Definition of Regionally Significant Roadway: 23 CFR § 450.104</h5>
      <p>
        Regionally significant project means a transportation project (other than projects that may be grouped in the TIP and/or STIP or <a href="https://www.law.cornell.edu/cfr/text/40/93.126"  target="_blank">exempt</a> projects as defined in EPA's
  transportation conformity regulation (40 CFR part 93)) that is on a facility which serves regional transportation needs (such as access to and from the area outside the region;
  major activity centers in the region; major planned developments such as new retail malls, sports complexes, or employment centers; or transportation terminals) and would
  normally be included in the modeling of the metropolitan area's transportation network. At a minimum, this includes all principal arterial highways and all fixed guideway
  transit facilities that offer a significant alternative to regional highway travel.
      </p>

      <label>Describe the relationship of this project to the definition of Regionally Significant Roadway or exempt projects:</label>
      <textarea class="form-control" id="relationship_dec"></textarea>

      <label>Need and Purpose:</label>
      <textarea class="form-control" id="need_purpose"></textarea>


      <label> Agency Comments:</label>
      <textarea class="form-control" id="agency_comments"></textarea>
    </div>
    <hr>
    <div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
        <label class="form-check-label" for="defaultCheck1">
          Requesting Highway/Roadway funds for this project/program (FHWA,State and/or Local Funds)
        </label>
      </div>
      <div class="form-check form-group">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
        <label class="form-check-label" for="defaultCheck1">
          Requesting Transit funds for his project/program (FTA, State and/or Local Funds)
        </label>
      </div>
    </div>

    <div class = "row">
      <div class="form-check-label col-md-6">
          
        <div class = "row form-check">
          <label class ="col-md-5"><b>Federal Fiscal Year(FY)</b></label>
          <input class ="col-md-6"type="number" id="quantity" name="quantity" min="2010" max="2200" row = "1">
        </div>
        
        <div class="input-group row form-check">
          <label class ="col-md-5"for="net_year">Network Year</label>
          <select  class="custom-select form-group col-md-6" id="net_year">
            <option selected>...</option>
            <option value="1">2020</option>
            <option value="2">2030</option>
            <option value="3">2040</option>
            <option value="4">2045</option>
            <option value="5">2045</option>
          </select>
        </div>

        <div class = "form-check m-3">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="on_state_sys">
            <label class="custom-control-label" for="on_state_sys">ON-State system road</label>
          </div>
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="off_state_sys">
            <label class="custom-control-label" for="off_state_sys">OFF-State system road</label>
          </div>
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="capacity_project">
            <label class="custom-control-label" for="capacity_project">Capacity Project (Additional through lanes)</label>
          </div>
        </div>

        <div class = "row form-check">
          <label class ="col-md-5">Number of Existing Lanes</label>
          <input class ="col-md-6"type="number" row = "1">
        </div>
        <div class = "row form-check">
          <label class ="col-md-5">Number of Projected Lanes</label>
          <input class ="col-md-6"type="number" id="quantity" row = "1">
        </div>
        <div class = "row form-check">
        <label class ="col-md-5">Number of miles</label>
        <input class ="col-md-6"type="number" row = "1">
        </div>
      </div>

      <div class="form-check-label col-md-6">

        <div class ="row form-group">
          <label class="col-md-5">Highway/Roadway Name</label>
          <textarea class="form-control col-md-7" id="highway_roadway" rows ="1"></textarea>
        </div>
        <div class="input-group mb-3 row">
          <label  class="form-group col-md-4" for="inputGroupSelect01">Type of project  </label>
          <select class="custom-select form-group col-md-8" id="inputGroupSelect01">
            <option selected>...</option>
            <option value="1">Additional Lanes</option>
            <option value="2">Aesthetics</option>
            <option value="3">Bikeway</option>
            <option value="4">Bus Purchase</option>
            <option value="5">Bus Service</option>
            <option value="6">Enhancements</option>
            <option value="7">inter-modal</option>
            <option value="8">ITS</option>
            <option value="9">Multi-modal</option>
            <option value="10">New Road</option>
            <option value="11">pedestrian</option>
            <option value="12">Plan</option>
            <option value="13">Port of Entry</option>
            <option value="14">Program</option>
            <option value="15">Rail</option>
            <option value="16">Rehabilitation</option>
            <option value="17">Signals</option>
            <option value="18">Study</option>
            <option value="19">Transit</option>
            <option value="20">Transit Terminal</option>
            <option value="21">Other, Specify</option>
          </select>
        </div> 
      <div class="input-group mb-3 row">
        <label  class="form-group col-md-9"for="inputGroupSelect02">Federal Functional Classification <a href="https://www.txdot.gov/apps/statewide_mapping/StatewidePlanningMap.html"  target="_blank">Texas</a>  <a href="http://www.elpasompo.org/civicax/filebank/blobdload.aspx?BlobID=23410"  target="_blank">New Mexico</a></label>
        <select class="custom-select form-group col-md-3" id="inputGroupSelect02">
          <option selected>...</option>
          <option value="1">Interstate</option>
          <option value="2">Freeway/Expressway</option>
          <option value="3">Principal Arterial</option>
          <option value="4">Minor Arterial</option>
          <option value="5">Major Collector</option>
          <option value="6">Minor Collector</option>
          <option value="7">Local</option>
          <option value="8">Other, specift</option>
          <option value="9">Not Federally Functional Classified</option>
        </select>
      </div>


      <div class="input-group mb-3 row">
        <label class="form-group col-md-4"  for="inputGroupSelect03">DOT District</label>
        <select  class="custom-select form-group col-md-8" id="inputGroupSelect03">
          <option selected>...</option>
          <option value="1">TX Dist.24</option>
          <option value="2">NM Dist. 1</option>
          <option value="3">NM Dist.2</option>
        </select>
      </div>

      <div class="input-group mb-3 row">
        <label class="form-group col-md-4" for="inputGroupSelect04">County</label>
        <select class="custom-select form-group col-md-8" id="inputGroupSelect04">
          <option selected>...</option>
          <option value="1">El Paso</option>
          <option value="2">Doña Ana</option>
          <option value="3">Otero</option>
        </select>
      </div>
    
      <div class="input-group mb-3 row">
        <label class="form-group col-md-4" for="inputGroupSelect05">Incorporated City</label>
        <select class="custom-select form-groupcol-md-8" id="inputGroupSelect05">
          <option selected>...</option>
          <option value="1">Anthony TX</option>
          <option value="2">Anthony NM</option>
          <option value="3">Clint</option>
          <option value="1">El Paso</option>
          <option value="2">Horizon City</option>
          <option value="3">Socorro</option>
          <option value="1">San Elizario</option>
          <option value="2">Sunland Park NM</option>
          <option value="3">Vinton, TX</option>
          <option value="3">N/A</option>
          <option value="3">Other</option>
        </select>
      </div>
      
      <div class = "row mb-3">
        <label class="col-md-4">Sponsor Entity</label>
        <textarea class="col-md-8" id="num_of_mi" rows="1"></textarea>
      </div>
      
    </div>

  </div>

    <a href="http://www.elpasompo.org/civicax/filebank/blobdload.aspx?BlobID=23410"  target="_blank">Click here for Project Selection Process diagram and presentation (PDF)</a>
    </a>
  </div>
  <hr>
@endsection
