import { Fragment } from "react";

function Table({ data, config, keyFn }) {
    const renderedRow = data.map((rowData) => {
        const renderedCells = config.map((cell) => {
            return <td className="p-2" key={cell.label}>{cell.render(rowData)}</td>
        })
        
        return(
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        )
    });

    const renderedHeaders = config.map((column) => {
        if(column.header){
            return <Fragment key={column.label}>{column.header()}</Fragment>
        }

        return <th key={column.label}>{column.label}</th>
    })

    return (
        <table className="table-auto border-spaceing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRow}
            </tbody>
        </table>
    )
}

export default Table;