import React from 'react';
import htmlContent from './run_a_race.html';

import '../print.css';
import '../../../components/sectionitem/sectionitem.scss';

const RunARaceHtml = () => (
    <div dangerouslySetInnerHTML={{__html: htmlContent}} /> // eslint-disable-line react/no-danger
);
export default RunARaceHtml;
