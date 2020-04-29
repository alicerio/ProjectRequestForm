@extends('layout.pages')
@section('content')

    <div class="container">
    <h2>Project Selection Process </h2>

    <div class = "row">
        <select class="form-group col-md-2"id="reduction" class="form-control">
        <option selected>...</option>
        <option>Yes</option>
        <option>No</option>
        </select>
        <label class="form-group col-md-10" for="reduction">Will this project achieve a significant reduction in traffic fatalities or serious injuries?
            If yes, please provide link or attachment with supporting data
        </label>
    </div>
    <div class = "row">
        <select class="form-group col-md-2"id="reduction" class="form-control">
        <option selected>...</option>
        <option>Yes</option>
        <option>No</option>
        </select>
        <label class="form-group col-md-10" for="reduction">Is this project from an updated comprehensive plan, thoroughfare plan, feasibility or corridor study?
            If yes, please provide link or attachment:
            Excerpt from corridor plan attached (too large to attach whole document)
        </label>
    </div>

    <div class="row">
        <select class="form-group col-md-2"id="reduction" class="form-control">
        <option selected>...</option>
        <option>Yes</option>
        <option>No</option>
        </select>
        <label class="form-group col-md-10" for="reduction">Is this project on the National Highway System NHS?</label>
    </div>
    <div class = "row">
        <select class="form-group col-md-2"id="reduction" class="form-control">
        <option selected>...</option>
        <option>Yes</option>
        <option>No</option>
        </select>
        <label class="form-group col-md-10" for="reduction">Will this project achieve a significant reduction in traffic fatalities or serious injuries?
            If yes, please provide link or attachment with supporting data</label>
    </div>

    <div class="row">
        <select class="form-group col-md-2"id="reduction" class="form-control">
        <option selected>...</option>
        <option>Yes</option>
        <option>No</option>
        </select>
        <label class="form-group col-md-10" for="reduction">Is this project part of TPB resolution for the Active Transportation System?</label>
    </div>

    <div class = "row">
        <select class="form-group col-md-2"id="reduction" class="form-control">
        <option selected>...</option>
        <option>Yes</option>
        <option>No</option>
        </select>
        <label class="form-group col-md-10" for="reduction">Is this project part of TPB resolution for a Comprehensive Mobility Plan (CMP)?</label>
    </div>
    <!-- -->
    <div class="row">
    <div class="form-group col-md-6">
    <a href="http://www.elpasompo.org/civicax/filebank/blobdload.aspx?BlobID=23375"  target="_blank">
        <h4>National Goals</h4>
    </a>

    <div>
        <input type='checkbox' data-toggle='collapse' data-target='#collapse_safety'>Safety</input>
        <div id='collapse_safety' class='collapse div1'>
        <div>
            <label class="form-group col-md-12" >How does this project meet this goal?</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
        </div>
        </div>
    </div>

    <div>
        <input type='checkbox' data-toggle='collapse' data-target='#collapse_Infrastructure_Cond'>Infrastructure Condition</input>
        <div id='collapse_Infrastructure_Cond' class='collapse div2'>
        <div>
            <label class="form-group col-md-12" >How does this project meet this goal?</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
        </div>
        </div>
    </div>
    <div>
        <input type='checkbox' data-toggle='collapse' data-target='#collapse_Congestion_Red'>Congestion Reduction</input>
        <div id='collapse_Congestion_Red' class='collapse div3'>
        <div>
            <label class="form-group col-md-12" >How does this project meet this goal?</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
        </div>
        </div>
    </div>
    <div>
        <input type='checkbox' data-toggle='collapse' data-target='#collapse_System_Rel'>System Reliability</input>
        <div id='collapse_System_Rel' class='collapse div4'>
        <div>
            <label class="form-group col-md-12" >How does this project meet this goal?</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
        </div>
        </div>
    </div>
    <div>
        <input type='checkbox' data-toggle='collapse' data-target='#collapse_FM_EC'>Freight Movement and Economic Vitality</input>
        <div id='collapse_FM_EC' class='collapse div1'>
        <div>
            <label class="form-group col-md-12" >How does this project meet this goal?</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
        </div>
        </div>
    </div>
    <div>
        <input type='checkbox' data-toggle='collapse' data-target='#collapse_Env_Sust'>Environmental Sustainability</input>
        <div id='collapse_Env_Sust' class='collapse div1'>
        <div>
            <label class="form-group col-md-12" >How does this project meet this goal?</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
        </div>
        </div>
    </div>



    </div>

    <div class="form-group col-md-6">
    <a href="http://www.elpasompo.org/civicax/filebank/blobdload.aspx?BlobID=23375"  target="_blank">
        <h4>Congestion Management Process Strategies</h4>
    </a>
    
    <div>
        <input type='checkbox' data-toggle='collapse' data-target='#collapse_TDMS'>Travel Demand Management Strategies</input>
        <div id='collapse_TDMS' class='collapse div1'>
        <div>
            <label class="form-group col-md-12" >How does this project meet this goal?</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
        </div>
        </div>
    </div>

    <div>
        <input type='checkbox' data-toggle='collapse' data-target='#collapse_TOS'>Traffic Operations Strategies</input>
        <div id='collapse_TOS' class='collapse div2'>
        <div>
            <label class="form-group col-md-12" >How does this project meet this goal?</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
        </div>
        </div>
    </div>
    <div>
        <input type='checkbox' data-toggle='collapse' data-target='#collapse_PTS'>Public Transportation Strategies</input>
        <div id='collapse_PTS' class='collapse div3'>
        <div>
            <label class="form-group col-md-12" >How does this project meet this goal?</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
        </div>
        </div>
    </div>
    <div>
        <input type='checkbox' data-toggle='collapse' data-target='#collapse_RCS'>Road Capacity Strategies</input>
        <div id='collapse_RCS' class='collapse div4'>
        <div>
            <label class="form-group col-md-12" >How does this project meet this goal?</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
        </div>
        </div>
    </div>
    <div>
        <input type='checkbox' data-toggle='collapse' data-target='#collapse_NCS'>Non-CMP Strategies</input>
        <div id='collapse_NCS' class='collapse div1'>
        <div>
            <label class="form-group col-md-12" >How does this project meet this goal?</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
        </div>
        </div>
    </div>
    </div>
    </div>
    <div class="row form-group">
    <div id = "CMAQ_Analysis" class = "col-md-4">
    <h4 class = "text-center">CMAQ Analysis</h4>
    <p class = "text-center">*Air Quality Analysis MUST   accompany request for CMAQ Funds.</p>
    <div class= "dx-viewport demo-container">
        <div id="CMAQ_Analysis_Form"></div>
    </div> 
    </div>
    <div  class = "col-md-2">

    </div>
    <div id = "transit_Analysis" class = "col-md-4">
    <h4 class = "text-center">**Transit Only</h4>
    <p></p>
        <div class= "dx-viewport demo-container">
        <div id="transit_Analysis_Form"></div>
        <h6>Project Type:</h6>
        <div class = "col-md-3" id="transit_Analysis_Form_Radio"></div>
        </div>
    </div>
    </div>
    <div class="form-group col-md-12">
    <div class = "row">
    <label>Projects will be examined at the corridor level to determine multimodal needs. Which best describes this projects.</label>
    <a href="http://www.elpasompo.org/civicax/filebank/blobdload.aspx?BlobID=23409"  target="_blank">
        <label>Block System</label>
    </a>
    <br>
    </div>

    <label class="radio-inline"><input type="radio" name="optradio" >Within community  </label>
    <label class="radio-inline"><input type="radio" name="optradio">Community to community  </label>
    <label class="radio-inline"><input type="radio" name="optradio">Community to region  </label>
    <label class="radio-inline"><input type="radio" name="optradio">Region to region  </label>
    </div>
    </div>
    <hr>
@endsection