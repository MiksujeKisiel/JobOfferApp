import styled from 'styled-components';
import {Link } from 'react-router-dom';

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
.group{
    margin: 10px 0;
    width: 100%;
}


`

export const StyledLink = styled(Link)`
color: #7481A1;
font-size: 13px;

`

export const FormWrapper = styled.div`
display: flex;
flex-direction: column;
max-width: 300px;
padding: 0 20px;
`
export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: calc(100vh - 100px);
padding: 30px 0 0;

.links{
    margin-top: 10px;
    p{
        font-size: 12px;
        margin-top: 10px;
    }
}
`
export const Text = styled.p`
color: #748194;
font-size: 30px;
text-align: center;
margin-bottom: 30px;
`
export const Label = styled.label`
font-size: 14px;
color: #7481A1;


`
export const Input = styled.input`
width: 100%;
border: none;
background: #F4F5F8;
padding: 10px;
display: block;

`
export const Button = styled.button`
width: 150px;
background-color: #8F90DA;
border: none;
color: white;
margin: 20px 0;
padding: 10px 5px;
border-radius: 5px;
font-size: 16px;
`

