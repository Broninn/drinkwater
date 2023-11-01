import React, {createContext, useState, useEffect} from "react";
import { IUser } from "../types/UserInterface";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IUserContext {
    user?: IUser;
    goal: number;
    getData: () => Promise<number>;
    storeData: (value: number) => Promise<void>;
}

const GOAL = 2000;
const USER = {
    name: "Bruno Mosko",
    photo: "https://www.github.com/Broninn.png",
}

export const UserContext = createContext<IUserContext>({
    goal: GOAL,
    user: USER,
    getData: () => Promise.resolve(GOAL),
    storeData: () => Promise.resolve(),
});

interface IUserProviderProps {
    children: React.ReactNode;
}

const STORE_KEY = "@goal";

export const UserProvider: React.FC<IUserProviderProps> =({children}) => {
    const [user] = useState<IUser>(USER)
    const [goal, setGoal] = useState<number>(GOAL)

    useEffect(() =>{
        getData().then((data) => setGoal(data));
    }, []);

    const storeData = async (value: number) => {
        try {
            setGoal(value);

            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(STORE_KEY, jsonValue);
        } catch (e) {
          // saving error
          console.error("save error", e)
        }
    };

    async function getData(): Promise<number> {
        try {
            const jsonValue = await AsyncStorage.getItem(STORE_KEY);
            return jsonValue != null ? JSON.parse(jsonValue) : GOAL;
        } catch (e) {
            console.error('Error reading value from storage', e)
            return GOAL;
        }
    }
    return (
        <UserContext.Provider value={{goal, user, getData, storeData}}>
            {children}
        </UserContext.Provider>
    )
}