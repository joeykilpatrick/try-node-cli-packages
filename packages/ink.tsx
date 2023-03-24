import React, { useState, useEffect } from 'react';
import { ForegroundColorName } from "chalk";
import { render, Box, Text, Spacer } from 'ink';

const Counter = (props: { color?: ForegroundColorName }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter(previousCounter => previousCounter + 1);
        }, 100);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return <Text color={props.color}>{counter} tests passed</Text>;
};

render(
    <Box flexDirection="column" height={5}>
        <Counter color="red"/>
        <Counter color="yellow"/>
        <Counter color="green"/>
        <Spacer/>
        <Text>Press Ctrl+C to close.</Text>
    </Box>
);
