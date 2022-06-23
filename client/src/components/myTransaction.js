import React from 'react';
import ListTransaction from "./listTransaction";

function MyTransaction(props) {
    return (
        <div className="col">
            <h4 className="text-primary">My Transaction</h4>
            <ListTransaction/>
        </div>
    );
}

export default MyTransaction;