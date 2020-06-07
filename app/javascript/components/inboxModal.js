const allMessagesShowButton = document.querySelector("#all-messages-show-button");
const conversationsModal = document.querySelector("#conversations-modal");
const closeConversationsModalButton = document.querySelector("#close-conversations-modal-button");
const navbarMessagesButton = document.querySelector('#navbar-messages-button');

const openFromNavbar = () => {
    if (navbarMessagesButton) {
        navbarMessagesButton.addEventListener("click", () => {
            conversationsModal.style.display = "block";
        });
    };
};

const showAllMessages = () => {
    if (allMessagesShowButton) {
        allMessagesShowButton.addEventListener("click", () => {
            conversationsModal.style.display = "block";
        });
    };
};

const closeConversationsModal = () => {
    if (closeConversationsModalButton) {
        closeConversationsModalButton.addEventListener("click", () => {
            conversationsModal.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == conversationsModal) {
                conversationsModal.style.display = "none";
            };
        };
    };
};

const modalButtons = () => {
    openFromNavbar();
    showAllMessages();
    closeConversationsModal();
};

export { modalButtons };