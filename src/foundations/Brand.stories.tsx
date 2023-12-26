import { Meta } from "@storybook/react";
import React from "react";
import "./Brand.scss";

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
                    <img src={"/static/media/public/logo.svg"} alt="placeholder" />
                    <img src="/static/media/public/logoWhite.svg" alt="" />
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
