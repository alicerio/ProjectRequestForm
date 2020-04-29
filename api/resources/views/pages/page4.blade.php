@extends('layout.pages')
@section('content')

    <div class = "container">
        <div class="row justify-content-start">
            <div class="col">
            <form>
                <div class="form">
                    <label for ="yes/no">Is the sponsor paying for 100% of PE?</label>
                    <select class = "yes/no select" id = "yes/no">
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <br>
                    <label for = "yes/no">Is this sponsor paying for 100% of the Row
                        and utility relocation?</label>
                    <select class= "yes/no select" id = "yes/no">
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <br>
                    <label for = "yes/no">Is this decision making/governing body committed to the local/state 
                        share(match)?</label>
                    <select class = "yes/no select" id = "yes/no">
                        <option></option>
                        <option>Yes</option>
                        <option>No</option>                   
                    </select>
                    <br>
                    <label>Attach documentation. E.g. Resolution, Financial Plan, etc.</label>
                    <label for = "percentages">Sponsor's investment to construction cost.
                        (Excluding required local/state share)</label>
                    <select class = "precent select" id = "percentages">
                        <option></option>
                        <option>0%</option>
                        <option>≥1% <10%</option>
                        <option>≥10% <20%</option>         
                        <option>≥20% <30%</option>
                        <option>≥30% <40%</option>  
                        <option>≥40%</option>                                  
                    </select>
                </div>
            </form>
            </div>
        </div>
        <br>
        <div class="row justify-content-start">
            <div class="col">
            <h6>Project Funding</h6>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1"> 
                    Requesting MPO Funds (For long range planning, beyond TIP years, funding category may not be identified, 
                    MPO will make final recommendation)
                </label>
            </div>
            
            <label for="YOE Cost">YOE Cost</label>
            <input type = "text"
                    id = "YOE Cost"
                    value = "" />
            </div>
        </div>
        <div class="row justify-content-start">
            <div class="col">
                <div id ="add-funding" class="float-right"></div>
            </div>
        </div>
        <div class="row justify-content-start">
            <div class="col">
                <div id ="add-funding" class="float-right"></div>
                <div id="project-funding"></div>
            </div>
        </div>
        
        <br>
        <div class="row justify-content-start">
            <div class="col">
            <h6>Contact Information</h6>
                <div id="contact-information"></div>
            </div>
        </div>

        <div class="row justify-content-start">
            <div class="col">
            <br>

            <h6>Attachments (CMAQ Analysis, Cost Estimate, Schematic/Design Concept, etc.</h6>
            <div style="width:1000px;height:100px;border:1px solid #000;"></div>
            <br>
            
            <button type="button" class="file btn btn-outline-dark">
                <input type="file" name = "file">
            </button>
            <button type="button" class="btn btn-outline-dark">Remove File</button>
            <br><br>
            <p>*Please attach any supporting documents to this form, if possivle (CMAQ
                Analysis, Cost Estimate, Environmental Document, or other).
            <br>
                *Only Adobe Acrobat users may be able to attach files to this form. If you are not able to attach files, please send them via e-mail.
            <br>
                *This form does not guarantee the funds requested nor the approval of the project in the MTP/TIP.
            <br>
                *By signing this Project Request Form you certify that the project Description and limits are within the scope of work of the project.
            <br>
                *Please fill out this form entirely, and sign (digital signature). If "Signed By" field is blank, the form will not be accepted.</p>
            <br>
            </div>
        </div>

        <div class="row justify-content-start">
            <div class="col">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Signature</span>
            </div>
            <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            <p>Save your form before signing, all fields will be locked after signature is provided.</p>
            <button type="button" class="btn btn-dark">Save Form As</button></pre>
            <button type="button" class="btn btn-dark">Print Form</button>
            </div>
        </div>
        </div>
    </div>
@endsection 

