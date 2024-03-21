import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { NextStudio } from 'next-sanity/studio';
import { StudioLayout, StudioProvider } from 'sanity';

import config from '../../../sanity.config';

type Props = {};

const StudioComponent = (props: Props) => {
  return (
    <NextStudio config={config}>
      <StudioProvider config={config}>
        {/* Put components here and you'll have access to the same React hooks as Studio gives you when writing plugins */}
        <StudioLayout />
      </StudioProvider>
    </NextStudio>
  );
};

export { StudioComponent };
