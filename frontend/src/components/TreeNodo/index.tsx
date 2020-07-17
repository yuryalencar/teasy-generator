import React, { useState } from "react";

type Action = {
    keyword: string,
    next_page: null | Page
}

type Page = {
    name: string,
    actions: null | Array<Action>
}

type TreeNodo = {
    pages: Array<Page>
    name: string,
    actions: null | Array<Action>,
    callBack: any
}

// type Child = {
//     keyword: 
// }

const TreeNodo: React.FC<TreeNodo> = ({ name, actions, pages, callBack }: TreeNodo) => {
    console.log(pages)
    return (
        <>
            <div style={{
                border: '1px solid gray', borderRadius: '6px', backgroundColor: 'gray'
                , width: '310px', height: 'auto', padding: "25px"
            }}>
                <h3>{name}</h3>
                {
                    actions?.map((action, index) => {
                        let value = "null";
                        function updateValue(newValue: any) {
                            callBack(newValue)
                            value = newValue;
                            // console.log(newValue)
                        }
                        return (
                            < div key={index}>
                                <h6>{action.keyword}</h6>
                                <select name="pages" id="pages" onChange={(e) => updateValue(e.target.value)}  >
                                    <option value="null">Não possui</option>
                                    {
                                        pages.map((page, index) => <option key={index} value={index} >{page.name}</option>)
                                    }
                                </select>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default TreeNodo;
