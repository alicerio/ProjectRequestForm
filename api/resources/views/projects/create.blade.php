@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    Electornic Project Request Form (ePRF)
                </div>
                <div class="card-body">
                    <form action="{{ route('projects.store') }}" method="POST">
                        @csrf

                        <label>
                            MPO ID
                        </label>
                        <input type="text" class="form-control" name="mpo_id">
                        
                        <label>
                            CSJ or CN
                        </label>
                        <input type="text" class="form-control" name="csj_cn">

                        <label>
                            Name
                        </label>
                        <input type="text" class="form-control" name="name">

                        <label>
                            Description
                        </label>
                        <input type="text" class="form-control" name="description">

                        <label>
                            Limit From
                        </label>
                        <input type="text" class="form-control" name="limit_from">

                        <label>
                            Limit To
                        </label>
                        <input type="text" class="form-control" name="limit_to">

                        <h4 class="mt-3">Definition of Regionally Significant Roadway: 23 CFR § 450.104</h4>
                        <p>Regionally significant project means a transportation project (other than projects that may be grouped in the TIP and/or STIP or exempt projects as defined in EPA's transportation conformity regulation (40 CFR part 93)) that is on a facility which serves regional transportation needs (such as access to and from the area outside the region; major activity centers in the region; major planned developments such as new retail malls, sports complexes, or employment centers; or transportation terminals) and would normally be included in the modeling of the metropolitan area's transportation network. At a minimum, this includes all principal arterial highways and all fixed guideway transit facilities that offer a significant alternative to regional highway travel. </p>

                        <label>
                            Describe the relationship of this project to the definition of Regionally Significant Roadway or exempt projects:
                        </label>
                        <textarea name="relationship_description" class="form-control"></textarea>

                        <label>
                            Need and Purpose:
                        </label>
                        <textarea name="need_purpose" class="form-control"></textarea>

                        <label>
                            Agency Comments:
                        </label>
                        <textarea name="agency_comments" class="form-control"></textarea>

                        <hr>

                        <label>
                            <input type="checkbox" name="hwrw_funds_request" autocomplete="off">
                            Requesting Highway/Roadway funds for this project/program (FHWA,State and/or Local Funds) 
                        </label>

                        <label>
                            <input type="checkbox" name="transit_funds_request" autocomplete="off">
                            Requesting Transit funds for his project/program (FTA, State and/or Local Funds) 
                        </label>

                        <br>

                        <div class="form-row">
                            <div class="col">
                                <label class="font-weight-bold">
                                    Federal Fiscal Year(FY):
                                </label>
                                <input type="text" name="fiscal_year" class="form-control">
                            </div>
                            <div class="col">
                                <label>
                                    Highway/Roadway Name:
                                </label>
                                <input type="text" name="hwrw_name" class="form-control">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col">
                                <label>
                                    Network Year
                                </label>
                                <select name="network_year" class="form-control">
                                    <option value="2020">2020</option>
                                    <option value="2030">2030</option>
                                    <option value="2040">2040</option>
                                    <option value="2045">2045</option>
                                </select>
                            </div>
                            <div class="col">
                                <label>
                                    Type of Project
                                </label>
                                <select name="type" class="form-control">
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
                        </div>

                        <div class="form-row">
                            <div class="col">
                                <label>
                                    <input type="checkbox" name="on_state" autocomplete="off">
                                    ON-State System Road
                                </label><br>
                                <label>
                                    <input type="checkbox" name="off_state" autocomplete="off">
                                    OFF-State System Road
                                </label><br>
                                <label>
                                    <input type="checkbox" name="capacity_project" autocomplete="off">
                                    Capacity Project (Additional through lanes)
                                </label>
                            </div>
                            <div class="col">
                                <label>
                                    Fedearl Functional Classificaiton (<a href="https://www.txdot.gov/apps/statewide_mapping/StatewidePlanningMap.html" target="_blank">Texas</a>, <a href="http://www.elpasompo.org/civicax/filebank/blobdload.aspx?BlobID=23410" target="_blank">New Mexico</a>):
                                </label>
                                <select name="classification" class="form-control">
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
                        </div>

                        <div class="form-row">
                            <div class="col">
                                <label>
                                    Number of Existing Lanes
                                </label>
                                <input type="number" name="existing_lanes" class="form-control">
                            </div>
                            <div class="col">
                                <label>
                                    DOT District:
                                </label>
                                <select name="district" class="form-control">
                                    <option value="1">TX Dist.24</option>
                                    <option value="2">NM Dist. 1</option>
                                    <option value="3">NM Dist.2</option>
                                  </select>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col">
                                <label>
                                    Number of Projected Lanes:
                                </label>
                                <input type="number" name="projected_lanes" class="form-control">
                            </div>
                            <div class="col">
                                <label>
                                    County:
                                </label>
                                <select name="county" class="form-control">
                                    <option>El Paso</option>
                                    <option>Doña Ana</option>
                                    <option>Otero</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col">
                                <label>
                                    Number of Miles:
                                </label>
                                <input type="number" name="miles" class="form-control">
                            </div>
                            <div class="col">
                                <label>
                                    Incorporated City:
                                </label>
                                <select name="incorporated_city" class="form-control">
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
                        </div>

                        <div class="form-row">
                            <div class="col">
                            </div>
                            <div class="col">
                                <label>
                                    Sponsor Entity:
                                </label>
                                <input type="text" name="sponsor_entity" class="form-control">
                            </div>
                        </div>

                        <a href="http://www.elpasompo.org/civicax/filebank/blobdload.aspx?BlobID=23410"> Click here for Project Selection Process diagram and presentation (PDF) </a>

                        <hr>

                        <h3>Project Selection Process</h3>

                        <div class="form-row mb-1">
                            <div class="col-sm-1">
                                <select name="psp_1" class="form-control">
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </div>
                            <div class="col">
                                Will this project achieve a significant reduction in traffic fatalities or serious injuries? If yes, please provide link or attachment with supporting data 
                            </div>
                        </div>

                        <div class="form-row mb-1">
                            <div class="col-sm-1">
                                <select name="psp_2" class="form-control">
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </div>
                            <div class="col">
                                Is this project from an updated comprehensive plan, thoroughfare plan, feasibility or corridor study? If yes, please provide link or attachment: Excerpt from corridor plan attached (too large to attach whole document) 
                            </div>
                        </div>

                        <div class="form-row mb-1">
                            <div class="col-sm-1">
                                <select name="psp_3" class="form-control">
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </div>
                            <div class="col">
                                Is this project on the National Highway System NHS?
                            </div>
                        </div>

                        <div class="form-row mb-1">
                            <div class="col-sm-1">
                                <select name="psp_4" class="form-control">
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </div>
                            <div class="col">
                                Will this project achieve a significant reduction in traffic fatalities or serious injuries? If yes, please provide link or attachment with supporting data
                            </div>
                        </div>

                        <div class="form-row mb-1">
                            <div class="col-sm-1">
                                <select name="psp_5" class="form-control">
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </div>
                            <div class="col">
                                Is this project part of TPB resolution for the Active Transportation System?
                            </div>
                        </div>

                        <div class="form-row mb-1">
                            <div class="col-sm-1">
                                <select name="psp_6" class="form-control">
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </div>
                            <div class="col">
                                Is this project part of TPB resolution for a Comprehensive Mobility Plan (CMP)?asdads
                            </div>
                        </div>
                        <br>
                        {{-- Goals and Strategies --}}

                        <div class="form-row mb-1 justify-content-center">
                            <div class="col">
                                <h3><a href="http://www.elpasompo.org/civicax/filebank/blobdload.aspx?BlobID=23375" target="_blank">National Goals</a></h3>
                                <label>
                                    <input type="checkbox" name="goal_1" onclick="toggleTA(this.name);" autocomplete="off">
                                    Safety
                                </label><br>
                                <textarea name="description_goal_1" class="form-control" style="width: 22rem; display: none;" placeholder="How does this project meet this goal?"></textarea>
                                <label>
                                    <input type="checkbox" name="goal_2" onclick="toggleTA(this.name);" autocomplete="off">
                                    Infrastructure Condition
                                </label><br>
                                <textarea name="description_goal_2" class="form-control" style="width: 22rem; display: none;" placeholder="How does this project meet this goal?"></textarea>
                                <label>
                                    <input type="checkbox" name="goal_3" onclick="toggleTA(this.name);" autocomplete="off">
                                    Congestion Reduction
                                </label><br>
                                <textarea name="description_goal_3" class="form-control" style="width: 22rem; display: none;" placeholder="How does this project meet this goal?"></textarea>
                                <label>
                                    <input type="checkbox" name="goal_4" onclick="toggleTA(this.name);" autocomplete="off">
                                    System Reliability
                                </label><br>
                                <textarea name="description_goal_4" class="form-control" style="width: 22rem; display: none;" placeholder="How does this project meet this goal?"></textarea>
                                <label>
                                    <input type="checkbox" name="goal_5" onclick="toggleTA(this.name);" autocomplete="off">
                                    Freight Movement and Economic Vitality
                                </label><br>
                                <textarea name="description_goal_5" class="form-control" style="width: 22rem; display: none;" placeholder="How does this project meet this goal?"></textarea>
                                <label>
                                    <input type="checkbox" name="goal_6" onclick="toggleTA(this.name);" autocomplete="off">
                                    Environmental Sustainability
                                </label><br>
                                <textarea name="description_goal_6" class="form-control" style="width: 22rem; display: none;" placeholder="How does this project meet this goal?"></textarea>

                                <div class="card" style="width: 22rem;">
                                    <div class="card-body">

                                        <h5 class="card-title text-center">CMAQ Analysis</h5>
                                        <h6 class="card-subtitle mb-2 text-muted text-center">*Air Quality Analysis MUST accompany request for CMAQ Funds.</h6>

                                        <label>VOC (Kgs/day)</label>
                                        <input type="text" class="form-control">
                                        <label>CO (Kgs/day)</label>
                                        <input type="text" class="form-control">
                                        <label>NOX (Kgs/day)</label>
                                        <input type="text" class="form-control">
                                        <label>PM10 (Kgs/day)</label>
                                        <input type="text" class="form-control">
                                        <label>Prepared By</label>
                                        <input type="text" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <h3><a href="http://www.elpasompo.org/civicax/filebank/blobdload.aspx?BlobID=23375" target="_blank">Congestion Management Process Strategies</a></h3>
                                <label>
                                    <input type="checkbox" name="strategy_1" onclick="toggleTA(this.name);" autocomplete="off">
                                    Travel Demand Management Strategies
                                </label><br>
                                <textarea name="description_strategy_1" class="form-control" style="width: 22rem; display: none;" placeholder="How does this project meet this strategy?"></textarea>
                                <label>
                                    <input type="checkbox" name="strategy_2" onclick="toggleTA(this.name);" autocomplete="off">
                                    Traffic Operations Strategies
                                </label><br>
                                <textarea name="description_strategy_2" class="form-control" style="width: 22rem; display: none;" placeholder="How does this project meet this strategy?"></textarea>
                                <label>
                                    <input type="checkbox" name="strategy_3" onclick="toggleTA(this.name);" autocomplete="off">
                                    Public Transportation Strategies
                                </label><br>
                                <textarea name="description_strategy_3" class="form-control" style="width: 22rem; display: none;" placeholder="How does this project meet this strategy?"></textarea>
                                <label>
                                    <input type="checkbox" name="strategy_4" onclick="toggleTA(this.name);" autocomplete="off">
                                    System Reliabilit
                                </label><br>
                                <textarea name="description_strategy_4" class="form-control" style="width: 22rem; display: none;" placeholder="How does this project meet this strategy?"></textarea>
                                <label>
                                    <input type="checkbox" name="strategy_5" onclick="toggleTA(this.name);" autocomplete="off">
                                    Road Capacity Strategies
                                </label><br>
                                <textarea name="description_strategy_5" class="form-control" style="width: 22rem; display: none;" placeholder="How does this project meet this strategy?"></textarea>
                                <label>
                                    <input type="checkbox" name="strategy_6" onclick="toggleTA(this.name);" autocomplete="off">
                                    Non-CMP Strategies
                                </label><br>
                                <textarea name="description_strategy_6" class="form-control" style="width: 22rem; display: none;" placeholder="How does this project meet this strategy?"></textarea>

                                <div class="card" style="width: 22rem;">
                                    <div class="card-body">

                                        <h5 class="card-title text-center">**Transit Only</h5>

                                        <label>Section 5309 ID</label>
                                        <input type="text" class="form-control">
                                        <label>Apportionment Year</label>
                                        <input type="text" class="form-control">
                                        <label>TDC Award Amount</label>
                                        <input type="text" class="form-control">
                                        <label>TDC Award Date</label>
                                        <input type="text" class="form-control">
                                        <label>TDC Amount Requested</label>
                                        <input type="text" class="form-control"><br>

                                        <h4>Project Type:</h4>

                                        <label>
                                            <input type="checkbox" name="type_capital" autocomplete="off">
                                            Capital
                                        </label><br>
                                        <label>
                                            <input type="checkbox" name="type_operating" autocomplete="off">
                                            Operating
                                        </label><br>
                                        <label>
                                            <input type="checkbox" name="type_planning" autocomplete="off">
                                            Planning
                                        </label><br>
                                        <label>
                                            <input type="checkbox" name="type_administration" autocomplete="off">
                                            Administration
                                        </label><br>


                                    </div>
                                </div>
                            </div>
                        </div>

                        Projects will be examined at the corridor level to determine multimodal needs. Which best describes this projects. <a href="http://www.elpasompo.org/civicax/filebank/blobdload.aspx?BlobID=23409" target="_blank">Block System:</a><br>

                        <label><input type="radio" name="block_system" value="within community"> Within Community</label>
                        <label><input type="radio" name="block_system" value="community to community"> Community to community</label>
                        <label><input type="radio" name="block_system" value="community to region"> Community to region</label>
                        <label><input type="radio" name="block_system" value="region to region"> Region to region</label>




                        <button class="btn btn-primary mt-1 float-right" type="submit">
                            Save
                        </button>

                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    const toggleTA = (name) => {
        if($('input[name="'+ name +'"]').is(':checked')){
            console.log('checked');
            $('textarea[name="description_'+ name +'"]').show();
        }else{
            console.log('not checked');
            $('textarea[name="description_'+ name +'"]').hide();
        }
    };
</script>
@endsection
