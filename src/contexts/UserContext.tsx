import React, {createContext, useState, useEffect} from "react";
import { IUser } from "../types/UserInterface";
import { usePersistState } from "../hooks/usePersistState";

interface IUserContext {
    user?: IUser;
    goal: number;
    setGoal: (value: number) => Promise<void>;
    setUser: (value: IUser) => Promise<void>;
}

const GOAL = 2000;
const USER = {
    name: "Bruno Mosko",
    photo: "https://www.github.com/Broninn.png",
}

export const UserContext = createContext<IUserContext>({
    goal: GOAL,
    user: USER,
    setGoal: () => Promise.resolve(),
    setUser: () => Promise.resolve(),
});

interface IUserProviderProps {
    children: React.ReactNode;
}


export const UserProvider: React.FC<IUserProviderProps> =({children}) => {
    const [user, setUser] = usePersistState<IUser>(USER, "@user")
    const [goal, setGoal] = usePersistState<number>(GOAL, 'goal1')

    
    return (
        <UserContext.Provider value={{goal, user, setGoal, setUser}}>
            {children}
        </UserContext.Provider>
    )
}