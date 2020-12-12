import styled from 'styled-components';

import { Form as FormFormik} from 'formik';

export const Form = styled(FormFormik)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`



export const FormWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 0 20px;
position: relative;
@media (min-width: ${768}px) {
padding: 50px 100px;
box-shadow: 0 0 20px rgba(21,21,21,0.2);
}
`
export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: calc(100vh - 90px);
padding: 30px 0 0;


`
export const Text = styled.p`
color: #748194;
font-size: 30px;
text-align: center;
margin-bottom: 30px;
`


