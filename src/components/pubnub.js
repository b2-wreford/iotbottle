import React, { Component } from 'react';
import PubNubReact from 'pubnub-react';
 
export default class Pubnub extends Component {
   
    constructor(props) {
       
        super(props);
        this.pubnub = new PubNubReact({
            publishKey: 'pub-c-47dade9e-8394-4adc-9f0d-669e94d10a08',
            subscribeKey: 'sub-c-67756fce-415f-11e8-8bb7-3ab51ec5ed79'

        });
        this.pubnub.init(this);


        this.pubnub.history(

                {
                    channel:"ArdChannel",
                    count: 50
                },

                (function(status, response){

                    console.log("response", response)


                })                

            )

          }
 
    componentWillMount() {
        this.pubnub.subscribe({
            channels: ['ArdChannel'],
            withPresence: true
        });
 
        this.pubnub.getMessage('ArdChannel', (msg) => {
           
            console.log(msg);
           
            this.setState ({millD:msg.message.millC})

        });
 
        this.pubnub.getStatus((st) => {
           /* this.pubnub.publish({
                message: 'hello world from react',
                channel: 'ArdChannel'
            });*/
        });
    }

   
    render() {
        const messages = this.pubnub.getMessage('ArdChannel');
        return (
            <div className="container-fluid">
            <div className="messagebox">
            Daily Intake <b>: {this.state.millD} ml</b>
            <ol>
            {}
            {messages.map((m, index) => <li key ={'message' + index}>{m.message.millC}</li>)}
            </ol>
            </div>
            <div className="history">
            
            
            </div>
                
            </div>

        );
    }
}