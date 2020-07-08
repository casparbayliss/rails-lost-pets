class PetsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show, :lost_all, :found_all, :searched]
  before_action do
    if user_signed_in?
      @conversations = policy_scope(Conversation).order(created_at: :asc).where("sender_id = ? OR receiver_id = ?", current_user.id, current_user.id)
    end
  end
  
  def index
    @pets = policy_scope(Pet).order(created_at: :asc).geocoded
    # Sort the pets by status
    lost_pets = []
    found_pets = []
    @pets.each do |pet|
      if pet.status == "Lost"
        lost_pets << pet
      elsif pet.status == "Found"
        found_pets << pet
      end
    end
    # Add the lost pets to the lost map
    @lostmarkers = lost_pets.map do |pet|
      {
        lat: pet.latitude,
        lng: pet.longitude,
        infoWindow: render_to_string(partial: "/pets/info_window", locals: { pet: pet })
      }
    end
    # Add the found pets to the found map
    @foundmarkers = found_pets.map do |pet|
      {
        lat: pet.latitude,
        lng: pet.longitude,
        infoWindow: render_to_string(partial: "/pets/info_window", locals: { pet: pet })
      }
    end
  end

  def searched
    @pets = policy_scope(Pet).order(created_at: :asc).geocoded
    authorize @pets
    # Search parameters
    if params[:query].present?
      # sql_query = " \
      #   pets.name @@ :query \
      #   OR pets.description @@ :query \
      #   OR pets.species @@ :query \
      #   OR users.first_name @@ :query \
      #   OR users.last_name @@ :query \
      # "
      # @pets = Pet.joins(:user).where(sql_query, query: "%#{params[:query]}%")
      # @pets = Pet.global_search(params[:query])
      @pets = Pet.search params[:query], operator: "or", misspellings: {edit_distance: 2}
    end
  end

  def autocomplete
    render json: Pet.search(params[:query], {
      fields: ["name^5"],
      match: :word_start,
      limit: 10,
      load: false,
      misspellings: {below: 5}
    }).map(&:name)
  end

  def show
    @pet = Pet.find(params[:id])
    # @user = authorize User.find(params[:id])
    authorize @pet
  end

  def found_all
    @pets = policy_scope(Pet).order(created_at: :asc).geocoded
    found_pets = []
    @pets.each do |pet|
      if pet.status == "Found"
        found_pets << pet
      end
    end
    @foundmarkers = found_pets.map do |pet|
      {
        lat: pet.latitude,
        lng: pet.longitude,
        infoWindow: render_to_string(partial: "/pets/info_window", locals: { pet: pet })
      }
    end
    authorize @pets
  end

  def lost_all
    @pets = policy_scope(Pet).order(created_at: :asc).geocoded
    lost_pets = []
    @pets.each do |pet|
      if pet.status == "Lost"
        lost_pets << pet
      end
    end
    @lostmarkers = lost_pets.map do |pet|
      {
        lat: pet.latitude,
        lng: pet.longitude,
        infoWindow: render_to_string(partial: "/pets/info_window", locals: { pet: pet })
      }
    end
    authorize @pets
  end

  def new
    @pet = Pet.new
    authorize @pet
  end

  def create
    @pet = Pet.new(pet_params)
    @pet.user = current_user
    authorize @pet
    if @pet.save
      redirect_to action: "index", notice: 'Pet has been added.'
    else
      render :new, notice: 'Pet has not been added'
    end
  end

  def edit
    @pet = Pet.find(params[:id])
    authorize @pet
  end

  def update
    @pet = Pet.find(params[:id])
    @pet.update(pet_params)
    authorize @pet
    if @pet.save
      redirect_to @pet
    else
      render :edit
    end
  end

  def destroy
    @pet = Pet.find(params[:id])
    authorize @pet
    @pet.destroy
    redirect_to pets_path
  end

  private

  def pet_params
    params.require(:pet).permit(:user_id, :name, :description, :age, :location, :date, :location, :species, :status, photos: [])
  end
end
