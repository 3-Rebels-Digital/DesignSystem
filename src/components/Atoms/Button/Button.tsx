import React from "react";
import classNames from "classnames";
import "./Button.scss";
import Arrow from "../../../assets/Icons/ArrowRight.svg";

export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    type?: "primary" | "outline" | "underline";
    /**
     * children
     */
    children?: React.ReactNode;
    /**
     * Optional click handler
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /**
     * is button disabled
     */
    disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    type = "primary",
    onClick,
    disabled = false,
    children,
}: ButtonProps) => {
    const classes = classNames({
        "a-button": true,
        [`--${type}`]: true,
    });
    return (
        <button
            type="button"
            className={classes}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
            <img src={Arrow} alt="Arrow Right" />
        </button>
    );
};
