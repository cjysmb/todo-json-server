import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import * as API from '../../api/task';
import { message } from 'antd';

const AppContext = createContext(undefined);

export const useAppContext = () => {
        return useContext(AppContext);
}

export const AppContextProvider = (props) => {

    const [datas, setDatas] = useState();
    const [data, setData] = useState();
    const [modalState, setModalState] = useState(false);
    const [hasError, setHasError] = useState(false)
    const [type, setType] = useState("create")

    const column = [
        {
            key: 'id',
            title: 'ID',
            dataIndex: 'id',
        },
        {
            key: 'title',
            title: 'Title',
            dataIndex: 'title',
        },
        {
            key: 'content',
            title: 'Content',
            dataIndex: 'content',
        },
    ]

    const getData = async (type) => {
        try {
            let response = await API.fetchData(type);
            
            if(response.status >= 200 || response.status <= 299) {
                setDatas(response.data)
            }

            else {
                message.destroy();
                message.error('Something went wrong')
            }
        }

        catch (e) {
            console.log(e)
        }
    }

    const updateData = async (type, status, params) => {
        try {
            let response = await API.createOrUpdateData(type, params);

            if(response.status >= 200 || response.status <= 299) {
                message.destroy();
                message.success('Moved successfully');
                getData(status);
            }

            else {
                message.destroy();
                message.error('Something went wrong')
            }
        }

        catch (e) {
            console.log(e)
        }
    }

    const removeData = async (id, status) => {
        try {
            let response = await API.removeData(id);

            if(response.status >= 200 || response.status <= 299) {
                message.destroy();
                message.success('Removed successfully');
                getData(status);
            }

            else {
                message.destroy();
                message.error('Something went wrong')
            }
        }

        catch (e) {
            console.log(e)
        }
    }

    const AppContextObject = {
        todoList: {
            datas, setDatas
        },

        todoValue: {
            data, setData
        },
        modalValue: {
            modalState, setModalState
        },
        errorValue: {
            hasError, setHasError
        },

        global: {
            getData, column, type, setType, updateData,
            removeData
        }
    };

    return (
        <AppContext.Provider value={AppContextObject}>
            {props.children}
        </AppContext.Provider>
    )
}

AppContextProvider.propTypes = {
    children: PropTypes.element,
}