import styled from "styled-components";


export const ContainerHeader = styled.div`

    display: flex;
    justify-content: center;
    background-color: #000000;
    height: 90px;
    align-items: center;
    color:  white;
    font-family: 'Times New Roman', Times, serif;
    

h1 {
    position: absolute;
    margin-right: 1300px;
    font-size: 30px;
}


ul {

    display: flex;
    justify-content: center;
    gap: 30px;
    margin-left: 1000px;
}

li {
    
    list-style: none;
    font-weight: 700;
    font-size:17px;
}

a {

    color: white;
    text-decoration: none;
}

img {
    position: absolute;
    margin-right: 78%;

}

button {
    margin-left: 20px;
    margin-bottom: 20px;
    height: 35px;
    width: 100px ;
    border-radius: 8px;
    color: white;
    font-weight: 700;

       transition: transform 0.2s ease-in-out; 
   &:hover {
     transform: scale(1.1);
   }


}

li:hover {
    color: #e94e77;
     transform: scale(1);
}

.Conect {
    background-color: black;
    margin-left: 55px;
    border: 2px solid #555353;
}
.Inscre {
    background-color: #e94e77;
    border: #e94e77 ;
    margin-left: 20px;
}

.Conect:hover {
    background-color: #2c2c2c;

}
.Conect,.Inscre {
  margin-top: 20px;
   position: relative;
}
`