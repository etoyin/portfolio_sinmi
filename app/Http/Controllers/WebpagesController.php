<?php

namespace App\Http\Controllers;

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
        return Inertia::render('Book', [
        ]);
    }

    public function projects(Request $request): Response
    {
        return Inertia::render('Projects', [
        ]);
    }

}
