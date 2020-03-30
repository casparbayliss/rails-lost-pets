class ChatroomsController < ApplicationController
  def create
    @recipient = params[:recipient]
    @user = current.user

  end
  def show
    @chatroom = Chatroom.find(params[:id])
    @user = current_user
  end

  private

  def chat_params
    params.require(:chatroom).permit(:)
  end
end
