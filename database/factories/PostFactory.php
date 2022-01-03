<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(3),
            'content' => $this->faker->paragraph(10),
            'lead' => $this->faker->text(200),
            'author_id' => random_int(1, 10),
            'topic_id' =>  random_int(1, 3),
        ];
    }
}
