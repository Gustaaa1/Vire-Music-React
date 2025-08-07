import styled from "styled-components";

export const ContainerHome = styled.div` 


`
export const ContainerMain = styled.div`

h1{

    display: flex;
    justify-content: center;
    font-size: 140px;
    font-weight: 800;
    font-family: "Poppins", sans-serif;
    align-items: center;
    text-align: center;
}   

p {

    display: flex;
    justify-content: center;
    font-size: 30px;
    font-weight: 900;
    margin-top: 10px;
     font-family: "Poppins", sans-serif;
   
}

.onde {
    margin-top: 100px;
    line-height: 1.0;
  
}

button {
    position: absolute;
    margin-left: 860px;
    margin-top: 30px;
    height: 38px;
    width: 180px;   
    border-radius: 8px;
    border: 2px solid #e94e77 ;
    color: white;
    background-color:#e94e77 ;
    font-weight: 700;
    font-family: "Poppins", sans-serif;

       transition: transform 0.2s ease-in-out; 
   &:hover {
     transform: scale(1.1);
   }
}

.Estrelas {
   display: flex;
   justify-content: center;
   margin-top: 120px;


}
 .Estrelap{
  font-size: 20px;
  font-weight: 400;
}
`

export const SubMain = styled.div`

    background-color: #000000;
    margin-top: 90px;
    height: 1000px;
    display: flex;
    justify-content: center;


h3 {
    margin-top: 80px;
    font-size: 30px;
    font-weight: 700;
    position: absolute;
    color: white;
     font-family: "Poppins", sans-serif;
}

.premium {
    width: 320px;
    height: 400px;
    background-color: #fafafa;
    margin-top: 190px;
    position: absolute;
    margin-right: 800px;
    text-align: center;
    padding-top: 20px;
    border-radius: 8px;
    margin-left: 320px;
}

.Free {
    width: 320px;
    height: 440px;
    background-color: #232227;
    color: white;
    margin-top: 170px;
    position: absolute;
    margin-right: 800px;
    text-align: center;
    padding-top: 20px;
    border-radius: 8px;
    margin-left: 1300px;
}

h4 {
    background-color: #e94e77 ;
    width: 120px;
    height: 28px;
    margin-left: 90px;
    padding-top: 3px;
    color: white;
    border-radius: 8px;   
     font-family: "Poppins", sans-serif;
}
h2 {
    font-size: 35px;
    margin-top: 15px;
    font-weight: 900;
     font-family: "Poppins", sans-serif;

}

p {
   font-size: 16px;
   font-weight: 700;
   margin-top: 10px;

}
button {

    margin-top: 40px;
    height: 35px;
    width: 200px ;
    border-radius: 8px;
    border: solid 1px #e94e77 ;
    color: white;
    background-color: #e94e77;
    font-weight: 700;
    font-family: "Poppins", sans-serif;

       transition: transform 0.2s ease-in-out; 
   &:hover {
     transform: scale(1.1);
   }
}

.butt {
    position: absolute;
    margin-top: 660px;
    height: 35px;
    width: 235px ;
    border-radius: 8px;
    color: #000000;
    border: solid 1px #fafafa;
    background-color: #fafafa;
    font-weight: 700;

       transition: transform 0.2s ease-in-out; 
   &:hover {
     transform: scale(1.1);
   }
}

.flap {
    color: #9e999a;
}

h1 {
   
    font-size: 27px;
    color: white;
    margin-top: 770px;
    text-align: center;
    font-family: "Poppins", sans-serif;
    z-index: 1;
        text-shadow:
        0 6px 24px #000,      /* sombra preta mais forte */
        0 2px 4px #000,       /* sombra preta adicional */
        0 1px 1px #e94e77,    /* brilho rosa */
        0 0 8px #e94e77;      /* brilho rosa mais espalhado */

}


`