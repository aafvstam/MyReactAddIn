import * as React from 'react';
import { Spinner, SpinnerType } from 'office-ui-fabric-react';

export interface ProgressProps {
    title: string;
    logo: string;
    message: string;
}

export default class Progress extends React.Component<ProgressProps> {
    render() {
        const {
            title,
            logo,
            message,
        } = this.props;

        return (
            <section className='ms-welcome__header ms-bgColor-neutralLighter ms-u-fadeIn500'>
                <img width='90' height='90' src={logo} alt={title} title={title} />
                <h1 className='ms-fontSize-su ms-fontWeight-light ms-fontColor-neutralPrimary'>{title}</h1>
                <Spinner type={SpinnerType.large} label={message} />
            </section>
        );
    }
}
