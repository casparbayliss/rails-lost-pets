class ConversationsController < ApplicationController
  before_action do
    if user_signed_in?
      @conversations = policy_scope(Conversation).order(created_at: :asc).where("sender_id = ? OR receiver_id = ?", current_user.id, current_user.id)
    end
  end
  def index
    @users = User.where.not(id: current_user.id)
    @conversations = policy_scope(Conversation).order(created_at: :asc).where("sender_id = ? OR receiver_id = ?", current_user.id, current_user.id)
  end

  def show
    @pet = Pet.find(params[:id])
    authorize @pet
    redirect_to pet_path
  end

  def create
    if Conversation.between(params[:sender_id], params[:receiver_id]).present?
      @conversation = Conversation.between(params[:sender_id], params[:receiver_id]).first
    else
      @conversation = Conversation.create!(conversation_params)
    end
    authorize @conversation

    redirect_to conversation_messages_path(@conversation)
  end

  private

  def conversation_params
    params.permit(:sender_id, :receiver_id)
  end
end
