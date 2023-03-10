
import styled, {keyframes} from "styled-components";

const typing = keyframes`
    0% {
        width: 0ch;
    }
    100% {
        width: 30ch;
    }
`;

const blink = keyframes`
    0% {
        border-right: 4px solid rgba(250, 217, 5, 0);
    }
    100% {
        border-right: 4px solid rgba(250, 217, 5, 1);
    }
`;

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
`; 

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;


export const HeroStyles = styled.section`
    background: linear-gradient(
        135deg,
        rgba(3, 10, 140, 0.65) 0%,
        rgba(12, 2, 84, 0.9) 100%
    ),
    url("https://lh3.googleusercontent.com/g2sO3fnStOAi4q0tbujT_p7blA-UfIFtMEEkMurC6Q4CSiMKau2OTE_3cHvVfC5sKXQhPYom9EFww5IGhfHMtrU4zd5cz6E9r6mL-5o0rmJE3GWB6HWkbK4KG9L7-3C_8vgHDF92GEuqA-cRscDaxqY1O2dNEUMyDvpelEXkzyzKbeikhqs9JPdm-GmdtORqF8HxGJheCqltpqlTtJXcaltt2y3V94hfMdB6_DWjSMfWay2CkIJTmqcLysKyrfGLmToK_5nMhAfKZs1k3bAcoOuQk1UHAOHaZamv_qYzTTQtv-OW0wVriPm09Rumdm_iDbKYMu6MtxnzK0TwBSpXxE6SIKWVCCH7coLajaUFbeYTydODS46vwioMyY1kTbT-f5iJVMiDUgHLpG35RxBUr1p7Rv2errWL07a1df9jOTQLbQqgXfFOn8Bmmg9BEL6bkwiQFvAo38G6XKGTkH2snHJYyfihGphlaCImW_qqMYuTlvUML1wUos-uhQQtVu27Q7JI28ihXHmsr1Cr4ogLSupuYCbWAz1XTz2suroVnj9MG19eBpZ82VG0eB-v7IL30iz9rJ3RHrTA6QRTSHadmzehTkivLhmy7zTKOc9AkXTPb8NHUGmcYZT6nJen4dLg_nY2R4ku9WdIg0WusSFw6uY2OcfUqCYVpM-_h3Kr3AvqiHFM8g8fz2HOJyUqByHAlQoxJtzFENCe-MOeEP8H1gUxKUVe2Zay0W3lYX0feWDF4aAKSlCeXfCI4iS8agrT38xiUqEVRtKOWPlh9UE4Ha-5N2C2ijtfYiL7fPIWeKsBDYa8uVpNUuiyb4XvCl1sIg16p-hCy-nx1ci9iP3EHPw_Mq5uCNK4fbfedMuBSlNWjQjx_cjbUm04RIDgiy1hPJuvVwjN8XiVDhuImRZCVcXBhUIibCBc3hNTIdG2tEKQ6d-9lql57CQqy-ys14aQms3HrsMCcUaFML6Iw1arpA=w2160-h1296-no?authuser=0") center no-repeat;
    width: 100%;
    height: 90vh;
    margin-top: -3.5rem;
    background-size: contain;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media(max-width: ${({ theme }) => theme.mobile }) {
        height: 55vh;
        background: linear-gradient(
        135deg,
        rgba(3, 10, 140, 0.65) 0%,
        rgba(12, 2, 84, 0.9) 100%
    ),
    url("https://lh3.googleusercontent.com/fLgZwLyCKBJuUm6huE1ONVbc8GgUvR5MSuPEiVpbG4OdBsd7ewx1fXVK7K0VjB-MY4bO2q12IUVxXoUhKYl6MMd-eiY1DNheUBvd0EZJ1CUIKWWQsDkmcjtvfH77mPKkrQrH1LYOxK3JCc9VyU__I0gBikd39psMChRqUx_mS5iXjm3dFlc3wCUNnQ-JpAbCUvFcYzXJcaA2HweQMHGEwSGs_xamhOdVM8bWxhATPe_jEHf365KCSFq5j2-BK3hNzXIcoHE1yu0aUco5AUgejAG1TmAbawIYmm1k_jGwShU0krHphPNtiqQzwkFkIM9Jt8DNiznS4SuLEX56IX1FZc-C32_K9UZG7HKxdzTS8pA8WMR8Riq9bPdPy-7iNB8-Rz2SZxHgjAKa711zLZkCeEaIDL44QxjN2Cqf8wpckBmzKbgli5G8O8gdJoXpGng5YPNDfQFwtuuMg7RcZ4HY8NNV2Z_iYu_zhoM0jIO3KWdpJcg2Nnppc1M880oWBN1Jvc0LsyPyVIi5zUWKzMGurtX_YlJD5_tP5eFo0P3stb0soH9uojbGkFEA25XpBQ0X_YkwHLWG5ut7LQbYUOlx9F6JKnM-i_vCVSDO9KRCeHji-S6Qi_rL8RPLRrD9ZxGHPwPW8wado9CRVn-Ij_Zdq8tYwBeghyrrb_8sP9G9k2GJDsDBXzVJaXoeefcdTUah9n4r9P3GbpxtY6olZhkpwGAcJUThtJet_glYhoH4bmA36XtrWuEOJkCTU2fpFEjYnOiVTfBd42ZHNpSFMszJox-wwYcTpUMVbjPBg8yHJpLNs7reMneu55yehgOsFDJNiXhTtVRoFdlNNMkNBGyZj0XkbssvNvoL3mSqffI7PNvTBECZO83ojO1883QB_r3WQ6hcWkd-0yUd7XrM9p8ovlw-QcwK19KQAHtvzykcV3igmZrEBuIclb0i3tAurrfOpHoafg7kI0s1mK6y-h-YaQ=w846-h1410-no?authuser=0") center no-repeat;
    background-size: contain;
    }  
