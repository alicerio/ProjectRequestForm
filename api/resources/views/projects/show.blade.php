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
                    <label>
                        MPO ID
                    </label>
                    <input type="text" class="form-control" name="mpo_id" value="{{ $project->mpo_id }}" disabled>
                    
                    <label>
                        CSJ or CN
                    </label>
                    <input type="text" class="form-control" name="csj_cn" value="{{ $project->csj_cn }}" disabled>

                    <label>
                        Name
                    </label>
                    <input type="text" class="form-control" name="name" value="{{ $project->name }}" disabled>

                    <label>
                        Description
                    </label>
                    <input type="text" class="form-control" name="description" value="{{ $project->description }}" disabled>

                    <label>
                        Limit From
                    </label>
                    <input type="text" class="form-control" name="limit_from" value="{{ $project->limit_from }}" disabled>

                    <label>
                        Limit To
                    </label>
                    <input type="text" class="form-control" name="limit_to" value="{{ $project->limit_to }}" disabled>

                    <h4 class="mt-3">Definition of Regionally Significant Roadway: 23 CFR § 450.104</h4>
                    <p>Regionally significant project means a transportation project (other than projects that may be grouped in the TIP and/or STIP or exempt projects as defined in EPA's transportation conformity regulation (40 CFR part 93)) that is on a facility which serves regional transportation needs (such as access to and from the area outside the region; major activity centers in the region; major planned developments such as new retail malls, sports complexes, or employment centers; or transportation terminals) and would normally be included in the modeling of the metropolitan area's transportation network. At a minimum, this includes all principal arterial highways and all fixed guideway transit facilities that offer a significant alternative to regional highway travel. </p>

                    <label>
                        Describe the relationship of this project to the definition of Regionally Significant Roadway or exempt projects:
                    </label>
                    <textarea name="relationship_description" class="form-control" disabled>{{ $project->relationship_description }}</textarea>

                    <label>
                        Need and Purpose:
                    </label>
                    <textarea name="need_purpose" class="form-control" disabled>{{ $project->need_purpose }}</textarea>

                    <label>
                        Agency Comments:
                    </label>
                    <textarea name="agency_comments" class="form-control" disabled>{{ $project->agency_comments }}</textarea>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
