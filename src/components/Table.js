import React from 'react';

const styles = {
    background: 'gray',
    color: 'white',
    textAlign: 'center'
}
const border = {
    border: '1px solid gray'
}

const Table = ({val})=>{
    return (
        <table style={border}>
            <thead>
                <tr style={styles}>
                    <td>{val.t('type')}</td>
                    <td>{val.t('units')}</td>
                    <td> {val.t('last_rate')}</td>
                    <td> {val.t('rate')}</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{val.t('home_plan')}</td>
                    <td align="center">{val.unit}</td>
                    <td align="center">{val.last_home_price}</td>
                    <td align="center">{val.home_price}</td>
                </tr>
                <tr>
                    <td>{val.t('business_plan')}</td>
                    <td align="center">{val.unit}</td>
                    <td align="center">{val.last_business_price}</td>
                    <td align="center">{val.business_price}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;