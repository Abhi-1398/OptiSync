import logo from './logo.svg';
import './App.css';
//  
import Image1 from './components/Image';
import Names from './components/Names';
import Date1 from './components/Date';
import CalCulator from './components/Calculator';
import GetExpRESTComp from './components/RestApi1Comp';
import { InsertEmpForm } from './components/EmpInsertComp'; 
import FormValidation from './components/FormValidation';
import Header from './components/Header';
import AddContact from './components/AddContact';
import StyledMsg from './components/Q2Change_Color&Size';
import StudentForm from './components/StudentForm_095';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
         
        </a> */}
        {/* <h1>
             CALCULATOR
          </h1> */}
        {/* <Image1/>
        <Names names={['sumit','siya']}/>
         <Date1/>  */}
       <CalCulator/>
         {/* <GetExpRESTComp/>
        <InsertEmpForm/>
        <FormValidation/> */}
        {/* <Header/>
        <AddContact/> */}
        {/* <StyledMsg/> */}
     {/* <StudentForm_095/>*/}
      </header>
    </div>
  );
}

export default App;
