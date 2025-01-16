import MainWrapper from "../main";

const { default: Heading } = require("../components/landing_page/header");

function About() {
    return (
        <MainWrapper>
            <Heading
            heading={"kskds"}
            subHeading={"aa"}
            />
        </MainWrapper>
    )
}

export default About