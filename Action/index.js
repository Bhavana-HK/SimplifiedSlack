export const SELECT_CONVERSATION = 'SELECT_CONVERSATION';
export const MESSAGE_INPUT = "MESSAGE_INPUT";
export const SEND_MESSAGE = "SEND_MESSAGE";

export const selectConversation = (conversationType, conversationId) => {
    return {
        type: SELECT_CONVERSATION,
        conversationType,
        conversationId,
    }
}

export const handleMessageInput = (payload) => {
    return {
        type: MESSAGE_INPUT,
        payload,
    }
}

export const sendMessage = () => {
    return {
        type: SEND_MESSAGE,
        payload:new Date(),
    }
}