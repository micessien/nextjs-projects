import React from 'react'

interface ListsProps {
    posts: {id: number, title: string, content: string}[]
}

const Lists: React.FC<ListsProps> = ({posts}) => {
  return (
    <ul role="list" className="divide-y divide-gray-100">
        {posts.map((post) => (
        <li className="py-2" key={post.id}>
            <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6">{post.title}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{post.content}</p>
                </div>
            </div>
        </li>
        ))}
    </ul>
  )
}

export default Lists