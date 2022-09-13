import React from 'react';
import { Button } from 'antd';

const CustomButton = props => {

    const {
        buttonClicked, buttonText, type
    } = props;

    return (
        <div style={{marginRight: 8}}>
            <Button onClick={buttonClicked} type={type} className="action-btn">
                {buttonText}
            </Button>
        </div>
    )
}

export default CustomButton;