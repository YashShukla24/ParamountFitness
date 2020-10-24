import React, { Component } from 'react';
import Speech from 'react-speech';
import { Button, Input, Label, FormGroup, Alert } from 'reactstrap';

class Text2Speech extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          mytext : ''
        }
    }
    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })

    }
 
    handleClick = () => {
      this.setState({mytext: ''})
    }


    render() {


      
        const styles = {
            play: {
              button: {
                width: '5%',
                height: '28',
                cursor: 'pointer',
                pointerEvents: 'none',
                outline: 'none',
                backgroundColor: 'ghostwhite',
                border: 'solid 1px rgba(255,255,255,1)',
                borderRadius: 6,
                
                
 
              },
              
            },
            
            stop: {
                button: {
                  width: '28',
                  height: '28',
                  cursor: 'pointer',
                  pointerEvents: 'none',
                  outline: 'none',
                  backgroundColor: 'ghostwhite',
                  border: 'solid 1px rgba(255,255,255,1)',
                  borderRadius: 6
                  
   
                },
                
              },
              pause: {
                button: {
                  width: '28',
                  height: '28',
                  cursor: 'pointer',
                  pointerEvents: 'none',
                  outline: 'none',
                  backgroundColor: 'ghostwhite',
                  border: 'solid 1px rgba(255,255,255,1)',
                  borderRadius: 6
                  
   
                },
                
              },
              resume:{
                button: {
                  width: '28',
                  height: '28',
                  cursor: 'pointer',
                  pointerEvents: 'none',
                  outline: 'none',
                  backgroundColor: 'ghostwhite',
                  border: 'solid 1px rgba(255,255,255,1)',
                  borderRadius: 6
                  
   
                }
                
              },
          };
          
       
        return (
            
            <div>
   <center>

                <FormGroup>
               
                    <h1 style={{color:"Black",margin:"5px"}}>Type your Text Here:</h1>
                    <Input 
                    style={{backgroundColor: "#151B54 ",
                    border:"2px",width:"80%",
                    color: "white",
                    fontFamily: "family-name|generic-family|initial|inherit;",
                    margin:"15px",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
                    
                     type="textarea"
                      name="mytext" 
                      id="mytext"
                       placeholder="Your message *"
                        rows="25" cols="50"
                         value={this.state.mytext} 
                         onChange={(e) => this.handleChange(e)}  />
                        
             </FormGroup>

             <Button className="btn btn-dark" style={{margin:"5px"}} onClick={this.handleClick}>Refresh</Button>

                <Speech 
                
         
                  style ={styles} 
               
                   stop={true} 
                   pause={true} 
                   resume={true} 
                   
                    text={this.state.mytext}
                    pitch="0.5"
                    rate="0.5"
                    volume="1"
                    lang="en-GB"
                    voice="Daniel" />
                    <p>|Play|Stop|Pause|Resume|</p>

                
                    </center>
                   
            </div>
        );
    }
}
export default Text2Speech;