import React from "react";
import {rawMarkup} from "./helpers";

const Explanation = ({question, isResultPage}) => {
    const explanation = question.explanation;

    if (!explanation) {
        return null;
    }

    if (isResultPage) {
        return (
            <>
                <div dangerouslySetInnerHTML={rawMarkup(explanation)} />
            </>
        )
    }

    return (
        <div>
            <br/>
            {explanation}
        </div>
    )
};

export default Explanation;
