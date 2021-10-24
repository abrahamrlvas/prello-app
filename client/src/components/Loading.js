import React from 'react';
import { Spinner } from 'react-bootstrap';

export const Loading = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '40px 0px' }}>
            <Spinner animation="grow" variant="info" />
        </div>
    )
}
