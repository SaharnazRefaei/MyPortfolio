import Link from 'next/link';
import React from 'react';

import {
	Section,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Welcome To <br />
					My Personal Portfolio
				</SectionTitle>
				<SectionText>
					I'm Saharnaz Refaei, an Ordinary Full Stack Web Developer
					with Extraoridinary Dreams!
				</SectionText>
				<Button onClick={props.handleClick}>
					<Link href="#contacts">
						<span style={{ color: 'whitesmoke' }}>
							Get in touch
						</span>
					</Link>
				</Button>
			</LeftSection>
		</Section>
	</>
);

export default Hero;
