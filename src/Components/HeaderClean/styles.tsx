import styled from "styled-components";


export const ContainerHeaderClean = styled.div`

    display: flex;
    justify-content: center;
    background-color: #000000;
    height: 90px;
    align-items: center;
    color:  white;

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

input {
    position: absolute;
    width: 400px;
    height: 32px;
    padding: 5px 10px;
    border-radius: 8px;
    background-color: #202020;
    color: white;
    font-size: 16px;

    border: 2px solid #e94e77;
    animation: pulseBorder 2s infinite ease-in-out;
}

@keyframes pulseBorder {
    0% {
        box-shadow: 0 0 8px 2px rgba(233, 78, 119, 0.4);
    }
    50% {
        box-shadow: 0 0 16px 4px rgba(233, 78, 119, 1);
    }
    100% {
        box-shadow: 0 0 8px 2px rgba(233, 78, 119, 0.4);
    }
}

input:focus {
    outline: none;
    box-shadow: 0 0 16px 4px rgba(233, 78, 119, 1); 
    border: 2px solid #e94e77;

}

::placeholder {

    padding-left: 15px;
    color: #fafafa;
    font-size: 13px;
    font-weight: 600;
}

.Procurar {
    margin-left: 1250px;
    
}

.Rosto {

    margin-left: 2900px;
    border-radius: 100px;
}

`