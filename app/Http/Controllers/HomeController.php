<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Skill;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        // Lấy danh sách kỹ năng (kèm category cha)
        $skills = Skill::with('category')->get();

        // Lấy danh sách dự án nổi bật
        $projects = Project::where('is_featured', true)->get();

        // Trả về view React và truyền dữ liệu sang
        return Inertia::render('Home', [
            'skills' => $skills,
            'projects' => $projects,
            'name' => 'NGUYEN TANG THAO',
        ]);
    }

    public function show($slug)
    {
        $project = Project::where('slug', $slug)->firstOrFail();
        return Inertia::render('ProjectDetail', [
            'project' => $project
        ]);
    }
}
