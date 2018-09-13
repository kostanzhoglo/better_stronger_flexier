class AddLikesToWorkouts < ActiveRecord::Migration[5.2]
  def change
    add_column :workouts, :likes, :integer
  end
end
