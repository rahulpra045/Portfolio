import { useEffect, useState } from 'react'
import { Modal, ModalBody, Row } from "reactstrap"
// import PropTypes from 'prop-types';
// import { Connect } from 'vite';

const Connect= () =>{
  const [mod, setMod] = useState(true); // Initially open the modal

  const handleClickOutside = (event) => {
    if (event.target.closest('.modal') === null) {
      setMod(false); // Close the modal if clicked outside
    }
  };

  useEffect(() => {
    // Attach click event listener to the document
    document.addEventListener('click', handleClickOutside);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Modal size='md' isOpen={mod} toggle={() => setMod(false)}>
      <ModalBody>
        <Row className="text-align">
          <label htmlFor="" onClick={() => setMod(false)}>
            Connect Metamask
          </label>
        </Row>
      </ModalBody>
    </Modal>
  );
}
// Connect.propTypes = {
//     state: PropTypes.object.isRequired,
// };

export default Connect;
