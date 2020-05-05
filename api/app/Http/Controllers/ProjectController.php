<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::all();
        $statuses = ['In Progress', 'Submitted', 'Completed'];
        return view('projects.index', compact('projects', 'statuses'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('projects.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        request()->validate([
            'name' => 'required',
        ]);

        $project = new Project();

        $project->agency_id = auth()->user()->agency_id;
        $project->parent_id = request('parent_id');
        $project->mpo_id = request('mpo_id');
        $project->csj_cn = request('csj_cn');
        $project->name = request('name');
        $project->description = request('description');
        $project->limit_from = request('limit_from');
        $project->limit_to = request('limit_to');
        $project->relationship_description = request('relationship_description');
        $project->need_purpose = request('need_purpose');
        $project->agency_comments = request('agency_comments');
        $project->existing_lanes = request('existing_lanes');
        $project->projected_lanes = request('projected_lanes');

        $project->save();

        return redirect(route('projects.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        return view('projects.show', compact('project'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        return view('projects.edit', compact('project'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        request()->validate([
            'name' => 'required',
        ]);

        $project->parent_id = request('parent_id');
        $project->mpo_id = request('mpo_id');
        $project->csj_cn = request('csj_cn');
        $project->name = request('name');
        $project->description = request('description');
        $project->limit_from = request('limit_from');
        $project->limit_to = request('limit_to');
        $project->relationship_description = request('relationship_description');
        $project->need_purpose = request('need_purpose');
        $project->agency_comments = request('agency_comments');
        $project->existing_lanes = request('existing_lanes');
        $project->projected_lanes = request('projected_lanes');

        $project->save();

        return redirect(route('projects.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        $project->delete();
        return redirect(route('projects.index'));
    }
}
