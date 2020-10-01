import React from 'react';
import ActionTree from "../makeTreeAction";
import { GitCommit } from "react-feather";
import Divider from "../divider";
import { Container, NodeIcon, NodeTitle, WrapperTitle } from "./styles";

const Node = ({treePath, page}) => {
	return (
		<Container>
			<Divider />
			<WrapperTitle>
				<NodeTitle>{treePath}</NodeTitle>
				<NodeIcon><GitCommit /></NodeIcon>
				<NodeTitle color="true">{page.name.toUpperCase()}</NodeTitle>
			</WrapperTitle>
			{
            	page.actions?.map((action, i) => <ActionTree key={i} treePath={[...treePath]} keyword={action.keyword} /> )
          	}
		</Container>
	);
};

export default Node;
