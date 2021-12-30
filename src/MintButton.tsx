import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { CandyMachine } from './candy-machine';
import { CircularProgress } from '@material-ui/core';
import { GatewayStatus, useGateway } from '@civic/solana-gateway-react';
import { useEffect, useState } from 'react';
import Countdown from "react-countdown";
import {
    toDate,
} from './utils';

export const CTAButton = styled(Button)``; // add your styles here

export const CounterText = styled.span``; // add your styles here

export const MintButton = ({
    onMint,
    candyMachine,
    isMinting,
}: {
    onMint: () => Promise<void>;
    candyMachine: CandyMachine | undefined;
    isMinting: boolean;
}) => {
    const { requestGatewayToken, gatewayStatus } = useGateway();
    const [clicked, setClicked] = useState(false);
    const [isActive, setIsActive] = useState(false); // true when countdown completes

    useEffect(() => {
        if (gatewayStatus === GatewayStatus.ACTIVE && clicked) {
            console.log('Minting');
            onMint();
            setClicked(false);
        }
    }, [gatewayStatus, clicked, setClicked, onMint]);
    return (
        <CTAButton
            disabled={
                candyMachine?.state.isSoldOut ||
                isMinting ||
                !isActive
            }
            onClick={async () => {
                setClicked(true);
                if (isActive && candyMachine?.state.gatekeeper) {
                    if (gatewayStatus === GatewayStatus.ACTIVE) {
                        setClicked(true);
                    } else {
                        await requestGatewayToken();
                    }
                } else {
                    await onMint();
                    setClicked(false);
                }
            }}
            variant="contained"
        >
            {!candyMachine ? (
                "CONNECTING..."
            ) : candyMachine?.state.isSoldOut ? (
                'SOLD OUT'
            ) : isActive ? (
                isMinting ? (
                    <CircularProgress />
                ) : (
                    "MINT"
                )
            ) : (candyMachine?.state.goLiveDate ? (
                <Countdown
                    date={toDate(candyMachine?.state.goLiveDate)}
                    onMount={({ completed }) => completed && setIsActive(true)}
                    onComplete={() => {
                        setIsActive(true);
                    }}
                    renderer={renderCounter}
                />
            ) : (
                "UNAVAILABLE"
            ))}
        </CTAButton>
    );
};

const renderCounter = ({ days, hours, minutes, seconds }: any) => {
    return (
        <CounterText>
            {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
        </CounterText>
    );
};