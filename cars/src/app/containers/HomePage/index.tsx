import styled from "styled-components";
import tw from "twin.macro";

type Props = {};

const PageContainer = styled.div`
    ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
    `}
`;

const HomePage = (props: Props) => {
    return <PageContainer>Hello WEW</PageContainer>;
};

export default HomePage;
