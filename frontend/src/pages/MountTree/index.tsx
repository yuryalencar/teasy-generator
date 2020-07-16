import React from "react";

const MountTree: React.FC = (props: any) => {
    console.log(props);
    return (
        <>
            <h1>{props.location.state.root}</h1>;
            <h1>{props.location.state.allPages}</h1>;
        </>
    )

}

export default MountTree;
