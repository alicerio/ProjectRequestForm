@extends('master')
@section('content')
<div class="row">
    <div class="col-md-6">
        <br />
        <h3 aling="center">Project Readiness Elements</h3>
        <br />
        <!---Checks that all data fields have information.--->
        @if(count($errors) > 0)
        <div class="alert alert-danger">
            <ul>
            @foreach($errors->all() as $error)
                <li>{{$error}}</li>
            @endforeach
            </ul>
        </div>
        @endif
        @if(\Session::has('success'))
        <div class="alert alert-success">
            <p>{{ \Session::get('success') }}</p>
        </div>
        @endif
        <!---Adds data fields using Bootstrap.--->
        <form method="post" action="{{url('ProjectReadinessElements')}}">
            {{csrf_field()}}
            <div class="form-group">
                <input type="text" name="Element" class="form-control" placeholder="Element" />
            </div>
            <div class="form-group">
                <input type="date" name="Est_Start_Date" class="form-control" placeholder="Est Start Date" />
            </div>
            <div class="form-group">
                <input type="date" name="Est_End_Date" class="form-control" placeholder="Est End Date" />
            </div>
            <div class="form-group">
                <input type="number" name="Progress" class="form-control" placeholder="Progress" />
            </div>
            <div class="form-group">
                <input type="text" name="Resp_Agency" class="form-control" placeholder="Resp Agency" />
            </div>
            <div class="form-group">
                <input type="submit" class="btn btn-primary" />
            </div>
        </form>
    </div>
</div>
@endsection