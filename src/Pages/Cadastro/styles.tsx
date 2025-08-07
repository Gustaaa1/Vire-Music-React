import styled from "styled-components";



export const ContainerCadastro =styled.div `


`



export const CadastroMain = styled.div`

  background-color: black;
  height: 919px;

h1 {
     
     display: flex;
     justify-content: center;
     color: white;
     padding-top: 150px;
     font-family: "Poppins", sans-serif;
}



 .form-container {

     display: flex;
     justify-content: center;
     margin: 40px auto;
     padding: 24px;
     border-radius: 8px;
     margin-top: 10px;
     
      }
      form {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }
      label {
        font-weight: 500;
        color: #acacac;
      }

      ::placeholder {
      padding-left: 10px;
      color: #acacac;
      

      }
      input {
        height: 35px;
        width: 350px;
        background-color: #313131;
        border: 1px solid #313131;
        border-radius: 4px;
        font-size: 1rem;
        margin-top: 2px;
        color: white;
     
       
      }
      button {
        width: 350px;
        margin-top: 10px;
        padding: 10px;
        background: #e94e77;
        color: #fff;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;
        font-family: "Poppins", sans-serif;
        
      }
      button:hover {
        background: #797979;
      }
    

`