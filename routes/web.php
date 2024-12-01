<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WebpagesController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [WebpagesController::class, 'home'])->name('home');
Route::get('/about', [WebpagesController::class, 'about'])->name('about');
Route::get('/contact', [WebpagesController::class, 'contact'])->name('contact');
Route::get('/book', [WebpagesController::class, 'book'])->name('book');
Route::get('/projects', [WebpagesController::class, 'projects'])->name('projects');
Route::get('/thoughts', [WebpagesController::class, 'thoughts'])->name('thoughts');


// Route::get('/dashboard', function () {
//     return Inertia::render('AdminDashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('dashboard');
    Route::get('/dashboard/categories', [AdminController::class, 'thoughts_category_page'])->name('thoughts_category_page');
    Route::post('/dashboard/categories', [AdminController::class, 'add_thoughts_category'])->name('post_category');
    Route::get('/delete_cat/{id}', [AdminController::class, 'delete_thoughts_category'])->name('delete_category');
    Route::get('/dashboard/thoughts', [AdminController::class, 'thoughts'])->name('thoughts');
    Route::post('/thoughts/post', [AdminController::class, 'post_thoughts'])->name('post_thoughts');
    Route::post('/projects/post', [AdminController::class, 'post_projects'])->name('post_projects');
    Route::get('/dashboard/projects', [AdminController::class, 'projects'])->name('projects');
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
