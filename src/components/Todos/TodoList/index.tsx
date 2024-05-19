// TodoList Component
import React from 'react'

import { unstable_noStore as noStore } from 'next/cache'
import { headers } from 'next/headers'

import Link from 'next/link'

import { getPayload } from 'payload'
import configPromise from '@payload-config'

import { Todo } from '@/payload-types'

const TodoList: React.FC = async () => {
    noStore()

    const payload = await getPayload({ config: configPromise })
    const { user } = await payload.auth({ headers: headers() })

    if (!user) {
        return (
            <p>
                ⛔️ You need to{' '}
                <Link
                    href="/admin/login"
                    className="prose-links text-blue-600 hover:underline"
                >
                    log in
                </Link>
            </p>
        )
    }

    const todos = await payload.find({ collection: 'todos', sort: 'createdAt', where: { user: { equals: user.id }}})
    return (
        <div>
            <h3>Welcome back, {user.fullName}!</h3>
            <br/>
            <ul>
                {todos.docs.map((todo: Todo) => (
                    <li key={todo.id} className="">
                        {todo.completed === true ? '✅' : '⏳'} <span className={todo.archived === true ? 'line-through' : ''}>{todo.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
