<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'title', 'slug', 'thumbnail', 'short_description', 
        'content', 'demo_url', 'repo_url', 'is_featured', 'sort_order'
    ];

    public function skills()
    {
        return $this->belongsToMany(Skill::class);
    }
}