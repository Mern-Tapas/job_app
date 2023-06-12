'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/components/Logo'
import axios from 'axios'
import { useRouter } from 'next/navigation'
function Page() {

    const router = useRouter()
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const inputHandler = (e) => {
        const { name, value } = e.target
        setCredentials((pre) => {
            return { ...pre, [name]: value }
        })
    }


    const login = async (e) => {
        e.preventDefault()
        await axios.post("/api/control_panal", credentials).then((response) => {
            console.log(response)
            router.push('login')

        }).catch((error) => {
            console.log(error)
        })

    }

    return (
        <div className='min-h-screen'>

            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Logo />
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>

                        <div className='flex justify-center'>

                            <button className='me-2 border p-2 rounded-md flex'>
                                <div className='w-[20px] h-[20px]'>
                                    <Image
                                        src="/icons/google.svg"
                                        alt="Description of the image"
                                        width={10}
                                        height={10}
                                    />
                                </div>
                                <span className='ms-2 p-0 m-0'>Google</span>
                            </button>
                            <button className='me-2 border p-2 rounded-md flex'>
                                <div className='w-[20px] h-[20px]'>
                                    <Image
                                        src="/icons/facebook.svg"
                                        alt="Description of the image"
                                        width={10}
                                        height={10}
                                    />
                                </div>
                                <span className='ms-2 p-0 m-0'>Facebook</span>
                            </button>

                        </div>

                        <form className="space-y-4 md:space-y-6" onSubmit={login}>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input onChange={inputHandler} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input onChange={inputHandler} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link href="signup" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page