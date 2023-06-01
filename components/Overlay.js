import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const SectionWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.right ? "end" : "start")};
`;

const InnerWrapper = styled.div`
  width: 30vw;
  height: 40vw;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 36px;
    color: #121212;
  }
`;

const Section = (props) => {
  return (
    <SectionWrapper style={{ opacity: `${props.opacity}` }} right={props.right}>
      <InnerWrapper>{props.children}</InnerWrapper>
    </SectionWrapper>
  );
};

const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    // Opacity will be 0 when the scrollbar is at the starting position,
    // then increase to 1 until 1 / 3 of the scroll distance is reached
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));

    // opacity will move between 0-1-0 for the selected range
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));

    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <Container>
        <Section opacity={opacityFirstSection}>
          <h1>Hello, I`m Weiyu Tang</h1>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1>
            Trying to practice react three fiber with scrolling animation here
          </h1>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1>Looks like it works perfectly!</h1>
        </Section>
      </Container>
    </Scroll>
  );
};

export default Overlay;
