import { Avatar, Box, Button, Divider, Input, Slider, Text } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../contexts/UserContext";

interface ProfileScreenProps {
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
}) => {
    const [local, setLocal] = useState<number>(9999)
    const {goal, user, setGoal, setUser} = useContext(UserContext)

    // useEffect(() => {
    //     getData().then((data) => {
    //         setLocal(data);
    //     });
    // }, []);


    return (
        <SafeAreaView>
            <Avatar bg="green.500" alignSelf="center" size="2xl" source={{
                uri: user?.photo || undefined,
            }}>
                {user?.name.substring(0,1)}
            </Avatar>
            <Text alignSelf="center" fontSize="2xl" mt={4}>
                {user?.name}
            </Text>
            <Input defaultValue={user?.name} 
            onChangeText={(value) => {
                setUser({...user, name: value});
            }}
            placeholder="Default Input"  />
            
            
            <Divider my={10} />
            <Box mx={20}>
                <Text fontSize="xl" textAlign="center" mt={4}>
                    Meta de água
                </Text>
                <Text fontSize="xl" textAlign="center" mt={4}>
                    {goal}ml
                </Text>
                <Slider 
                    defaultValue={goal} 
                    value={goal}
                    minValue={0} 
                    maxValue={4000} 
                    onChange={(value) =>setGoal(value)}
                    step={100}
                >
                    <Slider.Track>
                        <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                </Slider>
            </Box>

        </SafeAreaView>
    );
}