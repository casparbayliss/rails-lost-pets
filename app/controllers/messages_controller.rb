class MessagesController < ApplicationController
  before_action do
    @conversation = Conversation.find(params[:conversation_id])
  end

  def index
    @messages = policy_scope(Conversation).order(created_at: :asc)
    @messages = @conversation.messages

    @messages.where("user_id != ? AND read = ?", current_user.id, false).update_all(read: true)

    @message = @conversation.messages.new
  end

  def create
    @message = @conversation.messages.new(message_params)
    @message.user = current_user
    authorize @message
    if @message.save
      ConversationChannel.broadcast_to(
        @conversation,
        render_to_string(partial: "message", locals: { message: @message })
      )
      redirect_to conversation_messages_path(@conversation)
    else
      redirect_to conversation_messages_path(@conversation), notice: "Message not saved"
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :user_id)
  end
end
