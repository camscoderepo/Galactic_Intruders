import React, { Component } from 'react';
import styled from 'styled-components';

const LinkStyle = styled.div`
position: absolute;
top: 10%;
left: 95%;
`




class Links extends Component {
    render() {
        return(<LinkStyle><a href="https:www.github.com">Github</a></LinkStyle>)
    }
}

export default Links;