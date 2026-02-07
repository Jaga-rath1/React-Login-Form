import { useState } from "react"
import "./Login.css";

export default function Login(){
    let[FormData,SetFormData] = useState({
        FirstName : "",
        MiddleName :"",
        LastName : "",
        Age : "",
        PassWord : ""

    });
    function HandleinpChange(event){
        let FieldName = event.target.name;
        let NewValue = event.target.value;
        SetFormData((currdata)=>{
           return{
            ...currdata,[FieldName] : NewValue
           };
        })
    }
     let Nimda = (event)=>{
        event.preventDefault();
        console.log(FormData);
        SetFormData({
            FirstName : "",
            MiddleName : "",
            LastName : "",
            Age : "",
            PassWord : ""
        });
     }

    return(
        <div className="login-container">
        <h2>Enter Your Information</h2>
        <br />
        <br />
        <form onSubmit={Nimda}>
        <label htmlFor="firstname">First Name : </label>
        <input
        type="text"
        placeholder="Enter Your First Name"
        id="firstname"
        name="FirstName"
        onChange={HandleinpChange}
        value={FormData.FirstName}
        >
        </input>
        <br />
        <br />
        <label htmlFor="middlename">Middle Name : </label>
        <input
        type="text"
        placeholder="Enter Your Middle Name"
        id="middlename"
        name="MiddleName"
        onChange={HandleinpChange}
        value={FormData.MiddleName}
        >
        </input>
        <br />
        <br />
        <label htmlFor="lastname">Last Name : </label>
        <input
        type="text"
        placeholder="Enter Your Last Name"
        id="lastname"
        name="LastName"
        onChange={HandleinpChange}
        value={FormData.LastName}
        >
        </input>
        <br />
        <br />
        <label htmlFor="age">D.O.B. : </label>
        <input
        type="date"
        placeholder="Enter Your Birth Date"
        id="age"
        name="Age"
        onChange={HandleinpChange}
        value={FormData.Age}
        >
        </input>
        <br />
        <br />
        <label htmlFor="password">PassWord : </label>
        <input
        type="password"
        placeholder="Enter Your Password"
        id="password"
        name="PassWord"
        onChange={HandleinpChange}
        value={FormData.PassWord}
        >
        </input>
        <br />
        <br />
        <button>Submit</button>
        </form>
        </div>
    )
}