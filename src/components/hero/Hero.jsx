import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { Modal, ModalBody, Row } from "reactstrap"
// import me from '../../assets/me.png'
import './Hero.css'

const Hero = ({state}) => {
    const [modal, setModal] = useState(false);
    const [description, setDescription] = useState("");
    const [cid, setCid] = useState("");

    useEffect(() => {
        const { contract } = state;
        const cidOfImage = async () => {
            const cid = await contract.methods.imageLink().call();
            setCid(cid);
        }
        contract && cidOfImage();
    }, [state])

    useEffect(() => {
        const { contract } = state;
        const description = async () => {
            const descriptionText = await contract.methods.description().call();
            setDescription(descriptionText);
        }
        contract && description();
    },[state])
    return (
        <section className="hero">
        <div className="container">
            <div className="hero-text">
                <p><span>Rahul </span>
                    is a Full-Stack Blockchain Developer From India.</p>
                <h1>I develop decentralised apps in web3 space.</h1>
                    <h3>{description }</h3>
                {/*  =========popup bootstrap==========  */}

                <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalBody>
                            <Row className="text-align">
                                <label htmlFor="" onClick={() => setModal(!modal)}>
                                    Mail Id - rahulpra045@gmail.com
                                </label>

                            </Row>
                    </ModalBody>
                </Modal>
                <button className="msg-btn" onClick={() => setModal(true)}>Get in Touch</button>
                
                {/*  =========popup bootstrap end==========  */}

            </div>
            <div className="hero-img">

                <div className="img-container">
                    <img src={`https://gateway.pinata.cloud/ipfs/${cid}`} alt="profilePhoto" />
                </div>
            </div>
        </div>
    </section>
    )
}
Hero.propTypes = {
    state: PropTypes.object.isRequired,
  };

export default Hero
