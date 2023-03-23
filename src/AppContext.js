import React from 'react';

export const AppContext = React.createContext();

const AppProvider = (props) => {
    return (
        <AppContext.Provider>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppProvider;