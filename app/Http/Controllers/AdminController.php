<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Thought;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules\File;
use Inertia\Inertia;

class AdminController extends Controller
{
    //

    public function generateSlug($title, $model = null)
    {
        $slug = Str::slug($title, '-'); // Convert to lowercase and replace spaces with hyphens

        // Check for uniqueness (if a model is provided)
        if ($model) {
            $baseSlug = $slug;
            $i = 1;
            while ($model::where('slug', $slug)->exists()) {
                $slug = $baseSlug.'-'.$i;
                ++$i;
            }
        }

        return $slug;
    }

    public function dashboard()
    {
        $user = auth()->user();
        return Inertia::render('Admin/AdminDashboard',[
            'user' => $user,
        ]);
    }


    public function thoughts_category_page()
    {
        $cat = Category::all();
        return Inertia::render('Admin/ThoughtsCategories',[
            'cat' => $cat
        ]);
    }

    public function add_thoughts_category(Request $request)
    {
        $request->validate([
            'category' => 'required|string|max:255|unique:' . Category::class,
        ]);

        $categories = Category::create([
            'category' => $request->category
        ]);

        $data = [
            'success' => true,
            'message' => "Category added"
        ];

        return redirect()->route('thoughts_category_page')->with([
            'message' => $data
        ]);
        // return Response::json(array(
        //     'success' => true,
        //     'data'   => 'posted successfully'
        // ));
    }

    public function delete_thoughts_category($categories)
    {
        // $events = Events::all();
        $events = Category::whereId($categories)->delete();
        // $user = User::whereEmail($email)->first();
        // return json_encode($events);
        // return Inertia::render('Events', [
        //     'event' => $events
        // ]);
        return redirect()->route('thoughts_category_page')
            ->withSuccess(__('Post delete successfully.'));
    }

    public function thoughts()
    {
        $thoughts = Thought::all();
        $cat = Category::all();
        return Inertia::render('Admin/Thoughts',[
            'thoughts' => $thoughts,
            'cat' => $cat
        ]);
    }

    public function post_thoughts(Request $request)
    {
        // return (json_encode($request->fil));
        $request->validate([
            'title' => 'required|string|max:255|unique:'.Thought::class,
            'content' => 'required|string|min:50|max:25555',
            'category' => 'required|string|max:255',
            // 'email' => 'required|string|email|max:255|unique:' . User::class,
            'file' => [
                File::types(['jpeg', 'jpg', 'gif', 'png'])
                    ->max(50 * 1024),
            ],
        ]);

        // $file = null;

        if ($request->hasFile('file')) {
            $file = Storage::disk('public')->put(date('Y-m-d').'/thoughts/'.$request->title, $request->file('file'));
        };


        
        $posts = Thought::create([
            'title' => $request->title,
            'content' => $request->content,
            'categories' => $request->category,
            'slug' => $this->generateSlug($request->title),
            'img_location' => ($file) ? $file : '',
        ]);

        $data = [
            'success' => true,
            'message' => 'Thought Added',
            'posts' => $posts,
        ];

        return json_encode($data);
    }

}
