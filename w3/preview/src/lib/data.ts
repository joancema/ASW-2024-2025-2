interface IUser{
    id:number;
    name:string;
    email:string;
}
interface IOption{
    id:number;
    name:string;
    url:string;
}
interface IPermission{
    id:number;
    userId:number;
    permissionId:number;
}
const users:IUser[]=[
    {
        id:1,
        name:'John Doe',
        email:'johndoe@hotmail.com'
    },
    {
        id:2,
        name:'Jane Doe',
        email:'Jane@hot.com'
    }
]
const options:IOption[]=[
    {
        id:1,
        name:'Home',
        url:'/'
    },
    {
        id:2,
        name:'About',
        url:'/about'
    },
    {
        id:3,
        name:'Contact',
        url:'/contact'
    }
]
const permissions:IPermission[]=[
    {
        id:1,
        userId:1,
        permissionId:1
    },
    {
        id:2,
        userId:2,
        permissionId:2
    }
]

export {
    users,
    options,
    permissions,
    IUser,
    IOption,
    IPermission
}