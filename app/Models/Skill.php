<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $fillable = ['name', 'slug', 'image', 'category_id'];
    
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }
}