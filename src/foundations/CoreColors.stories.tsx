import { Meta } from "@storybook/react";
import React from "react";
import "./CoreColors.scss";
import GREY from "./foundations-data/color_grey.json";
import GREEN from "./foundations-data/color_green.json";
import GOLD from "./foundations-data/color_gold.json";

const meta: Meta = {
    title: "Foundations/CoreColors",
}

export default meta;

export const CoreColors = () => {
    return (
        <div id="coreColors">
            <h1 className="display-text --medium">Colors</h1>
            <h2>Styles</h2>
            <hr />
            <div className="color-fan">
                <div className="color" id="lime"></div>
                <div className="color" id="kelly"></div>
                <div className="color" id="blue"></div>
                <div className="color" id="white"></div>
                <div className="color" id="black"></div>
            </div>
            <hr />
            <div className="column">
                <ColorScaler
                    title="Architecture Grey"
                    colors={GREY}
                />
                <ColorScaler
                    title="Amber Gold"
                    colors={GOLD}
                />
                <ColorScaler
                    title="Laser Green"
                    colors={GREEN}
                />
            </div>
        </div>
    )
}

function luminance(r: any, g: any, b: any) {
    var a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function contrast(rgb1: any[], rgb2: any[]) {
    var lum1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
    var lum2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
    var brightest = Math.max(lum1, lum2);
    var darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
}

function getContrastColor(hexColor: { match: (arg0: RegExp) => any[]; }) {
    // Convert hex color to RGB
    var rgb = hexColor.match(/\w\w/g).map(function (c) {
        return parseInt(c, 16)
    });

    // Colors for text (#ffffff for white and #000000 for black)
    var black = [0, 0, 0];
    var white = [255, 255, 255];

    // Calculate contrast ratios for black and white text
    var blackContrast = contrast(black, rgb);
    var whiteContrast = contrast(white, rgb);

    // Standard ratio for WCAG AA compliance is at least 4.5, and for AAA is 7.
    // We'll use a standard minimum ratio. If neither color is compliant, we default to the one with the higher ratio.
    var standardRatio = 4.5;
    if (blackContrast >= standardRatio || whiteContrast >= standardRatio) {
        return blackContrast > whiteContrast ? 'black' : 'white';
    } else {
        return blackContrast > whiteContrast ? 'black' : 'white';
    }
}

type ColorScalerProps = {
    title: string;
    colors: any[];
}

const ColorScaler = ({ title, colors }: ColorScalerProps) => {
    const colorLength = colors.length;
    return (
        <div className="color-scaler">
            <div className="info">
                <h3>{title}</h3>
                <span>{`${colorLength} colors`}</span>
            </div>
            <div className="color-scaler-fan">
                {colors.map((color) => {
                    const textColor = getContrastColor(color.color);
                    const bkgColor = {
                        backgroundColor: color.color,
                        color: textColor,
                    }
                    return (
                        <div className="color" id={color.color} style={bkgColor}>
                            <span className={`tag ${textColor}`}>{color.tag}</span>
                            <p className="title">{color.level}</p>
                            <span className="hexcode">{color.color}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}