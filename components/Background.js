// components/Background.js
import { Parallax } from 'react-parallax';

const Background = () => (
  <Parallax bgImage="/backgrounds/background.jpg" strength={500}>
    <div style={{ height: '100vh' }} />
  </Parallax>
);

export default Background;
