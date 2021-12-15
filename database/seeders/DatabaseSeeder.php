<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\Topic;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(10)->create();

        Topic::create([
            'name' => 'Featured sites',
            'slug' => 'featured'
        ]);

        Topic::create([
            'name' => 'Useful links',
            'slug' => 'links'
        ]);
        
        Topic::create([
            'name' => 'Guides and Tutorials',
            'slug' => 'tutorials'
        ]);

        Post::factory(50)->create();
    }
}
