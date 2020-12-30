import React from "react";
import PropTypes from "prop-types";
import { SearchWrapper, Placeholder } from "./index.style";

/**
 * @component- Search
 */
const Editor = props => {
    const {isSticky} = props;
    return(
    <SearchWrapper className={isSticky ? "sticky" : ""}>
        <input type="text" placeholder="Business Name" minLength="3" />
        <Placeholder>
            <img src="/images/search.svg" />
        </Placeholder>
    </SearchWrapper>
);
}

Editor.propTypes = {
    isSticky: PropTypes.bool.isRequired,
};

export default Editor;
