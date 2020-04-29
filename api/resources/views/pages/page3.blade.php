@extends('layout.pages')
@section('content')

    <div class="dx-viewport container">
    <div class="row justify-content-start">
        <div class="col">
            <h6>Project Readiness Elements:</h6>
            <p>"Overall" Estimate of Preliminary Engineering (PE)
                Examples include: Project Initiation/Planning, Initial Design,
                Environmental Document, PS&E, etc.</p>
            <div id="project-readiness-elements"></div>
        </div>
    </div>
    <div class="row justify-content-start">
        <div class="col">
            <h6>Transit Only:</h6>
            <p>"Anticipated Dates"</p>
            <div id="transit-only"></div>
        </div>
    </div>

    <!--Project Readiness Elements Footer Before Phases-->
    <p style="font-size:90%;">Have the above dates been reviewed by TXDOT or NMDOT? (Select proper checkbox below)</p>
    <div class="row justify-content-start">
        <div class="col">
        <div id = "project-readiness-elements-footer"></div>
        </div>
    </div>
    <br><br>
    <div class="row justify-content-start">
        <div class="col">
        <h6>Project Phases</h6>
        <p>
            **All costs should account for inflation withing TIP years. Beyond TIP years inflation will be applied</p>
        <p>**For Total Project Cost include all cost, whether it is a phase of the project or not</p>

        <!--Radio checkboxes for FTA Transfer, C, and Non-C. Enables one at a time.-->
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioFTA" value="FTA">
            <label class="form-check-label" for="inlineRadioFTA">FTA Transfer Requested&emsp;</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioC" value="C">
            <label class="form-check-label" for="inlineRadioC">C&emsp;&emsp;</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioNon-C" value="Non-C">
            <label class="form-check-label" for="inlineRadioNon-C">Non-C</label>
        </div>
        <br><br><br>
        <div id="project-phases"></div>
        </div>  
        <div class="col-7">
            <h6>YOE and Total Project Cost Information</h6>
            <p>**Only checked phase(s) will be consider for funding (Year of Expenditure (YOE)
                Cost). If a phase has been or will be completed with local funds or resources,
                please do not check. Please enter cost information for each Phase checked</p>
            <div id="type-project"></div>
        </div>
    </div>
@endsection