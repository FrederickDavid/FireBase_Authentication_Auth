import React from 'react'
import styled from 'styled-components'
import {app} from "../base"
import {NavLink, useNavigate} from "react-router-dom"

const AddScreen = () => {
    const navigate = useNavigate()
    const [quote, setQuote] = React.useState("")
    const [author, setAuthor] = React.useState("")
    const pushData = async ()=>{
        await app.firestore().collection("Quotes").add({
            quote,
            author,
        })
    navigate("/")
    }
    return (
        <Container>
            <Card>
                <InputTab>
                <Text>Quote</Text>
                <Input placeholder="Enter your quote" 
                 value={quote}
                 onChange={(e)=>{
                     setQuote(e.target.value)
                 }} 
                />
                </InputTab>
                <InputTab>
                <Text>Author</Text>
                <Input placeholder="The name of author"
                value={author}
                onChange={(e)=>{
                    setAuthor(e.target.value)
                }}
                />
                </InputTab>
                <Add to="/"
                onClick={()=>{
                    pushData()
                }}>Add</Add>
            </Card>
        </Container>
    )
}

export default AddScreen

const Add = styled.div `
width: 30%;
height: 40px;
background-color: red;
display: flex;
align-items: center;
justify-content: center;
color: white;
font-weight: bold;
border-radius: 4px;
transition: all 350ms;
transform: scale(1);
:hover{
    cursor: pointer;
    transform: scale(1.012);
    /* color: red; */
    box-shadow: 1px 1px 5px lightgray;
}
`
const InputTab = styled.div `
width: 95%;
height: 30%;
/* background-color: lightgray; */
margin-top: 7px;
display: flex;
flex-direction: column;
align-items: center;
`
const Text = styled.div `
width: 100%;
height: auto;
font-size: 13px;
font-weight: bold;
margin-bottom: 2px;
`
const Input = styled.input `
width: 95%;
height: 50%;
outline: none;
border-radius: 4px;
border: 1px solid grey;
`

const Container = styled.div `
width: 100%;
height: auto;
/* background-color: white; */
margin-top: 50px;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`
const Card = styled.div `
width: 20%;
height: 250px;
border-radius: 6px;
/* background-color: red; */
margin: 30px;
display: flex;
align-items: center;
flex-direction: column;
border: 1px solid grey;
/* transition: all 350ms;
transform: scale(1); */
:hover{
    cursor: pointer;
    /* transform: scale(1.012); */
    /* color: red; */
    box-shadow: 1px 1px 5px lightgray;
}
`