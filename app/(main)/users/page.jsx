import UsersPage from '@/components/pages/Users';

export default async function Page() {
    const res = await fetch('http://localhost:3000/users')
    const users = await res.json()
    
    return <UsersPage users={users}/>;
}