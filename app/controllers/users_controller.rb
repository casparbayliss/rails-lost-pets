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

    def backend_search
        @hits = Contact.search(@q, { hitsPerPage: 5, page: (params['page'] || 1) })
    end

    

    def autocomplete
        render json: User.search(params[:query], {
          fields: ["first_name^5", "last_name"],
          match: :word_start,
          limit: 10,
          load: false,
          misspellings: {below: 5}
        }).map(&:title)
      end
end
