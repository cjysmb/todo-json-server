import React, { useEffect } from 'react';
import { Table } from 'antd'
import { useAppContext } from '../components/AppContext/AppContext';
import CustomButton from '../components/customComponents/Button';

const Done = props => {

    const {
        todoList: {
            datas,
        },

        global: {
            getData, column, updateData, removeData,
            tableData
        }
    } = useAppContext();

    

    const handleUpdate = (params, status) => {
        params.type = status
        updateData('update', 'done', params)
    }

    const handleRemove = (id) => {
        removeData(id, "done")
    }

    column.push(
        {
            key: 'action',
            title: 'Action',
            render: (record) => {
                return(
                    <div className="button-align">
                        <CustomButton buttonText={"Move to doing"} buttonClicked={() => handleUpdate(record, "doing")} type="primary"/>
                        <CustomButton buttonText={"Move to todo"} buttonClicked={() => handleUpdate(record, "todo")} />
                        <CustomButton buttonText={"Remove"} buttonClicked={() => handleRemove(record.id)} type="danger"/>
                    </div>
                )
            }
        }
    )

    useEffect(() => {
        getData("done");

    }, [tableData])

    return (
        <div className="main-div">
        <Table columns={column} dataSource={datas} rwoKey={record => record.title} />
    </div>
    )
}

export default Done;