import { Meta } from "@storybook/react";
import React from "react";
import "./Brand.scss";
import LOGO from "@public/logo.svg";
import LOGOWHITE from "@public/logoWhite.svg";

const meta: Meta = {
    title: "Foundations/Brand",
}

export default meta;

export const Brand = () => {
    return (
        <div id="brand">
            <h1 className="display-text --medium">Brand</h1>
            <h2>Logos</h2>
            <hr />
            <div className="row">
                <Description
                    title={"Primary Logo"}
                    body={"The primary logo is used for all branded areas."}
                />
                <div className="logo-wrapper">
                    <img src={LOGO} alt="logo" />
                    <img src={LOGOWHITE} alt="logo in white" />
                </div>
            </div>
        </div>
    )
}

type DescriptionProps = {
    title: string;
    body: string;
}

const Description = ({ title, body }: DescriptionProps): JSX.Element => {
    return (
        <div className="description">
            <h3 className={"row-title"}>{title}</h3>
            <p className={"row-body"}>{body}</p>
        </div>
    )
}
