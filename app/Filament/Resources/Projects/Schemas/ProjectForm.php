<?php

namespace App\Filament\Resources\Projects\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\FileUpload;
use Illuminate\Support\Str;

class ProjectForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                // --- Cột Thông Tin Chính ---
                TextInput::make('title')
                    ->required()
                    ->live(onBlur: true)
                    ->afterStateUpdated(fn($set, ?string $state) =>
                    $set('slug', Str::slug($state)))
                    ->columnSpanFull(),

                TextInput::make('slug')
                    ->required()
                    ->unique(ignoreRecord: true),

                // --- Chọn Kỹ Năng (Many-to-Many) ---
                Select::make('skills')
                    ->relationship('skills', 'name') 
                    ->multiple()
                    ->preload()
                    ->searchable()
                    ->columnSpanFull(),

                // --- Links ---
                TextInput::make('demo_url')
                    ->url()
                    ->label('Demo Link')
                    ->prefix('https://'),

                TextInput::make('repo_url')
                    ->url()
                    ->label('GitHub Repo')
                    ->prefix('https://'),

                // --- Nội Dung ---
                Textarea::make('short_description')
                    ->rows(3)
                    ->columnSpanFull(),

                RichEditor::make('content')
                    ->label('Nội dung chi tiết')
                    ->columnSpanFull(),

                FileUpload::make('thumbnail')
                    ->image()
                    ->directory('projects')
                    ->columnSpanFull(),

                // --- Trạng Thái ---
                Toggle::make('is_featured')
                    ->label('Dự án nổi bật')
                    ->default(false),

                TextInput::make('sort_order')
                    ->numeric()
                    ->default(0),
            ]);
    }
}