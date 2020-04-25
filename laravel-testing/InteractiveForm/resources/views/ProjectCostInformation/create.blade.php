@extends('master')
@section('content')
<div class="row">
    <div class="col-md-6">
        <br />
        <h3 aling="center">Total Project Cost</h3>
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
        <form method="post" action="{{url('ProjectCostInformation')}}">
            {{csrf_field()}}
            <div class="form-group">
                <input type="number" name="Non-Construction_Project" class="form-control" placeholder="Non-Construction Project" />
            </div>
            <div class="form-group">
                <input type="number" name="Construction" class="form-control" placeholder="Construction" />
            </div>
            <div class="form-group">
                <input type="number" name="Construction_Engineering_(CE)" class="form-control" placeholder="Construction Engineering" />
            </div>
            <div class="form-group">
                <input type="number" name="Contingencies" class="form-control" placeholder="Contingencies" />
            </div>
            <div class="form-group">
                <input type="number" name="Potential_Change_Order" class="form-control" placeholder="Potential Change Order" />
            </div>
            <div class="form-group">
                <input type="number" name="Preliminary_Engineering" class="form-control" placeholder="Preliminary Engineering" />
            </div>
            <div class="form-group">
                <input type="number" name="Indirects" class="form-control" placeholder="Indirects" />
            </div>
            <div class="form-group">
                <input type="number" name="Right-Of-Way" class="form-control" placeholder="Right-Of-Way" />
            </div>
            <div class="form-group">
                <input type="number" name="FTA_Transfer" class="form-control" placeholder="FTA Transfer" />
            </div>
            <div class="form-group">
                <input type="number" name="Construction_Subtotal" class="form-control" placeholder="Construction Subtotal" />
            </div>
            <div class="form-group">
                <input type="number" name="Total_Project_Cost" class="form-control" placeholder="Total Project Cost" />
            </div>
            <div class="form-group">
                <input type="submit" class="btn btn-primary" />
            </div>
        </form>
    </div>
</div>
@endsection