import React, { useState, useEffect } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary/Auxiliary';


const withErrorHandler = (WrappedComponent, axios) => {
  return props => {
    const [error, setError] = useState(null);

    const reqInteceptor = axios.interceptors.request.use(req => {
      setError(null);
      return req;
    });

    const resInteceptor = axios.interceptors.response.use(res => res, err => {
      setError(err);
    });

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(reqInteceptor);
        axios.interceptors.response.eject(resInteceptor);
      }
    }, [reqInteceptor, resInteceptor]);

    const errorConfirmedHandler = () => {
      setError(null);
    }

      return (
        <Auxiliary>
          <Modal show={error}>
            {error ? error.message : null}
            modalClosed={errorConfirmedHandler}
          </Modal>
          <WrappedComponent {...props} />
        </Auxiliary>
    );
  }
}

export default withErrorHandler;
