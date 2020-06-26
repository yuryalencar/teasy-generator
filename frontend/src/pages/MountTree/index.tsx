import React from "react";

const MountTree: React.FC = (props: any) => {
    return (
        <>
            <h1>{props.location.state.treeBackUp}</h1>;
            <h1>{props.location.state.teasyJson}</h1>;
        </>
    )

}

export default MountTree;
