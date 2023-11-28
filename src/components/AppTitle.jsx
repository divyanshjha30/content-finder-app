import { styled, keyframes } from 'styled-components';

export default function AppTitle(props) {
  const { title = 'Find Your Content', subTitle = 'BY ~ DIVYANSH' } = props;

  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </TitleWrapper>
  );
}

const textShineAnimation = keyframes`
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 100% center;
  }
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  p {
    /* color: ${({ theme }) => theme.mainColors.dark}; */
    margin: 0;
    background: linear-gradient(
    to right,
    #7953cd 20%,
    #00affa 30%,
    #0190cd 70%,
    #764ada 80%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent; /* Use color to control the text color */
  background-size: 500% auto;
  animation: ${textShineAnimation} 5s ease-in-out infinite alternate;
  }
`;
