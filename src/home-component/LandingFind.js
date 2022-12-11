import React from 'react';
import { Steps } from 'antd';
const description = 'This is a description.';

function LandingFind() {
  return (
    <div
      className=" d-flex justify-content-center align-self-center"
      style={{ backgroundColor: '#FFFFFF', borderRadius: '10px' }}
    >
      <div className="m-5">
        <Steps
          direction="vertical"
          current={2}
          items={[
            {
              title: 'Finished',
              description,
            },
            {
              title: 'Progress',
              description,
            },
            {
              title: 'Waiting',
              description,
            },
          ]}
        />
      </div>
    </div>
  );
}
export default LandingFind;
