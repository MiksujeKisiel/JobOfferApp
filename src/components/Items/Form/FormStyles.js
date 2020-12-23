import styled from 'styled-components';
import { Form as FormFormik} from 'formik';

export const Form = styled(FormFormik)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
@media (min-width: ${768}px) {
    width: 700px;   
    flex-direction: row;
    flex-wrap: wrap;                                                                                                      
}
@media (min-width: ${1440}px) {
    width: 1100px;   
    flex-direction: row;
    flex-wrap: wrap;                                                                                                      
}
`

export const FormWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 0 20px;
@media (min-width: ${768}px) {
padding: 10px;

}
`
export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 30px 0 0;
`
export const Text = styled.p`
color: #748194;
font-size: 30px;
text-align: center;
margin-bottom: 30px;
`


