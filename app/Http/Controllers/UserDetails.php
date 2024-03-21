<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Inertia\Inertia;

use App\Models\UserDetails;

use Illuminate\Support\Facades\Validator;

class UserDetails extends Controller
{
     /**
     * Write code on Method
     *
     * @return response()
     */
    public function create()
    {
        return Inertia::render('UserDetails/Create', [
            'message' => session('message'),
        ]);
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'fullname' => ['required'],
            'roles' => ['required'],
            'emailaddress' => ['required'],
        ])->validate();
    
        Post::create($request->all());
    
        return redirect()->route('posts.create')
                    ->with('message', 'Users created successfully!');
    }
}
