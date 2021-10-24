import React from 'react'
import { Alert } from 'react-bootstrap'

export const ErrorHandler = ({ children }) => {
    return (
        <div>
            <Alert variant="danger">
                <Alert.Heading>{children}</Alert.Heading>
            </Alert>
        </div>
    )
}
