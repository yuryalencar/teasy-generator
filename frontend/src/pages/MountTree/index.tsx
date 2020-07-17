import React, { useState } from "react";

import TreeNodo from '../../components/TreeNodo';



const MountTree: React.FC = (props: any) => {
    const root = props.location.state.root
    const allPages = props.location.state.allPages

    function getComboA(selectObject: any) {
        var value = selectObject;
        console.log(allPages[selectObject]);
    }
    // console.log(allPages)
    return (
        <>
            <TreeNodo
                name={root.name}
                actions={root.actions}
                pages={allPages}
                callBack={getComboA}
            />
        </>
    )
}

export default MountTree;
