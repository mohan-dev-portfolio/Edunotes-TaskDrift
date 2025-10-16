import React from 'react';
import Modal from './modals/Modal';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  return (
    <Modal title="Contact Developer" onClose={onClose}>
      <div className="space-y-4 text-gray-300">
        <p>For any changes, additions, or bug reports, please feel free to reach out.</p>
        <p>Your feedback is valuable in improving TaskDrift for everyone.</p>
        <div className="text-center pt-4">
          <a
            href="mailto:developer@taskdrift.com"
            className="inline-block bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/20"
          >
            Send an Email
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default ContactModal;