import React from 'react'
import { connect } from 'react-redux'
import '../Styles/slack.css'

import { handleMessageInput, sendMessage, } from '../Action'

var mapStateToProps = (state) => {
    console.log(state.slack)
    let conversation = state.slack.selectedConversation;
    if (conversation.conversationType == 'channel') {
        return {
            conversation: state.slack.channels.find((channel) => {
                return (channel.channelId == conversation.conversationId)
            }).conversation,
            inputMessage: state.slack.inputMessage,
        }
    }
    else
        return {
            conversation: state.slack.people.find((person) => {
                return (person.id == conversation.conversationId)
            }).conversation,
            inputMessage: state.slack.inputMessage,
        }
}

var mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        handleInput: (event) => { dispatch(handleMessageInput(event.target.value)) },
        onEnter: (event) => { event.preventDefault(); dispatch(sendMessage()); }
    }
}

var BlankComponent = (props) => {
    return (<div>
        <p className="text-black-50">This is the very begining of the conversation</p>
    </div>)
}

var ConversationComponent = (props) => {
    let displayMessage = [];
    props.conversation.map((convo, index) => {
        console.log(convo);
        displayMessage.push(
            <li key={index} className="list-unstyled components">
                {/* <div className="form-group row">
                    <div className="col-xm-1 col-form-label">
                        {convo.profilePicture ? <img src={convo.profilePicture} style={{ height: "50px", width: "50px" }} />
                            : <div className="square"> </div>}
                    </div>
                    <div className="col-sm-10">
                        <div className="form-inline">
                            <span className="font-weight-bold">{convo.author}</span>
                            <div className="col pl-md5-xs">
                                <span className="text-muted small list-inline">{convo.time.toString()}</span>
                            </div>
                        </div>
                        <div>{convo.message}</div>
                    </div>
                </div> */}
                <article className="">
                    {/* <div className=""> */}
                    {convo.profilePicture ? <img src={convo.profilePicture} style={{ height: "50px", width: "50px" }} />
                        : <div className="square"> </div>}
                    {/* </div> */}
                    <div className="messageContent">
                        <div className="authorInfo">
                            <span className="">{convo.author}</span>
                            {/* <div className=""> */}
                            <span className="">{convo.time.toString()}</span>
                        </div>
                        {/* </div> */}
                        <div>{convo.message}</div>
                    </div>
                </article>
            </li>
        )
    })
    if (displayMessage.length != 0)
        return (<ul >{displayMessage}</ul>);
    return <BlankComponent />
}

var InputComponent = (props) => {
    return (
        <div className="form-group" style={{ bottom: 0, position: 'fixed', width: '80%' }}>
            <form onSubmit={props.submit}>
                <input type="text" placeholder="Type your message here. Press Enter to send."
                    className="form-control" onChange={props.onChange} value={props.inputMessage} />
            </form>
        </div>
    );
}

class MessageComponent extends React.Component {

    render() {
        return (
            <div className="message">
                {/* <div style={{ width: '80%', padding: "15px" }} > */}
                <ConversationComponent conversation={this.props.conversation} />
                <InputComponent submit={this.props.onEnter} onChange={this.props.handleInput} inputMessage={this.props.inputMessage} />
                {/* </div> */}
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageComponent);