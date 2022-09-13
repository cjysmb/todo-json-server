import React, { useEffect } from 'react';
import { Table } from 'antd'
import { useAppContext } from '../components/AppContext/AppContext';
import CustomButton from '../components/customComponents/Button';

const Doing = props => {

    const {
        todoList: {
            datas,
        },

        global: {
            getData, column, updateData, removeData
        }
    } = useAppContext();


    const handleUpdate = (params, status) => {
        params.type = status
        updateData('update', 'doing', params)
    }

    const handleRemove = (id) => {
        removeData(id, "doing")
    }

    column.push(
        {
            key: 'action',
            title: 'Action',
            render: (record) => {
                return(
                    <div className="button-align">
                        <CustomButton buttonText={"Move to done"} buttonClicked={() => handleUpdate(record, "done")} type="primary"/>
                        <CustomButton buttonText={"Move to todo"} buttonClicked={() => handleUpdate(record, "todo")} />
                        <CustomButton buttonText={"Remove"} buttonClicked={() => handleRemove(record.id)} type="danger"/>
                    </div>
                )
            }
        }
    )

    useEffect(() => {
        getData("doing");

    }, [])

    return (
        <div className="main-div">
        <Table columns={column} dataSource={datas} rwoKey={record => record.title} />
    </div>
    )
}

export default Doing;