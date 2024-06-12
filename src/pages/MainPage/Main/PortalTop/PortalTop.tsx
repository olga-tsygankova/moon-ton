import styled from 'styled-components';

const Portal = styled.div`
    width: 390px;
    height: 195px;
    position: relative;
    overflow: hidden;
    margin-top: 273px;
    margin-right: auto;
    margin-left: auto;

    svg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
`;

const LineMain = styled.div`
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid;
        border-image-source: linear-gradient(180deg, rgba(54, 54, 54, 0) 0%, #363636 128.57%);
        border-image-slice: 1;
    }
`;

const Beam = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;

    &:nth-child(1),
    &:nth-child(3),
    &:nth-child(5) {
        &:before {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            border: 3px solid;
            border-image-source: linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
            border-image-slice: 1;
        }
    }
`;

export const PortalTop = () => {
    return (
        <Portal>
            <svg width="390" height="195" viewBox="0 0 390 195" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M198.5 145L387 75.5L198.5 2L3.5 75.5L198.5 145ZM198.5 145V193.5M198.5 193.5L387 119M198.5 193.5L3.5 121"
                    stroke="black"
                    strokeWidth="2"
                />
                <path
                    d="M198.5 145L387 75.5L198.5 2L3.5 75.5L198.5 145ZM198.5 145V193.5M198.5 193.5L387 119M198.5 193.5L3.5 121"
                    stroke="url(#paint0_linear_7_415)"
                    strokeWidth="2"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_7_415"
                        x1="195"
                        y1="250"
                        x2="181.935"
                        y2="4.39719"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <LineMain />
            <Beam />
            <Beam />
            <Beam />
            <Beam />
            <Beam />
        </Portal>
    );
    };