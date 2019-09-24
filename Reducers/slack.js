import { MESSAGE_INPUT, SELECT_CONVERSATION, SEND_MESSAGE, } from '../Action';
let initialState = {
    channels: [ 
        {
            channelId: 1,
            channelName: 'react',
            conversation: [
                {
                    author: 'Dave',
                    time: '2 July 2019 9.0 AM',
                    message: 'A message from dave for react',
                    profilePicture: '',
                },
                {
                    author: 'Zack',
                    time: '2 July 2019 10.0 AM',
                    message: 'A message from zack for react',
                    profilePicture: '',
                },
                {
                    author: 'Pam',
                    time: '2 July 2019 11.0 AM',
                    message: 'A message from pam for react',
                    profilePicture: '',
                },
                {
                    author: 'Erin',
                    time: '2 July 2019 11.30 AM',
                    message: 'A message from erin for react',
                    profilePicture: '',
                },
                {
                    author: 'Dave',
                    time: '2 July 2019 9.0 AM',
                    message: 'A message from dave for react',
                    profilePicture: '',
                },
                {
                    author: 'Zack',
                    time: '2 July 2019 10.0 AM',
                    message: 'A message from zack for react',
                    profilePicture: '',
                },
                {
                    author: 'Pam',
                    time: '2 July 2019 11.0 AM',
                    message: 'A message from pam for react',
                    profilePicture: '',
                },
                {
                    author: 'Erin',
                    time: '2 July 2019 11.30 AM',
                    message: 'A message from erin for react',
                    profilePicture: '',
                },
                {
                    author: 'Dave',
                    time: '2 July 2019 9.0 AM',
                    message: 'A message from dave for react',
                    profilePicture: '',
                },
                {
                    author: 'Zack',
                    time: '2 July 2019 10.0 AM',
                    message: 'A message from zack for react',
                    profilePicture: '',
                },
                {
                    author: 'Pam',
                    time: '2 July 2019 11.0 AM',
                    message: 'A message from pam for react',
                    profilePicture: '',
                },
                {
                    author: 'Erin',
                    time: '2 July 2019 11.30 AM',
                    message: 'A message from erin for react',
                    profilePicture: '',
                },
                {
                    author: 'Dave',
                    time: '2 July 2019 9.0 AM',
                    message: 'A message from dave for react',
                    profilePicture: '',
                },
                {
                    author: 'Zack',
                    time: '2 July 2019 10.0 AM',
                    message: 'A message from zack for react',
                    profilePicture: '',
                },
                {
                    author: 'Pam',
                    time: '2 July 2019 11.0 AM',
                    message: 'A message from pam for react',
                    profilePicture: '',
                },
                {
                    author: 'Erin',
                    time: '2 July 2019 11.30 AM',
                    message: 'A message from erin for react',
                    profilePicture: '',
                },
            ],
        },
        {
            channelId: 2,
            channelName: 'redux',
            conversation: [
                {
                    author: 'Joe',
                    time: '',
                    message: 'A message from joe for redux',
                    profilePicture: '',
                },
                {
                    author: 'Myself',
                    time: '',
                    message: 'A message from me for redux',
                    profilePicture: '',
                },
                {
                    author: 'Joe',
                    time: '',
                    message: 'A message from joe for redux',
                    profilePicture: '',
                },
                {
                    author: 'Pam',
                    time: '',
                    message: 'A message from pam for redux',
                    profilePicture: '',
                },
            ],
        },
        {
            channelId: 3,
            channelName: 'mobx',
            conversation: [
                {
                    author: 'Sarah',
                    time: '',
                    message: 'A message from sarah for mobx',
                    profilePicture: '',
                },
                {
                    author: 'Zack',
                    time: '',
                    message: 'A message from zack for mobx',
                    profilePicture: '',
                },
                {
                    author: 'Joe',
                    time: '',
                    message: 'A message from joe for mobx',
                    profilePicture: '',
                },
                {
                    author: 'Dave',
                    time: '',
                    message: 'A message from dave for mobx',
                    profilePicture: '',
                },
            ],
        },
        {
            channelId: 4,
            channelName: 'react-router',
            conversation: [],
        },
    ],
    people: [ 
        {
            id: 1,
            name: 'Dave',
            conversation: [

                {
                    author: 'Dave',
                    time: '',
                    message: 'A message from dave to you ',
                    profilePicture: '',
                },
                {
                    author: 'Myself',
                    time: '',
                    message: 'A message from me',
                    profilePicture: '',
                },
                {
                    author: 'Dave',
                    time: '',
                    message: 'A message from dave',
                    profilePicture: '',
                },

            ],
        },
        {
            id: 2,
            name: 'Sam',
            conversation: [

                {
                    author: 'Myself',
                    time: '',
                    message: 'A message from me to sam ',
                    profilePicture: '',
                },
                {
                    author: 'Sam',
                    time: '',
                    message: 'A message from Sam',
                    profilePicture: '',
                },
                {
                    author: 'Myself',
                    time: '',
                    message: 'A message from me',
                    profilePicture: '',
                },

            ],
        },
        {
            id: 3,
            name: 'Sarah',
            conversation: [],
        },
        {
            id: 4,
            name: 'Erin',
            conversation: [],
        },
    ],
    selectedConversation: {
        conversationType: 'channel',
        conversationId: 1,
    },
    inputMessage: '',
}
const slack = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CONVERSATION: return {
            ...state,
            selectedConversation: {
                conversationType: action.conversationType,
                conversationId: action.conversationId,
            }
        }
        case MESSAGE_INPUT: return {
            ...state,
            inputMessage: action.payload,
        }
        case SEND_MESSAGE:
            if (state.selectedConversation.conversationType == 'channel') {
				//console.log("here 1")
                return {
                    ...state,
                    channels: state.channels.map((chan) => {
                        if (chan.channelId == state.selectedConversation.conversationId) {
							//console.log("here 2")
                            return {
                                ...chan,
                                conversation: [...chan.conversation , {
                                    author: 'Myself',
                                    time: action.payload,
                                    message: state.inputMessage,
                                    profilePicture: '../Images/profileImage.png',
                                }],
                            }
						}
						return chan;
					}),
					inputMessage:'',
                }
            }
            else {
                return {
                    ...state,
                    people: state.people.map((person) => {
                        if (person.id == state.selectedConversation.conversationId) {
                            return {
                                ...person,
                                conversation: [...person.conversation , {
                                    author: 'Myself',
                                    time: action.payload,
                                    message: state.inputMessage,
                                    profilePicture: '../Images/profileImage.png',
                                }],
                            }
						}
						return person;
					}),
					inputMessage:'',
                }

            }

        default: return state;
    }
}

export default slack;