import { Meta } from "@storybook/react";
import React from "react";
import "./Typography.scss";;

const meta: Meta = {
    title: "Foundations/Typography",
}

export default meta;

export const Typography = () => {
    return (
        <div id={"typography"}>
            <h1 className="display-text --medium">Typography</h1>
            <h2>Styles</h2>
            <hr />
            <div className="row">
                <Description
                    title={"Display"}
                    body={"Used for larger branded areas where headings feel a bit too small."}
                />
                <div className="display-text-wrapper">
                    <span className="display-text --large">display title lg</span>
                    <span className="display-text --medium">display title md</span>
                    <span className="display-text --small">display title sm</span>
                </div>
            </div>
            <hr />
            <div className="row">
                <Description
                    title={"Heading and Body"}
                    body={"used for larger branded areas where heading feels a bit too small."}
                />
                <div className="heading-text-wrapper">
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <h6>Heading 6</h6>
                </div>
                <div className="body-text-wrapper">
                    <p className="sm">Body copy SM | set at 15px on default</p>
                    <p>Body copy | set at 18px on default</p>
                    <p className="lg">Body copy LG | set at 21px on default</p>
                    <caption>Caption | set at 11px on default</caption>
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
