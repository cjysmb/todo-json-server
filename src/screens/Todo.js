import React, { useEffect } from 'react';
import { useAppContext } from '../components/AppContext/AppContext';
import { Modal, Table } from 'antd'
import TodoForm from '../components/customComponents/TodoForm';
import CustomButton from '../components/customComponents/Button';

const Todo = props => {

    const { 
        todoList: {
            datas
        },

        modalValue: {
            modalState, setModalState
        },

        global: {
            getData, column, setType, updateData,
            removeData
        }
    
    } = useAppContext();



    const handleOpen = () => {
        setModalState(true);
        setType('create')
    }

    const handleUpdate = (params) => {
        params.type = 'doing'
        updateData('update', 'todo', params)
    }

    const handleRemove = (id) => {
        removeData(id, "todo")
    }

    column.push(
        {
            key: 'action',
            title: 'Action',
            render: (record) => {
                return(
                    <div className="button-align">
                        <CustomButton buttonText={"Move to doing"} buttonClicked={() => handleUpdate(record)} type="primary"/>
                        <CustomButton buttonText={"Remove"} buttonClicked={() => handleRemove(record.id)}type="danger"/>
                    </div>
                )
            }
        }
    )


    useEffect(() => {
        getData("todo");
    }, []);

    return (
        <div className="main-div">
            <Modal centered
                footer={null}
                visible={modalState}
                onCancel={() => setModalState(false)}>
                
                <TodoForm />
            </Modal>
            <div className="two-col-space-between">
                <div className="text-header">
                    Todo
                </div>

                <div>
                    <button className="btn-task" onClick={handleOpen}>
                        Add task
                    </button>
                </div>
            </div>

            <div className="table-div">
                <Table columns={column} 
                    dataSource={datas} 
                    rowKey={record => record.title} 
                    pagination={false}  />
            </div>
        </div>
    )
}

export default Todo;