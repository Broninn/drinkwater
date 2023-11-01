import React, {createContext, useState} from "react";
import { IUser } from "../types/UserInterface";

interface IUserContext {
    user?: IUser;
    goal: number;
    setGoal: React.Dispatch<React.SetStateAction<number>>;
}

const GOAL = 2000;
const USER = {
    name: "Bruno Mosko",
    photo: "https://www.github.com/Broninn.png",
}

export const UserContext = createContext<IUserContext>({
    goal: GOAL,
    setGoal: () => {},
    user: USER,
});

interface IUserProviderProps {
    children: React.ReactNode;
}


export const UserProvider: React.FC<IUserProviderProps> =({children}) => {
    const [user] = useState<IUser>(USER)

    const [goal, setGoal] = useState<number>(GOAL)
    return (
        <UserContext.Provider value={{goal, setGoal, user}}>
            {children}
        </UserContext.Provider>
    )
}