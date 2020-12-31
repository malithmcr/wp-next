import styled from 'styled-components';

export const CardWrapper = styled.div`
    border-radius: 4px;
    box-shadow: 0 3px 6px rgba(0,0,0,.1);
    font-family: Sans-Serif;
    cursor: pointer;
    max-width: 226px;
    height: 150px;
    width: 100%;
    margin: 15px;
    overflow: hidden;
    float: left;
    img{
        width: 100%;
    }
    p{
        font-size: 14px;
        margin-top: -89px;
        text-align: center;
        z-index: 999;
        color: red;
        font-weight: bold;
        position: relative;
    }
    canvas{
        width: 226px;
        height: 100%;
    }
`;
