# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

workout1 = Workout.create(name: "Arms", content: "Pull-ups: 4 sets, 4 reps
Bicep Curls: 4 sets, 12 reps, 25 lbs.
Rowing Machine: 10 Setting, 25 mins
Single Arm Row: 3 sets, 12 reps, 45 lbs.
Chest Stretch
Neck Stretch
Wrist Stretch
Hips Stretch
5 mins meditation
", completions: 0, likes: 0)

workout2 = Workout.create(name: "Long Run", content: "60 mins run
Hip Stretch
Folded Leaf
Neck Stretch
100 yds straight legs
Air Squats: 3 sets, 10 reps
Calf Stretch
", completions: 0, likes: 0)

workout3 = Workout.create(name: "Chest", content: "Pushups: 4 sets, 12[3] reps
Bench Press: 3 sets, 10 reps, 115, 125, 15 lbs
Incline Bench: 3 sets, 8 reps, 90lbs
Plank: 4 sets, 60 secs
Calf Eccentric Dips: 2 sets, 16 reps
Chest Stretch
", completions: 0, likes: 0)

workout4 = Workout.create(name: "HIIT Burner!", content: "1 Circuit, 60 secs each spot:
Pushups
Jump Rope
Bicep Curl (20 lbs dumbbells)
Mountain Climbers
Pull-up descends
Walking Lunges
Side Curl Sit-ups
", completions: 0, likes: 0)

workout5 = Workout.create(name: "Stretch and Relax", content: "Calf Massage
Calf Eccentric Dips 16 reps
Calf Stretch
Tennis Ball Hips
Tennis Ball Shoulders
Tennis Ball Neck
Neck Stretch
Shoulder Floor Extension
Plank
Hip Stretch
Lower Back Hip Extension
Bridge
", completions: 0, likes: 0)
