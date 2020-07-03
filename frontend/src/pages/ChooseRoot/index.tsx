import React from "react";

const ChooseRoot: React.FC = (props: any) => {
    return (
        <>
            <h1>{props.location.state.teasyJson}</h1>;
        </>
    );
}

export default ChooseRoot;
