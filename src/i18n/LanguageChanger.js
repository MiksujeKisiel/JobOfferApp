import React from 'react'
import styled from 'styled-components'
import { useTranslation } from '../components/Navbar/node_modules/react-i18next';

const Text = styled.p``
const Wrapper = styled.div``

const LanguageChanger = () => {
    const { i18n } = useTranslation();
    function handleClick(lang) {
        i18n.changeLanguage(lang);
    }
    return (
        <Wrapper>
            <Text onClick={()=>handleClick('en')}>en</Text>
            <Text onClick={()=>handleClick('pl')}>pl</Text>
        </Wrapper>
    )
}

export default LanguageChanger
