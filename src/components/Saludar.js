import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props){
    // const {name} = props;
    // const {firstname, lastname} = props;
    const { firstname, lastname  } = props;
    return (
        <Text>Hello {firstname} {lastname}!</Text>
    );
}

// Saludar.defaultProps = {
//     firstname: "Milton Abraham",
//     lastname: "Vilchez Stockhausen",
// };

Saludar.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
}

