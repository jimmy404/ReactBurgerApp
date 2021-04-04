import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary/Auxiliary';
import useHttpErrorHandler from '../../hooks/http-error-handler';


const withErrorHandler = (WrappedComponent, axios) => {
  return props => {
    const [error, clearError] = useHttpErrorHandler(axios);
      return (
        <Auxiliary>
          <Modal show={error}>
            {error ? error.message : null}
            modalClosed={clearError}
          </Modal>
          <WrappedComponent {...props} />
        </Auxiliary>
    );
  }
}

export default withErrorHandler;
