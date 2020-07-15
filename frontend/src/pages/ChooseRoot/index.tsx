import React, { useState } from "react";
import { Link, Redirect, useHistory } from 'react-router-dom';

const [jsonArray, setJsonArray] = useState([]);

const Page: React.FC = (page: any) => {

    const history = useHistory();
    // console.log(page)
    function thisPage() {
        const root = page.children
        history.push(
            "/mount-tree",
            { root, jsonArray }
        );
    }

    return (
        <div style={{
            display: "flex", flexDirection: "row", justifyContent: "space-between",
            alignItems: 'center', paddingLeft: "20px", paddingRight: "20px"
        }}>
            <h3>{page.children.name}
            </h3>
            <button type="button" onClick={thisPage}  >THIS</button>
        </div>
    )
}

const ChooseRoot: React.FC = (props: any) => {

    const pages = JSON.parse(props.location.state.teasyJson);
    // setando todo o array
    setJsonArray(pages)
    return (
        <>
            {pages.map((page: any, index: any) => {
                // getPage(page)
                return (
                    <Page key={index}>{page}</Page>
                )
            })}
        </>
    );
}

export default ChooseRoot;
