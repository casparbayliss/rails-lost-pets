class PetsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]
  def index
    @pets = policy_scope(Pet).order(created_at: :asc)
  end

  def show
    @pet = Pet.find(params[:id])
    authorize @pet
  end

  def found_all
    @pets = Pet.all
  end

  def lost_all
    @pets = Pet.all
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
