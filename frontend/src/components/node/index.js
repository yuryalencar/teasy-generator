import React from 'react';
import ActionTree from "../makeTreeAction";
import { Wrapper } from "../../pages/makeTree/styles";
import { GitCommit } from "react-feather";
import Divider from "../divider";
import { ActionIcon, Container, NodeIcon, NodeTitle, WrapperTitle } from "./styles";

const Node = () => {
	return (
		<Container>
			<Divider />
			<WrapperTitle>
				<NodeTitle>HOME PAGE</NodeTitle>
				<NodeIcon><GitCommit /></NodeIcon>
				<NodeTitle color={true}>HOME PAGE</NodeTitle>
			</WrapperTitle>
			<ActionTree keyword={'HOME PAGE'} />
		</Container>
	);
};

export default Node;
