import React from 'react'
import styled from "styled-components"
import {Link, NavLink, useNavigate, Navigate}from "react-router-dom";
import "./header.css"
import {app} from "../base"


const Header = () => {
    return (
        <Container>
        <Wrapper>
                <Logo />
            <Nav>
                <Navlinks to="/" activeClassName="active">View</Navlinks>
                <Navlinks to="addScreen" activeClassName="active">
                    {' '}
                    Add</Navlinks>
                <Login to="Login" activeClassName="active">
                {' '}
                    Login</Login>
                <Login1 onClick={()=>{
                    app.auth().signOut();
                }}>Logout</Login1>
            </Nav>
        </Wrapper>
    </Container>
    )
}

export default Header


const Container = styled.div`
width: 100%;
height: 70px;
display: flex;
align-items: center;
justify-content: center;
background-color: lightgray;
`
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const Nav = styled.div`
width: 60%;
height: 80%;
margin-left: 5%;
margin-right: 5%;
/* background-color: red; */
display: flex;
align-items: center;
justify-content: center;
`
const Logo = styled.div`
width: 60px;
height: 60px;
background-color: white;
border-radius: 50px;
`

const Navlinks = styled(NavLink)`
width: 70px;
height: 40px;
/* padding: 15px; */
margin-left: 40px;
margin-right: 40px;
background-color: white;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
transition: all 350ms;
transform: scale(1);
text-decoration: none;

:hover{
    transform: scale(1.08);
    background-color: lightskyblue;
    cursor: pointer;
}`
const Login = styled(NavLink)`
width: 70px;
height: 40px;
/* padding: 15px; */
margin-left: 40px;
margin-right: 40px;
background-color: white;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
transition: all 350ms;
transform: scale(1);
text-decoration: none;

:hover{
    transform: scale(1.08);
    background-color: lightskyblue;
    cursor: pointer;
}`
const Login1 = styled.div`
width: 70px;
height: 40px;
/* padding: 15px; */
margin-left: 40px;
margin-right: 40px;
background-color: white;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
transition: all 350ms;
transform: scale(1);
text-decoration: none;

:hover{
    transform: scale(1.08);
    background-color: lightskyblue;
    cursor: pointer;
}`
const Register = styled(NavLink)`
width: 70px;
height: 40px;
/* padding: 15px; */
margin-left: 40px;
margin-right: 40px;
background-color: white;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
transition: all 350ms;
transform: scale(1);
text-decoration: none;

:hover{
    transform: scale(1.08);
    background-color: lightskyblue;
    cursor: pointer;
}`
