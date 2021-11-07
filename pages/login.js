import React from 'react'
import tw from "tailwind-styled-components";

const Login = () => {
    return (
        <Wrapper>
            <Logo src="https://i.ibb.co/n6LWQM4/Post.png" />
            <Title>
            Log in to access your account 
            </Title>
            <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png"/>
            <SignInButton>
                Sign in with google
            </SignInButton>    

        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
flex flex-col w-screen h-screen bg-gray-200 p-4
`
const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full
`

const Logo = tw.img`
h-10 w-auto object-contain self-start
`


const Title = tw.div`
text-5xl pt-4 text-gray-500
`

const HeadImage = tw.img`
object-contain
`