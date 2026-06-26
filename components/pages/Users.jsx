const UsersPage = ({users}) => {


    return (
            <div className={"w-full p-4"}>
                <table className={"table w-full"}>
                    <thead>
                    <tr className={"h-8"}>
                        <td className={"bg-gray-800 rounded-r-md"}>#</td>
                        <td className={"bg-gray-800"}>نام کاربر</td>
                        <td className={"bg-gray-800"}>ایمیل</td>
                        <td className={"bg-gray-800 rounded-l-md"}>تلفن</td>
                    </tr>
                    </thead>

                    <tbody>
                  {users.map(u=>(
                    <tr key={u.id}>
                        <td className={"bg-gray-600 rounded-r-md"}>{u.id}</td> 
                        <td className={"bg-gray-600 rounded-r-md"}>{u.name}</td> 
                        <td className={"bg-gray-600 rounded-r-md"}>{u.email}</td> 
                        <td className={"bg-gray-600 rounded-r-md"}>{u.phone}</td> 
                    </tr>
                  ))}      
                    </tbody>
                </table>

            </div>
        );
};


export default UsersPage;