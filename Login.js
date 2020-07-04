import React,{Component} from "react"
//import { ReactComponent } from "*.svg"
import DashBoard from "./DashBoard";


class Login extends Component{
    constructor(){
        super();
        this.state = {
            user:"",
            pass:"",
            userError:"",
            passError:""
        };
        this.changevalue=this.changevalue.bind(this)
        
    }
    changevalue(event){
        event.preventDefault();
        this.setState({
           [event.target.name]:event.target.value
        });
    }
    Validate=()=>{
        let userError="";
        let passError="";
        
            if(!this.state.user.includes("@"))
            {
                userError="Invalid User";
            }
         
            if(this.state.pass>7)
            {
            passError="Plz enter minimum 8 char";
            }
            if(userError || passError){
                this.setState({userError,passError});
                return false;
            }
        
       
        
    return true;
    }
    onClick=()=>{        
        const isvalid=this.Validate();
        if(isvalid){
        if(this.state.user === "dhanu@" && this.state.pass === "dhanu"){
            return(
                
                <div>
                    <DashBoard />
                </div>
            
                
            )}
            else{
                alert("Invalid Login");
            }
        }
            return true;
     }
     

render(){
    return(
         <div className="App-header">
             <h1 style={{textAlign:"center",color:"gray"}}>LOGIN PAGE</h1>  
              
       <form style={{textAlign:"center"}}>
         <input type="text" name="user" placeholder="UserName" value={this.state.user} onChange={this.changevalue} />
           <div style={{color:"red"}}>{this.state.userError}</div>
           <input type="password" name="pass" value={this.state.pass} placeholder="Password" onChange={this.changevalue}/>
           <div  style={{color:"red"}}>{this.state.passError}</div>
           
           <button type="submit"  onClick={this.onClick}>LogIn</button>
        </form>
       </div>
       
       )
       }

       
    
    
}
export default Login