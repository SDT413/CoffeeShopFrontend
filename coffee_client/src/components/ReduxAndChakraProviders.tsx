import React, {FC, PropsWithChildren} from 'react';
import {persistor, store} from "@/store/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {ChakraProvider} from "@chakra-ui/react";

const ReduxAndChakraProviders:FC<PropsWithChildren<any>>
    = ({children}) => {
    return (
            <div>
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={null}>
                    <ChakraProvider>
                        {children}
                    </ChakraProvider>
                </PersistGate>
            </Provider>

        </div>
    );
};

export default ReduxAndChakraProviders;