class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: :home

  def home
  end

  def autocomplete
    
    results = AutocompleteSearchService.new(params[:q]).call
  private
end
