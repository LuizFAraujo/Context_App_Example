import { createContext, useState } from "react";


interface IUser {
    img: string | JSX.Element;
    name: string;
}

interface IAppContext {
    user?: IUser;
    updateUser(user: IUser): void;
}

export const AppContext = createContext<IAppContext>({
    user: undefined,
    updateUser: () => { }
});


export const AppProvider = ({ children }: { children: JSX.Element }) => {
    const [data, setData] = useState<IUser>()

    function updateUser(user: IUser) {
        console.log('updateUser called', user);
        setData(user);
    }

    return (
        <AppContext.Provider value={{ user: data, updateUser }}>
            {children}
        </AppContext.Provider>
    )
}