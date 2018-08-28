class Api::WorkoutsController < ApplicationController

  def index
    @workouts = Workout.all
    render json: @workouts
  end

  def create
    @workout = Workout.new(workout_params)
    if @workout.save
      render json: @workout
    else
      render json: {errors: @workout.errors}
      # render json: {message: "There's a problem getting your flex on. Please try again!"}
    end
  end

  def show
    @workout = Workout.find(params[:id])
    render json: @workout
  end

end
