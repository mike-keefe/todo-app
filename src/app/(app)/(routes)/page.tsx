import TodoList from '@/components/Todos/TodoList'
import SiteHeader from '@/components/Common/SiteHeader'

export default function Home() {
    return (
        <div className="container mx-auto my-10">
            <SiteHeader />
            <TodoList />
        </div>
    )
}
