import React from 'react'
import { connect } from 'react-redux'
import SideBarComponent from './SideBarComponent'
import MessagesComonent from './MessagesComonent';

class App extends React.Component {
    render() {
        return (
            // <div className="container">
            //     <div className="row">
            //         <div className="col col-2">
            //             <SideBarComponent />
            //         </div>
            //         <div className="col col-10">
            //             <MessagesComonent />
            //         </div>
            //     </div>
            // </div>
            <div className="wrapper">
                <SideBarComponent />
                <MessagesComonent />
            </div>
        )
    }
}

export default App;