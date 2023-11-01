import { View, Text, HStack, Button, Box, VStack, Center } from 'native-base';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useToast } from 'native-base';

interface IDashbordProps {}

export const Dashboard: React.FC<IDashbordProps> = () => {
    const [cupSize, setCupSize] = useState<number>(250);
    const [water, setWater] = useState<number>(0);
    const [goal, setGoal] = useState<number>(2000);
    const toast = useToast();

    const handleWater = () => {
        setWater(water + cupSize);
        toast.show({
            description: `Você bebeu ${cupSize}ml de água`
        })
    };

    const handleChangeCupSize = (size: number) => {
        setCupSize(size);
    };

    useEffect(() => {
        if (water >= goal) {
            toast.show({
                description: "Parabéns, você alcançou o objetivo!",
                placement: "top",
                colorScheme: "success",
            })
        }
    }, [water])

    return (
        <>
            <VStack flex={1} width='100%' justifyContent={'space-between'} alignItems={'center'} p={4} my={30}>
                <Text  fontSize="xs">
                      {' '} copo de {cupSize} ml
                </Text>
                <VStack>
                    <HStack alignItems="center" justifyContent="center">
                        <Text fontSize="6xl">
                            {water}
                        </Text>
                        <Text  fontSize="xl">
                          {' '}/  {goal} ml
                        </Text>
                    </HStack>
                    
                    <Button
                            mt={5}
                            colorScheme="primary"
                            onPress={handleWater}
                        >
                            Adicionar água
                    </Button>
                </VStack>
                <Box mt={10}>
                    <Button.Group >
                        <Button onPress={() => handleChangeCupSize(150)} colorScheme="teal">
                            Copo americano
                        </Button>
                        <Button onPress={() => handleChangeCupSize(200)} colorScheme="teal">
                            Copo 200ml
                        </Button>
                        <Button onPress={() => handleChangeCupSize(300)} colorScheme="teal">
                            Copo 300ml
                        </Button>
                        <Button onPress={() => handleChangeCupSize(500)} colorScheme="teal">
                            Xícara
                        </Button>
                    </Button.Group>
                </Box>
                
            </VStack>
        </>
    );
}
