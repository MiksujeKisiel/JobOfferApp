import React from 'react'
import styled from 'styled-components'
import LanguageChanger from '../../i18n/LanguageChanger';
const Wrapper = styled.footer``
const Text = styled.p``

const Footer = () => {
    return (
        <Wrapper>
            <LanguageChanger/>
        </Wrapper>
    )
}

export default Footer
