class UsersController < ApplicationController
    skip_before_action :authenticate_user!, only: [:index, :show]
    before_action do
        if user_signed_in?
            @conversations = policy_scope(Conversation).order(created_at: :asc).where("sender_id = ? OR receiver_id = ?", current_user.id, current_user.id)
        end
    end

    def show
        @user = User.find(params[:id])
        @user_pets = @user.pets.geocoded
				pets = policy_scope(Pet).order(created_at: :asc).geocoded
        @markers = @user_pets.map do |pet|
					{
							lat: pet.latitude,
							lng: pet.longitude,
							infoWindow: render_to_string(partial: "/pets/info_window", locals: { pet: pet })
					}
				end
				authorize pets
    end
end
