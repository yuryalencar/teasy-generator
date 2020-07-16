import React from "react";
type Action = {
    keywords: string,
    next_page: null | Page
}

type Page = {
    name: string,
    actions: null | Array<Action>
}

type PageChooseLine = {
    page: Page,
    callback: any
}

const PageToChooseRoot: React.FC<PageChooseLine> = ({page, callback}: PageChooseLine) => {

    return (
        <div style={{
            display: "flex", flexDirection: "row", justifyContent: "space-between",
            alignItems: 'center', paddingLeft: "20px", paddingRight: "20px"
        }}>
            <h3>{page.name}
            </h3>
            <button type="button" onClick={() => callback(page)}  >THIS</button>
        </div>
    );
}

export default PageToChooseRoot;