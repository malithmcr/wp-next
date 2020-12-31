import React from "react";
import PropTypes from "prop-types";
import { SearchWrapper, Placeholder } from "./index.style";
import { useTitleContext } from '../../context/titleContext';

/**
 * @component- Search
 */
const Editor = props => {
    const {isSticky} = props;
    const {setTitle} = useTitleContext();
    return(
    <SearchWrapper className={isSticky ? "sticky" : ""}>
        <input type="text" placeholder="Business Name" minLength="3" onChange={(e) => setTitle(e.target.value)} />
        <Placeholder>
            <img src="/images/search.svg" />
        </Placeholder>
    </SearchWrapper>
);
}
export default Editor;
