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

}
