import consumer from "./consumer";

console.log("conversation_channel.js is working");

const messagesContainer = document.getElementById('messages');
if (messagesContainer) {
  console.log("Ready to get data from the conversation");
  const id = messagesContainer.dataset.conversationId;

  consumer.subscriptions.create({ channel: "ConversationChannel", id: id }, {
    received(data) {
      console.log(data); // called when data is broadcast in the cable
    },
  });
}
