import React from "react";
import { useHistory } from 'react-router-dom';
import PageToChooseRoot from "../../components/ChooseRootPage";

const ChooseRoot: React.FC = (props: any) => {

    const allPages = JSON.parse(props.location.state.teasyJson);
    const history = useHistory();

    function chooseThisPage(page: any) {
        const root = page;
        history.push(
            "/mount-tree",
            { root, allPages }
        );
    }

    return (
        <>
            {allPages.map((page: any, index: any) => {
                return (
                    <PageToChooseRoot key={index} page={page} callback={chooseThisPage}/>
                )
            })}
        </>
    );
}

export default ChooseRoot;