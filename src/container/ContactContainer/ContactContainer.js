import React from 'react';
import { ContactBanner, ContactMessage } from '../../sections';

const ContactContainer = () => {
  return (
    <div>
      <ContactBanner />
      <ContactMessage />
      {/* <ContactHelp /> */}
    </div>
  );
};

export default ContactContainer;
