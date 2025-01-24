// src/components/Home.js
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './App.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome To Home Page!</h1>
      <LazyLoadImage
        alt={'Image description'}
        height={400}
        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-1TqadKkTciFJY4EnJCI2VPO0L1PdHIWMg&s'}
        width={700}
      />
  <h2>A Beautiful Night Under the Moonlight</h2>
  <p>As the sun dips below the horizon, the world transforms into a canvas of deep blues and purples, signaling the arrival of night. The air cools, and a gentle breeze whispers through the trees, carrying with it the sweet scent of blooming night flowers. It is during this magical time that the moon rises, casting its silvery glow over the landscape.

The moon, a luminous orb hanging in the vast expanse of the night sky, captivates all who gaze upon it. Its surface, marked by craters and valleys, tells a story of cosmic history, while its soft light bathes the world below in a serene glow. The moonlight dances on the surface of a tranquil lake, creating a shimmering pathway that seems to invite dreamers to wander.

Surrounding the lake, tall trees stand like silent sentinels, their leaves rustling softly in the night breeze. The stars twinkle above, forming constellations that have guided travelers for centuries. Each star, a distant sun, adds to the beauty of the night, creating a breathtaking tapestry that stretches infinitely into the cosmos.</p>
    </div>
  );
};

export default Home;