`;

export const HeroContent = styled.div`
    width: 100%;
    max-width: 58rem;
    color: ${({theme}) => theme.colors.white};
    text-transform: uppercase;
    margin-top: -30px;

    h1 {
        letter-spacing: 1.2rem;
        font-size: 2.5rem;
        font-weight: 400;
        overflow: hidden;
        white-space: nowrap;
        width: 30ch;
        margin: auto;
        animation: ${typing} 5s steps(30), ${blink} 1s ease-in-out 8s infinite;
        border-right: 4px solid rgba(255, 255, 255, 1);
    }

    h3 {
        font-size: 4.5rem;
        margin: 1.5rem 0;
        background: linear-gradient(
            to right,
            #fce3cf 0%,
            #fcd705 50%,
            #fff 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p {
        font-size: 1.9rem;
        font-weight: 400;
        text-transform: none;
    }

    div {
        margin: 2.5rem 0;
    }

    @media(max-width: ${({ theme }) => theme.mobile }) {
        h1 {
            letter-spacing: 1rem;
            font-size: 1.7rem;
            width: 32ch;
        }

        h3 {
            font-size: 2.3rem;
        }

        p {
            font-size: 1.4rem;
        }
    }  
`;

export const ArrowDown = styled.a`
    position: absolute;
    bottom: 60px;

    svg {
        font-size: 30px;
        color: ${({theme}) => theme.colors.white};
        animation: ${bounce} 2s infinite 8s;

        &:hover {
            color: ${({theme}) => theme.colors.orange};
        }
    }

    @media(max-width: ${({ theme }) => theme.mobile }) {
        bottom: 40px;
    } 
`;

export const HeroSocialIcons = styled.div`
    position: fixed;
    right: 20px;

    @media(max-width: ${({ theme }) => theme.mobile }) {
        bottom: 25px;
    }  
`;

export const SocialIcon = styled.a`
    height: 3.5rem;
    width: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: ${({theme}) => theme.colors.blueTwo};
    cursor: pointer;
    font-size: 2rem;
    margin-bottom: 10px;

    svg {
        color: ${({theme}) => theme.colors.white};
        transition: ${({theme}) => theme.transition};

        &:hover {
            animation: ${rotate} 1.5s linear infinite;
            color: ${({theme}) => theme.colors.yellow};
        }
    }

    @media(max-width: ${({ theme }) => theme.mobile }) {
        font-size: 1.6rem;
        height: 2.8rem;
        width: 2.8rem;
    }  
`;

export const DevIcon = styled.p`
    align-items: center;
    justify-content: center;
    background: #fff;
    border: 1px solid ${({theme}) => theme.colors.blueTwo};
    border-radius: 50%;
    display: inline-flex;
    height: 3.5rem;
    width: 3.5rem;
    margin: 10px 12px 0;
    cursor: pointer;

    svg {
        font-size: 2.65rem;
        color: ${({theme}) => theme.colors.blueTwo};
        transition: ${({theme}) => theme.transition};

        &:hover {
            animation: ${rotate} 1.5s linear infinite;
        }
    }

    @media(max-width: ${({ theme }) => theme.mobile }) {
        height: 3rem;
        width: 3rem;

        svg {
            font-size: 2.25rem;
        }
    }  
`;