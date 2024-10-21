import React from 'react';

interface PageViewEvent {
    type: 'pageview';
    url: string;
}
interface CustomEvent {
    type: 'event';
    url: string;
}
type BeforeSendEvent = PageViewEvent | CustomEvent;
type Mode = 'auto' | 'development' | 'production';
type BeforeSend = (event: BeforeSendEvent) => BeforeSendEvent | null;
interface AnalyticsProps {
    beforeSend?: BeforeSend;
    debug?: boolean;
    mode?: Mode;
    route?: string | null;
    disableAutoTrack?: boolean;
    scriptSrc?: string;
    endpoint?: string;
    dsn?: string;
}
declare global {
    interface Window {
        va?: (event: 'beforeSend' | 'event' | 'pageview', properties?: unknown) => void;
        vaq?: [string, unknown?][];
        vai?: boolean;
        vam?: Mode;
    }
}

type Props = Omit<AnalyticsProps, 'route'>;
declare function Analytics(props: Props): React.ReactElement;

export { Analytics, AnalyticsProps };
