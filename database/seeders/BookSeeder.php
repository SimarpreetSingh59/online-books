<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $authors = ['Author A', 'Author B', 'Author C'];
        $genres = ['Fiction', 'Romantic', 'Thriller'];
        $publishers = ['Pub A', 'Pub B', 'Pub C'];

        for ($i = 0; $i <= 10; $i++){
            DB::table('books')->insert(
                [
                    'title' => "Book Title {$i}",
                    'year' => rand(1995, 2022),
                    'genre' => $genres[rand(0, count($genres)-1)],
                    'author' => $authors[rand(0, count($authors)-1)],
                    'publisher' => $publishers[rand(0, count($publishers)-1)],
                ]
            );
        }

    }
}
