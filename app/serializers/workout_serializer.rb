class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :content, :completions, :likes
end
