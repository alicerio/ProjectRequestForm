@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <table class="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Agency</th>
                    <th scope="col">Type</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  @foreach ($users as $user)
                    <tr>
                        <td>{{ $user->name }}</td>
                        <td>{{ $user->email }}</td>
                        <td>{{ $user->agency->name  }}</td>
                        <td>{{ $types[$user->type] }}</td>
                        <td>
                          <a href="{{ route('users.edit', $user->id) }}" class="btn btn-primary">Edit</a>
                        </td>
                        <td>
                          <form action="{{ route('users.destroy', $user->id) }}" method="POST">
                              @csrf
                              @method('delete')
                              <button class="btn btn-danger btn-block" type="submit">
                                  Delete
                              </button>
                          </form>
                        </td>
                    </tr>
                  @endforeach
                </tbody>
              </table>
        </div>
    </div>
</div>
@endsection
