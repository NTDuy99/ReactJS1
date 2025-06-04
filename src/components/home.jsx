import { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import SubHome from "./subHome"

export default class Home extends Component{
    render(){
        return <div>
            <div className="header">
                <Header/>
            </div>
            <div>
                <SubHome />
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    }
}

// export default Home;