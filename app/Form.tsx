"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Form() {
    const [title, setTitle] = useState("")
    const [error, setError] = useState(null)
    const router = useRouter()

    // Create a submit post
    async function submitPost(e: React.FormEvent) {
        e.preventDefault()
        setError(null)
        const data = await fetch(`/api/createPost`, {
            method: "POST",
            body: JSON.stringify({title})
        })
        const res = await data.json()
        router.refresh()
        if (!res.ok) setError(res.message)
    }
    return (
        <form onSubmit={submitPost}>
            <div>
                <label htmlFor="title" className="block text-sm font-medium leading-6">Title</label>
                <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" id="title" className="mt-2 block rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
            </div>
            {error && <p className="text-red-500 text-xs">{error}</p>}

            <button type="submit" className="bg-teal-700 text-black font-medium py-2 px-4 rounded-md mt-3 text-sm">Make a new post</button>
        </form>
    )
}
