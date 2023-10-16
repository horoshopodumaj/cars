import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navBar";
import { TopSection } from "./topSection";

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
    return (
        <PageContainer>
            <Navbar />
            <TopSection />
        </PageContainer>
    );
};

export default HomePage;
