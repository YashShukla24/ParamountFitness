import React, { Component } from "react";
import "./App.css";
import "."
import Header from "./components/Header";
import { OutTable } from "./components/OutTable";
import UploadExcel from "./components/UploadExcel";
import Navigation from "./components/NavigationBar";
import SimpleReactFileUpload from "./components/SimpleReactFileUpload";
import DemoAnkit from "./components/DemoAnkit";
import DemoDate from "./components/DemoDate";
import Nerraj from "./components/Nerraj";
import AddCustomer from "./components/AddCustomer";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
import First from "./components/First";
import Text2Speech from "./components/Text2Speech";
import Demo from "./components/Demo";
import Headerdemo from "./components/Headerdemo";
import Footerdemo from "./components/Footerdemo";
// import Createnote from "./components/Createnote";
import Note from "./components/Note";
// import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
// import Home from "./components/Home";
// import About from './components/About';
// import Slider from "./components/Slider";
// import ComA from "./components/ComA";
import  Useeffectdemo from "./components/Useeffectdemo";
// import Namewebchngdemo from "./components/Namewebchngdemo";
import Demoapipokemon from "./components/Demoapipokemon";
import Search from "./components/Search";
import {BrowserRouter} from "react-router-dom";
import Mainpro from "./components/Mainpro";
 class App extends Component {
 render() {
  return (
     <>
      {/* <Slider/> */}
       {/* <ComA/> */}
       {/* < Useeffectdemo/> */}
       {/* <Namewebchngdemo/> */}
       {/* <Demoapipokemon/> */}
       {/* <Search/> */}
       <BrowserRouter>
       <Mainpro/>
       </BrowserRouter>
      </>
//       // <>
//       // <Router>
//       //   <div>
      
//       // <Headerdemo/>
//       // <Switch>

//       //   <Route path="/" exact component={Home} />

//       //   <Route path="/about" component={About} />
//       // </Switch>
//       // </div>
      
//       // </Router>
//       // </>
//     //   <div className="Container">
         
//     //       {/* <Header/>
//     //         <First/>
//     //     <DemoAnkit/> 
//     //     <Footer/> */}
//     //   {/* <Text2Speech/> */}
//     //   {/* <Demo/> */}
     
//     // {/* <Createnote/>
//     // <Note/> */}
//     //   {/* <Footerdemo/> */}
//     //   </div>
//     );
//   }
// }
// const App = () => {
//   return (
//     <ComA/>

  );
};
 };
export default App;
