import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Homepage_Content from './homepage/Homepage_Content';
import Header from './Header';
import Footer from './Footer';
import Detail_Content from './Detailpage/Detail';
import About from './Aboutpage/About';

class App extends React.Component{
    state = {
        tValue: [],
    }
    HeaderValue = (headerValue) => {
        this.setState({
            tValue: headerValue,
        }); 
        console.log(this.state.tValue);
    }
    render(){
        console.log("in app.js file"+this.state.tValue);
        return (
            <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path='/' exact component={Homepage_Content} header = {(headerValue) => this.HeaderValue(headerValue)}/>
                    <Route path = '/details' exact component = {Detail_Content}></Route>
                    <Route path = '/about' exact component = {About}></Route>
                    <Route path = '/mission' exact component = {About}></Route>
                    <Footer />
    
                </div>
            </BrowserRouter>
        </div>
        );
    }
}

export default App;
