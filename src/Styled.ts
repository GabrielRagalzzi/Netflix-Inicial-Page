import { styled } from "styled-components";

export const StyledApp = styled.div`

        header{
            color: red;
            display: flex;
            justify-content: initial;
            margin-left: 20%;
            position: absolute;

            font-family: Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif;
        }

        .page{
            display: flex;
            justify-content: center;
            align-items: center;

            position: relative;
        }
        .page::before{
            content: "";
            position: absolute; 
            background-image: url("https://isquad.tv/wp-content/uploads/2018/08/Netflix-Background.jpg");
            background-repeat: no-repeat;
            filter: brightness(50%);
            height: 100%;
            width: 100%;
            background: cover;
            z-index: -1;
        }

        .login{
            width: 450px;
            height: 500px;

            margin-top: 9%;

            display: flex;
            justify-content: center;
            flex-direction: column;
            position: relative;
            
            gap: 13px;
            
            color: white;

        }
        .login::before{
            content: "";
            position: absolute;
            z-index: -1;

            width: 400px;
            height: 100%;

            padding: 25px;
            
            opacity: 70%;

            background-color: black;

        }
        .inputs{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            gap: 8px;
        }
        .inputsBox{
            width: 22vw;
            height: 37px;

            background-color: #10100F;
            opacity: 90%;
            
            border-radius: 2px;
            border-color: grey;
            border-width: 1px;
            border-style: double;

            color: white;

            padding: 8px; 
        }
        #selectLang{
            display: flex;
            justify-content: initial;
            align-items: center;

            width: 130px;
            height: 15px;
        }
        #select{
                width: 140px;
                font-size: 15px;

                padding-left: 5px;

                background-color: transparent;
                color: white;

                option{
                    color: black;
                }
            }
        .inputsVoid{
            width: 22vw;
            height: 37px;

            background-color: black;
            opacity: 95%;
            
            border-radius: 2px;
            border-color: #F01615;
            border-width: 1px;
            border-style: double;

            color: white;

            padding: 8px;
        }
        .signs{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            gap: 15px;

            opacity: 100%;
        }
        .endPage{
            height: 250px;
            display: flex;
            flex-direction: column;

            background-color: black;
            padding-top: 250px;
            padding-left: 150px;
            gap: 20px;
        }
        
        
        .signIn{
            width: 23vw;
            padding: 11px;
            border-radius: 2px;
            font-size: 16px;
            

            background-color: #F01615;
            color: whitesmoke;
            cursor: pointer;
        }
        .signCode{
            width: 23vw;
            padding: 11px;
            border-radius: 2px;
            font-size: 16px;

            background-color: #333334;
            color: whitesmoke;
            cursor: pointer;
        }
        .remember{
            display: flex;
            align-items: center;
            flex-direction: row;

            gap: 15px;
            padding-left: 65px;

            color: white;
        }
        .nowSign{
            display: flex;
            flex-direction: row;

            gap: 5px;
            padding-left: 65px;
        }
        #signIn{
            padding-top: 50px;
            padding-left: 65px;
            padding-bottom: 13px;

            font-size: 32px;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        #check{
            cursor: pointer;
            border-radius: 1mm;
            border-width: 2px;
            
            width: 20px;
            height: 20px;
        }
        #textInput::placeholder{
            padding-left: 5px;
            font-size: 15px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #B6B3B1;
        }
        .Links{

        }
        #endLinks{
            font-size: 13px;
            text-decoration: underline;
        }
        .inline{
            display: flex;
            flex-direction: row;
        }
        .ulM{
            display: flex;
            flex-direction: row;
            max-width: 1000px;

        }
        ul{
            display: flex;
            flex-direction: column;
        }
        li{
            padding-right: 130px;
            padding-bottom: 22px;
        }
        .white{
            color: white;
        }
        a{
            color: #B6B3B1;

        }
        a:hover{
            text-decoration: underline;
        }
        #passwordLink:hover{
            cursor: pointer;
            color: #B6B3B1;
        }
        p{
            color: #B6B3B1;
        }
        .alert{
            color: #F01615;
            font-size: 13px;
            font-weight: bold;
            max-width: 320px;
            font-family: Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif;
        }
        .alertoff{
            color: #F01615;
            font-size: 1px;
            opacity: 0%;
        }
        .messageBox{
            color: grey;
            font-size: 13px;

            max-width: 300px;
            padding-top: 17px;
            padding-left: 65px;

            a{
                color: cornflowerblue;
            }
        }
        header{
            margin-top: 5px;
            margin-left: 150px;
        }
        img{
            width: 190px;
        }
        
`;