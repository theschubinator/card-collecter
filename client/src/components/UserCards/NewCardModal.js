import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { NewCardPageWithRouter } from './NewCardPage';
import { toggleNewCardModal } from '../../actions/toggles';
import { clearFormData } from '../../actions/cardForm';
import '../../styles/card-form.css';

const NewCardModal = (props) => {
  const handleClose = () => {
		props.toggleNewCardModal();
		props.clearFormData();
	}
	
	return (
		<div className="main card-form">
			<Modal show={props.toggles.toggleNewCardModal }>
				<Modal.Body>
					<NewCardPageWithRouter />
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={handleClose}>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

const mapStateToProps = (state) => ({
	toggles: state.toggles,
	user: state.user
});

export default connect(mapStateToProps, { toggleNewCardModal, clearFormData })(NewCardModal);