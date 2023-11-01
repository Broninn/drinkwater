import { View, Text } from 'native-base';
import * as React from 'react';

interface IPageProps {}

export const Page: React.FC<IPageProps> = () => {
    return (
        <>
            <View>
                <Text>Page</Text>
            </View>
        </>
    );
}
