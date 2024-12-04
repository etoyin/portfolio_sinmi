<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Project;
use App\Models\Thought;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class WebpagesController extends Controller
{
    //
    public function home(Request $request): Response
    {
        return Inertia::render('HomePage', [
        ]);
    }

    public function about(Request $request): Response
    {
        return Inertia::render('About', [
        ]);
    }

    public function contact(Request $request): Response
    {
        return Inertia::render('Contact', [
        ]);
    }

    public function book(Request $request): Response
    {
        return Inertia::render('Book');
    }

    public function projects(Request $request): Response
    {
        $projects = Project::all();
        return Inertia::render('Projects', [
            'projects' => $projects
        ]);
    }

    public function thoughts(Request $request): Response
    {
        $thoughts = Thought::all();
        $cat = Category::all();
        return Inertia::render('Thoughts', [
            'cat' => $cat,
            'thoughts' => $thoughts
        ]);
    }


    public function one_thought($id, $slug): Response
    {
        $one_thought = Thought::whereId($id)->get();

        return Inertia::render('OneThought', [
            'one_thought' => $one_thought
        ]);
    }

    public function one_project($id, $slug): Response
    {
        $one_project = Project::whereId($id)->get();

        return Inertia::render('OneProject', [
            'one_project' => $one_project
        ]);

    }

}
