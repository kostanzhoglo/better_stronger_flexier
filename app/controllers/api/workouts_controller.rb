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

  def update
    @workout = Workout.find(params[:id])
    @workout.update(workout_params)
    if @workout.save
      render json: @workout
    else
      render json: @workout.errors
    end
  end

  private

    def workout_params
      params.require(:workout).permit(:name, :content, :completions, :likes)
    end

end
