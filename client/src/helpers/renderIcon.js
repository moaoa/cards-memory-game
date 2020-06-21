import React from 'react';
import { FaAvianex } from 'react-icons/fa';
import { FaChrome } from 'react-icons/fa';
import { FaFontAwesomeFlag } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';

export default function (iconName) {
    switch (iconName) {
        case 'FaAvianex':
            return <FaAvianex />;
        case 'FaChrome':
            return <FaChrome />;
        case 'FaFontAwesomeFlag':
            return <FaFontAwesomeFlag />;
        case 'FaGithub':
            return <FaGithub />;
        case 'FaReact':
            return <FaReact />;
        case 'FaPython':
            return <FaPython />;
        default:
            return console.log('no icon wiht this naem');
    }
}
