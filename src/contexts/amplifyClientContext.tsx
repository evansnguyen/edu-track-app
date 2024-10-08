import {createContext, ReactNode, useContext, useMemo} from 'react';
import {generateClient} from 'aws-amplify/api';
import {V6Client} from "@aws-amplify/api-graphql";

const AmplifyClientContext = createContext<V6Client | null>(null);

interface Props {
    children?: ReactNode
}
export const AmplifyClientProvider = ({children}:Props) => {
    const client = useMemo(() => generateClient(), []);

    return (
        <AmplifyClientContext.Provider value={client}>
            {children}
        </AmplifyClientContext.Provider>
    );
};

export const useAmplifyClient = () => {
    const context = useContext(AmplifyClientContext);
    if (context === null) {
        throw new Error('useClient must be used within a AmplifyClientProvider');
    }
    return context;
};
